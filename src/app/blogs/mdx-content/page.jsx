import React from "react"
import Example from "./example.mdx"

const Page = () => {
  return (
    <main className="bg-neutral-800 text-white">
      <div className="prose dark:prose-invert">
        <Example />
      </div>
    </main>
  )
}

export default Page
