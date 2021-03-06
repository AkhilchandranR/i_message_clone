import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar className="sidebar__avatar"/>
                <div className="sidebar__input">
                    <SearchIcon/>
                    <input placeholder="Search"/>                 
                </div>
                <IconButton className="sidebar__inputbutton" varient="outlined">
                        <RateReviewIcon/>
                </IconButton> 
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
