import { Component, Input, OnInit } from '@angular/core';
import Speech from 'speak-tts';

enum PLAY_STATES {
  STOPPED,
  PAUSED,
  PLAYING,
  FINISHED,
}

@Component({
  selector: 'app-text-reader',
  templateUrl: './text-reader.component.html',
  styleUrls: ['./text-reader.component.scss'],
})
export class TextReaderComponent implements OnInit {
  @Input() text: string;
  @Input() enableAutoplay = false;
  @Input() timeout = 3000;

  PLAY_STATES = PLAY_STATES;
  playState: PLAY_STATES = PLAY_STATES.STOPPED;
  speech: any;

  constructor() {}

  ngOnInit(): void {
    // will throw an exception if not browser supported
    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      // returns a boolean

      this.speech
        .init({
          volume: 1,
          lang: 'en-GB',
          rate: 1,
          pitch: 1,
          voice: 'Google UK English Male',
          splitSentences: true,
          listeners: {
            onvoiceschanged: (voices) => {
              console.log('Event voiceschanged', voices);
            },
          },
        })
        .then((data) => {
          // The "data" object contains the list of available voices and the voice synthesis params
          console.log('Speech is ready, voices are available', data);
          if (this.enableAutoplay) {
            setTimeout(() => {
              this.read();
            }, this.timeout);
          }
        })
        .catch((e) => {
          console.error('An error occured while initializing : ', e);
        });
    }
  }

  read() {
    this.playState = PLAY_STATES.PLAYING;

    this.speech
      .speak({
        text: this.text,
      })
      .then(() => {
        this.playState = PLAY_STATES.FINISHED;
        console.log('Success !');
      })
      .catch((e) => {
        console.error('An error occurred :', e);
      });
  }

  pause() {
    this.speech.pause();
    this.playState = PLAY_STATES.PAUSED;
  }

  resume() {
    this.speech.resume();
    this.playState = PLAY_STATES.PLAYING;
  }

  stop() {
    this.playState = PLAY_STATES.STOPPED;
    this.speech.cancel();
  }
}
