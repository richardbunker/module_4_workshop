const { findEmployeeById, findSalesById } = require("./index.js");

test("Filtering employees by ID returns an array with 1 employee", () => {
  const actual = JSON.parse(
    '[{"id":1,"firstName":"John","lastName":"Smith","gender":"Male","age":23,"position":"Manager"}]'
  );
  const expected = findEmployeeById(1);
  expect(expected).toEqual(actual);
});

test("Filtering employees by non-existent ID returns an empty array", () => {
  const expected = findEmployeeById(23);
  expect(expected).toEqual([]);
});

test("Filtering sales by ID returns an array with sales data", () => {
  const actual = JSON.parse(
    `[{
        "staffId":2,
        "item":"USB Stick",
        "price":10.99,
        "date":"06-09-2022"
    }]`
  );
  const expected = findSalesById(2);
  console.log(expected);
  expect(expected).toEqual(actual);
});
