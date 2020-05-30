class ExitService{
    constructor(){
    
    }
     logout(){
         localStorage.removeItem('credentials');
     }

}