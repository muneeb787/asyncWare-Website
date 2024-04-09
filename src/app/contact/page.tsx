import Header from "@/components/common/Header"
import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"

const contact = () => {
  return (
    <>
    <Header />
      <Head>
        <title>Contact - 7Creative</title>
      </Head>
      <Contact />
    </>
  )
}

export default contact
