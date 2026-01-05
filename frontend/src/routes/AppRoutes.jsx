import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import JobList from "../pages/JobList";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;