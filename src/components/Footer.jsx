import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {

const [showTop,setShowTop] = useState(false);

useEffect(()=>{

const handleScroll = ()=>{
setShowTop(window.scrollY > 400);
};

window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);

},[]);

const scrollToTop = ()=>{

document.getElementById("hero")
?.scrollIntoView({behavior:"smooth"});

};

return(

<>

{/* ================= SCROLL TOP ================= */}

<AnimatePresence>

{showTop &&(

<motion.button

initial={{opacity:0,scale:.6}}
animate={{opacity:1,scale:1}}
exit={{opacity:0}}

whileHover={{scale:1.12}}
whileTap={{scale:.95}}

onClick={scrollToTop}

className="

fixed bottom-5 right-5 md:bottom-10 md:right-10

w-11 h-11 md:w-14 md:h-14

rounded-full

bg-blue-500/10

border border-blue-500/40

text-blue-400

flex items-center justify-center

backdrop-blur-md

shadow-[0_0_20px_rgba(59,130,246,0.35)]

hover:bg-blue-500 hover:text-white

hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]

transition z-50

"

>

<FaArrowUp/>

</motion.button>

)}

</AnimatePresence>


{/* ================= FOOTER ================= */}

<footer className="relative bg-[#0B1120] text-white pt-12 md:pt-16 pb-8 px-5 md:px-6 border-t border-blue-500/10">

<div className="absolute top-0 left-0 w-full h-[1px]
bg-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.7)]"/>

<div className="max-w-7xl mx-auto">


{/* STACK MOBILE / ROW DESKTOP */}

<div

className="

flex flex-col

md:flex-row

items-center md:items-start

text-center md:text-left

justify-between

gap-10 md:gap-12

mb-12

"

>


{/* ================= NAME ================= */}

<div className="max-w-sm">

<h3 className="text-xl md:text-2xl font-bold text-blue-500 mb-3">

Fathima Nusha

</h3>

<p className="text-gray-400 text-sm leading-relaxed">

BSc Information Technology undergraduate passionate about
cybersecurity, networking and modern web development —
building secure solutions through continuous learning
and real-world projects.

</p>

</div>



{/* ================= NAVIGATION ================= */}

<div>

<h4 className="text-lg font-semibold mb-4">

Explore

</h4>

<div

className="

flex flex-wrap

justify-center md:justify-start

gap-x-6 gap-y-3

text-sm text-gray-400 font-medium

"

>

<motion.a whileHover={{y:-2}}
href="#hero"
className="hover:text-blue-400">

Home

</motion.a>

<motion.a whileHover={{y:-2}}
href="#about"
className="hover:text-blue-400">

About

</motion.a>

<motion.a whileHover={{y:-2}}
href="#work"
className="hover:text-blue-400">

Experience

</motion.a>

<motion.a whileHover={{y:-2}}
href="#contact"
className="hover:text-blue-400">

Contact

</motion.a>

</div>

</div>



{/* ================= SOCIAL ================= */}

<div>

<h4 className="text-lg font-semibold mb-4">

Connect

</h4>

<div className="flex justify-center md:justify-start gap-6 text-xl">

<motion.a
whileHover={{scale:1.2}}
href="https://github.com/Fathima-Nuzha"
target="_blank"
rel="noopener noreferrer"
className="text-gray-400 hover:text-blue-500">

<FaGithub/>

</motion.a>


<motion.a
whileHover={{scale:1.2}}
href="https://www.linkedin.com/in/fathima-nusha-509ba8278"
target="_blank"
rel="noopener noreferrer"
className="text-gray-400 hover:text-blue-500">

<FaLinkedin/>

</motion.a>


<motion.a
whileHover={{scale:1.2}}
href="mailto:nuzhaimthikaf123@gmail.com"
className="text-gray-400 hover:text-blue-500">

<FaEnvelope/>

</motion.a>

</div>

</div>

</div>



{/* ================= COPYRIGHT ================= */}

<div

className="

text-center text-gray-500 text-xs

border-t border-blue-500/10

pt-6

"

>

© {new Date().getFullYear()} Fathima Nusha —
Designed & Built with Passion.

</div>

</div>

</footer>

</>

);

};

export default Footer;