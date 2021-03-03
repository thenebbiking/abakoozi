import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTretton37Staff } from './actions/staffActions';

import Paginate from './components/Paginate';
import ProfileCard from './components/ProfileCard';
import StaffFilters from './components/StaffFilters';
import SearchStaff from './components/SearchStaff';

import paginate from './reducers/utils';

import './css/main.scss';

const App = () => {
  const dispatch = useDispatch();

  const returnedStaff = useSelector((state) => state.staffList.staff);
  const pagination = useSelector((state) => state.staffList.paginateItems);

  // Current staff
  const [staff, setStaff] = useState([]);
  const [paginatedStaff, setPaginatedStaff] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to change page to the next page
  const changePage = (newPage) => {
    const pgIndex = newPage - 1;
    setStaff(setPaginatedStaff[pgIndex]);
  };

  const handleFilter = (e) => {
    const filteredStaff = staff.filter((s) => s.office === e.target.value);

    setStaff(filteredStaff);
  };

  const handlePaginate = (staffList) => {
    // Paginate?
    const orderedInPages = paginate(staffList, pagination);
    setPaginatedStaff(orderedInPages);
    setStaff(orderedInPages[0]);
  };

  useEffect(() => {
    dispatch(getTretton37Staff());
  }, [dispatch]);

  useEffect(() => {
    handlePaginate(returnedStaff);
  }, [returnedStaff]);

  return (
    <div className='container'>
      <div style={{ position: 'sticky', top: 0 }}>
        <header>
          <p>_the fellowship of the tretton37</p>
        </header>
      </div>
      <div className='filters'>
        <StaffFilters onChange={handleFilter} />
        <SearchStaff />
      </div>
      <div className='main-section'>
        {staff?.map((s) => {
          return <ProfileCard staff={s} />;
        })}
      </div>
      <div>
        <Paginate
          noOfPages={paginatedStaff.length}
          currentPage={currentPage}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export default App;
