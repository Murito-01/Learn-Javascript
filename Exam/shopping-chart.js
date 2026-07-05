const products = ['Apel', 'Mangga', 'Jeruk', 'Anggur', 'Nanas'];
const prices = [5000, 4000, 3000, 15000, 20000];

const productList = products.map((item, index) => {
  return {
    name: item,
    price: prices[index]
  };
});

let item = '';
for (let i = 0; i < productList.length; i++) {
  item += `
    <div>
      ${productList[i].name} - Rp.${productList[i].price}
      <button class="button-add">+ Add</button>
    </div>
  `;
}

document.querySelector('.js-product-list').innerHTML = item;