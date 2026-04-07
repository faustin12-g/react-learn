import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{

        fetch(url)
        .then(res=>{
            if(!res.ok)
            {
                throw new Error('Failed to get data')
            }
            else{
                return res.json()
            }
        })
        .then(response=>{
            setData(response)
            setLoading(false)

        })
        .catch(error=>{
            setError(error)
            setLoading(false)
        })
    },[url])
  return ({data, loading, error})
}

export default useFetch
