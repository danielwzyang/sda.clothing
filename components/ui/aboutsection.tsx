import Paragraph from "./paragraph"

export interface sectionProps {
    title: string,
    lines: string[],
    side: number
}

export default function Section(props: sectionProps) {
    return <div className={"flex flex-wrap" + (props.side == 1 ? "" : " sm:flex-row-reverse")} >
        <div className="w-full sm:w-[50vw] aspect-[5/4] flex items-center">
            <Paragraph title={props.title} lines={props.lines} side={props.side} />
        </div>
        <div className="w-full sm:w-[50vw] aspect-[5/4] bg-orange-500"></div>
    </div>
}