import { ComponentProps } from "react";

interface ParagraphProps extends ComponentProps<'p'> {}

export function Paragraph(props: ParagraphProps) {
    return(
        <p className="text-xl text-zinc-100" {...props} />
    )
}