import LoginSection from "@/components/Routes/Login"
import SEO from "@/components/SEO"

const Login = () => {
  return (
    <>
      <SEO
        title="Login • YRPrey"
        description="Join us in the search for bugs and vulnerabilities!"
      />
      <LoginSection/>
    </>
  )
}

export default Login