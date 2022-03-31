import React from 'react';
import NavigationPanel from '../components/NavigationPanel';
import PostsScreen from '../components/PostsScreen';

const HomeScreen = (props) => {
    return (
        <div className="grid-container">
            <React.Fragment><NavigationPanel/>
            <PostsScreen/></React.Fragment>
            
        </div>
    );
}

export default HomeScreen;
