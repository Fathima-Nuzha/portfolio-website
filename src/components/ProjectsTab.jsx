import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


// ================= PROJECT DATA =================

const projects = [

{
title:"Result Pro (University results management system)",
category:"Full Stack",
image:"/projects/resultpro.png",
description:
"A role-based university result management system developed with secure authentication workflows, OTP verification, and protected academic data processing. Emphasizes cybersecurity practices, scalable backend architecture, and efficient administrative workflows.",
tech:["React","Node","Express","MongoDB","Tailwind"],
github:"https://github.com/Fathima-Nuzha/Result-pro",
demo:"https://result-pro-blue.vercel.app/"
},

{
title:"Task Man (Task mangement system)",
category:"Full Stack",
image:"/projects/taskman.png",
description:
"A collaborative task management application developed using PHP and MySQL.",
tech:["PHP","MySQL","XAMPP","CSS3"],
github:"https://github.com/Fathima-Nuzha/TaskMan-Inventory-Management-System-",
demo:"https://github.com/Fathima-Nuzha/TaskMan-Inventory-Management-System-"
},

{
title:"University Result System VERSION -01",
category:"Full Stack",
image:"/projects/resultsystemv01.png",
description:
"Role-based secure university academic result management system.",
tech:["Spring Boot","React","MongoDB","Postman"],
github:"https://github.com/Fathima-Nuzha/University-results-management-system",
demo:"https://www.linkedin.com/posts/fathima-nusha-509ba8278_universityofvavuniya-misproject-resultmanagementsystem-activity-7345798082074243072-sohk?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEPO5tkBBihQXW9n3sw_-2-HD2S73RnlGtw&utm_campaign=copy_link"
},

{
title:"Hogwarts Match Up",
category:"Gaming",
image:"/projects/hogwardsmatchup.png",
description:
"A C# desktop memory-matching game inspired by magical characters.",
tech:["C#",".NET Framework","Windows Forms","Visual Studio"],
github:"https://github.com/Fathima-Nuzha/CSharp-Projects/tree/main/HogwartsMatch-Up",
demo:"https://github.com/Fathima-Nuzha/CSharp-Projects/tree/main/HogwartsMatch-Up"
},

{
title:"My Portfolio Website",
category:"Personal Branding",
image:"/projects/myportfoliowebsite.png",
description:
"A premium personal portfolio website showcasing projects and certifications.",
tech:["React","Tailwind CSS","Framer Motion","JavaScript","HTML5","CSS3","Vercel"],
github:"https://github.com/Fathima-Nuzha/portfolio-website",
demo:"https://fathima-nuzha.vercel.app/"
},

];


// ================= COMPONENT =================

const ProjectsTab = ()=>{

const [selected,setSelected]=useState(null);

return(

<>

{/* ================= GRID ================= */}

<div
className="

grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

gap-7
sm:gap-10

px-4 sm:px-0

">

{projects.map((project,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.12}}

viewport={{once:true}}

whileHover={{y:-8,scale:1.02}}

onClick={()=>setSelected(project)}

className="group relative cursor-pointer rounded-3xl overflow-hidden

bg-gradient-to-b
from-[#111827]
to-[#0B1120]

border border-blue-500/20

shadow-[0_0_40px_rgba(59,130,246,0.15)]

hover:border-blue-500

hover:shadow-[0_0_90px_rgba(59,130,246,0.45)]

transition-all duration-500 ease-out"

>

{/* IMAGE */}

<div className="bg-[#0B1120] rounded-2xl overflow-hidden

h-44 sm:h-40

m-4 sm:m-5">

<img
src={project.image}
alt={project.title}

className="w-full h-full object-cover

transition duration-700

group-hover:scale-110
group-hover:brightness-110"
/>

</div>


{/* TEXT */}

<div className="px-5 sm:px-6 pb-6 flex justify-between items-center gap-2">

<div>

<p className="text-blue-400 text-xs tracking-widest uppercase">

{project.category}

</p>

<h3 className="mt-2 font-semibold

text-base sm:text-lg

text-gray-200 group-hover:text-white transition">

{project.title}

</h3>

</div>


<button

className="border border-blue-500 px-4 sm:px-5 py-2 rounded-full

text-xs sm:text-sm text-blue-400

transition-all duration-300

group-hover:bg-blue-500
group-hover:text-white
group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]

active:scale-95"

>

Details

</button>

</div>

</motion.div>

))}

</div>



{/* ================= MODAL ================= */}

<AnimatePresence>

{selected && (

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}

onClick={() => setSelected(null)}

className="fixed inset-0 bg-black/80 backdrop-blur-sm

flex justify-center items-center

p-4

z-50"

>

<motion.div

initial={{ scale: .85, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
exit={{ scale: .85, opacity: 0 }}

onClick={(e)=> e.stopPropagation()}

className="relative

w-full
max-w-xl

max-h-[90vh]

overflow-y-auto

rounded-3xl overflow-hidden

bg-gradient-to-b
from-[#111827]
to-[#0B1120]

border border-blue-500/30

shadow-[0_0_80px_rgba(59,130,246,0.35)]"

>

{/* CLOSE */}

<button
onClick={()=>setSelected(null)}
className="absolute top-4 right-4 bg-blue-500
hover:bg-blue-400 transition
text-white font-bold w-9 h-9 rounded-full z-20">

×

</button>


{/* IMAGE */}

<div className="h-52 sm:h-64 bg-[#0B1120] overflow-hidden">

<img
src={selected.image}
alt={selected.title}

className="w-full h-full object-cover
transition duration-700 hover:scale-105"
/>

</div>


<div className="p-6 sm:p-8">

<h3 className="text-xl sm:text-2xl font-bold">

{selected.title}

</h3>

<p className="text-gray-400 mt-3 text-sm sm:text-base">

{selected.description}

</p>


{/* TECH */}

<div className="flex flex-wrap gap-2 mt-5">

{selected.tech.map((t,i)=>(

<span
key={i}

className="px-3 py-1 border border-blue-500/40
rounded-full text-xs text-blue-400">

{t}

</span>

))}

</div>


{/* LINKS */}

<div className="flex flex-col sm:flex-row gap-4 mt-8">

<a
href={selected.github}
target="_blank"
rel="noopener noreferrer"

className="flex justify-center items-center gap-2

bg-blue-500 px-6 py-3 rounded-xl font-semibold

hover:bg-blue-400 transition">

<FaGithub/>

Github

</a>


<a
href={selected.demo}
target="_blank"
rel="noopener noreferrer"

className="flex justify-center items-center gap-2

border border-blue-500 px-6 py-3 rounded-xl

text-blue-400

hover:bg-blue-500 hover:text-white transition">

<FaExternalLinkAlt/>

Live Demo

</a>

</div>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</>

);

};

export default ProjectsTab;