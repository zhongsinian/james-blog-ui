import {Category} from "./Category";
/**
 * Created by jamescsh on 7/11/17.
 */
export class Article {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  time: Date;
  content: string;
  readTimes: number;
  commentTimes: number;
  isTop: boolean;
  categories: Category[];
}
