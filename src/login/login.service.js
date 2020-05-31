class LoginService {
    constructor(){
        this.user="Karmela";
        this.password="1234";
    }
    checkCredentials(dataUser){
      if ((dataUser.user!==this.user) || (dataUser.password!==this.password)){
        throw (new Error('The username or password are wrong'));
       } 
       this.setToken("ram",dataUser);
     /*  let items=JSON.parse(localStorage.getItem("credentials")) || [];
      let credentials={ram:dataUser};
       items = [...items,credentials];
       localStorage.setItem("credentials", JSON.stringify(items));*/
    }
    setToken(type,token){
        let credentials = JSON.parse(localStorage.getItem('Credentials')) || {};
        credentials[type] = token;
        localStorage.setItem('Credentials', JSON.stringify(credentials));
        
    }
    getCredentials(){
        return JSON.parse(localStorage.getItem('Credentials')) || {};
    }
}