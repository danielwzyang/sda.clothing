import Navbar from "@/components/ui/navbar"
import TeamCard from "@/components/ui/teamcard"
import profile from "../../public/profile.png"

export default function Team() {
    return (
        <div>
            <Navbar />
            <div className="my-5 flex flex-wrap justify-center mx-auto w-[1200px] max-w-[90%] gap-5">
                <TeamCard
                    name="Ian Villatoro"
                    image={profile}
                    position="president"
                    bio="I'm Ian, I'm on the track team and I love to draw. I work as a graphic designer and I'm interested in law."
                    facebook="Ian Villatoro"
                    instagram="chelitocuca"
                    mail=":("
                />
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="I'm Daniel, I'm into photography and I love to travel. I love minions and my favorite movie is Despicable Me 2."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />
                <TeamCard
                    name="Aidan Chan"
                    image={profile}
                    position="president"
                    bio="I'm Aidan, I'm on the football, swim, and volleyball teams. When I'm free, I love to eat and enjoy nature."
                    facebook="Aidan Chan"
                    instagram="aidan.chan__"
                    mail=":("
                />
                <TeamCard
                    name="Sid Shrivastava"
                    image={profile}
                    position="graphics co-director"
                    bio="Hey I'm Sid! I'm the current SU and Junior Caucus graphics director. I love collages, painting, and art history."
                    facebook="Siddharth Shrivastava"
                    instagram="sid.shrivastava15"
                    mail=":("
                />
                <TeamCard
                    name="Emmanuel Poku"
                    image={profile}
                    position="graphics co-director"
                    bio="I'm Eman! I run track and enjoy drawing. I love listening to music and I'm interested in finance."
                    facebook="Eman Yay"
                    instagram="emantoonice"
                    mail=":("
                />
                <TeamCard
                    name="Tahsan Kashem"
                    image={profile}
                    position="treasurer"
                    bio="I'm Tahsan, I play volleyball and enjoy investing and trading. I'm interested in the stock market."
                    facebook="Tahsan Kashem"
                    instagram="tahsank_"
                    mail=":("
                />

            </div>
        </div>
    )
}