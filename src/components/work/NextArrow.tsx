import React from 'react'
import { GrLinkNext } from "react-icons/gr";

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLElement>;
 }

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
    return (
        <div className='absolute right-24 -bottom-[15%]' onClick={onClick}>
            <div className='text-para md:text-xl'>
                <GrLinkNext />
            </div>
        </div>
    );
}

export default NextArrow