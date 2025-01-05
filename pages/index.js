import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Profile from "../components/sections/Profile";
import ClientsSlider from "../components/sections/ClientsSlider";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <ClientsSlider />
      <Profile />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
