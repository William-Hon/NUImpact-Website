import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage";
import OurStoryPage from "./pages/OurStoryPage";
import OurTeamPage from "./pages/OurTeamPage";
import InvestmentThesisPage from "./pages/InvestmentThesisPage";
import PortfolioPage from "./pages/PortfolioPage";
import SummitPage from "./pages/SummitPage"; 
import OurImpactPage from "./pages/OurImpactPage";
import StudentExperiencePage from "./pages/StudentExperiencePage";
import FAQPage from "./pages/FAQPage";
import DonatePage from "./pages/DonatePage";
   

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/investment-thesis" element={<InvestmentThesisPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/summit" element={<SummitPage />} />
        <Route path="/our-impact" element={<OurImpactPage />} />
        <Route path="/student-experience" element={<StudentExperiencePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/donate" element={<DonatePage />} /> 
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
