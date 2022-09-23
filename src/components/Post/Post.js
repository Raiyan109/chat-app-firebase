import { MoreVert } from '@mui/icons-material';
import React from 'react';
import styles from './Post.module.css'


const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <img className={styles.postProfileImg} src="../../assets/person/2.jpeg" alt="" />
                        <span className={styles.postUserName}>Raiyan Kabir</span>
                        <span className={styles.postDate}>5 mins ago</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>Hey! It's my First Post !</span>
                </div>
                <div className={styles.postBottom}></div>
            </div>

        </div>
    );
};

export default Post;