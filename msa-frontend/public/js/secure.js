// 페이지 완전 로드후 코드 실행
document.addEventListener('DOMContentLoaded', ()=>{
   const token = sessionStorage.getItem('token');
   if (!token) {
       alert('로그인하셈');
       location.href = '/';
   }
});

