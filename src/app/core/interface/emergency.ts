export interface emergency {
  id: string
  content: string
  frontMatter: FrontMatter 
  clicked: boolean
}

export interface FrontMatter {
  category: string
  date: string
  draft: boolean
  images: string
  level: string
  location: string
  period: any
  salary: string
  site: any
  skills: Skill[]
  summary: string
  title: string
}

export interface Skill {
  image: string
  title: string
}
