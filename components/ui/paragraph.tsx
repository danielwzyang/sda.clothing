import * as motion from "framer-motion/client"

interface paraProps {
    title: string,
    lines: string[],
    side: number
}

export default function Paragraph(props: paraProps) {
    return <div className="w-fit mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: "200%", skewY: 20 * props.side }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{
                opacity: { duration: 0.6, ease: "easeInOut" },
                y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                skewY: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },

            }} className={"text-5xl lg:text-5xl 2xl:text-7xl text-center mb-[20px]" + (props.side == 1 ? " sm:text-left" : " sm:text-right")}>
            {props.title}
        </motion.h1>
        {
            props.lines.map((line, i) => {
                return <motion.p key={i}
                    initial={{ opacity: 0, y: "120%", skewY: 5 * props.side }}
                    whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        opacity: { duration: 0.6, ease: "easeInOut", delay: i * 0.2 },
                        y: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 },
                        skewY: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 },

                    }}
                    className={"text-xl lg:text-2xl 2xl:text-3xl !leading-none text-[#585858] text-center" + (props.side == 1 ? " sm:text-left" : " sm:text-right")}>
                    {line}
                </motion.p>
            })
        }
    </div>
}