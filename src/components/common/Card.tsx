import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
import Image from 'next/image'

export const Card = ({ data, caption, show, path }: any) => {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={`/${data.cover}`} width={1600} height={1600} alt={data.title} />
        </div>
        <div className='card-details'>
          <Link href={`${path}/${data.id}`} className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text: any, i: number) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
