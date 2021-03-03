import './css/main.scss';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import axios from 'axios';

import { useState, useEffect } from 'react';

const DATA_URL = 'https://api.tretton37.com/ninjas';

const App = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(DATA_URL);
      if (data.status === 200) {
        setData(data.data);
        setLoading(false);
      } else {
        setErrorMessage(
          'Something happened while fetching data. Pelease try again later'
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  // const data = await
  const tretton37Staff = [
    {
      name: 'Brian Ochan',
      office: 'Lund',
      linkedInProfile: 'https://linkedIn.com',
      githubProfile: 'https://linkedIn.com',
      twitterProfile: 'https://linkedIn.com',
    },
    {
      name: 'Brian Ochan',
      office: 'Lund',
      linkedInProfile: 'https://linkedIn.com',
      githubProfile: 'https://linkedIn.com',
      twitterProfile: 'https://linkedIn.com',
    },
    {
      name: 'Brian Ochan',
      office: 'Lund',
      linkedInProfile: 'https://linkedIn.com',
      githubProfile: 'https://linkedIn.com',
      twitterProfile: 'https://linkedIn.com',
    },
    {
      name: 'Brian Ochan',
      office: 'Lund',
      linkedInProfile: 'https://linkedIn.com',
      githubProfile: 'https://linkedIn.com',
      twitterProfile: 'https://linkedIn.com',
    },
    {
      name: 'Brian Ochan',
      office: 'Lund',
      linkedInProfile: 'https://linkedIn.com',
      githubProfile: 'https://linkedIn.com',
      twitterProfile: 'https://linkedIn.com',
    },
    {
      name: 'Brian Ochan',
      office: 'Lund',
      linkedInProfile: 'https://linkedIn.com',
      githubProfile: 'https://linkedIn.com',
      twitterProfile: 'https://linkedIn.com',
    },
  ];
  return (
    <div className='container'>
      <div style={{ position: 'sticky', top: 0 }}>
        <header>
          <p>_the fellowship of the tretton37</p>
        </header>
      </div>
      <div className='filters'>Potential filter and tools area</div>
      <div className='main-section'>
        {data?.map((staff) => {
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
