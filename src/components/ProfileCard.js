import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const ProfileCard = ({ staff }) => {
  return (
    <div className='card'>
      <div className='profile-image'>
        <img src={staff.imagePortraitUrl} alt={staff.name} />
      </div>
      <div className='profile-details'>
        <div style={{ alignSelf: 'center' }}>
          <div className='profile-user-name'>{staff.name}</div>
          <div className='profile-user-office'>{staff.office}</div>
        </div>

        <div style={{ alignSelf: 'center' }}>
          <span>
            <FaLinkedin size={20} />
          </span>
          <span>
            <FaGithubSquare />
          </span>
          <span>
            <FaTwitterSquare />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
