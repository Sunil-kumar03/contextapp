import React, { useEffect, useState,useCallback } from 'react'
import axios from 'axios'

const url='https://jsonplaceholder.typicode.com'

function useCommentApi() {
    const[comment,setComment]=useState([])
    
    const getComments = useCallback(()=>{
        const readComments =async ()=>{
            const res = await axios.get(`${url}/comments`)
            setComment(res.data)
        }
        readComments()
    },[])
    useEffect(()=>{
        getComments()
    },[])
  return {
    comments:[comment,setComment]
  }
}

export default useCommentApi
