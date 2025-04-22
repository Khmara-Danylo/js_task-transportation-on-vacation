/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentalCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallVocation = 3;
  const bigVocation = 7;

  const countDays = days * dayRentalCost;

  if (days < smallVocation) {
    return countDays;
  }

  if (days >= smallVocation && days < bigVocation) {
    return countDays - smallDiscount;
  }

  if (days >= bigVocation) {
    return countDays - bigDiscount;
  }
}

module.exports = calculateRentalCost;
