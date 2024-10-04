import Navbar from "@/components/ui/navbar"
import TeamCard from "@/components/ui/teamcard"
import daniel from "../../public/daniel.png"
import profile from "../../public/profile.png"

export default function Team() {
    return (
        <div>
            <Navbar />
            <div className="mt-5 flex flex-wrap justify-center mx-auto w-[1200px] max-w-[90%] gap-5">
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui sunt numquam iure iusto omnis minima libero incidunt. Reprehenderit, sequi."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui sunt numquam iure iusto omnis minima libero incidunt. Reprehenderit, sequi."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui sunt numquam iure iusto omnis minima libero incidunt. Reprehenderit, sequi."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui sunt numquam iure iusto omnis minima libero incidunt. Reprehenderit, sequi."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui sunt numquam iure iusto omnis minima libero incidunt. Reprehenderit, sequi."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />
                <TeamCard
                    name="Daniel Yang"
                    image={profile}
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui sunt numquam iure iusto omnis minima libero incidunt. Reprehenderit, sequi."
                    facebook="Daniel Yang"
                    instagram="danielwyang"
                    mail="danielwzyang@gmail.com"
                />

            </div>
        </div>
    )
}