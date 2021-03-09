import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { filterArr } from '../helpers/object';

const NinjaFilters = ({ data, onFilter, setFiltered }) => {
  const allNinjas = useSelector((state) => state.ninjasList.allNinjas);

  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);

  const FILTER_OPTIONS = [
    'All ninjas',
    ...new Set(allNinjas.map((ninja) => ninja.office)),
  ].filter((office) => office !== null);

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
        {FILTER_OPTIONS?.map((option) => {
          return (
            <option key={option} value={`${option}`}>
              {option}
            </option>
          );
        })}
      </select>
      <label> {filteredStaff?.length}</label>
    </div>
  );
};
NinjaFilters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default NinjaFilters;
