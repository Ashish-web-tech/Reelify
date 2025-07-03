import React from 'react'

const HeroThree = () => {
  return (
    
    <div className="flex justify-center m-5 md:mx-20 lg:px-20 lg:mx-40 bg-black">
      <div className="bg-[var(--red)] text-white p-8 lg:px-20 rounded-2xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Steps for downloading a reels from our Website
        </h2>
        <ol className="list-decimal list-inside space-y-5 text-base md:text-lg">
          <li>
            <span className="font-bold">Copy the URL</span><br />
            <span className="text-sm md:text-base text-white/90">
              Open the Instagram app or website, go to the photo, video, reels, carousel, or IGTV you want to download. Copy the URL.
            </span>
          </li>
          <li>
            <span className="font-bold">Paste the link</span><br />
            <span className="text-sm md:text-base text-white/90">
              Paste the link into the input field and click the "Download" button to start downloading.
            </span>
          </li>
          <li>
            <span className="font-bold">Download Video Reel</span><br />
            <span className="text-sm md:text-base text-white/90">
              Review the result and click the "Download" button. Done!
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default HeroThree