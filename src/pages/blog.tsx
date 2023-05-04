import BlogSection from "@/components/Routes/Blog"
import SEO from "@/components/SEO"

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog • YRPrey"
        description="You can find all news about security, new bugs, and new vulnerabilities here!"
      />
      <BlogSection/>
    </>
  )
}

export default Blog