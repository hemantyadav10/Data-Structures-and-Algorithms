/*
  Problem: Best Time to Buy and Sell Stock

  You are given an array `prices` where `prices[i]` represents the stock price on the `i`th day.

  Your task is to find the maximum profit you can achieve by buying one stock and selling one stock later.

  - You cannot sell a stock before buying it.
  - If no profit can be made, return `0`.

  Example 1:
  Input: [7, 1, 5, 3, 6, 4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.

  Example 2:
  Input: [7, 6, 4, 3, 1]
  Output: 0
  Explanation: No transactions can be done since prices are always decreasing.
*/


/** Finds the maximum profit from buying and selling a stock once using a brute-force approach */
function maxProfit(prices) {
  let highestProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > highestProfit) {
        highestProfit = prices[j] - prices[i]
      }
    }
  }
  return highestProfit
}

const stockPrices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(stockPrices))

/** Finds the maximum profit efficiently by tracking the minimum price and maximum profit */
const maxProfitOptimized  = (prices) => {
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]

    minPrice = Math.min(minPrice, currentPrice) // Update the lowest price so far
    const potentialProfit = currentPrice - minPrice // Calculate possible profit

    maxProfit = Math.max(maxProfit, potentialProfit) // Update max profit if higher
  }
  return maxProfit
}

const maximumProfit = maxProfit(stockPrices)
console.log(maximumProfit)
