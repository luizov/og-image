export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
  fileType: FileType;
  text: string;
  desc: string;
  theme: Theme;
  md: boolean;
  fontSize: string;
  images: string[];
  widths: string[];
  heights: string[];
  entryImage: string;
  article: boolean;
  time: string;
}
