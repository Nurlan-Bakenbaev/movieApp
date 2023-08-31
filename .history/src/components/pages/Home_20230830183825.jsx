import React from 'react'
import MainSection from '../MainSection'
import RowSection from '../../Request'
export const Home = () => {
  return (
    <div>
      <MainSection/>
      <RowSection title='Up Coming' fetchURL={}/>
    </div>
  )
}
