const app = new LoginController(new LoginService(), new LoginView());
const scripts =document.getElementById('scriptsClass');
let pageVisited={dashboard:false,users:false,profile:false,products:false,exit:false};

const DashboardComponent = {
   showComponent: () => {
        fetch('http://localhost:5000/src/dashboard/dashboard.html').then(function(response) {
            return response.text()
         })
          .then(function(html) {
           document.getElementById("root").innerHTML=html;
           if (!pageVisited.dashboard){
             pageVisited.dashboard=true;
            }  
           
          })
          .catch(function(err) {
            console.log('Failed to fetch page: ', err);
          });
      }
    
 }
 const UsersComponent = {
    showComponent: () => {
      
         fetch('http://localhost:5000/src/users/users.html').then(function(response) {
             return response.text()
          })
           .then(function(html) {
            document.getElementById("root").innerHTML=html;
            if (!pageVisited.users){
              pageVisited.users=true;
             }  
            
           })
           .catch(function(err) {
             console.log('Failed to fetch page: ', err);
           });
       }
     
  }
  const ProfileComponent = {
    showComponent: () => {
      
         fetch('http://localhost:5000/src/profile/profile.html').then(function(response) {
             return response.text()
          })
           .then(function(html) {
            document.getElementById("root").innerHTML=html;
            if (!pageVisited.profile){
              pageVisited.profile=true;
             }  
            
           })
           .catch(function(err) {
             console.log('Failed to fetch page: ', err);
           });
       }
     
  }
  const ProductsComponent = {
    showComponent: () => {
      
         fetch('http://localhost:5000/src/products/products.html').then(function(response) {
             return response.text()
          })
           .then(function(html) {
            document.getElementById("root").innerHTML=html;
            if (!pageVisited.products){
              pageVisited.products=true;
             }  
            
           })
           .catch(function(err) {
             console.log('Failed to fetch page: ', err);
           });
       }
     
  }
  const ExitComponent = {
    showComponent: () => {
      
         fetch('http://localhost:5000/src/exit/exit.html').then(function(response) {
             return response.text()
          })
           .then(function(html) {
            document.getElementById("root").innerHTML=html;
            if (!pageVisited.exit){
              pageVisited.exit=true;
              insertScripts("exit");
             }  
             insertModuleScript("exit");
            
           })
           .catch(function(err) {
             console.log('Failed to fetch page: ', err);
           });
       }
     
  }
  const ErrorComponent = {
    showComponent: ()=> {
      document.getElementById("root").innerHTML='<div><h1>ERROR</h1></div>';
    }
  }
  const routes = [
    { path: '/', component: DashboardComponent, },
    { path: '/dashboard', component: DashboardComponent, },
    { path: '/users', component: UsersComponent, },
    { path: '/profile', component: ProfileComponent, },
    { path: '/products', component: ProductsComponent, },
    { path: '/exit', component: ExitComponent, },
  ];
  const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
  const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
  const router = () => {
     // Find the component based on the current path
     const path = parseLocation();
      // If there's no matching route, get the "Error" component
     const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
     // TODO: Render the component in the "app" placeholder
     component.showComponent();
   };
   const  insertScripts=(name)=>{
 
      let view = document.createElement('script');
      view.setAttribute("type","text/javascript");
      view.setAttribute("src", `${name}/${name}.view.js`);
      scripts.append(view);

      let service= document.createElement('script');
      service.setAttribute("type","text/javascript");
      service.setAttribute("src",`${name}/${name}.service.js`);
      scripts.append(service);

      let controller=document.createElement('script');
      controller.setAttribute("type","text/javascript");
      controller.setAttribute("src",`${name}/${name}.controller.js`);
      scripts.append(controller);
 
  }
  const insertModuleScript=(name)=>{
      let module=document.createElement('script');
      module.setAttribute("type","text/javascript");
      module.setAttribute("src",`${name}/${name}.module.js`);
      scripts.append(module);
  }

 
  window.addEventListener('hashchange', router);
  window.addEventListener('load', ()=>{router()});