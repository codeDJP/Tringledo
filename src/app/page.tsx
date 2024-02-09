import React from 'react'
import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import Why from '@/components/why/Why'
import Technologies from '@/components/technologies/Technologies'
// import Work from '@/components/work/Work'
import NumOf from '@/components/numOf/NumOf'
// import Team from '@/components/team/Team'



export default function Home() {
  return (
    <>  
      
      <Hero/>
      <Why/>
      <Services/>
      <Technologies/>
{/*       <Work/> */}
{/*       <Team/> */}
      <NumOf/>
    </>
  )
}
