export default interface Media {
  id: string;
  attributes: {
    name: string;
    alternativeText: string;
    url: string;
    previewUrl: string;
    mime: string;
  };
}
