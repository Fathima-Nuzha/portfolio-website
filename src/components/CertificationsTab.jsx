import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


// ================= DATA =================

const certifications =[

{
title:"Cybersecurity Fundamentals",
issuer:"IBM",
image:"/certifications/cybersecurityfundementals.png",
link:"https://www.credly.com"
},

{
title:"Python for Beginners",
issuer:"UNIVERSITY OF MORATUWA",
image:"/certifications/pythonforbeginners.png",
link:"https://open.uom.lk/verify"
},

{
title:"JavaScript Essentials 1",
issuer:"CISCO NETWORKING ACADEMY",
image:"/certifications/javascript1.png",
link:"https://linkedin.com"
},

{
title:"IEEE Xtreme 18.0 Programming Competition",
issuer:"IEEE",
image:"/certifications/ieeextreme.png",
link:"https://linkedin.com"
},

{
title:"Introduction to SQL",
issuer:"SOLOLEARN",
image:"/certifications/introsql.png",
link:"https://linkedin.com"
},

// DOUBLE SIDE CERTIFICATE

{
title:"IEEE Region 10 Ethics Champion",
issuer:"IEEE REGION 10",
flip:true,
front:"/certifications/ethicalhackchampion1.png",
back:"/certifications/ethicalhackchampion2.png", // ✅ FIXED SPACE BUG
link:"https://linkedin.com"
}

];



const CertificationsTab=()=>{

const[selected,setSelected]=useState(null);

return(

<>

{/* GRID (PROJECT STYLE ALIGNMENT) */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{certifications.map((cert,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{

duration:.6,
delay:index*.12

}}

viewport={{once:true}}

whileHover={{scale:1.03}}

onClick={()=>setSelected(cert)}

className="group cursor-pointer rounded-3xl

bg-gradient-to-b

from-[#111827]

to-[#0B1120]

border border-blue-500/20

shadow-[0_0_40px_rgba(59,130,246,0.15)]

hover:border-blue-500

hover:shadow-[0_0_70px_rgba(59,130,246,0.35)]

transition"

>


{/* IMAGE FRAME */}

<div

className="bg-[#0B1120] rounded-2xl overflow-hidden h-40 m-5 flex justify-center items-center"

style={{perspective:"1200px"}}

>


{/* ⭐ FLIP ONLY ONCE */}

<motion.div

initial={{rotateY:0}}

animate={{rotateY:[0,180,0]}}

transition={{

duration:2.6,
delay:index*.25,
ease:[0.22,1,0.36,1]

}}

style={{

transformStyle:"preserve-3d",

width:"100%",

height:"100%",

position:"relative"

}}

>


{/* FRONT */}

<img

src={cert.flip?cert.front:cert.image}

style={{

backfaceVisibility:"hidden",

WebkitBackfaceVisibility:"hidden"

}}

className="absolute w-full h-full object-contain p-2"

/>


{/* BACK */}

<img

src={cert.flip?cert.back:cert.image}

style={{

transform:"rotateY(180deg)",

backfaceVisibility:"hidden",

WebkitBackfaceVisibility:"hidden"

}}

className="absolute w-full h-full object-contain p-2"

/>

</motion.div>

</div>



{/* TEXT */}

<div className="px-6 pb-6 flex justify-between items-center">

<div>

<p className="text-blue-400 text-xs tracking-widest uppercase">

{cert.issuer}

</p>

<h3 className="mt-2 font-semibold text-lg text-gray-200 group-hover:text-white transition">

{cert.title}

</h3>

</div>


<button

className="border border-blue-500 px-5 py-2 rounded-full

text-sm

text-blue-400

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

{selected &&(

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"

>

<div

onClick={()=>setSelected(null)}

className="absolute inset-0"

/>



<motion.div

initial={{scale:.85,opacity:0}}

animate={{scale:1,opacity:1}}

exit={{scale:.85,opacity:0}}

className="relative w-[92%] max-w-xl rounded-3xl overflow-hidden

bg-gradient-to-b

from-[#111827]

to-[#0B1120]

border border-blue-500/30

shadow-[0_0_80px_rgba(59,130,246,0.35)]

z-10"

>


<button

onClick={()=>setSelected(null)}

className="absolute top-4 right-4 bg-blue-500 text-white font-bold w-9 h-9 rounded-full">

×

</button>



<div className="h-64 bg-[#0B1120] flex justify-center items-center">

<img

src={selected.flip?selected.front:selected.image}

className="w-full h-full object-contain"

/>

</div>



<div className="p-8">

<h3 className="text-2xl font-bold text-white">

{selected.title}

</h3>

<p className="text-blue-400 mt-1">

{selected.issuer}

</p>



<a

href={selected.link}

target="_blank"

rel="noopener noreferrer"

className="mt-6 inline-flex gap-3 items-center

bg-blue-500 text-white font-semibold

px-7 py-3 rounded-xl

hover:bg-blue-400 transition"

>

View Certificate

<FaExternalLinkAlt/>

</a>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</>

);

};

export default CertificationsTab;
