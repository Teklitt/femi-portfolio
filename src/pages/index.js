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

      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light  ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full ">
              <Image
                src={profilePic}
                alt="femi "
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Leadership in Tech - Empowering Innovation through Code."
                className=" !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
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
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg sm:text-sm font-semibold hover:bg-light hover:text-dark border-2 sm:p-1 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-2 sm:w-5 xs:w-3" />
                </Link>
                <Link
                  href="mailto:mebudenifemi@gmail.com"
                  target={'_blank'}
                  className="ml-4 flex items-center text-lg font-medium  underline dark:text-light md:text-base sm:text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 -bottom-20 inline-block w-40 md:hidden ">
          <Image src={thinkingFace} alt="humour" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
