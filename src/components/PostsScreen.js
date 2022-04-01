import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllPosts} from '../redux/action/postActions'
import Card from './Card';


const PostsScreen =(props)=> {
  useEffect(()=> {
    props.getAllPosts()
  }, [])
  if(!props.post) {
    return(
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div className="PostScreen">
      {
        props.post.posts.map(post=> {
          console.log(post)
          return (
            <div className="ScreenCard">
              <Card post={post} key={post.id}/> 
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    post: state.post
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
      getAllPosts
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)