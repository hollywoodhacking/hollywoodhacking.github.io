/// <reference path="../jasmine.d.ts" />

import Typer = require('Editor/Typer');

describe('Typer', ():void =>{

    var typer:Typer;

    beforeEach(():void=>{
       typer = new Typer();
    });

    it('should return a letter at a time when using typeSingleLetter', ():void=>{

        typer.setText('someText');

        typer.typeSingleLetter();

        expect(typer.getText()).toBe('s');
    });

    it('should jump over \\t characters and return the next character when using typeSingleLetter', ():void=>{

        typer.setText('\tabcdef');

        typer.typeSingleLetter();

        expect(typer.getText()).toBe('\ta');
    });

    it('should remove one letter at a time when using backspace', ():void=>{

        typer.setText('abcdefghijklmnopqrstuvwxyz');

        for(var i:number = 0; i < 5; i++){
            typer.typeSingleLetter();
        }

        expect(typer.getText()).toBe('abcde');

        typer.backspace();

        expect(typer.getText()).toBe('abcd');
    });

    it('should return up to the end of the word when using typeFullWord', ():void=>{

        typer.setText('This is a sentence.');

        typer.typeFullWord();

        expect(typer.getText()).toBe('This');
    });

    it('should return up to the end of the line when using typeFullLine', ():void=>{
        typer.setText('This is a full line\nThis is the second line');

        typer.typeFullLine();

        expect(typer.getText()).toBe('This is a full line');
    });
});