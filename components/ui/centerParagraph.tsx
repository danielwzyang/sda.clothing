import * as motion from "framer-motion/client"

interface paraProps {
    lines: string[],
}

export default function Paragraph(props: paraProps) {
    return <div className="w-fit mx-auto mt-3">
        {
            props.lines.map((line, i) => {
                return <motion.p key={i}
                    initial={{ opacity: 0, y: "120%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        opacity: { duration: 0.6, ease: "easeInOut", delay: i * 0.2 },
                        y: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 },

                    }}
                    className={"text-xl leading-tight text-[#585858] text-center"}>
                    {line}
                </motion.p>
            })
        }
    </div>
}