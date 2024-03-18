import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/Tim.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-10 md:w-14 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="Tim"
          className="'w-full h-auto rounded-full dark:bg-light"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        Tim Codes
      </span>
    </Link>
  )
}

export default Logo
