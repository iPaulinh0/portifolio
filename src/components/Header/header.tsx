import { AboutLink } from "./about-link"
import { ContactLink } from "./contact-link"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import { Menu } from "lucide-react"
import { Separator } from "../ui/separator"

export function Header() {
    const profile = new URL('https://avatars.githubusercontent.com/u/86086259?v=4').toString()
    return(
        <div className="w-[1280px] m-auto p-6 flex items-center justify-between max-[1279px]:w-screen max-[1279px]:px-10">
            <img src={profile} alt="PV" className="w-16 rounded-full max-sm:w-12" />
            <div className="flex gap-2 max-sm:hidden">
                <AboutLink />
                <ContactLink />
            </div>
            <div className="hidden max-sm:block">
                <Drawer>
                    <DrawerTrigger className="text-zinc-100 border border-zinc-100 rounded-md p-1">
                        <Menu />
                    </DrawerTrigger>
                    <DrawerContent className="bg-black flex flex-col gap-3 p-4">
                        <a href="" className="text-zinc-100 text-lg rounded-lg p-2 antialiased hover:bg-zinc-100/20">Sobre</a>
                        <Separator className="bg-zinc-100/20"/>
                        <a href="" className="text-zinc-100 text-lg rounded-lg p-2 antialiased hover:bg-zinc-100/20">Contato</a>
                    </DrawerContent>
                </Drawer>

            </div>
        </div>
    ) 
}