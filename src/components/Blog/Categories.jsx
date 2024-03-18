import { slug } from "github-slugger"
import Category from "./Category"

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 text-dark dark:text-light border-y-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((category) => (
        <Category
          key={category}
          link={`/categories/${category}`}
          name={category}
          active={currentSlug === slug(category)}
        />
      ))}
    </div>
  )
}

export default Categories
