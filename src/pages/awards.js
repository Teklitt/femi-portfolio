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
          <AnimatedText text="Awards and Certifications" />
        </Layout>
      </main>
    </>
  )
}

export default awards
