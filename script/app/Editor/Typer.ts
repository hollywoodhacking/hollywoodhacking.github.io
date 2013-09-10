class Typer {

  private typedText:string = '';
  private fullText:string = '';
  private index:number = 0;

  public setText(text:string):void{

    this.typedText = '';
    this.fullText = text;
    this.index = 0;
  }

	public typeSingleLetter():void{

    if(this.typedText.length < this.fullText.length){
      this.typedText += this.fullText.charAt(this.index);
      this.index++;

      if(this.typedText[(this.index - 1)] === '\t'){
        this.typeSingleLetter();
      }
    }
	}

	public backspace():void{
		if(this.index>0){
			this.index--;
            this.typedText = this.typedText.substring(0, this.index);
		}
	}

	public getText():string{
		return this.typedText;
	}

}

export = Typer;
