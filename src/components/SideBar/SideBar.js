import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material';
import React from 'react';
import styles from './SideBar.module.css'
import friendImg from '../../assets/person/2.jpeg'

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBarWrapper}>
                <ul className={styles.sideBarList}>
                    <li className={styles.sideBarListItem}>
                        < RssFeed className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Feed</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < Chat className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Chats</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < PlayCircleFilledOutlined className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Videos</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < Group className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Groups</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < Bookmark className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Bookmarks</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < HelpOutline className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Questions</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < WorkOutline className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Jobs</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < Event className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Events</span>
                    </li>
                    <li className={styles.sideBarListItem}>
                        < School className={styles.sideBarIcon} />
                        <span className={styles.sideBarListItemText}>Courses</span>
                    </li>
                </ul>

                <button className={styles.sideBarButton}>Show More</button>
                <hr className={styles.sideBarHr} />

                <ul className={styles.sideBarFriendList}>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                    <li className={styles.sideBarFriend}>
                        <img src={friendImg} alt="" className={styles.sideBarFriendImg} />
                        <span className={styles.sideBarFriendName}>Agun</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;