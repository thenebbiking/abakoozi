import './css/main.scss';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const App = () => {
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
        {tretton37Staff.map((staff) => {
          return (
            <div className='card'>
              <div className='profile-image'>Image</div>
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
