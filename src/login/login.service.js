class LoginService {
    constructor(){
        this.user="Karmela";
        this.password="1234";
    }
    checkCredentials(dataUser){
       if ((dataUser.user!==this.user) || (dataUser.password!==this.password)){
        throw (new Error('The username or password are wrong'));
       } 
       localStorage.setItem("credentialsRAM", JSON.stringify(dataUser));
    }
}