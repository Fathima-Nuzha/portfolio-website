import { motion } from "framer-motion";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {

const form = useRef();

const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);


// ================= EMAIL SEND =================

const sendEmail =(e)=>{

e.preventDefault();

if(loading) return;

setLoading(true);

emailjs.sendForm(

"service_0uc3k1h",
"template_8pjw87c",
form.current,
"g79yjcKhPbcDLOcj9"

).then(()=>{

toast.success("Message Sent Successfully 🚀",{

style:{
background:"#0B1120",
color:"#60A5FA",
border:"1px solid rgba(59,130,246,0.4)",
boxShadow:"0 0 25px rgba(59,130,246,0.45)"
},

iconTheme:{
primary:"#3B82F6",
secondary:"#0B1120"
}

});

form.current.reset();

setSuccess(true);

setTimeout(()=>{

setSuccess(false);

},4000);

setLoading(false);

}).catch(()=>{

toast.error("Failed To Send ❌",{

style:{
background:"#0B1120",
color:"#93C5FD",
border:"1px solid rgba(59,130,246,0.4)",
boxShadow:"0 0 25px rgba(59,130,246,0.35)"
},

iconTheme:{
primary:"#3B82F6",
secondary:"#0B1120"
}

});

setLoading(false);

});

};



return(

<section

id="contact"

className="

relative

min-h-screen

scroll-mt-24

py-20 md:py-24

px-4 sm:px-6

bg-[#0B1120]

text-white

overflow-hidden

"

>

{/* Glow */}

<div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"/>

<div className="max-w-7xl mx-auto relative z-10">


{/* HEADING */}

<div className="text-center mb-16 md:mb-20">

<h2

className="

text-4xl sm:text-5xl md:text-6xl

font-bold

"

>

GET IN <span className="text-blue-500">TOUCH</span>

</h2>

<div className="w-24 h-1 bg-blue-500 mx-auto mt-5 rounded-full"/>

</div>



{/* CONTACT INFO */}

<div

className="

grid

gap-6 md:gap-8

md:grid-cols-3

mb-14 md:mb-16

"

>


{/* CALL */}

<motion.div

whileHover={{scale:1.04}}

className="

bg-gradient-to-b from-[#111827] to-[#0B1120]

border border-blue-500/20

rounded-3xl

p-6 md:p-8

text-center

shadow-[0_0_40px_rgba(59,130,246,0.15)]

hover:shadow-[0_0_60px_rgba(59,130,246,0.30)]

"

>

<FaPhoneAlt className="text-4xl text-blue-400 mx-auto mb-4"/>

<p className="text-gray-400 text-sm tracking-widest">

CALL

</p>

<a

href="tel:+94702018852"

className="block mt-2 font-semibold hover:text-blue-400"

>

+94 702018852

</a>

</motion.div>



{/* EMAIL */}

<motion.div

whileHover={{scale:1.04}}

className="

bg-gradient-to-b from-[#111827] to-[#0B1120]

border border-blue-500/20

rounded-3xl

p-6 md:p-8

text-center

shadow-[0_0_40px_rgba(59,130,246,0.15)]

hover:shadow-[0_0_60px_rgba(59,130,246,0.30)]

"

>

<MdEmail className="text-4xl text-blue-400 mx-auto mb-4"/>

<p className="text-gray-400 text-sm tracking-widest">

EMAIL

</p>

<a

href="mailto:nuzhaimthikaf123@gmail.com"

className="block mt-2 font-semibold hover:text-blue-400 break-all"

>

nuzhaimthikaf123@gmail.com

</a>

</motion.div>



{/* LINKEDIN */}

<motion.div

whileHover={{scale:1.04}}

className="

bg-gradient-to-b from-[#111827] to-[#0B1120]

border border-blue-500/20

rounded-3xl

p-6 md:p-8

text-center

shadow-[0_0_40px_rgba(59,130,246,0.15)]

hover:shadow-[0_0_60px_rgba(59,130,246,0.30)]

"

>

<FaLinkedin className="text-4xl text-blue-400 mx-auto mb-4"/>

<p className="text-gray-400 text-sm tracking-widest">

LINKEDIN

</p>

<a

href="https://linkedin.com/in/yourprofile"

target="_blank"

rel="noopener noreferrer"

className="block mt-2 font-semibold hover:text-blue-400"

>

Fathima Nusha

</a>

</motion.div>

</div>



{/* CONTACT FORM */}

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6}}

className="

max-w-4xl mx-auto

bg-gradient-to-b from-[#111827] to-[#0B1120]

border border-blue-500/20

rounded-3xl

p-6 sm:p-8 md:p-10

shadow-[0_0_50px_rgba(59,130,246,0.15)]

"

>

<form

ref={form}

onSubmit={sendEmail}

className="space-y-6"

>

<div className="grid md:grid-cols-2 gap-6">

<input

required

name="name"

placeholder="Your Name"

className="

bg-[#0B1120]

border border-blue-500/20

rounded-xl

px-4 py-3

focus:border-blue-500

outline-none

w-full

"

/>

<input

required

type="email"

name="email"

placeholder="your@email.com"

className="

bg-[#0B1120]

border border-blue-500/20

rounded-xl

px-4 py-3

focus:border-blue-500

outline-none

w-full

"

/>

</div>


<textarea

required

name="message"

rows="5"

placeholder="Tell me about your project..."

className="

w-full

bg-[#0B1120]

border border-blue-500/20

rounded-xl

px-4 py-3

focus:border-blue-500

outline-none

"

/>



{/* SUCCESS */}

{success &&(

<motion.p

initial={{opacity:0,y:10}}

animate={{opacity:1,y:0}}

className="text-blue-400 text-center font-medium"

>

🚀 Message Sent Successfully!

</motion.p>

)}



<button

disabled={loading}

type="submit"

className="

w-full

bg-blue-500

py-4

rounded-xl

font-semibold

hover:bg-blue-400

transition

flex justify-center items-center gap-3

"

>

{loading?(

<>

<div

className="

w-5 h-5

border-2 border-white

border-t-transparent

rounded-full

animate-spin

"

/>

Sending...

</>

):

"SEND MESSAGE 🚀"

}

</button>

</form>

</motion.div>

</div>

</section>

);

};

export default Contact;