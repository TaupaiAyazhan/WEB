import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  
  ngOnInit(): void {
    this.getAlbums()
  }

  albums : Album[];
  newAlbum : Album;

  constructor (private albumService : AlbumService){
    this.newAlbum = {} as Album;
    this.albums = []
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums
    })
  }

  deleteAlbum(id : number){
    this.albums = this.albums.filter((x) => x.id != id)
    this.albumService.deleteAlbum(id)
  }


  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.unshift(album)
      this.newAlbum = {} as Album
    })
    console.log(this.albums)
  }
}
