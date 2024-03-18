import InsightMarquee from "@/src/components/About/InsightMarquee"

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📋",
  "Recipient of the Hackermoon Noonies Award 🏆",
]

const AboutLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightMarquee insights={insights} />
      {children}
    </main>
  )
}

export default AboutLayout
