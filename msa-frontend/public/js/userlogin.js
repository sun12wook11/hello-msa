let loginbtn = document.querySelector('#loginbtn');
const loginfrm = document.userform; // 폼 객체 참조

loginbtn.addEventListener('click', (event) => {
    event.preventDefault(); // 폼 자동 제출 방지

    const formData = new FormData(loginfrm);
    const userid = formData.get('userid');
    const password = formData.get('passwd'); // 비밀번호 필드 수정

    loginUser(userid, password);
});

const loginUser = (userid, password) => {
    const url = `http://127.0.0.1:8000/userlogin`;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true); // 비동기식으로 변경
    xhr.setRequestHeader('Content-Type', 'application/json');

    const body = JSON.stringify({
        userid: userid,
        passwd: password // 비밀번호 필드 수정
    });

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const token = response.access_token; // JWT 토큰 추출
            alert('로그인 성공!');

            // 토큰을 로컬 스토리지에 저장 (또는 다른 방법으로 처리)
            localStorage.setItem('access_token', token);

            // 이후 사용자 정보를 표시하는 함수 호출
            displayUserOne(response);
        } else if (xhr.status === 401) {
            alert('로그인 실패! 아이디 또는 비밀번호를 확인해주세요.');
        } else if (xhr.status === 422) {
            alert('잘못된 요청입니다. 입력값을 확인해주세요.');
        } else {
            alert('로그인 중 오류가 발생했습니다.');
        }
    };

    xhr.onerror = function () {
        alert('로그인 요청 실패!');
    };

    xhr.send(body); // 요청 전송
};
