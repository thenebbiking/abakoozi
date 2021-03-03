import React from 'react';

const FILTER_OPTIONS = [
  'Borlänge',
  'Ljubljana',
  'Lund',
  'Helsingborg',
  'Stockholm',
];

const StaffFilters = ({ onChange }) => {
  return (
    <div className='location-filter'>
      <label> Choose location: </label>
      <select id='select-office' onChange={onChange}>
        {FILTER_OPTIONS.map((option) => {
          return (
            <option key={option} value={`${option}`}>{`${option}`}</option>
          );
        })}
      </select>
    </div>
  );
};

export default StaffFilters;
