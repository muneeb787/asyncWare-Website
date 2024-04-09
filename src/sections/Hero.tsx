import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import { BlogCard, Brand, Testimonial } from "@/components/router"
import heroImage from "../assets/images/art-top-cropp.jpg";
import React from "react"

const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='syncware' caption='A' className='logobg' />
          <h1 className='hero-title uppercase text-fuchsia-600'>Crafting digital solutions for Seamless Integrations</h1>

          <div className='sub-heading'>
            {/* <TitleSm title='SOFTWARE' /> <span>.</span> */}
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='MOBILE APPLICATIONS' /> <span>.</span>
            <TitleSm title='AI INTEGRATION' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Our vision is to become the leading software engineering solution for global enterprises to lead, innovate, and inspire.

              We’re committed to going beyond the code boundaries to create impossible software engineering solutions by hiring, training, and grooming the top 1% of talent for the top 1% of dreamers.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
