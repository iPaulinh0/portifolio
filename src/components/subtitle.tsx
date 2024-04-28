import { ComponentProps } from "react";

interface SubtitleProps extends ComponentProps<'h2'> {}

export function Subtitle(props: SubtitleProps) {
    return(
        <h2 className="text-4xl text-zinc-100 font-medium" {...props} />
    )
}