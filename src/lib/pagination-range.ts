import _ from "lodash";

interface IPaginationRange {
  totalPage: number;
  page: number;
  siblings: number;
}
// const paginationRange = (totalPage, page, limit, siblings) => {
export const paginationRange = ({ totalPage, page, siblings }: IPaginationRange) => {
  // Determine the maximum number of page numbers to show
  const totalPageNoInArray = 7 + siblings;

  // If the total number of pages is less than or equal to what can fit in the array, return all pages
  if (totalPageNoInArray >= totalPage) {
    return _.range(1, totalPage + 1);
  }

  // Calculate the left and right siblings' indexes
  const leftSiblingsIndex = Math.max(page - siblings, 1);
  const rightSiblingsIndex = Math.min(page + siblings, totalPage);

  // Determine whether to show ellipses on the left and right sides
  const showLeftDots = leftSiblingsIndex > 2;
  const showRightDots = rightSiblingsIndex < totalPage - 2;

  // If no left dots are needed but right dots are, return the appropriate range
  if (!showLeftDots && showRightDots) {
    const leftRange = _.range(1, 3 + 2 * siblings);
    return [...leftRange, "...", totalPage];
  }

  // If no right dots are needed but left dots are, return the appropriate range
  if (showLeftDots && !showRightDots) {
    const rightRange = _.range(totalPage - (3 + 2 * siblings) + 1, totalPage + 1);
    return [1, "...", ...rightRange];
  }

  // If both dots are needed, return the range with both ellipses
  if (showLeftDots && showRightDots) {
    const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [1, "...", ...middleRange, "...", totalPage];
  }

  // Default to returning the full range if no special cases are triggered
  return _.range(1, totalPage + 1);
};

export default paginationRange;
