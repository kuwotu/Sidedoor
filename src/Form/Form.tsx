import type { Dispatch, SetStateAction } from "react";
import { StyledForm } from "./styles";
import { monthMap } from "../utils";

type FormProp = {
	setIsFormModalOpen: Dispatch<SetStateAction<boolean>>;
};

const monthNumberFromString = (month: string) => {
	return monthMap[month];
};

export const Form = ({ setIsFormModalOpen }: FormProp) => {
	const submitForm = async (formData: FormData) => {
		const startDateMonth = formData.get("startDate-Month") as string;
		const startDateYear = formData.get("startDate-Year") as string;
		const endDateMonth = formData.get("endDate-Month") as string;
		const endDateYear = formData.get("endDate-Year") as string;
		const startDateMonthAsNum = monthNumberFromString(startDateMonth);
		const endDateMonthAsNum = monthNumberFromString(endDateMonth);

		const firstName = formData.get("firstName");
		const lastName = formData.get("lastName");
		const statement = formData.get("statement");
		const jobTitle = formData.get("jobTitle");
		const startDate = `${startDateYear}-${startDateMonthAsNum}-01`;
		const endDate = `${endDateYear}-${endDateMonthAsNum}-01`;
		const userStory = formData.get("userStory");
		const location = formData.get("location");
		const locationType = formData.get("locationType");
		const whereUserFoundJob = formData.get("whereUserFoundJob");

		await fetch("http://localhost:3000/api/add_career_path", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({
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
			}),
		});
	};

	const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		submitForm(new FormData(e.target as HTMLFormElement));
		setIsFormModalOpen(false);
	};

	return (
		<StyledForm onSubmit={handleFormSubmit} id="share-story-form">
			<label htmlFor="firstName">First Name: </label>
			<input
				required
				type="text"
				id="firstName"
				name="firstName"
				placeholder=""
			/>

			<label htmlFor="lastName">Last Name: </label>
			<input
				required
				type="text"
				id="lastName"
				name="lastName"
				placeholder=""
			/>

			<label htmlFor="jobTitle">Job Title: </label>
			<input
				type="text"
				id="jobTitle"
				name="jobTitle"
				placeholder="Ex: Marketing Manager"
				required
			/>
			<p>Start Date</p>
			<label htmlFor="startDate-Month">
				Month:
				<select required id="startDate-Month" name="startDate-Month">
					<option value="">Month</option>
					<option value="January">January</option>
					<option value="February">February</option>
					<option value="March">March</option>
					<option value="April">April</option>
					<option value="May">May</option>
					<option value="June">June</option>
					<option value="July">July</option>
					<option value="August">August</option>
					<option value="September">September</option>
					<option value="October">October</option>
					<option value="November">November</option>
					<option value="December">December</option>
				</select>
			</label>
			<label htmlFor="startDate-Year">
				Year:
				<select required id="startDate-Year" name="startDate-Year">
					<option value="2026">2026</option>
					<option value="2025">2025</option>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
					<option value="2011">2011</option>
					<option value="2010">2010</option>
					<option value="2009">2009</option>
					<option value="2008">2008</option>
					<option value="2007">2007</option>
					<option value="2006">2006</option>
					<option value="2005">2005</option>
					<option value="2004">2004</option>
					<option value="2003">2003</option>
					<option value="2002">2002</option>
					<option value="2001">2001</option>
					<option value="2000">2000</option>
				</select>
			</label>
			<p>End Date</p>
			<label htmlFor="endDate-Month">
				Month:
				<select required id="endDate-Month" name="endDate-Month">
					<option value="">Month</option>
					<option value="January">January</option>
					<option value="February">February</option>
					<option value="March">March</option>
					<option value="April">April</option>
					<option value="May">May</option>
					<option value="June">June</option>
					<option value="July">July</option>
					<option value="August">August</option>
					<option value="September">September</option>
					<option value="October">October</option>
					<option value="November">November</option>
					<option value="December">December</option>
				</select>
			</label>
			<label htmlFor="endDate-Year">
				Year:
				<select required id="endDate-Year" name="endDate-Year">
					<option value="2026">2026</option>
					<option value="2025">2025</option>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
					<option value="2011">2011</option>
					<option value="2010">2010</option>
					<option value="2009">2009</option>
					<option value="2008">2008</option>
					<option value="2007">2007</option>
					<option value="2006">2006</option>
					<option value="2005">2005</option>
					<option value="2004">2004</option>
					<option value="2003">2003</option>
					<option value="2002">2002</option>
					<option value="2001">2001</option>
					<option value="2000">2000</option>
				</select>
			</label>

			<label htmlFor="location">Location: </label>
			<input
				type="text"
				id="location"
				name="location"
				placeholder="Ex: London, United Kingdom"
			/>

			<label htmlFor="locationType">
				Location Type:
				<select id="locationType" name="locationType">
					<option value="">Please Select</option>
					<option value="On-Site">On Site</option>
					<option value="Hybrid">Hybrid</option>
					<option value="Remote">Remote</option>
				</select>
			</label>

			<label htmlFor="userStory">What's your story?: </label>
			<textarea
				id="userStory"
				name="userStory"
				placeholder="A summary of how you switched careers"
			/>

			<label htmlFor="statement">Statement: </label>
			<textarea id="statement" name="statement" placeholder="Hello!" />

			<label htmlFor="whereUserFoundJob">
				Where did you find the job?{" "}
				<select id="whereUserFoundJob" name="whereUserFoundJob">
					<option value="">Please Select</option>
					<option value="LinkedIn">LinkedIn</option>
					<option value="CompanyWebsite">Company Website</option>
					<option value="Indeed">Indeed</option>
					<option value="Referrals">Referrals</option>
					<option value="ContactedByRecruiter">Contacted by recruiter</option>
					<option value="StaffingAgency">Staffing Agency</option>
				</select>
			</label>
			<label htmlFor="resources">
				What resource/ resources helped you transition:{" "}
			</label>
			<input type="text" id="resources" name="resources" placeholder="Hello!" />
			<button type="submit">Save</button>
		</StyledForm>
	);
};
