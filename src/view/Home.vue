<template>
    <article>
        <div class="container" :class="{'sign-up-active' : signUp}">
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-left">
                    <h2 class="content">Lets get you started</h2>
                    <p>Be part of our awesome</p>
                    <p>team and have fun with us</p>
                </div>
                <div class="overlay-right">
                    <h2 class="content">Hello There</h2>
                    <p>Don't have an account? </p> 
                    <p> with us today!</p>
                </div>
            </div>
        </div>
        <form class="sign-up" action="#">
            <h2>Create Account</h2>
            <label for="Email">
                <span>Email</span>
                <input type="email" placeholder="pigeon@netsoop.com" required v-model="emailSignUp" />
            </label>
            <label for="Password">
                <span>Password</span>
                <input type="password" placeholder="******" minlength="6" required v-model="passwordSignUp"/>
            </label>
            <label for="Password">
                <span>Confirm Password</span>
                <input type="password" placeholder="******" minlength="6" required v-model="confirmPasswordSignUp" />
            </label>
            <div class="create">
                <button class="btn-sign-up" @click="signUpAlert">Create</button>
            </div>
            <div class="position-sign-in">
                <div class="invert" id="signUp" @click="signUp = !signUp">Already have an account?</div>
            </div>
        </form>
        <form class="sign-in" action="#">
            <h2>Sign In</h2>
            <label for="Email">
                <span>Email</span>
                <input type="email" placeholder="pigeon@netsoop.com" required v-model="emailSignIn" />
            </label>
            <label for="Password">
                <span>Password</span>
                <input type="password" placeholder="*****" minlength="6" required v-model="passwordSignIn" />
            </label>
            <div class="login">
                <button class="btn-sign-in" @click="signInAlert" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Login</button>
            </div>
            <div class="position-sign-up">
                <div class="invert" id="signIn" @click="signUp = !signUp">Create Acoount</div>
            </div>
        </form>
        </div>
</article>
</template>

<script>
  export default {
    data: () => {
      return {
        signUp: false,
        emailSignIn: '',
        passwordSignIn: '',
        emailSignUp: '',
        passwordSignUp: '',
        confirmPasswordSignUp: '',
      }
    },
    methods:{
        signUpAlert(){
            if (this.emailSignUp && this.passwordSignUp && this.confirmPasswordSignUp){
                if(this.passwordSignUp.length >= 6 && this.confirmPasswordSignUp.length >= 6){
                    if(this.passwordSignUp === this.confirmPasswordSignUp){
                        alert("Register!");
                    }
                }
            }
        },
        signInAlert(){
            if (this.emailSignIn && this.passwordSignIn){
                if (this.passwordSignIn.length >= 6){
                    alert("Login!");
                }
            }
        }
    }
  }
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fefefe;
}
#app {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    color: #222;
    background-color: #fefefe;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
article{
    position: absolute;
    top: 15%;
    left: 15%;
}
.container {
    position: relative;
    width: 905px;
    height: 520px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0);
    background: #ffffff;
}
.container .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    z-index: 100;
}
.container .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #fae2dc;
    color: #202f3f;
    transform: translateX(0);
    transition: transform .5s ease-in-out;
}
.container .overlay-left {
    position: absolute;
    top: 25%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX(-20%);
    transition: transform .5s ease-in-out;
    font-family: 'Nunito', sans-serif;
}
.container .overlay-right {
    position: absolute;
    top: 25%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX(0);
    transition: transform .5s ease-in-out;
    right: 0;
    font-family: 'Nunito', sans-serif;
}
h2 {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    margin-bottom: 20px;
    font-size: 38px;
    text-align: center;
}
h2.content {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    margin-bottom: 20px;
    font-size: 48px;
    text-align: center;
}
p {
    margin: 0px;
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
}
span{
    font-size: 19px;
    font-family: 'Nunito', sans-serif;
}
a {
    color: #222;
    margin: 15px 0;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    text-decoration: underline;
    cursor: pointer;
}

div.invert{
    color: #222;
    margin: 15px 0;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    text-decoration: underline;
    cursor: pointer;
}

button {
    border-radius: 20px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    transition: transform .1s ease-in;
    border: unset;
}
button.btn-sign-in{
    width: 97px;
    height: 44px;
    text-transform: capitalize;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    background: #e2bcb0;
}
button.btn-sign-up{
    width: 110px;
    height: 45px;
    text-transform: capitalize;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    background: #374250;
}
button:active {
    transform: scale(0.9);
}
button:focus {
    outline: none;
}
.position-sign-up{
    position: absolute;
    top: 88%;
    left: 62%;
}
.position-sign-in{
    position: absolute;
    top: 88%;
    left: 45%;
}
.login{
    margin-top: 0px;
}
.create{
    margin-top: 16px;
}
form {
    position: absolute;
    top: 15px;
    display: flex;
    align-items: left;
    justify-content: space-around;
    flex-direction: column;
    padding: 25px 60px 125px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: left;
    background: #ffffff;
    transition: all .5s ease-in-out;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
form div {
    font-size: 1rem;
}
form input {
    width: 350px;
    height: 30px;
    background-color: #fefefe;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
    overflow: hidden;
    font-size: 19px;
    font-family: 'Nunito', sans-serif;
}
form input:focus {
    outline: none;
    background-color: #fff;
}
.sign-in {
    left: 0;
    z-index: 2;
}
.sign-up {
    left: 0;
    z-index: 1;
    opacity: 0;
}
.sign-up-active .sign-in {
    transform: translateX(100%);
}
.sign-up-active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show .5s;
}
.sign-up-active .overlay-container {
    transform: translateX(-100%);
}
.sign-up-active .overlay {
    transform: translateX(50%);
    background: #3b4d5f;
    color: #e3bbaf;
}
.sign-up-active .overlay-left {
    transform: translateX(0);
}
.sign-up-active .overlay-right {
    transform: translateX(20%);
}
@keyframes show {
    0% {
        opacity: 0;
        z-index: 1;
    }
    49% {
        opacity: 0;
        z-index: 1;
    }
    50% {
        opacity: 1;
        z-index: 10;
    }
}

@keyframes showYtLink {
    0% {
    bottom: -200px;
    }
    100% {
    bottom: 20px;
    }
}
</style>