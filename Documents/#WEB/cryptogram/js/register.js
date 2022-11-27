let password =document.querySelector('#password')
let cpassword = document.querySelector('#cpassword')
let Form = document.querySelector('#Form')


Form.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert("boom");
    if (cpassword.value === password.value ){
        cpassword.setAttribute("title", "this password does not match") 
        console.log("fordt")
    }else( console.log("boom"))
    

})