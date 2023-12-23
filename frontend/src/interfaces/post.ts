import type Category from './category';
import type Media from './media';
import type { RichContentBlock } from './rich_content';

export default interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: RichContentBlock[];
    summary: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    mainImage: {
      data: Media;
    };
    category: {
      data: Category;
    };
  };
}
