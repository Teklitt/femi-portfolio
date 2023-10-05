import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'

const awards = () => {
  return (
    <>
      <Head>
        <title> Femi | Awards and Certification Page</title>
        <meta
          name="description"
          content="All awards and acolades received by Femi mebude"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mt-[20%]" text="Awards and Certifications" />

          <div className="stars" aria-hidden="true"></div>
          <div className="starts2" aria-hidden="true"></div>
          <div className="stars3" aria-hidden="true"></div>

          <section className="flex flex-col justify-center items-center">
            <h2 className="p-12 text-center mb-[50%] text-8xl text-dark dark:text-light">
              Page Under Construction
            </h2>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default awards
