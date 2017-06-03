// Inspired by the jquery/handlebar official web documentation samples:
// http://jsfiddle.net/JMPerez/0u0v7e1b/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SpotifyAudioService {

  /**
   * Audio Object
   */
  audio: HTMLAudioElement;

  /**
   * Player status (true if playing, false if not)
   * @type {boolean}
   */
  ended$: Subject<boolean> = new BehaviorSubject<boolean>(null);

  /**
   * Current track Url
   */
  trackUrl: string ;

  /**
   * Play Spotify Track
   * @param trackUrl
   */
  playAudioTrack(nextTrackUrl) {

    // Stop current track
    this.pauseTrack();

    // Do nothing, if next and current track are the same
    if (nextTrackUrl === this.trackUrl) {
      this.trackUrl = null;
      return;
    }

    // Play track
    this.trackUrl = nextTrackUrl;
    this.audio = new Audio(nextTrackUrl);
    this.audio.play();
    this.audio.addEventListener('ended', () => {
      this.trackUrl = null;
      this.ended$.next(true);
    });
  }

  /**
   * Pause Spotify Track
   */
  pauseTrack() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  /**
   * Destroy audio object all stuff
   */
  destroy() {
    if (this.audio) {
      this.audio.pause();
      delete this.audio;
    }
    // this.ended$.unsubscribe();
  }
}