import Header from "@/components/common/Header"
import { Agency } from "@/sections"
import Head from "next/head"

const AgencyPage = () => {
  return (
    <>
    <Header />
      <Head>
        <title>About Agency</title>
      </Head>
      <Agency />
    </>
  )
}

export default AgencyPage
