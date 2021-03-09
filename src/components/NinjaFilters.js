import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';

import { filterArr } from '../helpers/object';

const FILTER_OFFICE_OPTIONS = [
  'All ninjas',
  'Borlänge',
  'Ljubljana',
  'Lund',
  'Helsingborg',
  'Stockholm',
];

const NinjaFilters = React.forwardRef(
  ({ data, onFilter, setFiltered }, ref) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [filteredStaff, setFilteredStaff] = useState([]);

    useEffect(() => {
      if (selectedLocation === '' || selectedLocation === 'All ninjas') {
        setFilteredStaff(data);
      } else {
        setFilteredStaff(filterArr(data, selectedLocation));
      }
    }, [data, selectedLocation, onFilter]);

    const onFilterChange = useCallback(
      ({ target: { value } }) => {
        if (value === 'All ninjas') {
          setFilteredStaff(data);
          setFiltered(false);
        } else {
          setSelectedLocation(value);
          setFilteredStaff(filterArr(data, selectedLocation));
          setFiltered(true);
        }
      },
      [data, setFiltered, selectedLocation]
    );

    useEffect(() => {
      if (filteredStaff.length) {
        onFilter(filteredStaff);
      }
    }, [filteredStaff, onFilter]);

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
        <label> {filteredStaff?.length}</label>
      </div>
    );
  }
);
NinjaFilters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default NinjaFilters;
