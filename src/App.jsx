import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
    <div className="fixed inset-0 pointer-events-none z-0">

  <div className="
  absolute w-[500px] h-[500px]
  bg-blue-500/10
  blur-[160px]
  rounded-full
  top-1/2 left-1/2
  -translate-x-1/2
  -translate-y-1/2
  animate-pulse
  " />

</div>
      <Navbar />
      <Hero setActiveTab={setActiveTab} />
      <About />
      <Work activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
