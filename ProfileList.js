import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Profile List</h1>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
      {selectedProfile && (
        <div>
          <h2>Selected Profile</h2>
          <ProfileCard profile={selectedProfile} />
          {/* Include a Map component here to display the address */}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
