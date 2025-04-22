/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentalCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  const countDays = days * dayRentalCost;

  if (days < 3) {
    return countDays;
  }

  if (days >= 3 && days < 7) {
    return countDays - smallDiscount;
  }

  if (days >= 7) {
    return countDays - bigDiscount;
  }
}

module.exports = calculateRentalCost;
