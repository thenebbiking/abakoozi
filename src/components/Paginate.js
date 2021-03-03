import React, { useState, useEffect } from 'react';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';
/**
 * Helps control the changing of pages
 *
 * -Must be provided with the number of pages available ( numberOfPages={number} )
 * -Must be provided with an external function that changes the current page
 * ( changePage={functionThatReceivesNumber} )
 */

const PageControl = ({ noOfPages, changePage }) => {
  const navigationButtonSize = 30;
  const [numberOfPages, setNumberOfPages] = useState(noOfPages);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setNumberOfPages(
      noOfPages === 0 ? 1 : noOfPages === undefined ? 1 : noOfPages
    );
    setCurrentPage(1);
  }, [noOfPages]);

  const goToNewPage = (nextOrPrev) => {
    let newPageToGoTo;
    if (nextOrPrev === 'next') {
      if (currentPage === numberOfPages) {
        return;
      } else {
        newPageToGoTo = currentPage + 1;
      }
    }

    if (nextOrPrev === 'prev') {
      if (currentPage === 1) {
        return;
      } else {
        newPageToGoTo = currentPage - 1;
      }
    }

    if (changePage) {
      changePage(newPageToGoTo);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(newPageToGoTo);
  };

  return (
    <div className='pag-ctrl-wrapper'>
      <div className={`pag-ctrl-container`}>
        {/* Prev Button */}
        <span className={`pag-ctrl-prev-btn pag-ctrl-btn `}>
          <div
            onclick={() => {
              goToNewPage('prev');
            }}
          >
            <CgChevronLeft
              //   color={colors.actionRed}
              size={navigationButtonSize}
            />
          </div>
        </span>

        {/* Previous page */}
        {currentPage > 1 ? (
          <span
            className='pag-ctrl-prev-page pag-ctrl-pg-no'
            onClick={() => {
              goToNewPage('prev');
            }}
          >
            {currentPage > 1 ? currentPage - 1 : ''}
          </span>
        ) : (
          ''
        )}

        {/* Current Page */}
        <span className={`pag-ctrl-current-page pag-ctrl-pg-no `}>
          {currentPage}
        </span>

        {/* Next page */}
        {currentPage !== numberOfPages ? (
          <span
            className='pag-ctrl-next-page pag-ctrl-pg-no'
            onClick={() => {
              goToNewPage('next');
            }}
          >
            {currentPage + 1}
          </span>
        ) : (
          ''
        )}

        {/* Next Button */}

        <span className={`pag-ctrl-next-btn pag-ctrl-btn `}>
          <div
            onClick={() => {
              goToNewPage('next');
            }}
          >
            <CgChevronRight
              //   color={colors.actionRed}
              size={navigationButtonSize}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default PageControl;
