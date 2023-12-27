document.getElementById("signup").addEventListener("click",(e)=>{
    e.preventDefault();
    let newUser={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        role:document.getElementById("role").value
    };

    fetch("http://127.0.0.1:8090/user/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    console.log(token);
    document.cookie=`${res.token}`
    // .catch((err)=>console.log(err.message));
    window.location.href="product.html";
});