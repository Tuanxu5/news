export interface ListComments{
    body?: string;
    email?: string;
    id?: number;
    name?: string;
    postId?: number;
}
export interface DataComment {
      postId: string|string[],
      name: string,
      id: number,
      email: string,
      body: string,
}
export interface DataPost {
      userId: number,
      title: string,
      id: number,
      body: string,
}
export interface DataNewsDetail {
      userId?: number,
      title?: string,
      id?: number,
      body?: string,
}
export interface DataListNewsUserId {
      userId: number,
      title: string,
      id: number,
      body: string,
      image:string,
}
export interface DataListNewsPerson {
      userId?: number,
      title?: string,
      id?: number,
      body?: string,
      image?:string
}
export interface FileList{
    uid: string;
    name: string;
    status: string;
    url: string;
    thumbUrl: string;
}