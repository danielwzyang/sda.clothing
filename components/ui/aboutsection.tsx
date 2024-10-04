import Image from "next/image"
import Paragraph from "./paragraph"

export interface sectionProps {
    title: string,
    lines: string[],
    side: number
}

export default function Section(props: sectionProps) {
    return <div className={"flex flex-wrap items-center" + (props.side == 1 ? "" : " sm:flex-row-reverse")} >
        <div className="w-full h-[400px] sm:w-[50%] sm:aspect-[5/4] flex items-center">
            <Paragraph title={props.title} lines={props.lines} side={props.side} />
        </div>
        <div className="w-full sm:w-[50%] aspect-[5/4]"> <Image src={"/" + props.title + "jpg"} alt={props.title} width={960} height={768}/> </div>
    </div>
}