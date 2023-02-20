
export interface Post {
  id: string;
  uid: string;
  slugs: string[];
  data: PostData;
}

export interface PostData {
  title: Div[];
  body: Div[];
  lenght: number;
  time: string;
}

export interface Div {
  type: string;
  text: string;
}
