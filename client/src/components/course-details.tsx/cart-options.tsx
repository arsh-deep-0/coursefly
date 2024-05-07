import React from 'react'

export default function CartOptions() {
  return (
    <div className="flex gap-2 items-center">
    <span className="text-2xl text-blue font-bold">$99</span>
    <span className="line-through">$199</span>
    <button className='bg-blue text-white px-4 rounded-md text-sm'>Add to Cart</button>
  </div>
  )
}
