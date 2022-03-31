
//post card
import React from 'react'

export default function Card(props) {
  return (
    <>
       <img  className='group-icon'src={require("../assets/codingclub.png")}></img> {/*replace with group icon url*/}
       <div className='ScreenCardContainer'>
          <div>
          <p className='ScreenCardContainerLabel'>Assam Engineering College Coding Club</p> {/*replace with group name*/}
          <p className='ScreenCardContainerDescription'>Coding Club</p> {/*replace with group description*/}
          </div>
          </div>
          </>
  )
}
