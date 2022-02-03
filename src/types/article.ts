export interface IArticle {
  title: string;
  description: string;
  author: string;
  originalSource: string;
  originalSourceText: string;
  date: string;
  textBody: {
    subtitle: string;
    text: string;
  }[];
}
