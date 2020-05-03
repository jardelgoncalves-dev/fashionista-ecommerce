export default (price = '') =>
  Number(price.split(' ').slice(1).join('').replace(',', '.'));
