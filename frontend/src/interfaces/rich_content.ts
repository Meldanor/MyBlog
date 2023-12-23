import type { Image } from './media';

export interface RichContentBlock {
  type: 'heading' | 'paragraph' | 'text' | 'list' | 'code' | 'image' | 'quote' | 'link';
  children: RichContentBlock[];
}

export interface HeadingBlock extends RichContentBlock {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  type: 'heading';
  children: TextBlock[];
}

export interface ParagraphBlock extends RichContentBlock {
  type: 'paragraph';
  children: (TextBlock | HyperlinkBlock)[];
}

export interface QuoteBlock extends RichContentBlock {
  type: 'quote';
  children: TextBlock[];
}

export interface CodeBlock extends RichContentBlock {
  type: 'code';
  children: TextBlock[];
}

export interface HyperlinkBlock extends RichContentBlock {
  type: 'link';
  children: TextBlock[];
  url: string;
}

export interface TextBlock extends RichContentBlock {
  type: 'text';
  text: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface ItalicTextBlock extends TextBlock {
  italic: true;
}

export interface BoldTextBlock extends TextBlock {
  bold: true;
}

export interface UnderlineTextBlock extends TextBlock {
  underline: true;
}

export interface StrikethroughTextBlock extends TextBlock {
  strikethrough: true;
}

export interface InlineCodeTextBlock extends TextBlock {
  code: true;
}

export interface ListBlock extends RichContentBlock {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: TextBlock[];
}

export interface OrderedListBlock extends ListBlock {
  format: 'ordered';
}

export interface UnorderedListBlock extends ListBlock {
  format: 'unordered';
}

export interface ImageBlock extends RichContentBlock {
  type: 'image';
  image: Image;
  children: [];
}
