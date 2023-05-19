import React from 'react'
import Banner from '../Banner/Banner'
import ToySportTitle from '../../../TitleHooks/ToySportTitle'
import GalleryToy from '../../Gallery/GalleryToy'
import ToyTabs from '../../ToyTabs/ToyTabs'

export default function Home() {
  ToySportTitle("Home")
  return (
    <div>
      <Banner></Banner>
     <GalleryToy></GalleryToy>
     <ToyTabs></ToyTabs>
    </div>
  )
}
