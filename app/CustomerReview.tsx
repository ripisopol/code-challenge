import type React from 'react'
import Stars from './Stars'
import Image from 'next/image'

interface CustomerProps {
    name: string;
    imageUrl: string;
    text: string

}

const CustomerReview: React.FC <CustomerProps> = ({name, imageUrl, text}) => {
  return (
    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <Image
          alt=""
          src={imageUrl}
          className="size-14 rounded-full object-cover"
        />
        <div>
          <Stars />
          <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{text}</p>
    </blockquote>
  )
}

export default CustomerReview