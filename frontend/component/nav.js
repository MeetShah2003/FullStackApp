const navbar = () => {
    return `
    <header>
        <div class="row justify-between">
            <div class="logo"><a href="#">E-COMMERCE</a></div>
            <nav class="navigation">
                <ul class="row">
                    <li><a href="./product.html" id="home">Home</a></li>
                    <li><a href="./signup.html" id="signup">Signup</a></li>
                    <li><a href="./login.html" id="login">Login</a></li>
                    <li><a href="./signup.html" id="username">username</a></li>
                    <li><a href="http://127.0.0.1:8090/user/logout" id="logout">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `
};

// let user=document.cookie;

// if(user){
//     document.getElementById("home").style.display="block";
//     document.getElementById("signup").style.display="none";
//     document.getElementById("login").style.display="none";
//     document.getElementById("username").style.display="block";
//     document.getElementById("logout").style.display="block";
// }
// else{
//     document.getElementById("home").style.display="none";
//     document.getElementById("signup").style.display="block";
//     document.getElementById("login").style.display="block";
//     document.getElementById("username").style.display="none";
//     document.getElementById("logout").style.display="none";
// }

export { navbar };