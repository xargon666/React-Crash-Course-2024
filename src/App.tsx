// Module Imports
import axios from "axios";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

// Router Imports
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

// Type Imports
import { JobProps } from "./@types";

// Layout Imports
import MainLayout from "./layouts/MainLayout";

// Page Imports
// Note: I've used an index.ts file to chain exports,
// This allows us to pull all pages in one (big) line of code.
import {
    HomePage,
    JobsPage,
    AddJobPage,
    EditJobPage,
    NotFoundPage,
    JobPage,
    jobLoader,
} from "./pages";

// Here our components are being rendered. Note the props being passed into Hero.
// We are also wrapping our app with a Router, which allows us to visit different pages!

const App = () => {
    // CRUD FUNCTIONS *****************************************************************************
    // CRUD Functions are kept in the App component, so that any component that needs to use them
    // Can simpley pass down props into the App comp and make use of the same functions.

    // CRUD POST FUNCTION - Add New Job ===========================================================
    // the param for this function comes from the JobPage component
    // We are calling the addJob function from the JobPage component by way of prop drilling
    // ******************************
    // Traditional async/await fetch method
    // ******************************
    // const addJob = async (newJob) => {
    //     const res = await fetch("api/jobs", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "applicaiton/json",
    //         },
    //         body: JSON.stringify(...newJob, id: uuid()),
    //     });
    //     return;
    // ******************************
    // The same thing using axios!!!!
    // ******************************
    const addJob = (newJob: JobProps) => {
        return axios
            .post("/api/jobs", { ...newJob, id: uuid() })
            .then(() => toast.success("Job added successfully"))
            .catch((err) => toast.error(err.message));
    };

    // CRUD PUT FUNCTION - Edit a Job =============================================================
    const updateJob = (job: JobProps) => {
        return axios
            .put(`/api/jobs/${job.id}`, job)
            .then(() => toast.success("Job updated successfully"))
            .catch((err) => toast.error(err.message));
    };

    // CRUD DELETE FUNCTION - Delete a Job ========================================================
    const deleteJob = (jobId: string) => {
        return axios
            .delete(`/api/jobs/${jobId}`)
            .then(() => toast.success("Job deleted successfully"))
            .catch((err) => toast.error(err.message));
    };

    // ROUTER ********************************************************
    // Used for providing html routes to different pages/components!
    // With these routes it is possible to navigate to specific parts of the site,
    // including dynamic addresses
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />

                {/* Note that the prop names must match what is in the end component, 
                and won't throw an error if there is a mismatch... */}
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addJob} />}
                />

                {/* The ":" symbol means the value is dynamic */}
                <Route
                    path="/edit-job/:id"
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/jobs/:id"
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />

                {/* "path=/*" (asterisk) is used as a catch-all, 
                a default route for any address without a direct link */}
                <Route path="/*" element={<NotFoundPage />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}; // END OF APP

export default App;
