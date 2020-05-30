class ExitController{
  constructor(service,view){
      this.service=service;
      this.view=view;
      this.view.bindReset();
      this.onLogout();
  }
  onLogout=()=>{
      this.service.logout();
      this.view.bindReset();
    
  }

}
    