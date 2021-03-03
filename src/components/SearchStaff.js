import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchStaff = ({ onSearch }) => {
  return (
    <div className='search-container'>
      {/* <SearchIcon /> */}
      <FaSearch />
      <input
        type='text'
        onChange={onSearch}
        placeholder={'Type to search our awesome ninjas'}
        className='search-input'
      />
    </div>
  );
};

export default SearchStaff;
