export const categories = [
  {
    title: "men's clothing",
    link: 'mens-clothing',
  },
  {
    title: "women's clothing",
    link: 'womens-clothing',
  },
];

export const getCategoryColor = (category: string) => {
  if (category === "men's clothing") {
    return 'bg-category-men';
  }
  if (category === "women's clothing") {
    return 'bg-category-women';
  }
  if (category === 'electronics') {
    return 'bg-category-electronics';
  }
  if (category === 'jewelery') {
    return 'bg-category-jewelery';
  }
};
