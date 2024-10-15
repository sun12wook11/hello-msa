// 상품 등록 버튼 이벤트 처리
const regbtn = document.querySelector('#regbtn');
const productfrm = document.productform; // form의 name 속성에 맞추어 수정

// 비동기 처리 구현
regbtn.addEventListener('click', async (event) => {
    event.preventDefault(); // 폼 제출을 방지합니다.

    const formData = new FormData(productfrm);
    let jsondata = {};
    formData.forEach((val, key) => {
        jsondata[key] = val;
    });

    console.log(jsondata); // 변수 이름을 수정하여 일관성을 유지

    try {
        const res = await fetch('http://localhost:8050/product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsondata)
        });

        // 서버로의 응답 처리
        const data = await res.json();

        if (res.ok) {
            alert('상품 등록 성공: ' + JSON.stringify(data.product)); // 등록된 상품 정보 표시
        } else {
            alert(`상품 등록 실패: ${data.message || '알 수 없는 오류 발생'}`); // 오류 메시지 추가
            console.log(data.detail); // 오류의 세부 정보 출력
        }
    } catch (err) {
        alert(`상품 등록 실패: ${err.message || '알 수 없는 오류 발생'}`); // 예외 발생 시 메시지
        console.error(err); // 콘솔에 오류 정보 출력
    }
});
