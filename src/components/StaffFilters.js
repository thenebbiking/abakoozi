import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';

import { filterArr } from '../helpers/object';

const FILTER_OFFICE_OPTIONS = [
  'All Staff',
  'Borlänge',
  'Ljubljana',
  'Lund',
  'Helsingborg',
  'Stockholm',
];

const StaffFilters = React.forwardRef(
  ({ data, onChange /**setFiltered**/ }, ref) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [filteredStaff, setFilteredStaff] = useState([]);

    useEffect(() => {
      setFilteredStaff(filterArr(data, selectedLocation));
      // if (filteredStaff.length === 0) {
      //   setFiltered(false);
      // } else {
      //   setFiltered(true);
      // }
    }, [data, selectedLocation, onChange]);

    const onFilterChange = useCallback(
      ({ target: { value } }) => {
        if (value === 'All Staff') {
          // setFiltered(false);
          setFilteredStaff(data);
          // setIsFilteredStaff(false);
        } else {
          setSelectedLocation(value);
          // setFiltered(true);
          // setIsFilteredStaff(true);
        }
      },
      [data]
    );

    useEffect(() => {
      if (filteredStaff.length) {
        onChange(filteredStaff);
      }
    }, [filteredStaff, onChange]);

    return (
      <div className='location-filter'>
        <label> Choose location: </label>
        <select id='select-office' onChange={onFilterChange}>
          {FILTER_OFFICE_OPTIONS.map((option) => {
            return (
              <option key={option} value={`${option}`}>{`${option}`}</option>
            );
          })}
        </select>
        <label> {data.length}</label>
      </div>
    );
  }
);
StaffFilters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StaffFilters;
