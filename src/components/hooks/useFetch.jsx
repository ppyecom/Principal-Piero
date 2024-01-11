import React, { useEffect, useState } from 'react'
import getRepos from '../helpers/getRepos'

const useFetch = () => {

    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getData = async() => {
        const newData = await getRepos()
        setdata(newData)
        setisLoading(false)
    }

    useEffect(() => {
      getData()
    }, [])
    
    return {
        data,
        isLoading
    }
}

export default useFetch