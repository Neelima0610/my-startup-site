"use client";

import { signOut,useSession } from "next-auth/react";
import { useState } from "react";

export default function UserNav(){

const {data:session}=useSession()
const [open,setOpen]=useState(false)

if(!session) return null

return(

<div className="relative">

<button
onClick={()=>setOpen(!open)}
className="flex items-center gap-3 border rounded-full px-4 py-2"
>

<div className="w-8 h-8 bg-cyan-600 text-white flex items-center justify-center rounded-full">
{session.user?.name?.charAt(0)}
</div>

<span className="hidden md:block text-sm">
{session.user?.email}
</span>

</button>

{open && (

<div className="absolute right-0 mt-3 bg-white border rounded-lg shadow-lg w-48">

<button
className="block w-full text-left px-4 py-2 hover:bg-slate-100"
>
Profile
</button>

<button
className="block w-full text-left px-4 py-2 hover:bg-slate-100"
>
Dashboard
</button>

<button
onClick={()=>signOut({callbackUrl:"/"})}
className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
>
Logout
</button>

</div>

)}

</div>

)
}