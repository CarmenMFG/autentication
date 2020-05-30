class LoginView{
  constructor(){
      this.login=document.getElementById("login");
      this.menu=document.getElementById("menu");
      this.root=document.getElementById("root");
      //Formulario del login
      this.user=document.getElementById("txtUser");
      this.password=document.getElementById("txtPassword");
      this.accept=document.getElementById("accept");

  }
  _resetInputs(){
    this.user.value="";
    this.password.value="";
  }
  bindClickAccept(handler){
      this.accept.addEventListener("click",event=>{
          event.preventDefault();
         try{
           const dataUser={user:this.user.value,password:this.password.value};
           handler(dataUser);  
           this.menu.style.display="block";
           this.login.style.display="none";  
           this.root.style.display="block"; 
         }catch(error){
            $('#modalMsg').empty();
            $('#modalMsg').append(error);
            $('#info').modal();
            this._resetInputs();
         }                  
      })
  }
 
}