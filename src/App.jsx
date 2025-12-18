import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import OurWorkPage from "./pages/OurWorkPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
