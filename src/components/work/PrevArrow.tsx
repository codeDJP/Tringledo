import React from 'react'
import { GrLinkPrevious  } from "react-icons/gr";

interface PreArrowProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const  PrevArrow: React.FC<PreArrowProps> = ({ onClick }) => {
  return (
    <div className='absolute right-36 -bottom-[15%]' onClick={onClick}>
        <div className='text-para md:text-xl'>
            <GrLinkPrevious />
        </div>
    </div>
  )
}

export default PrevArrow