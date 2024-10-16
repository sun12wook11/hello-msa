window.addEventListener('DOMContentLoaded', async () => {
    let idx = location.href.lastIndexOf('/');
    let pno = location.href.substring(idx + 1); // 'mno' -> 'pno'

    try {
        const product = await getProductOne(pno); // 'user' -> 'product'
        displayProductOne(product); // 'displayUserOne' -> 'displayProductOne'
    } catch (e) {
        console.log(e);
        alert('상품 상세 정보 조회 실패!'); // 알림 메시지 변경
    }
});

const getProductOne = async (pno) => { // 'getUserOne' -> 'getProductOne'
    let url = `http://127.0.0.1:8050/product/${pno}`; // 경로 수정
    const res = await fetch(url);
    if (res.status === 404) {
        location.href = '/notfound'
    } else if (res.ok){
        data = await res.json();
        return data;
    } else {
        throw new Error('상품 상세 정보 fetch 오류~~!!'); // 오류 메시지 변경
    }
}

// 가져온 상품 데이터 표시하기
const displayProductOne = (product) => { // 'displayUserOne' -> 'displayProductOne'
    const productone = document.querySelector('#productone'); // 'userone' -> 'productone'
    console.log(product);

    let html = '<ul>';
    html += `<li>
    상품 번호 : ${product.pno}, 
    상품 이름 : ${product.name},
    상품 가격 : ${product.price}
    상품 설명 : ${product.description}, 
    생성일 : ${product.regdate} 
    </li>`
    html += '</ul>';

    productone.innerHTML = html; // 'userone' -> 'productone'
};
