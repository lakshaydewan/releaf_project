import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "All the study material you'll ever need",
        800, // wait 1s before replacing "Mice" with "Hamsters"
        'The Best User Experience',
        800,
        "Video Playlists made just for you",
        800,
        "EG sheets, Assignments and Files delivered right to you",
        1000
      ]}
      wrapper="span"
      speed={60}
      style={{ display: 'inline-block' }}
      className='text-white text-3xl barlow-condensed-light'
      repeat={Infinity}
      deletionSpeed={0}
    />
  )
}

export default TypeWriter