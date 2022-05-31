export interface IItem {
  id: string
  url: string
  width: number
  height: number
  [key: string]: string | number
}

export interface IItems {
  items: IItem[]
}
