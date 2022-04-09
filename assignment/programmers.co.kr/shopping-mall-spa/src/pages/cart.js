import { useRouter } from '../lib/router.js';
import { getCartItem, removeCartItem } from '../storage.js';
import { moneyFormat } from '../utils.js';

/**
 * @typedef {import('../types').ProductsDetail} ProductsDetail
 */

export async function Cart() {
    const router = useRouter();

    const items = getCartItem();
    const state = [];
    
    for (const item of items) {
        const response = await fetch('/local-dataset/products/' + item.productId + '.json');
        /** @type {ProductsDetail} */
        const data = await response.json();

        const { name, imageUrl } = data
        const [ option ] = data.productOptions.filter(option => option.id === item.optionId)
        
        state.push({
            name,
            imageUrl,
            optionName: option.name,
            quantity: item.quantity,
            price: (data.price + option.price),
            totalPrice: (data.price + option.price) * item.quantity,
        })
    }

    const totalPrice = state.reduce((acc, { totalPrice }) => {
        return acc += totalPrice;
    }, 0);

    return {
        initialRender() {
            return `
                <div class="CartPage">
                    <h1>장바구니</h1>
                    <div class="Cart">
                        <ul>
                            ${state.map(item => (`
                                <li class="Cart__item">
                                    <img src="${item.imageUrl}">
                                    <div class="Cart__itemDesription">
                                        <div>${item.name} ${item.optionName} ${moneyFormat(item.price)}원 ${item.quantity}개</div>
                                        <div>${moneyFormat(item.totalPrice)}원</div>
                                    </div>
                                </li>
                            `)).join('')}
                        </ul>
                        <div class="Cart__totalPrice">
                            총 상품가격 ${moneyFormat(totalPrice)}원
                        </div>
                        <button class="OrderButton">주문하기</button>
                    </div>
                </div>
            `
        },
        addEventListener() {
            document.querySelector('.OrderButton').addEventListener('click', () => {
                alert('주문되었습니다');
                removeCartItem();
                router.push('/');
            })
        }
    }
}