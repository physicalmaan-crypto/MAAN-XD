function login(){
  let u = document.getElementById('username').value;
  let p = document.getElementById('password').value;
  if(u === "Maan" && p === "Maan123"){
    window.location.href = "https://physicalmaan-crypto.github.io/MAAN-XD/home.html";
  }else{
    alert("Wrong Password! Try Again");
  }
}
