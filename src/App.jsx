import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage";
import OurStoryPage from "./pages/OurStoryPage";
import FoundingStoryPage from "./pages/FoundingStoryPage";
import OurTeamPage from "./pages/OurTeamPage";
import InvestmentThesisPage from "./pages/InvestmentThesisPage";
import PortfolioPage from "./pages/PortfolioPage";
import SummitPage from "./pages/SummitPage";
import OurImpactPage from "./pages/OurImpactPage";
import StudentExperiencePage from "./pages/StudentExperiencePage";
import FAQPage from "./pages/FAQPage";
import DonatePage from "./pages/DonatePage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/founding-story" element={<FoundingStoryPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/investment-thesis" element={<InvestmentThesisPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/summit" element={<SummitPage />} />
        <Route path="/our-impact" element={<OurImpactPage />} />
        <Route path="/student-experience" element={<StudentExperiencePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
