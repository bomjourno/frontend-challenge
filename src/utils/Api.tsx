class Api {
  private baseUrl: string
  constructor(app: { baseUrl: string }) {
    this.baseUrl = app.baseUrl
  }

  getItems() {
    return fetch(`${this.baseUrl}`).then((res) => {
      if (res.ok) return res.json()
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
}

export const api = new Api({
  baseUrl: 'https://api.thecatapi.com/v1/images/search?limit=15',
})
