export const splitArrBy = (arr = [], by = 2, mapper) =>
  Array.from({ length: Math.ceil(arr.length / by) }, (_, i) => {
    const val = arr.slice(i * by, (i + 1) * by);

    return mapper?.(val) ?? val;
  });
