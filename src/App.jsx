import NavBar from "./layouts/NavBar";
import MainSection from "./layouts/MainSection";
import AboutSection from "./layouts/AboutSection";
import FeatureSection from "./layouts/FeatureSection";
import DiscoverSection from "./layouts/DiscoverSection";
import PlanPriceSection from "./layouts/PlanPriceSection";
import FooterSection from "./layouts/FooterSection";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <MainSection></MainSection>
            <AboutSection></AboutSection>
            <FeatureSection></FeatureSection>
            <DiscoverSection></DiscoverSection>
            <PlanPriceSection></PlanPriceSection>
            <FooterSection></FooterSection>
        </>
    );
}

export default App;
