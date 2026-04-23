import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Snapshot from "@/components/Snapshot";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Snapshot />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}
