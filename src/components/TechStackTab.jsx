import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaCode,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [

{ icon:<FaJava/>, name:"Java"},
{ icon:<FaCode/>, name:"C++"},
{ icon:<FaCode/>, name:"C#"},
{ icon:<FaPython/>, name:"Python"},
{ icon:<FaJs/>, name:"JavaScript"},

{ icon:<FaDatabase/>, name:"Spring Boot"},
{ icon:<FaNodeJs/>, name:"Node.js"},
{ icon:<SiExpress/>, name:"Express"},
{ icon:<SiMongodb/>, name:"MongoDB"},

{ icon:<FaReact/>, name:"React"},
{ icon:<FaHtml5/>, name:"HTML5"},
{ icon:<FaCss3Alt/>, name:"CSS3"},
{ icon:<SiTailwindcss/>, name:"Tailwind"},

{ icon:<FaGitAlt/>, name:"Git"},
{ icon:<FaDocker/>, name:"Docker"},
{ icon:<FaLinux/>, name:"Linux"},
{ icon:<FaFigma/>, name:"Figma"},
{ icon:<FaCode/>, name:"Axure"},

];

const TechStackTab = () => {

return(

<div

className="

flex flex-wrap justify-center

gap-8 sm:gap-10

px-4 sm:px-0

"

>

{techStack.map((tech,index)=>(

<motion.div

key={index}

initial={{opacity:0,scale:.8}}

whileInView={{opacity:1,scale:1}}

transition={{

duration:.4,
delay:index*.05

}}

viewport={{once:true}}

className="group flex flex-col items-center"

>

{/* ICON */}

<div

className="

w-16 h-16
sm:w-20 sm:h-20

flex items-center justify-center

rounded-full

border border-blue-500/20

bg-gradient-to-b
from-[#111827]
to-[#0B1120]

text-2xl sm:text-3xl

text-blue-400

transition duration-300

group-hover:border-blue-500

group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]

group-hover:text-white

"

>

{tech.icon}

</div>


{/* NAME */}

<p

className="

mt-3

text-xs sm:text-sm

text-gray-400

group-hover:text-blue-400

transition

text-center

"

>

{tech.name}

</p>

</motion.div>

))}

</div>

);

};

export default TechStackTab;