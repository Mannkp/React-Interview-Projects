import { memo } from 'react';
import { format } from "date-fns";

function UserDetails({ userData }) {

    return (
        <div className="userDetails">
            <a href={userData?.html_url} target='_blank' rel="noreferrer">
                <h3>{userData?.login || "User"}</h3>
            </a>
            <h5>Name: {userData?.name || " name"}</h5>
            <div className="avatar">
                <a href={userData?.html_url} target='_blank' rel="noreferrer">
                    <img src={userData?.avatar_url} alt="Github user avatar" />
                </a>
            </div>
            <p className="bio">Bio: {userData?.bio || " bio"}</p>
            <p className="location">Location: {userData?.location || " location"}</p>
            <p className="twitter_username">twitter: {userData?.twitter_username || " twitter_username"}</p>
            <p className="created_at">Account created at: {format(userData?.created_at || '2011-01-25T18:44:36Z', 'PPPPpppp') || " created_at"}</p>
        </div>
    )
}

export default memo(UserDetails);