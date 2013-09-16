require(['App', 'AppView'],
  function(App, AppView){

    var appView = new AppView('body');
    var app = new App();

    app.init(appView);


    // set up keyboard events

    $( document ).keydown(function(event){
      app.keydown(event.which);
      if(event.which !== 122){
        return preventDefaults(event);
      }
    });

    function preventDefaults(event){
      if(event.preventDefault){
        event.preventDefault()
      }

      return false;
    }

  });