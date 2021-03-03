/**
 * Function that receives one array, then sections it into smaller arrays within a
 * larger array that can then be delivered / viewed, one by one
 *
 * -Receives the large array [value1,...value100]
 * -Receives a pagination parameter, ie how many items from the mother
 *  array should each smaller array contain as noOfItemsPerPage
 * -Returns a new paginatedArray that contains smaller arrays
 *  each containing the number of items specified in noOfItemsPerPage, with the final array
 *  taking the balance e.g [[1,2,3],[1,2,3],[1,2,3],[1,2,3]]
 *
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default (parentArray, noOfItemsPerPage) => {
  let paginatedArray = [];
  let smallerArray = [];

  let i;
  for (i = 0; i < parentArray.length; i++) {
    smallerArray.push(parentArray[i]);
    if (smallerArray.length === noOfItemsPerPage) {
      if (smallerArray.length) {
        paginatedArray.push(smallerArray);
      }
      smallerArray = [];
    }
    if (i === parentArray.length - 1) {
      if (smallerArray.length) {
        paginatedArray.push(smallerArray);
      }
    }
  }

  return paginatedArray;
};
