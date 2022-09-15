import React from 'react';
import Share from '../Share/Share';
import styles from './Feed.module.css'


const Feed = () => {
    return (
        <div className={styles.feed}>
            <div className={styles.feedWrapper}>
                <Share />
            </div>
        </div>
    );
};

export default Feed;