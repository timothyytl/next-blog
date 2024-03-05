import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/Tim.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="Tim"
          className="'w-full h-auto rounded-full dark:bg-light"
        />
      </div>
      <span className="font-bold text-xl dark:text-light">Tim Codes</span>
    </Link>
  )
}

export default Logo
