import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';

import { sortArr } from '../helpers/object';

const SORT_OPTIONS = ['All Staff', 'name', 'office'];

const StaffSortFilters = React.forwardRef(
  ({ data, onChange /**setSorted**/ }, ref) => {
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [sortedStaff, setSortedStaff] = useState([]);

    useEffect(() => {
      setSortedStaff(sortArr(data, selectedSortOption));
      // if (filteredStaff.length === 0) {
      //   setFiltered(false);
      // } else {
      //   setFiltered(true);
      // }
    }, [data, selectedSortOption, onChange]);

    const onSortChange = useCallback(
      ({ target: { value } }) => {
        if (value === 'All Staff') {
          //   setSorted(false);
          setSortedStaff(data);
          // setIsFilteredStaff(false);
        } else {
          setSelectedSortOption(value);

          //   setSelectedLocation(value);
          //   setFiltered(true);
          // setIsFilteredStaff(true);
        }
      },
      [data]
    );

    useEffect(() => {
      if (sortedStaff.length) {
        onChange(sortedStaff);
      }
    }, [sortedStaff, onChange]);

    return (
      <div className='location-filter'>
        <label> Sort: </label>
        <select id='select-office' onChange={onSortChange}>
          {SORT_OPTIONS.map((option) => {
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

StaffSortFilters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StaffSortFilters;
