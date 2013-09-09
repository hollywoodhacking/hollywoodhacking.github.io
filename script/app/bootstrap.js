/*
* Adapted from Hacker-Typer by Simone Masiero - https://github.com/duiker101/Hacker-Typer
*/

define(['Typer', 'SourceFile', 'App'],
function(Typer, SourceFile, App){



  var typer = new Typer();
  var sourceFile = new SourceFile(typer);
  var myCodeMirror = CodeMirror($('.viewport')[0],{mode: "javascript", lineNumbers: true});

  var app = new App(typer, sourceFile, myCodeMirror);
  app.init();



});