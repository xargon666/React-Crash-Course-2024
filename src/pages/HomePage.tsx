import JobListings from "../components/JobListings";
import HomeCards from "../components/HomeCards";
import Hero from "../components/Hero";
import ViewAllJobs from "../components/ViewAllJobs";

// we are passing a prop into JobListings which defaults to false in the component.
// By explicitly passing a value true, we can change the behavior of the component.

const HomePage = () => {
    return (
        <>
            <Hero
                title="Become a React Dev"
                subtitle="Find the React job that fits your skill set"
            />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    );
};

export default HomePage;
