import Navbar from "@/components/navbar/navbar";
import {HeroSection} from "@/components/sections/herosection";
import WorksSection from "@/components/sections/worksections";
import ServicesSection from "@/components/sections/servicessection";
import {ContactsSection} from "@/components/sections/contactssection";
import {AboutSection} from "@/components/sections/aboutsection";
import Footer from "@/components/footer/footer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <WorksSection />
            <ServicesSection />
            <ContactsSection />
            <Footer />
        </>
    );
}
