import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Post() {
    let {id} = useParams()
    let [data,setData] = useState([])
    let [coms,setComs] = useState([])
    let [comText, setComText] = useState('')

    useEffect(() => {
        axios.get(`https://full1-backend-production.up.railway.app/posts/byId/${id}`).then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        axios.get(`https://full1-backend-production.up.railway.app/comments/${id}`).then((res) => {
            setComs(res.data)
        })
    },[])

    const postCom = (e) => {
        e.preventDefault()
        axios.post(`https://full1-backend-production.up.railway.app/comments/post`, {commentText: comText, PostId: id}).then((res) => {
            console.log(2)
        })
    }

  return (
    
    <div>
        <a href='/'>Home</a>
        <a href='/createpost'>Create</a>
        Post {id}
        <div>
            <p>{data.title}</p>
            <p>{data.postText}</p>
        </div>
        <div>
            {coms.map((el) => {
                return <div>{el.commentText}</div>
            })}
        </div>
        <form onSubmit={postCom}>
            <input onChange={(e) => setComText(e.target.value)}></input>
            <button type='submit'></button>
        </form>
    </div>
  )
}
