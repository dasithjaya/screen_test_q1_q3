const inputOrderList = [
  {
    amount: 10000,
    quantity: 10,
  },
  {
    amount: 4500,
    quantity: 2,
  },
  {
    amount: 3000,
    quantity: 4,
  },
  {
    amount: 5500,
    quantity: 1,
  },
  {
    amount: 7500,
    quantity: 2,
  },
];

const ordering = (orderList) => {
  // Add total values for existing objects
  const withTotalValue = orderList.map((order) => ({
    ...order,
    total: order.amount * order.quantity,
  }));

  // Order objects by total value
  const orderedByTotal = withTotalValue.sort(
    (el1, el2) => el1.total - el2.total
  );

  return orderedByTotal;
};

const res = ordering(inputOrderList);
console.log(res);
