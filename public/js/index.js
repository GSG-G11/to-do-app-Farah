const info =document.querySelector('.info')
const btn=document.querySelector('#btn')
const goToHome=(id)=>{
localStorage.setItem('userId',id)
window.location.href="/home"
}
btn.addEventListener('click',(e)=>{
    let value = e.target.parentElement.name.value;
    postData({value}, "POST", '/user').then(data => goToHome((data[0].id)))

})
info.addEventListener('click', (e) => {
    e.preventDefault();
})