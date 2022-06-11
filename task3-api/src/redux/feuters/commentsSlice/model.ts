export interface ICommentsData  {
    data:dataType[]
    loading:boolean
    num:number
}
export type dataType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }