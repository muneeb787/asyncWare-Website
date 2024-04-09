import Header from "@/components/common/Header"
import { Blog } from "@/sections"
import Head from "next/head"

const Blogs = () => {
  return (
    <>
    <Header/>
      <Head>
        <title>Blog - 7Creative</title>
      </Head>
      <Blog />
    </>
  )
}

export default Blogs
