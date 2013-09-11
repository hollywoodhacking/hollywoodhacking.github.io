/// <reference path="../../AppDefinitions.d.ts"/>

class ArrayHelpers {

  static getRandomItem(arr:Array):any{

    var randomIndex = Math.round(Math.random() * (arr.length - 1));

    return arr[randomIndex];
  }
}

export = ArrayHelpers;