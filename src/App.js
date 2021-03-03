import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTretton37Staff } from './actions/staffActions';

import PageControl from './components/Paginate';
import ProfileCard from './components/ProfileCard';
import StaffFilters from './components/StaffFilters';
import SearchStaff from './components/SearchStaff';

import './css/main.scss';

const App = () => {
  const dispatch = useDispatch();

  const ninjas = useSelector((state) => state.staffList.staff);
  const loading = useSelector((state) => state.staffList.loading);

  // Current staff
  const [staff, setStaff] = useState(ninjas);

  const handleSearch = (e) => {
    const name = e.target.value;

    if (!!name) {
      setStaff(ninjas);
    }
    const names = ninjas.map((s) => s.name);

    return names.includes(name)
      ? setStaff(ninjas?.filter((s) => s.name === name))
      : 'No match was found';
  };

  useEffect(() => {
    dispatch(getTretton37Staff());
  }, [dispatch]);

  // useEffect(() => {
  //   handlePaginate(returnedStaff);
  // }, [returnedStaff]);

  return (
    <div className='container'>
      <div style={{ position: 'sticky', top: 0 }}>
        <header>
          <p>_the fellowship of the tretton37</p>
        </header>
      </div>
      <div className='filters'>
        {/* <StaffFilters onChange={handleFilter} /> */}
        <SearchStaff onSearch={handleSearch} />
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div className='main-section'>
            {staff.map((s) => (
              <ProfileCard staff={s} key={Math.random()} />
            ))}
          </div>
          <PageControl data={ninjas} onPageChange={setStaff} />
        </>
      )}
    </div>
  );
};

export default App;
