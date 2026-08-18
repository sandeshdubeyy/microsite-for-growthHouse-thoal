// LandingPage.tsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProjectSnapshot from "../components/sections/ProjectSnapshot";
import Amenities from "../components/sections/Amenities";
import LocationConnectivity from "../components/sections/LocationConnectivity";
import FloorPlans from "../components/sections/FloorPlans";
import Gallery from "../components/sections/Gallery";
import LeadForm from "../components/sections/LeadForm";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/Footer";
import LeadPopup from "../components/sections/LeadPopUp";

function LandingPage() {
    return (
        <>
            <LeadPopup />
            <Navbar />
            <main>
                <HeroSection />
                <ProjectSnapshot />
                <Amenities />
                <LocationConnectivity />
                <FloorPlans />
                <Gallery />
                <FAQ />
                <LeadForm />
                <Footer />
            </main>
        </>
    );
}

export default LandingPage;