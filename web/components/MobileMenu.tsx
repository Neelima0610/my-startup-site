"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {

return(

<AnimatePresence>

{open && (

<motion.div
initial={{x:"100%"}}
animate={{x:0}}
exit={{x:"100%"}}
className="fixed inset-0 bg-white z-50 p-8 flex flex-col gap-6"
>

<button onClick={()=>setOpen(false)}>Close</button>

<Link href="/products">Products</Link>
<Link href="/extensions/visual-studio">Visual Studio</Link>
<Link href="/extensions/vs-code">VS Code</Link>
<Link href="/extensions/azure-devops">Azure DevOps</Link>
<Link href="/elearning">eLearning</Link>
<Link href="/ebooks">eBooks</Link>

</motion.div>

)}

</AnimatePresence>

)
}