/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (!transactions.length) return [];

  let newMap = new Map();
  newMap.set(transactions[0].category, {
    category: transactions[0].category,
    totalSpent: transactions[0].price,
  });

  for (let i = 1; i <= transactions.length - 1; i++) {
    const existingCategory = newMap.get(transactions[i].category);
    if (existingCategory) {
      newMap.set(existingCategory.category, {
        category: existingCategory.category,
        totalSpent: existingCategory.totalSpent + transactions[i].price,
      });
    } else {
      newMap.set(transactions[i].category, {
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }

  return Array.from(newMap.values());
}

module.exports = calculateTotalSpentByCategory;
