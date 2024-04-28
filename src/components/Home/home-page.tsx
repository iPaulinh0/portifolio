import { Paragraph } from "../paragraph";
import { Subtitle } from "../subtitle";
import { Title } from "../title";

export function HomePage() {
    return(
        <div className="max-w-[1280px] m-auto mt-10 p-6">
            <Title>Olá, mundo!</Title>
            <Subtitle>Olá, mundo!</Subtitle>
            <Paragraph>Olá, mundo!</Paragraph>
        </div>
    ) 
}