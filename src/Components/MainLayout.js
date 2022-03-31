import React from 'react';
import NavigationPanel from './NavigationPanel';
import PostsScreen from './PostsScreen';

const MainLayout = (props) => {
    return (
        <div className="grid-container">
            <NavigationPanel/>
            <PostsScreen/>
        </div>
    );
}

export default MainLayout;
