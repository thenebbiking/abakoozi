import React from 'react';

import { ReactComponent as Ninja } from '../assets/svgs/ninja.svg';

import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const ProfileCard = ({ staff }) => {
  return (
    <div className='card'>
      <div className='profile-image'>
        {staff.imagePortraitUrl ? (
          <img src={staff.imagePortraitUrl} alt={staff.name} />
        ) : (
          <Ninja />
        )}
      </div>
      <div className='profile-details'>
        <div style={{ alignSelf: 'center' }}>
          <div className='profile-user-name'>{staff.name}</div>
          <div className='profile-user-office'>{staff.office}</div>
        </div>

        <div style={{ alignSelf: 'center' }}>
          <span>
            <FaLinkedin size={18} color='#80c565' />
          </span>
          <span>
            <FaGithubSquare />
          </span>
          <span>
            <FaTwitterSquare color='#12609B' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
