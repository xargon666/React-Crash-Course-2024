import axios from "axios";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import { Job } from "./Job";
import { JobProps } from "../@types";

const JobListings = ({ isHome = false, }) => {
    // Using a feature of json-server we can limit the results to 3 with '?_limit=3' suffix
    // Additionally we have made a proxy route in the vite.config.ts file!!!
    // This allows us to substitute the URL for the json-server with the '/api/ path
    // Now if the json server URL is changed we need only update the one location.
    const JSON_SERVER_JOBS_URL = isHome
        ? "/api/jobs?_limit=3"
        : `/api/jobs`;
    const [jobData, setJobData] = useState<JobProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get(JSON_SERVER_JOBS_URL)
            .then((res) => {
                setJobData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobData.map((job: JobProps) => (
                            <Job
                                key={job.id}
                                id={job.id}
                                type={job.type}
                                title={job.title}
                                description={job.description}
                                salary={job.salary}
                                location={job.location}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;
