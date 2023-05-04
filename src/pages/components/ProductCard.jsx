import React from 'react'
import Image from 'next/image'
import {BiBrain} from "react-icons/bi"
import {GiTongue} from "react-icons/gi"
import Link from 'next/link'

const ProductCard = ({name, thc, cbd, efecto, sabor, image, id}) => {
  return (
    <Link href={`/product/${id}`} className='flex text-gray-50 gap-2 rounded-xl overflow-hidden shadow-md bg-gradient-to-bl from-green-900 to-gray-900'>
        <div className=' w-3/6 '>
            <Image src={image} className='drop-shadow-md'/>
        </div>
        <div className='flex flex-col justify-between w-3/6 '>
            <h1 className='w-full text-center font-bold text-2xl py-2 drop-shadow-md'>{name}</h1>
            <div className=' flex flex-col h-4/6 justify-between py-2'>
                <p className='flex items-center justify-between gap-2 pr-1'><span className='font-bold'>THC</span><span className={` w-full h-full rounded-xl bg-gradient-to-r from-green-600 to-red-600`}>{thc}</span></p>
                <p className='flex items-center justify-between gap-2 pr-1'><span className='font-bold'>CBD</span><span className={` w-full h-full rounded-xl bg-gradient-to-r from-green-600 to-red-600`}>{cbd}</span></p>
                <p className='flex items-center justify-between'><span className='font-bold text-3xl'><BiBrain/></span><span className=' w-5/6 text-center'>{efecto}</span></p>
                <p className='flex items-center justify-between'><span className='font-bold text-3xl'><GiTongue/></span><span className=' w-5/6 text-center'>{sabor}</span></p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard