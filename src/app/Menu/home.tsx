import React from 'react'
import Card from '@/components/card'
const HomeMenu = () => {
  return (
    <div>
        <div className="backgroundHome">
        <h2>Pick a Task</h2>
        <p>Latest Task : <span>Tue, 23 May 2023</span></p>
        </div>
        <Card/>
    </div>
  )
}

export default HomeMenu