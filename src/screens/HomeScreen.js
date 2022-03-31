import React from 'react';
import NavigationPanel from '../components/NavigationPanel';
import PostsScreen from '../components/PostsScreen';

const HomeScreen = (props) => {
    return (
        <div className="grid-container">
            <NavigationPanel/>
            <PostsScreen/>
            
        </div>
    );
}

export default HomeScreen;
