import type Category from './category';
import type Media from './media';

export default interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
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
