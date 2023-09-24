import React from 'react';

const ProfileCard = ({ profile, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfileCard;
