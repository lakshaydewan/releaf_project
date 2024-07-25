import React from 'react'

const ButtonSmall = (props) => {
  return (
    <div>
      <button className='text-[#828282] text-md hover:text-gray-300 transition-colors duration-500 ease-in-out'>
      {props.title}
    </button>
    </div>
  )
}

export default ButtonSmall;