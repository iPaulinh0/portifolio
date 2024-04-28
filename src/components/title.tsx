import { ComponentProps } from "react";

interface TitleProps extends ComponentProps<'h1'> {}

export function Title(props: TitleProps) {
    return(
        <h1 className="text-6xl text-zinc-100 font-bold" {...props} />
    )
}