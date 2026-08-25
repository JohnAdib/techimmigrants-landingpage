import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Index from "./pages/Index";
import Interviews from "./pages/Interviews";
import Mentors from "./pages/Mentors";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";

const WorkshopsPage = lazy(() => import("./workshops/WorkshopsPage"));
const ResumeWorkshopPage = lazy(() => import("./workshops/resume/ResumeWorkshopPage"));

export default function PersianRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/interviews" element={<Interviews />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route
        path="/workshops"
        element={
          <Suspense fallback={null}>
            <WorkshopsPage />
          </Suspense>
        }
      />
      <Route
        path="/workshops/resume"
        element={
          <Suspense fallback={null}>
            <ResumeWorkshopPage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
