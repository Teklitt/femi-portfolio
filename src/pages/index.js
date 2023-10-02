import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer_2-transformed.png'
import profilePic2 from '../../public/images/profile/developer_3.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import thinkingFace from '../../public/images/profile/thinking_face1.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Femi's Portfolio</title>
        <meta name="description" content="Created By Femi" />
      </Head>

      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="femi " className="w-full h-auto" />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Leadership in Tech - Empowering Innovation through Code."
                className="!text-7xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Hello, I'm Femi Mebude, a passionate and results-driven computer
                scientist with a strong foundation in software engineering and a
                flair for leadership.
                {/*My journey in the tech industry has been
                guided by a commitment to excellence, evident in my 4.0 Major
                GPA and a track record of driving impactful projects. From
                optimizing code for efficiency to leading teams towards success,
                I thrive on the challenges and opportunities that the
                ever-evolving tech landscape offers. Welcome to my portfolio,
                where you'll discover a showcase of my technical prowess,
                creative problem-solving, and dedication to pushing the
                boundaries of what's possible in technology. */}
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-2" />
                </Link>
                <Link
                  href="mailto:mebudenifemi@gmail.com"
                  target={'_blank'}
                  className="ml-4 flex items-center text-lg font-medium  underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 -bottom-20 inline-block w-40 ">
          <Image src={thinkingFace} alt="humour" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
