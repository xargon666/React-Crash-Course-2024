import axios from "axios";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
// Router
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
import { HomePage } from "./pages";
import { JobsPage } from "./pages";
import { AddJobPage } from "./pages";
import { EditJobPage } from "./pages";
import { NotFoundPage } from "./pages";
import { JobPage, jobLoader } from "./pages";

// Here our components are being rendered. Note the props being passed into Hero.
// We are also wrapping our app with a Router, which allows us to visit different pages!

const App = () => {
    // CRUD Functions are kept in the App component, so that any component that needs to use them
    // Can simpley pass down props into the App comp and make use of the same functions.

    // CRUD POST FUNCTION - Add New Job
    // the param for this function comes from the JobPage component
    // We are calling the addJob function from the JobPage component by way of prop drilling
    const addJob = (newJob: JobProps) => {
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
        return axios
        .post("/api/jobs", { ...newJob, id: uuid() })
        .then(()=> toast.success("Job added successfully"))
        .catch((err)=>toast.error(err.message));
    };

    const updateJob = (job: JobProps) => {
        console.log(job)
        const edit = (job:JobProps) => {
            axios
                .put(`/api/jobs/${job.id}`, job)
                .then(() => toast.success("Job updated successfully"))
                .catch((err) => toast.error(err.message));
        };
        edit(job);
    };

    const deleteJob = (jobId: string) => {
        const del = () => {
            axios
                .delete(`/api/jobs/${jobId}`)
                .then(() => toast.success("Job deleted successfully"))
                .catch((err) => toast.error(err.message));
        };
        del();
    };

    // ********************************************************************************
    // Router
    // Used for providing html routes to different pages/components!
    // With these routes it is possible to navigate to specific parts of the site, including dynamic addresses
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJob={addJob} />}
                />
                {/* The ":" symbol means the value is dynamic */}
                <Route
                    path="/jobs/:id"
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route 
                    path="/edit-job/:id" 
                    element={<EditJobPage updateJob={updateJob}/>}
                    loader={jobLoader} 
                />

                {/* path=/* (asterisk) is used as a catch-all, a default route for any address without a direct link */}
                <Route path="/*" element={<NotFoundPage />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
