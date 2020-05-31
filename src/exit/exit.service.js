class ExitService{
    constructor(){
    
    }
     logout(){
         localStorage.removeItem('Credentials');
         if (window.gapi) {
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
              auth2.signOut().then(auth2.disconnect());
            }
         }
     
     }

}