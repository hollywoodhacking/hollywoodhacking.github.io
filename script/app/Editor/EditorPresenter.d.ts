/// <reference path="../AppDefinitions.d.ts" />
/// <reference path="../system/View.d.ts" />

interface EditorPresenter {
    setText(text: string): void;
    update(key: number): void;
    attachView(view: View): void;
    updateView();
}
