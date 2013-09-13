declare class Typer {
    private typedText;
    private fullText;
    private index;
    public setText(text: string): void;
    public typeSingleLetter(): void;
    public typeFullWord(): void;
    public typeFullLine(): void;
    public backspace(): void;
    public getText(): string;
    private notAtEndOfWord();
    private getNextCharacter();
    private getCurrentCharacter();
}
export = Typer;
