import './css/main.scss';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { getTretton37Staff } from './actions/staffActions';

const App = () => {
  const dispatch = useDispatch();

  const returnedStaff = useSelector((state) => state.staffList.staff);

  useEffect(() => {
    dispatch(getTretton37Staff());
  }, [dispatch]);

  return (
    <div className='container'>
      <div style={{ position: 'sticky', top: 0 }}>
        <header>
          <p>_the fellowship of the tretton37</p>
        </header>
      </div>
      <div className='filters'>Potential filter and tools area</div>
      <div className='main-section'>
        {returnedStaff?.map((staff) => {
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
        })}
        {/* 

        
        */}
      </div>
    </div>
  );
};

export default App;
