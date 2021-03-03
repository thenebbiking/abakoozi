import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';

import { splitArrBy } from '../helpers/object';

const PageControl = React.forwardRef(
  ({ data, paginateBy = 10, onPageChange }, ref) => {
    const navigationButtonSize = 30;
    const [currentPage, setCurrentPage] = useState(0);
    const [paginatedStaff, setPaginatedStaff] = useState([[]]);

    const isNextVisible = useMemo(
      () => currentPage < paginatedStaff.length - 1,
      [currentPage, paginatedStaff]
    );
    const isPrevVisible = useMemo(() => currentPage > 0, [currentPage]);

    useEffect(() => void setPaginatedStaff(splitArrBy(data, paginateBy)), [
      data,
      paginateBy,
    ]);
    useEffect(() => {
      if (paginatedStaff.length) {
        onPageChange(paginatedStaff[currentPage]);
      }
    }, [currentPage, paginatedStaff, onPageChange]);

    const onPaginationChange = useCallback(
      (clickedButton) => {
        const isNextClicked = clickedButton === 'next';
        const stepValue = isNextClicked ? 1 : -1;
        const newPage = currentPage + stepValue;

        if (paginatedStaff[newPage]) {
          setCurrentPage(newPage);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      [currentPage, paginatedStaff]
    );

    return (
      <div className='pag-ctrl-wrapper'>
        <div className={`pag-ctrl-container`} style={{ userSelect: 'none' }}>
          {/* Previous page */}
          {isPrevVisible && (
            <span className={`pag-ctrl-prev-btn pag-ctrl-btn `}>
              <div onClick={onPaginationChange.bind(null, 'prev')}>
                <CgChevronLeft size={navigationButtonSize} />
              </div>
            </span>
          )}

          {/* Current Page */}
          <span className={`pag-ctrl-current-page pag-ctrl-pg-no `}>
            {currentPage + 1} / {paginatedStaff.length}
          </span>

          {/* Next page */}
          {isNextVisible && (
            <span
              className={`pag-ctrl-next-btn pag-ctrl-btn `}
              onClick={onPaginationChange.bind(null, 'next')}
            >
              <CgChevronRight size={navigationButtonSize} />
            </span>
          )}
        </div>
      </div>
    );
  }
);
PageControl.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  paginateBy: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default PageControl;
