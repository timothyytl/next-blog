"use client"

import { DotLottiePlayer } from "@dotlottie/react-player"
import "@dotlottie/react-player/dist/index.css"

const LottieAnimation = () => {
  return (
    <div>
      <DotLottiePlayer src="/sloth.lottie" autoplay loop></DotLottiePlayer>
    </div>
  )
}

export default LottieAnimation
