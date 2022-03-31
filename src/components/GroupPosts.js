import React from 'react';
import { FcComments,FcLike } from "react-icons/fc";
import Card from './Card';

const GroupPosts = (props) => {
    return (
        <div className='ScreenCard'>
        <Card/>
         { <div className="ScreenCardContainerActions">
              <button className="ActionLike">Like <FcLike/></button>
              <button className="ActionComment">Comment<FcComments/></button>
          </div>}
       </div>
       
       

    );
}

export default GroupPosts;
