import React from "react"
import { brand } from "@/assets/data/dummydata"
import Image from "next/image"
import { Title } from "./common/Title"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} width={200} height={200} alt={`${item.id}`}  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
