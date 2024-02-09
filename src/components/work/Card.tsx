import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'


interface CardProps {
    title: string;
    img: string | StaticImageData; // Specify the type for the img prop
}

const Card: React.FC<CardProps> = (props) => {
    const imgUrl = typeof props.img === 'string' ? props.img : props.img.src;
  return (
    <div className='w-[100%] bg-navg shadow-xl rounded-xl'>
        
        <div className='rounded-2xl'>
            <Image className='h-[250px] w-[100%] rounded-t-xl' width={100} height={150} src={imgUrl} alt=''></Image>
            <div className='flex flex-col gap-4 p-[20px]'>
                <div className='truncate'>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <p>dsfsfsfsdfsf</p>
                </div>
                <div>
                    <Link href={''}>dfsdfsfsd</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card