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
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			console.log("ERROR:", error);
			res.status(500).json({ error: "Database error" });
		});
});

app.listen(PORT);
