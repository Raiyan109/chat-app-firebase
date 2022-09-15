import React from 'react';
import styles from './Topbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import { Chat, Notifications } from '@mui/icons-material';
import proPic1 from '../../assets/person/1.jpeg'

const Topbar = () => {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.topbarLeft}>
                <span className={styles.logo}>Raiyan'sSocial</span>
            </div>
            <div className={styles.topbarCenter}>
                <div className={styles.searchBar}>
                    <SearchIcon />
                    <input placeholder='Search for friend, post or video' className={styles.searchInput} />
                </div>
            </div>
            <div className={styles.topbarRight}>
                <div className={styles.topbarLinks}>
                    <span className={styles.topbarLink}>Homepage</span>
                    <span className={styles.topbarLink}>Timeline</span>
                </div>
                <div className={styles.topbarIcons}>
                    <div className={styles.topbarIconItem}>
                        <Person />
                        <span className={styles.topbarIconBadge}>1</span>
                    </div>
                    <div className={styles.topbarIconItem}>
                        <Chat />
                        <span className={styles.topbarIconBadge}>2</span>
                    </div>
                    <div className={styles.topbarIconItem}>
                        <Notifications />
                        <span className={styles.topbarIconBadge}>1</span>
                    </div>
                </div>
                <img src={proPic1} alt="" className={styles.topbarImg} />
            </div>
        </div>
    );
};

export default Topbar;