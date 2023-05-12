import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import { Button } from '@/components/Button'
import { ChevronRightIcon } from '@/components/icons/ChevronRightIcon'
import { NoiseFilter } from '@/components/icons/NoiseFilter'
import { Layout } from '@/components/layout/Layout'
import { Seo } from '@/components/seo/Seo'
import { AnimatedImage } from '@/features/home/AnimatedImage'
import { EASING } from '@/lib/animation'

const Home: FC = () => {
  return (
    <Layout className="radial-gradient-t max-h-[100svh]">
      <AnimatePresence>
        <main className="flex w-full flex-col gap-page p-page">
          <Seo title="Rebecca Reis" description="Home page" />

          <section className="flex grid-cols-5 flex-col-reverse gap-24 tablet:grid tablet:min-h-[40svh] tablet:gap-48">
            <AnimatedImage
              src="assets/hero.jpg"
              alt="rebecca reis header"
              className="col-span-2 h-[30svh] tablet:h-auto"
            />

            <motion.div
              initial={{ opacity: 0, translateY: '-1rem' }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 1, ease: EASING.ease },
              }}
              className="col-span-3 flex flex-col justify-between gap-16"
            >
              <div className="flex flex-col">
                <h1>Rebecca Reis</h1>
                <h1 className="text-slate-400">Thesis Defense</h1>
              </div>
              <h2 className="flex flex-col text-slate-400">
                <span>Microbiology Committee</span>
                <span>Advised by Glenn Randall</span>
              </h2>
            </motion.div>
          </section>

          <section className="flex grid-cols-5 flex-col gap-24 tablet:grid tablet:gap-48">
            <motion.div
              initial={{ opacity: 0, translateY: '-1rem' }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { delay: 0.4, duration: 1.2, ease: EASING.ease },
              }}
              className="border-gradient col-span-3 flex flex-col rounded-lg p-page"
            >
              <h2 className="flex flex-col gap-16">
                <span className="text-slate-50">
                  Host and viral regulation of innate immunity to infection
                </span>
                <span className="flex flex-col">
                  <span>Monday, May 22nd, 2023</span>
                  <span>2:00pm Central</span>
                  <span>BSLC 115</span>
                </span>
              </h2>

              <motion.a
                initial={{ opacity: 0, translateY: '-1rem' }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: 0.8, duration: 1.2, ease: EASING.ease },
                }}
                href="https://ucmedicinegroup.zoom.us/j/96573282152?pwd=OE9GcW8wU0 pMOCsrcGxiK3ViNFZtUT09"
                className="group my-32 max-w-fit rounded-full"
              >
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 transition-[filter] hover:brightness-110">
                  Join via Zoom
                  <ChevronRightIcon className="ml-8 h-16 w-16 transition-transform group-hover:translate-x-4" />
                </Button>
              </motion.a>

              <p className="flex flex-col gap-16">
                <span className="flex flex-col">
                  <span>Meeting ID: 965 7328 2152</span>
                  <span>Passcode: 40504445</span>
                </span>
                <span>
                  Persons needing assistance should contact Alicia Perez:{' '}
                  <a
                    href="mailto:avperez@uchicago.edu?Subject=Hello"
                    className="transition-colors hover:text-slate-300"
                  >
                    avperez@uchicago.edu
                  </a>
                </span>
              </p>
            </motion.div>

            <AnimatedImage
              src="assets/action.jpg"
              alt="rebecca reis pipette action"
              className="col-span-2 h-[30svh] tablet:h-auto"
            />
          </section>

          <span className="absolute -m-1 h-1 w-1 overflow-hidden whitespace-nowrap border-0 p-0">
            <NoiseFilter />
          </span>
        </main>
      </AnimatePresence>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Home
