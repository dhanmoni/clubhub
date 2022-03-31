
//post card
import React from 'react'
import {MdGroup} from 'react-icons/md'

export default function Card(props) {
  console.log(props)
  return (
    <>
      <MdGroup className='group-icon'/>
       <div className='ScreenCardContainer'>
          <div>
            <p className='ScreenCardContainerLabel'>{props.post.postClub}</p> {/*replace with group name*/}
            <p className='ScreenCardContainerDescription'>{props.post.postText}</p> {/*replace with group description*/}
          </div>
        </div>
    </>
  )
}
