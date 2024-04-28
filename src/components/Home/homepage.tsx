import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

export function HomePage() {

    const ReactLogo = new URL('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg').toString()
    const NodeJSLogo = new URL('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg').toString()
    const TypescriptLogo = new URL('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg').toString()
    const JavascriptLogo = new URL('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg').toString()
    const TailwindLogo = new URL('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg').toString()

    return(
       <div className="w-[1280px] m-auto mt-16 p-6 max-[1279px]:w-screen max-sm:flex max-sm:flex-col max-sm:items-center">
            <h1 className="text-zinc-100/75 font-bold text-8xl transition-all w-auto antialiased hover:text-zinc-100 hover:cursor-default max-[630px]:text-6xl max-[410px]:text-5xl">Paulo Araujo</h1>
            <h2 className="text-zinc-100 font-semibold text-5xl antialiased max-[630px]:text-3xl max-[410px]:text-2xl">Front-end Developer</h2>
            <div className="flex mt-2 gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><img src={ReactLogo} className="w-8 max-[630px]:w-10 max-[410px]:w-8"/></TooltipTrigger>
                        <TooltipContent className="bg-black border">
                            <p className="text-md">React and React Native</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><img src={NodeJSLogo} className="w-8 max-[630px]:w-10 max-[410px]:w-8"/></TooltipTrigger>
                        <TooltipContent className="bg-black border">
                            <p className="text-md">NodeJS</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><img src={TypescriptLogo} className="w-8 max-[630px]:w-10 max-[410px]:w-8"/></TooltipTrigger>
                        <TooltipContent className="bg-black border">
                            <p className="text-md">Typescript</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><img src={JavascriptLogo} className="w-8 max-[630px]:w-10 max-[410px]:w-8"/></TooltipTrigger>
                        <TooltipContent className="bg-black border">
                            <p className="text-md">Javascript</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><img src={TailwindLogo} className="w-8 max-[630px]:w-10 max-[410px]:w-8"/></TooltipTrigger>
                        <TooltipContent className="bg-black border">
                            <p className="text-md">TailwindCSS</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
       </div>
    )
}