import React from 'react'
import Header from './Home/Header/page'
import Navbar from './Home/Navbar/page'
import LogoAnimation from './Home/Home2/page'
import Footer from './Home/footer/page'
import HowToMakeCV from './Home/Steps/page'
import Page from './Home/vtvideo/page'
function page() {
  return (
    <div>
      <main className="pt-0">
        <Header />
        <Page />
      </main>
      <LogoAnimation />
      <HowToMakeCV />
      <Footer />
      <Navbar />
    </div>
  )
}

export default page
