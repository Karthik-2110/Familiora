"use client"

import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default async function HomePage() {
    const session = await auth()
    if (!session) {
        redirect("/")
    }
    
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Familiora homepage</h1>
        <p className="text-sm text-gray-500">Welcome {session.user?.name}</p>
        <Button onClick={() => signOut()} className="mt-4">Sign out</Button>
    </div>
  )
}