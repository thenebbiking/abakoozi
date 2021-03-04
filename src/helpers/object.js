export const splitArrBy = (arr = [], by = 2, mapper) =>
  Array.from({ length: Math.ceil(arr.length / by) }, (_, i) => {
    const val = arr.slice(i * by, (i + 1) * by);

    return mapper?.(val) ?? val;
  });

export const filterArr = (arr = [], location = '') => {
  return arr.filter((staff) => staff.office === location);
};

export const sortArr = (arr = [], sortKey = '', sortOrder = '') => {
  console.log(sortKey);
  return arr.concat().sort((a, b) => {
    if (sortKey === undefined || sortKey === '') {
      return '';
    } else {
      // console.log(sortKey);
      // console.log(a[sortKey]);
      console.log(a[sortKey].localeCompare(b[sortKey]));

      return '';
    }
    // return a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0;
  });
};
