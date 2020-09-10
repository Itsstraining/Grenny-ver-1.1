import { Component, OnInit, Input } from '@angular/core';
import { CloudService } from '../../services/cloud.service'
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @Input() users;
  @Input()
  playlistName;
  folderUsers : Array<any> = [];

  constructor(public cloudService: CloudService) { }

  ngOnInit() {
  }
  isInFolderUser(users) {
    for (const folder of this.folderUsers) {
      if (users.id === folder.id) {
        return true;
      }
    }
    return false;
  }
  removeFromFolder(){
    let arr = this.playlistName.Song.map(x => x);
    arr.length = 0;
    for (const Song of this.playlistName.Song) {
      if (this.users.name !== Song.name) {
        arr.push(Song);
      }
    }
    this.playlistName.Song = arr;
    if (this.users != null) {
      this.cloudService
        .addSongToPlaylist(
          this.users,
          this.playlistName,
          this.playlistName.title
        )
        .then(result => {
          console.log("DONE");
        })
        .catch(err => {
          console.log("ERROR");
        });
    }
  }
}
