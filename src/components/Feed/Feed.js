import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import styles from './Feed.module.css'


const Feed = () => {
    return (
        <div className={styles.feed}>
            <div className={styles.feedWrapper}>
                <Share />
                <Post />
            </div>
        </div>
    );
};

export default Feed;