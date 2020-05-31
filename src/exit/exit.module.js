(async () => {
    try { 
         const appExit = new ExitController(new ExitService(), new ExitView());
   } catch (error) {
            console.error(error);
   }
 })();     