import React from 'react'
// component
import FollowersCard from '../FollowersCard'
import InfoCard from '../InfoCard'
import LogoSearch from '../LogoSearch'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft