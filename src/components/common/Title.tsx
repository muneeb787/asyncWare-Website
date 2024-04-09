export const TitleLogo = ({ title, caption, className }: any) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title} : any) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }: any) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
