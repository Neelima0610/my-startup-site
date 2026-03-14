"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type CommandPaletteProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CommandPalette({ open, setOpen }: CommandPaletteProps) {

const router = useRouter()

const go=(p:string)=>{
router.push(p)
setOpen(false)
}

return(

<AnimatePresence>

{open && (

<motion.div
className="fixed inset-0 bg-black/40 flex items-start justify-center pt-32 z-50"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>

<div className="bg-white rounded-xl shadow-xl w-[500px] p-4 space-y-3">

<input
autoFocus
placeholder="Search pages..."
className="w-full border p-2 rounded"
/>

<button onClick={()=>go("/dashboard")} className="block w-full text-left hover:bg-slate-100 p-2 rounded">
Dashboard
</button>

<button onClick={()=>go("/products")} className="block w-full text-left hover:bg-slate-100 p-2 rounded">
Products
</button>

</div>

</motion.div>

)}

</AnimatePresence>

)
}