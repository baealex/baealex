import { useRouter } from '../lib/router.js';
import { appendCartItem } from '../storage.js';
import { moneyFormat } from '../utils.js';

/**
 * @typedef {import('../types').ProductsDetail} ProductsDetail
 */

export async function Products(id) {
    const router = useRouter();

    const response = await fetch('/local-dataset/products/' + id + '.json');
    /** @type {ProductsDetail} */
    const data = await response.json();
    const state = [];

    return {
        initialRender() {
            return `
                <div class="ProductDetailPage">
                    <h1>${data.name} 상품 정보</h1>
                    <div class="ProductDetail">
                        <img src="${data.imageUrl}">
                        <div class="ProductDetail__info">
                            <h2>${data.name}</h2>
                            <div class="ProductDetail__price">10,000원~</div>
                            <select>
                                <option>선택하세요.</option>
                                ${data.productOptions.map(option => (`
                                    <option value="${option.id}" ${option.stock <= 0 ? ` disabled`: ``}>
                                        ${option.stock <= 0
                                            ? `(품절)`
                                            : ``}
                                        ${option.name}
                                        ${option.price > 0
                                            ? `(+${moneyFormat(option.price)})`
                                            : ``}
                                    </option>
                                `)).join('')}
                            </select>
                            <div class="ProductDetail__selectedOptions">
                            <h3>선택된 상품</h3>
                            <ul>
                            </ul>
                            <div class="ProductDetail__totalPrice">0원</div>
                            <button class="OrderButton">주문하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        addEventListener() {
            const $select = document.querySelector('select');
            const $list = document.querySelector('ul');
            const $totalPrice = document.querySelector('.ProductDetail__totalPrice');
            const $orderButton = document.querySelector('.OrderButton');

            function calcTotal() {
                const totalPrice = state.reduce((acc, { item, quantity }) => {
                    return acc += (data.price + item.price) * quantity;
                }, 0);
                $totalPrice.textContent = moneyFormat(totalPrice) + '원';
            }

            $select.addEventListener('change', (e) => {
                if (!e.target.value) {
                    return;
                }

                const [ item ] = data.productOptions
                    .filter(item => item.id == e.target.value);
                
                if (!item) {
                    return;
                }

                if (state.filter((_item) => _item.item.id === item.id).length > 0) {
                    return;
                }

                state.push({ item, quantity: 1 });
                calcTotal();

                $list.innerHTML = state.map(({ item, quantity }) => `
                    <li>
                        ${item.name}
                        ${moneyFormat(data.price + item.price)}원
                        <div>
                            <input type="number" min="0" max="${item.stock}" value="${quantity}">개
                        </div>
                    </li>
                `).join('');

                $list.querySelectorAll('input').forEach((input, idx) => {
                    input.addEventListener('input', (e) => {
                        if (Number(e.target.value) > Number(e.target.max)) {
                            e.target.value = e.target.max;
                        }

                        state[idx].quantity = e.target.value;
                        calcTotal();
                    });
                });
            });

            $orderButton.addEventListener('click', () => {
                state.forEach(({item, quantity}) => {
                    appendCartItem({
                        productId: data.id,
                        optionId: item.id,
                        quantity
                    });
                })
                router.push('/cart');
            });
        }
    }
}