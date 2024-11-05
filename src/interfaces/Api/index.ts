export interface IApiRoot {
  error: boolean
  message: string
  data: any
}

export interface IPaginateLink {
  url?: string
  label: string
  active: boolean
}

export interface IPaginate {
  data: any
  first_page_url: string
  current_page: number
  from: number
  last_page: number
  last_page_url: string
  links: IPaginateLink[]
  next_page_url?: string
  path: string
  per_page: number
  prev_page_url?: string
  to: number
  total: number
}

export interface ITimestamps {
  id: string
  created_at: string
  updated_at: string
  deleted_at?: string | null
}

export interface IAttachment extends ITimestamps {
  name: string
  path: string
  type: string
  image_path: string
}

export interface IPaginateRoot extends IApiRoot {
  data: IPaginate
}

export interface ISearchParamsRoot {
  per_page?: number
  page?: number
  search?: any
}

export interface IWebsocketRoot {
  message: string
  title: string
  data: any
}
