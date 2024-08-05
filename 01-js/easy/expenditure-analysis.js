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

  const output = Array.from(newMap.values());
  console.log(output);
  return output;
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]);

module.exports = calculateTotalSpentByCategory;
