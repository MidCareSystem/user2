export interface blog {
  id: string
  content: string
  frontMatter: FrontMatter
}

export interface FrontMatter {
  category: string
  date: string
  draft: boolean
  images: string
  title: string
  summary: string
  author: Author
}

export interface Author {
  name: string
  position: string
  image: any
  isEmployee: boolean
  isVerified: boolean
  employee: boolean
  verified: boolean
}
