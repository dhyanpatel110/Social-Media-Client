import React from 'react'
// css
import './ProfileSide.css'
// component
import FollowersCard from '../FollowersCard'
import LogoSearch from '../LogoSearch'
import ProfileCard from '../ProfileCard'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location='homepage' />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide