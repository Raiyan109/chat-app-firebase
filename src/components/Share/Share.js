import React from 'react';
import styles from './Share.module.css'


const Share = () => {
    return (
        <div className={styles.share}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img className={styles.shareProfileImg} src="../../assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in your mind Agatha?" className={styles.shareInput} />
                </div>
                <div className={styles.shareBottom}></div>
            </div>
        </div>
    );
};

export default Share;