import React from 'react'
import Banner from '../Banner/Banner'
import ToySportTitle from '../../../TitleHooks/ToySportTitle'
import GalleryToy from '../../Gallery/GalleryToy'
import ToyTabs from '../../ToyTabs/ToyTabs'
import OurAbout from '../../OurAbout/OurAbout'
import OurBestProduct from '../../OurBestProduct/OurBestProduct'

export default function Home() {
  ToySportTitle("Home")
  return (
    <div>
      <Banner></Banner>
      <OurAbout></OurAbout>
      <GalleryToy></GalleryToy>
      <ToyTabs></ToyTabs>
      <OurBestProduct></OurBestProduct>
    </div>
  )
}
