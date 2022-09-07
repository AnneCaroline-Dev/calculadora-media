function userIsCorrect(name,user, password) {
    return name.value== "Anne Caroline" && user.value == "anne@hotmail.com" && password.value == "123";
  }
  
  function login() {
    var name= document.getElementById("name");
    var user = document.getElementById("user");
    var password = document.getElementById("password");
  
    if (name.value== "" || user.value == "" || password.value == "") {
      alert("Por favor preencha todos os campos.");
    }
  
    if (this.userIsCorrect(name,user, password)) {
      alert(
        "Boas Vindas!" +
          name.value +
          ". \n Este é o seu Boletim Trimestral!"
      );
    } else {
      alert("Email ou senha incorretos");
    }
  }

  