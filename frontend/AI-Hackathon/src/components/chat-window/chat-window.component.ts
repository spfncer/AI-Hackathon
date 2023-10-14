import { Component } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { AudioPlayerService } from 'src/services/audio-player/audio-player.service';

/**
 * Displays a chat window
 */
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent {
  text = "";

  constructor(private api: ApiService, private audioPlayer: AudioPlayerService)  {

    // Sample of how to use API Service
    this.api.getHelloWorld().subscribe((data) =>  {
      this.text = data;
      console.log(this.text);
    });
  }

  private playSound()  {
    // Sample of how to use audio player service
    this.audioPlayer.setAudioSource("assets/mixkit-arcade-retro-game-over-213.wav");
    this.audioPlayer.observeAudioState().subscribe((data) =>  {
      console.log(data);
    });
    this.audioPlayer.play();
  }
}
