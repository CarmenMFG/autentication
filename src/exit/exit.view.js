class ExitView{
  constructor(){
      this.login=document.getElementById("login");
      this.menu=document.getElementById("menu");
      this.root=document.getElementById("root");
  }
  bindReset(){
      this.login.style.display="block";
      this.menu.style.display="none";
      this.root.style.display="none";
      window.location="http://localhost:5000/src/#/";
  }
}      