import React from 'react'
import Head from 'next/head'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-grey-600">the Landing Page!</span>
        </h1>

        <p className="mt-3 text-2xl">
          This is a simple, attractive landing page.
        </p>

        <div className="flex items-center mt-8 text-2xl">
          <a
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-grey-600 hover:bg-grey-700"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="p-5 bg-grey-600 text-center text-white w-full">
        <p>© 2022 My Website</p>
      </footer>
    </div>
  )
}

export default LandingPage