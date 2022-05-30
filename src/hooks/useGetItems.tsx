import React, { useCallback, useEffect, useState } from 'react'
import { IItem } from '../types/types'
import { api } from '../utils/Api'

interface IGetItems {
  setIsLoading: (bool: boolean) => void
  setItems: (items: IItem[]) => void
}

export function useGetItems(): [IItem[], boolean, () => void] {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [items, setItems] = useState<IItem[]>([])

  const getItems = ({ setIsLoading, setItems }: IGetItems) => {
    api.getItems().then((items) => {
      setItems(items)
      setIsLoading(false)
    })
  }
  const appendItems = useCallback(() => {
    api.getItems().then((res) => setItems((prevState) => [...prevState, ...res]))
  }, [setItems])

  useEffect(() => {
    getItems({ setIsLoading, setItems })
  }, [])

  return [items, isLoading, appendItems]
}
