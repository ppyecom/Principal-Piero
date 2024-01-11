import React, { useEffect, useState } from 'react'
import getLanguages from '../helpers/getLanguages'

const useFetchLanguages = (languag) => {

    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getDataLeng = async(languag) =>{
        const newLan = await getLanguages(languag)
        setdata(newLan)
        setisLoading(false)
    }

    useEffect(() => {
      getDataLeng(languag)
    }, [])
    

  return {
    data,
    isLoading
  }
}

export default useFetchLanguages