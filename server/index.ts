import "dotenv/config";
import supabase from "./supabase";
import express from "express";
import cors from "cors";
import { careerStoriesResponse } from "../shared/api";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/career-stories", async (req, res) => {
	try {
		const { data, error } = await supabase
			.from("users")
			.select(
				`
            user_id,
			first_name,
			last_name,
            career_story (
                story_id,
                statement
            ),
            job_history (
                job_title,
                is_current,
                start_date,
				end_date,
				industry
            )
        `,
			)
			.order("created_at", { ascending: false });

		if (error || !data) {
			console.error("Supabase query error:", error);
			return res.status(500).json({ error: "Database error" });
		}

		// Transform before sending — never expose full names
		const anonymisedData = data.map((user) => ({
			...user,
			display_name: `${user.first_name} ${user.last_name[0]}.`,
			first_name: undefined, // strip full name
			last_name: undefined, // strip full name
		}));

		res.json(anonymisedData);
	} catch (err) {
		if (err) {
			console.error("Unexpected error in /api/career-stories:", err);
			res.status(500).json({ error: "Internal server error" });
		}
	}
});

app.get("/api/career-stories/:id", async (req, res) => {
	const { data, error } = await supabase
		.from("users")
		.select(
			`
            user_id,
            first_name,
			last_name,
			country,
            career_story (
                story_id,
                statement,
                story,
                job_source,
                job_source_other,
                created_at,
                story_tags (
                    tags ( name )
                ),
                story_resources (
                    resources ( name, resource_type, url )
                )
            ),
            job_history (
                job_title,
                industry,
                location,
                workplace_type,
                start_date,
                end_date,
                is_current
            )
        `,
		)
		.eq("user_id", req.params.id)
		.single();

	if (error) return res.status(500).json({ error: "Database error" });

	const users = data as unknown as careerStoriesResponse[];
	// Transform before sending — never expose full names
	const anonymisedData = users.map((user) => ({
		...user,
		display_name: `${user.first_name} ${user.last_name[0]}.`,
		first_name: undefined, // strip full name
		last_name: undefined, // strip full name
	}));

	res.json(anonymisedData);
});

app.post("/api/add_career_path", async (req, res) => {
	const {
		firstName,
		lastName,
		statement,
		jobTitle,
		startDate,
		endDate,
		userStory,
		location,
		locationType,
		whereUserFoundJob,
	} = req.body;

	try {
		const userId = await db.one(
			`INSERT INTO career_path (first_name, last_name, user_statement, user_story) VALUES ($1, $2, $3, $4 ) RETURNING id;`,
			[firstName, lastName, statement, userStory],
		);
		await db.none(
			`INSERT INTO roles (career_path_id, job_title, start_date, end_date, location, location_type, where_user_found_job) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
			[
				userId.id,
				jobTitle,
				startDate,
				endDate,
				location,
				locationType,
				whereUserFoundJob,
			],
		);
		res.json({ success: true });
	} catch (error) {
		console.log("ERROR:", error);
		res.status(500).json({ error: "Something went wrong" });
	}
});

app.listen(PORT);
