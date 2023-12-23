export default interface Media {
  id: string;
  attributes: Image;
}

export interface Image {
  name: string;
  alternativeText: string;
  url: string;
  previewUrl: string;
  mime: string;
  formats: {
    thumbnail: MediaFormat;
    small: MediaFormat;
    large: MediaFormat;
    medium: MediaFormat;
  };
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  url: string;
  width: number;
  height: number;
  size: number;
}
