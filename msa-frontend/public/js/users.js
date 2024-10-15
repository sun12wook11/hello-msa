// 페이지 로드 시 자동으로 실행
window.addEventListener('load', async () => {
    try {
        const users = await getUserList();
        displayUserList(users);
    } catch (e) {
        console.log(e);
        alert('회원 목록 조회 실패!');
    }
});

// 회원 데이터 가져오기
const getUserList = async () => {
    let url = 'http://127.0.0.1:8000/users';
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('회원 목록 조회 실패~~!!');
    }
};

// 가져온 회원 데이터 표시하기
const displayUserList = (users) => {
    const userlist = document.querySelector('#user-list');

    let html = '<ul>';
    for (const user of users) {
        html += `<li>
            회원아이디 : ${user.userid},
            회원이름 : ${user.name},
            회원가입일 : ${user.regdate}
        </li>`; // </li>가 한 번만 닫히도록 수정
    }
    html += '</ul>';

    userlist.innerHTML = html;
};
