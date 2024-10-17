window.addEventListener('DOMContentLoaded', async () => {
    let idx = location.href.lastIndexOf('/');
    let mno = location.href.substring(idx + 1);

    try {
        const user = await getUserOne(mno);
        displayUserOne(user);
    } catch (e) {
        console.log(e);
        alert('회원 상세 정보 조회 실패!');
    }
});


const getUserOne = async (mno) => {
    let url = `http://127.0.0.1:8000/user/${mno}`;
    const res = await fetch(url);
    if (res.status === 404) {
        location.href = '/notfound'
    } else if (res.ok){
        data = await res.json();
        return data;
    } else {
        throw new Error('유저 상세 정보 fetch 오류~~!!'); // 오류 메시지 변경
    }
}

// 가져온 회원 데이터 표시하기
const displayUserOne = (user) => {
    const userone = document.querySelector('#userone');
    console.log(user);

    let html = '<ul>';
    html += `<li>
    회원번호 : ${user.mno},
    회원아이디 : ${user.userid},
    회원이름 : ${user.name},
    회원이메일 : ${user.email},
    회원가입일 : ${user.regdate}
    
    </li>`
    html += '</ul>';

    userone.innerHTML = html;
};
