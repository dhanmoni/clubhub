import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addPost, getAllPosts} from '../redux/action/postActions'


function PostModal(props) {

    const postData = {
        text: "Hello welcome to AEC",
        club: 'AEC coding club',
        author: props.auth.user
    }

    const callGetAllPosts = ()=> {
        props.getAllPosts()
    }
    const callAddPost = ()=> {
        props.addPost(postData)
    }
  return (
    <div>
        <button onClick={callGetAllPosts}>Get All Post</button>
        <button onClick={callAddPost}>Add post</button>
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
        addPost, 
        getAllPosts
    }, dispatch)
);
  

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)