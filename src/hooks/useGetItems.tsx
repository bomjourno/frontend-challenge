import React, { useCallback, useEffect, useState } from 'react'
import { IItem } from '../types/types'
import { api } from '../utils/Api'

interface IGetItems {
  setIsLoading: (bool: boolean) => void
  setItems: (items: IItem[]) => void
}

export function useGetItems(): [IItem[], () => void, boolean, boolean] {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLoadAppendItems, setIsLoadAppendItems] = useState<boolean>(false)
  const [items, setItems] = useState<IItem[]>([])

  const getItems = ({ setIsLoading, setItems }: IGetItems) => {
    api.getItems().then((items) => {
      setItems(items)
      setIsLoading(false)
    })
  }
  const appendItems = useCallback(() => {
    setIsLoadAppendItems(true)
    api
      .getItems()
      .then((res) => setItems((prevState) => [...prevState, ...res]))
      .finally(() => setIsLoadAppendItems(false))
  }, [setItems])

  useEffect(() => {
    getItems({ setIsLoading, setItems })
  }, [])

  return [items, appendItems, isLoading, isLoadAppendItems]
}
