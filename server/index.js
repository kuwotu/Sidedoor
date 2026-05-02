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
	db.any("SELECT * FROM career_path ORDER BY id ASC")
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			console.log("ERROR:", error);
		});
});

app.listen(PORT);
