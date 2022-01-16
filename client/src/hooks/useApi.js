import { useState } from 'react'
import axios from 'axios'

export const useApi = ({ onCompleted, onError, endpoint, method, headers = {} }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const triggerApi = async ({ body }) => {
    try {
      setError(null)
      setIsLoading(true)
      const result = await axios({
        baseURL: process.env.REACT_APP_API_HOST,
        url: endpoint,
        method,
        headers,
        data: body,
      })
      setData(result.data)
      if (onCompleted) {
        onCompleted(result.data)
      }
    } catch (e) {
      setError(e)
      if (onError) {
        onError(e)
      }
    }

    setIsLoading(false)
  }

  return { triggerApi, data, error, isLoading }
}
