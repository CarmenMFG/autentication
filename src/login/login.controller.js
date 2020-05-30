class LoginController {
    constructor(service,view){
        this.service=service;
        this.view=view;
        this.view.bindClickAccept(this.handlerClickAccept);
    }
    handlerClickAccept=(dataUser)=>{
       this.service.checkCredentials(dataUser);
    }
}