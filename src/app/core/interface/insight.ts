export interface Insight {
  id: string
  content: string
  frontMatter: FrontMatter
}

export interface FrontMatter {
  date: string
  draft: boolean
  images: string
  category: any
  summary: string
  title: string
}
