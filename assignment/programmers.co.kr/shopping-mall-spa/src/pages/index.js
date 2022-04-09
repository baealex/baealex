import { useRouter } from '../lib/router.js';
import { moneyFormat } from '../utils.js';

export async function Home() {
    const response = await fetch('/local-dataset/products.json');
    const data = await response.json();
    
    return {
        initialRender() {
            return `
                <div class="ProductListPage">
                    <h1>상품목록</h1>
                    <ul>
                        ${data.map(item => (`
                            <li data-id="${item.id}" class="Product">
                                <img src="${item.imageUrl}">
                                <div class="Product__info">
                                    <div>${item.name}</div>
                                    <div>${moneyFormat(item.price)}원~</div>
                                </div>
                            </li>
                        `)).join('')}
                    </ul>
                </div>
            `;
        },
        addEventListener() {
            document.querySelectorAll('li').forEach(li => li.addEventListener('click', (e) => {
                const id = li.dataset.id;
                const router = useRouter();
                router.push('/products/' + id);
            }));
        }
    }
}