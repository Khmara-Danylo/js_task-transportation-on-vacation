/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const countDays = days * 40;

  if (days < 3) {
    return countDays;
  }

  if (days >= 3 && days < 7) {
    return countDays - 20;
  }

  if (days >= 7) {
    return countDays - 50;
  }
}

module.exports = calculateRentalCost;
