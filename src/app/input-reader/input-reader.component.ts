import { Component, Input } from '@angular/core';
import words10000 from './words';
const resetCountTime = 2000;
let stopTimer: any = null;
let startTime: any = null;
@Component({
  selector: 'app-input-reader',
  templateUrl: './input-reader.component.html',
  styleUrls: ['./input-reader.component.scss'],
})
export class InputReaderComponent {
  @Input() errorColor: string | undefined;
  @Input() spaceMode: boolean | undefined;
  inputValue: string = '';
  words: string[] = words10000;
  wordsPerMinute: number = 0;
  wordIndex: number = 0;
  lettersTyped: number = 0;
  correctWordTyped: string = '';
  incorrectWordTyped: string = '';
  nextNextWord: string = this.words[randomArrayIndex(words10000.length)];
  nextWord: string = this.words[randomArrayIndex(words10000.length)];
  wordToType: string = this.words[randomArrayIndex(words10000.length)];
  wordToTypeRest: string = this.wordToType;
  typeStartTime: number = 0;
  calcInterval: any = null;
  enhanceWPM: string = '';
  matchLength: number = 0;
  constructor() {}

  onInput() {
    setTimeout(() => {
      this.delayStopTime();
      this.startWPMInterval();
      this.inputValue = this.inputValue.replace(/\s/g, '');
      this.matchLength = letterMatchFromStart(this.inputValue, this.wordToType);
      if (this.matchLength < this.inputValue.length) {
        // this.incorrectWordTyped = this.inputValue.substr(
        //   matchLength,
        //   this.inputValue.length
        // );
        // console.log(matchLength)
        this.incorrectWordTyped = this.wordToType.substr(
          this.matchLength,
          this.inputValue.length - this.matchLength
        );
      } else {
        this.incorrectWordTyped = '';
      }
      if (this.matchLength === this.wordToType.length && !this.spaceMode) {
        this.newWord();
      } else {
        this.updateRenderedWords();
      }
    });
  }

  onSpace() {
    if (!this.spaceMode) return;
    if (this.matchLength === this.wordToType.length) this.newWord();
  }

  startWPMInterval() {
    if (this.calcInterval != null) return;
    this.calcInterval = setInterval(() => {
      this.calculateWPM();
    }, 500);
  }

  calculateWPM() {
    const totalTime = Date.now() - startTime;
    const minutes = totalTime / (60 * 1000);
    this.wordsPerMinute = Math.round(this.lettersTyped / 5 / minutes);
    if (!this.wordsPerMinute) this.wordsPerMinute = 0;
  }

  delayStopTime() {
    clearTimeout(stopTimer);
    if (startTime === null) {
      startTime = Date.now();
    }

    stopTimer = setTimeout(() => {
      clearInterval(this.calcInterval);
      startTime += resetCountTime;
      this.calculateWPM();
      this.calcInterval = null;
      this.lettersTyped = 0;
      startTime = null;
      this.enhanceWPM = 'scale(1.5)';
      setTimeout(() => (this.enhanceWPM = ''), 1000);
    }, resetCountTime);
  }

  newWord() {
    this.lettersTyped += this.wordToType.length;
    this.wordIndex++;
    this.wordToType = this.nextWord;
    this.nextWord = this.nextNextWord;
    this.nextNextWord = this.words[randomArrayIndex(words10000.length)];
    this.correctWordTyped = '';
    this.wordToTypeRest = this.wordToType;
    this.inputValue = '';
  }

  updateRenderedWords(): void {
    this.correctWordTyped = this.inputValue.substr(0, this.matchLength);
    this.wordToTypeRest = this.wordToType.substr(
      this.matchLength + this.incorrectWordTyped.length,
      this.wordToType.length
    );
  }
}

// Returns the number of matching letters in two words,
// starting from the beginning.
// Example:
// banana + bana = 4
// banana + panana = 0
function letterMatchFromStart(word1: string, word2: string): number {
  let matchLength: number = 0;
  let misMatchFound: boolean = false;
  word1.split('').forEach((char, i) => {
    if (char === word2.charAt(i) && !misMatchFound) matchLength++;
    else misMatchFound = true;
  });
  return matchLength;
}

function randomArrayIndex(arrayLength: number): number {
  return Math.floor(Math.random() * arrayLength);
}
