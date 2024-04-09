import Header from "@/components/common/Header"
import Services from "@/sections/Services"
import Head from "next/head"
import React from "react"

const services = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Team - 7Creative</title>
      </Head>
      <Services />
    </>
  )
}

export default services
