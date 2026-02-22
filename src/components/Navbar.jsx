import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {

const [open,setOpen]=useState(false);

const scrollToSection=(id)=>{

const section=document.getElementById(id);

if(section){

section.scrollIntoView({

behavior:"smooth"

});

setOpen(false);

}

};

return(

<motion.nav

initial={{y:-80,opacity:0}}

animate={{y:0,opacity:1}}

transition={{duration:.8,ease:"easeOut"}}

className="fixed w-full top-0 left-0 z-50
bg-[#0B1120]/70 backdrop-blur-xl
border-b border-white/5"

>

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* LOGO */}

<h1

onClick={()=>scrollToSection("hero")}

className="text-2xl font-bold text-white tracking-wide cursor-pointer"

>

NU<span className="text-blue-500">SHA</span>

</h1>



{/* DESKTOP MENU (UNCHANGED) */}

<div className="flex items-center gap-8">

<ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

<li
onClick={()=>scrollToSection("hero")}
className="relative group cursor-pointer hover:text-blue-400 transition">

Home

<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

</li>



<li
onClick={()=>scrollToSection("about")}
className="relative group cursor-pointer hover:text-blue-400 transition">

About

<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

</li>



<li
onClick={()=>scrollToSection("work")}
className="relative group cursor-pointer hover:text-blue-400 transition">

Skills

<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

</li>



<li
onClick={()=>scrollToSection("contact")}
className="relative group cursor-pointer hover:text-blue-400 transition">

Contact

<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

</li>

</ul>



{/* LET'S CONNECT BUTTON — DESKTOP ONLY */}

<a

href="https://www.linkedin.com/in/fathima-nusha-509ba8278"

target="_blank"

rel="noopener noreferrer"

className="hidden md:block px-6 py-2 border border-blue-500 text-blue-400 rounded-full

hover:bg-blue-500 hover:text-white

hover:shadow-lg hover:shadow-blue-500/40

transition-all duration-300"

>

Let’s Connect

</a>



{/* MOBILE HAMBURGER */}

<button

onClick={()=>setOpen(!open)}

className="md:hidden text-white"

>

{open ? <X size={28}/> : <Menu size={28}/>}

</button>

</div>

</div>



{/* MOBILE MENU */}

<AnimatePresence>

{open &&(

<motion.div

initial={{opacity:0,y:-20}}

animate={{opacity:1,y:0}}

exit={{opacity:0,y:-20}}

className="md:hidden bg-[#0B1120] border-t border-white/10"

>

<div className="flex flex-col text-center gap-6 py-6">

<button

onClick={()=>scrollToSection("hero")}

className="text-gray-300 hover:text-blue-400"

>

Home

</button>



<button

onClick={()=>scrollToSection("about")}

className="text-gray-300 hover:text-blue-400"

>

About

</button>



<button

onClick={()=>scrollToSection("work")}

className="text-gray-300 hover:text-blue-400"

>

Skills

</button>



<button

onClick={()=>scrollToSection("contact")}

className="text-gray-300 hover:text-blue-400"

>

Contact

</button>



{/* MOBILE LETS CONNECT */}

<a

href="https://www.linkedin.com/in/fathima-nusha-509ba8278"

target="_blank"

rel="noopener noreferrer"

className="mx-auto px-6 py-2 border border-blue-500 text-blue-400 rounded-full

hover:bg-blue-500 hover:text-white transition"

>

Let’s Connect

</a>

</div>

</motion.div>

)}

</AnimatePresence>

</motion.nav>

);

};

export default Navbar;