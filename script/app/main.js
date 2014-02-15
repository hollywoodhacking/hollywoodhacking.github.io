require(['Bootstrap'],
  function(Bootstrap){

    google.maps.event.addDomListener(window, 'load', function(){
      new Bootstrap();
    });

  });