import Navbar from "@/components/ui/navbar"
import TeamCard from "@/components/ui/teamcard"
import * as motion from "framer-motion/client"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'team',
    description: 'meet our team!',
}

export default function Team() {
    return (
        <div className="mb-10">
            <Navbar />
            <div className="my-5 flex flex-wrap justify-center mx-auto w-[1200px] max-w-[90%] gap-5">
                <motion.div initial={{ opacity: 0, y: "25%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut" }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}>
                    <TeamCard
                        name="Ian Villatoro"
                        image="/ian.png"
                        position="president"
                        bio="I'm Ian, I'm on the track team and I love to draw. I work as a graphic designer and I'm interested in law."
                        facebook="Ian Villatoro"
                        instagram="chelitocuca"
                        mail="ianv32@nycstudents.net"
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: "25%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 0.2 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }}>
                    <TeamCard
                        name="Daniel Yang"
                        image="/daniel.png"
                        position="president"
                        bio="I'm Daniel, I'm into photography and I love to travel. I love minions and my favorite movie is Despicable Me 2."
                        facebook="Daniel Yang"
                        instagram="danielwyang"
                        mail="danielwzyang@gmail.com"
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: "25%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 0.4 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 } }}>
                <TeamCard
                    name="Aidan Chan"
                    image="/aidan.png"
                    position="president"
                    bio="I'm Aidan, I'm on the football, swim, and volleyball teams. When I'm free, I love to eat and enjoy nature."
                    facebook="Aidan Chan"
                    instagram="aidan.chan__"
                    mail="aidanc78@nycstudents.net"
                />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: "25%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 0.6 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 } }}>
                <TeamCard
                    name="Sid Shrivastava"
                    image="/sid.png"
                    position="graphics co-director"
                    bio="Hey I'm Sid! I'm the current SU and Junior Caucus graphics director. I love collages, painting, and art history."
                    facebook="Siddharth Shrivastava"
                    instagram="sid.shrivastava15"
                    mail="siddharth.shrivastava@stuysu.org"
                />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: "25%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 0.8 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.8 } }}>
                <TeamCard
                    name="Emmanuel Poku"
                    image="/eman.png"
                    position="graphics co-director"
                    bio="I'm Eman! I run track and enjoy drawing. I love listening to music and I'm interested in finance."
                    facebook="Eman Yay"
                    instagram="emantoonice"
                    mail="emmanuelp160@nycstudents.net"
                />
                </motion.div>    

                <motion.div initial={{ opacity: 0, y: "25%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 1 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1 } }}>
                <TeamCard
                    name="Tahsan Kashem"
                    image="/tahsan.png"
                    position="treasurer"
                    bio="I'm Tahsan, I play volleyball and enjoy investing and trading. I'm interested in the stock market."
                    facebook="Tahsan Kashem"
                    instagram="tahsank_"
                    mail=":("
                />
                </motion.div>

            </div>
        </div>
    )
}