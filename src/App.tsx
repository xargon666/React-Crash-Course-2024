// Router
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

// Layout Imports
import MainLayout from "./layouts/MainLayout";

// Page Imports
import HomePage from "./pages/HomePage";
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

// Router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            {/* asterisk is used as a catch-all, a default route for any address without a direct link */}
            <Route path='/*' element={<NotFoundPage />} />
        </Route>
    )
);

// Here our components are being rendered. Note the props being passed into Hero.
// We are also wrapping our app with a Router, which allows us to visit different pages!

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
