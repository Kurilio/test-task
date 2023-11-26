const food = [...new Array(100)].map((_, index) => ({
  id: index + 1,
  img: `example food ${index + 1}`,
  name: `food ${index + 1}`,
  description: `text description food ${index + 1}`,
  price: index + 1 + 100,
}));

const clothing = [...new Array(100)].map((_, index) => ({
  id: index + 200,
  img: `example clothing ${index + 1}`,
  name: `clothing ${index + 1}`,
  description: `text description clothing ${index + 1}`,
  price: index + 1 + 1000,
}));

const electronics = [...new Array(100)].map((_, index) => ({
  id: index + 400,
  img: `example electronics ${index + 1}`,
  name: `electronics ${index + 1}`,
  description: `text description electronics ${index + 1}`,
  price: index + 1 + 5000,
}));

export const Product = {
  food,
  clothing,
  electronics,
};
