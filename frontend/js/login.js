document.getElementById("login").addEventListener("click",(e)=>{
    e.preventDefault();
    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    };

    fetch("http://127.0.0.1:8090/user/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    });
    window.location.href="product.html";
});