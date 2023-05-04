import AboutSection from "@/components/Routes/About"
import SEO from "@/components/SEO"

const About = () => {
    return (
        <>
            <SEO
                title="About • YRPrey"
                description="Learn a little more about us and our purposes with YRPrey!"
            />
            <AboutSection/>
        </>
    )
}

export default About