/// <reference path="../AppDefinitions.d.ts"/>

import AbstractView = require('system/AbstractView');

class FaceLocationView extends AbstractView{

  private camera;

  constructor(text:string){
    super(text);
  }

  public start(){
    this.insertFace();
    this.getLocation();
  }

  public update(text:string):void{

  }

  public empty():void{
    try{
      this.camera.stop();
    }catch(e){}
  }

  public remove(){
    super.remove();
    this.empty();
  }

  private getLocation(){
    navigator.geolocation.getCurrentPosition(this.insertMap.bind(this));
  }

  private insertMap(position){
    var $holder = this.$('.map');
    $holder.css({width:300, height:300, top:200, left:475});
    var holder = $holder[0];
    var mapOptions = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 8
    };
    var map = new google.maps.Map(holder,
        mapOptions);

    setTimeout(()=>{
      map.setZoom(14);
    }, 2500);
  }

  private insertFace(){
    this.$('.camera').css({width:0, height:0, left:'120px', top:'120px', position:'absolute'});

      window.navigator.getMedia = (window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia);

      window.navigator.getMedia(
          {video:true, audio:false},

          // success callback
          this.appendVideo.bind(this),
          //handle error
          function (error) {
            console.log(error);
          })

  }

  private appendVideo(mediaStream){
      var video = document.createElement('video');

      this.camera = mediaStream;

      video.src = window.URL.createObjectURL(mediaStream);
      $(video).css({width:'100%', height:'100%'});
      video.play();
      this.$('.camera').append(video);
      this.$('.camera').animate({
        width:'300px',
        height:'300px'
      }, 750);
  }
}

export = FaceLocationView;