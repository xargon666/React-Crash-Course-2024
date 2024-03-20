// Router
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

// Component Imports
import Navbar from "./components/Navbar";
import JobListings from "./components/JobListings";
import HomeCards from "./components/HomeCards";
import Hero from "./components/Hero";
import ViewAllJobs from './components/ViewAllJobs'

// Here our components are being rendered. Note the props being passed into Hero.
// We are also wrapping our app with a Router, which allows us to visit different pages!

const App = () => {
    return (
        <>
            <Navbar />
            <Hero
                title="Become a React Dev"
                subtitle="Find the React job that fits your skill set"
            />
            <HomeCards />
            <JobListings />
            <ViewAllJobs/>
            
        </>
    );
};

export default App;
