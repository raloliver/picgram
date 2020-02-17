export interface PhotoAlbum {
  album: Album;
  photo: Photo;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  userId?: number;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}
