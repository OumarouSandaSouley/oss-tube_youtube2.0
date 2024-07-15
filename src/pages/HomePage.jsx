import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import HomeFeed from '../components/HomeFeed'
import VideoModal from '../components/VideoModal'
import Video from '../context/Video'

const HomePage = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="container w-full flex  gap-[30px]">
        <SideBar />
        <HomeFeed/>
      </div>
      {/* <VideoModal/> */}
    </main>
  )
}

export default HomePage