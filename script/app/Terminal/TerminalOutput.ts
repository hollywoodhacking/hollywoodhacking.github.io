/// <reference path="../AppDefinitions.d.ts"/>

class TerminalOutput{

  private lines:Array<string>;
  private charCount:number = 0;
  private lineCount:number = 0;

  public setText(text){

    this.lines = text.split('\n');
  }

  public getText(){

    var nextOutput;

    if(_(this.lines).isUndefined()){
      nextOutput = '';
    }else if(this.lineCount >= this.lines.length){
      nextOutput = '%STOP';
    }else if(this.isCurrentLineInput()){
      nextOutput = this.getNextLetter();

    }else{
      nextOutput = this.getLine();
      this.lineCount++;
    }

    return nextOutput;
  }

  private isCurrentLineInput():boolean{
    var currentLine = this.lines[this.lineCount];
    return currentLine.charAt(0) === '%';
  }

  private getLine():string{
    return this.lines[this.lineCount] + '\n'
  }

  private getNextLetter():string{

    var currentLine = this.lines[this.lineCount];
    var nextLetter = currentLine.charAt(this.charCount);

    if(this.charCount > currentLine.length){

      nextLetter = '%START';
      this.gotoNextLine();

    }else{
      if(this.charCount === currentLine.length){

        nextLetter = '\n';

      }else if(this.charCount === 0){

        nextLetter = '%STOP';

      }
      this.charCount++;

    }



    return nextLetter;
  }

  private gotoNextLine():void{
    this.lineCount++;
    this.charCount = 0;
  }
}

export = TerminalOutput;