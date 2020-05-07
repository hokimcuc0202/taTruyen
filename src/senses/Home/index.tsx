import React from 'react';
import TopStories from './components/TopStories'
import './style.scss';

const Home = () => {
    return (
        <div className="home-container">
            <TopStories />
        </div>
    );
};

export default Home;