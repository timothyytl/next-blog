import Link from "next/link"
import { getBlogs } from "./fetchers"

export default async function BlogsPage() {
  const blogs = await getBlogs()
  return (
    <main
      className="flex justify-center items-center
    min-h-screen"
    >
      {blogs.map((blog, index) => (
        <article key={index} className="grid grid-cols-4">
          <h1>{blog.frontmatter.title}</h1>
          <p>{blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishedDate}</p>
          <Link href={`/blogs/${blog.slug}`}>Read More</Link>
        </article>
      ))}
    </main>
  )
}
