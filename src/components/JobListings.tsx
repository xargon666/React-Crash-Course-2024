import axios from "axios";
import { useState, useEffect } from "react";
import { Job } from "./Job";
import { JobProps } from "../@types/Types";
const JSON_SERVER_JOBS_URL = "http://localhost:5000/jobs";

const JobListings = ({ isHome = false }) => {
    const [jobData, setJobData] = useState<JobProps[]>([]);
    const [loading, setLoading] = useState(true);

    const jobListings = isHome ? jobData.slice(0, 3) : jobData;

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
                    {isHome?'Recent Jobs':'Browse Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? (<h2>Loading...</h2>):
                    <>
                        {jobListings.map((job: JobProps) => (
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
                    </>
                    }
                </div>
            </div>
        </section>
    );
};

export default JobListings;
