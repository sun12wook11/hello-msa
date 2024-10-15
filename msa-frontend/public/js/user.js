// 회원가입 버튼 이벤트 처리
const regbtn = document.querySelector('#regbtn');
const userfrm = document.userform; // form의 name 속성에 맞추어 수정

// 비동기 처리 구현
regbtn.addEventListener('click', async (event) => {
    event.preventDefault(); // 폼 제출을 방지합니다.

    const formData = new FormData(userfrm);
    console.log(formData);

    let jsondata = {};
    formData.forEach((val, key) => {
        jsondata[key] = val;
    });

    console.log(jsondata); // 변수 이름을 수정하여 일관성을 유지

    try {
        const response = await fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userid: jsondata.userid,  // 필드에 맞춰 전달
                name: jsondata.name,
                email: jsondata.email,
                passwd: jsondata.passwd,
            }), // 생성한 JSON 데이터를 사용
        });

        if (!response.ok) {
            const errorData = await response.json(); // 에러 메시지 확인
            console.error('Error response:', errorData);
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // 서버에서 반환한 데이터 출력
    } catch (error) {
        console.error('Error:', error);
    }
});
