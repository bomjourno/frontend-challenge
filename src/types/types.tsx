export interface IItem {
  id: string
  url: string
  width: number
  height: number
  [key: string]: any
}

export interface IItems {
  items: IItem[]
}
