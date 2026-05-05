import pgPromise from "pg-promise";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const pgp = pgPromise({});
const db = pgp(process.env.DATABASE_URL);

const PORT = "3000";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/career_path", (req, res) => {
	db.any(
		`SELECT 
    career_path.*,
    roles.job_title,
    roles.start_date,
    roles.end_date,
    EXTRACT(YEAR FROM AGE(COALESCE(roles.end_date, CURRENT_DATE), roles.start_date)) AS years_in_role
FROM career_path
LEFT JOIN roles ON roles.career_path_id = career_path.id
ORDER BY career_path.id ASC;`,
	)
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			console.log("ERROR:", error);
			res.status(500).json({ error: "Database error" });
		});
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
