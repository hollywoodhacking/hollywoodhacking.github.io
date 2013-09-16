/// <reference path="../jasmine.d.ts" />

import TerminalOutput = require('Terminal/TerminalOutput');

describe('TerminalOutput', ()=>{


  describe('getNext', ()=>{

    var terminalOutput:TerminalOutput;

    beforeEach(() => {
      terminalOutput = new TerminalOutput();
    });

    it('returns a full line when called', ()=>{

      terminalOutput.setText('line 1\nline2');

      expect(terminalOutput.getText()).toBe('line 1\n');
    });

    it('returns the second line when called twice', ()=>{

      terminalOutput.setText('line 1\nline2');

      terminalOutput.getText();

      expect(terminalOutput.getText()).toBe('line2\n');

    });

    it('enters single letter mode when a line begins with %', ()=>{

      terminalOutput.setText('line 1\n%input');

      terminalOutput.getText();

      expect(terminalOutput.getText()).toBe('%STOP');
      expect(terminalOutput.getText()).toBe('i');
      expect(terminalOutput.getText()).toBe('n');
    });

    it('enters full line mode when input mode ends', ()=>{

      terminalOutput.setText('line 1\n%i\nline 3');

      terminalOutput.getText();
      terminalOutput.getText();
      terminalOutput.getText();

      expect(terminalOutput.getText()).toBe('%START');
      expect(terminalOutput.getText()).toBe('line 3\n');
    });


  });
});