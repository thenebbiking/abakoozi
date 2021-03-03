import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchStaff = ({}) => {
  return (
    <div className='search-container'>
      {/* <SearchIcon /> */}
      <FaSearch />
      <input
        type='text'
        placeholder={'Type to search our awesome ninjas'}
        className='search-input'
      />
    </div>
  );
};

export default SearchStaff;
