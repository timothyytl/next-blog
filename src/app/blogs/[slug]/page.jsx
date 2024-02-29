export default function BlogPage({ params }) {
  return (
    <main className="min-h-screen text-white flex justify-center items-center">
      <article>{params.slug}</article>
    </main>
  )
}
