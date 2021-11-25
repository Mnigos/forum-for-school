export interface Post {
  _id: string
  title: string
  content: string
  createdAt: Date
}

export interface CreatePost {
  title: string
  content: string
}
