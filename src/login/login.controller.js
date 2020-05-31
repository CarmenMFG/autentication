class LoginController {
    constructor(service,view){
        this.service=service;
        this.view=view;
        this.view.bindClickAccept(this.handlerClickAccept);
        this.showFirstScreen();
       
    }
    handlerClickAccept=(dataUser)=>{
       this.service.checkCredentials(dataUser);
    }
     setToken(social,token){
       this.service.setToken(social,token);
       this.view.showMenu();
    }
    showFirstScreen(){
        let credentials=this.service.getCredentials();
        console.log("credentials",credentials);
        credentials=={} ?  this.view.showMenu() :  this.view.showLogin();
    }
    
}