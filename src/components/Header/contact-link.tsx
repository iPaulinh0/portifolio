import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { ChevronDown } from "lucide-react"

export function ContactLink() {
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="text-zinc-100 flex items-center justify-center gap-1 p-2 h-12 hover:bg-zinc-800 rounded-md">
                    <span className="text-md font-semibold">Contato</span>
                    <ChevronDown className="w-4"/>
                </TooltipTrigger>
                <TooltipContent className="p-3 flex flex-col gap-2 bg-black border items-center">

                    <a href="" className="text-base flex flex-col p-2 rounded-lg hover:bg-zinc-800">
                        <span className="text-sm font-semibold antialiased">Formulário</span>
                        <span className="w-64 text-xs text-zinc-400 antialiased">Preencha um formulário com e entre em contato direto comigo!</span>
                    </a>

                    <Separator className="bg-zinc-100/20 w-64"/>

                    <a href="" className="text-base flex flex-col p-2 rounded-lg hover:bg-zinc-800">
                        <span className="text-sm font-semibold antialiased">Social</span>
                        <span className="w-64 text-xs text-zinc-400 antialiased">Acesse aqui as minhas redes sociais!</span>
                    </a>

                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    ) 
}