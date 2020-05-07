import React from 'react';
import './style.scss';

const TopStories = () => {
    return (
        <div className="top-stories">
            <div className="top-stories-title">hello</div>
            <div className="top-stories-toogle-all">Show All</div>
            <div className="top-stories-list">
                <div className="top-stories-card">
                    <a href="#12">
                        <div>
                            <img src="http://cn.e.pic.mangatoon.mobi/cartoon-posters/781d94f.jpg-posterup4" alt=""></img>
                        </div>
                    </a>
                    <div className="top-stories-card-title">
                        name
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopStories;