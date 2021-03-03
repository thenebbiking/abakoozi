import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Ninja } from '../assets/svgs/ninja.svg';

import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const ProfileCard = ({ staff }) => {
  const [showDesc, setShowDesc] = useState(false);

  const description = useMemo(() => {
    const tempElm = document.createElement('div');
    tempElm.innerHTML = staff?.mainText ?? 'N/A';

    return tempElm.textContent.trim();
  }, [staff.mainText]);

  console.log(description);

  const onCardClick = useCallback(() => setShowDesc((x) => !x), []);
  return (
    <div className='card' onClick={onCardClick}>
      {!showDesc && (
        <div className='profile-image'>
          {staff.imagePortraitUrl ? (
            <img src={staff.imagePortraitUrl} alt={staff.name} />
          ) : (
            <Ninja />
          )}
        </div>
      )}
      {showDesc && <div className='profile-desc'>{description}</div>}
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

ProfileCard.propTypes = {
  staff: PropTypes.array.isRequired,
  paginateBy: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default ProfileCard;
