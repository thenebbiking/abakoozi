import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNinjas } from './actions/ninjasActions';

import PageControl from './components/Paginate';
import ProfileCard from './components/ProfileCard';
import NinjaFilters from './components/NinjaFilters';
import SearchStaff from './components/SearchStaff';

import './css/main.scss';

const App = () => {
  const dispatch = useDispatch();

  const allNinjas = useSelector((state) => state.ninjasList.allNinjas);
  const loading = useSelector((state) => state.ninjasList.loading);

  const [ninjas, setNinjas] = useState(allNinjas);
  const [filteredNinjas, setFilteredNinjas] = useState([]);

  const [filtered, setFiltered] = useState(false);

  const handleSearch = (e) => {
    const name = e.target.value;
    if (name === '') {
      setNinjas(allNinjas);
    } else {
      setNinjas(ninjas.filter((ninja) => ninja.name.includes(name)));
    }
  };

  useEffect(() => {
    dispatch(getNinjas());
  }, [dispatch]);

  return (
    <div className='container'>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#f1f1f1',
        }}
      >
        <header>
          <p>_the fellowship of the tretton37</p>
        </header>
        <div className='filters'>
          <NinjaFilters
            data={allNinjas}
            onFilter={setFilteredNinjas}
            setFiltered={setFiltered}
          />

          <SearchStaff onSearch={handleSearch} />
        </div>
      </div>

      {loading ? (
        'Loading...'
      ) : (
        <>
          <div className='main-section'>
            {ninjas.map((ninja) => (
              <ProfileCard staff={ninja} key={ninja.email} />
            ))}
          </div>
          {filtered ? (
            <PageControl data={filteredNinjas} onPageChange={setNinjas} />
          ) : (
            <PageControl data={allNinjas} onPageChange={setNinjas} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
