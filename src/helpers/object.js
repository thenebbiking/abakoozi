export const splitArrBy = (arr = [], by = 2) =>
  Array.from({ length: Math.ceil(arr.length / by) }, (_, i) => {
    const val = arr.slice(i * by, (i + 1) * by);

    return val;
  });

export const filterArr = (arr = [], location = '') => {
  return arr.filter((staff) => staff.office === location);
};
