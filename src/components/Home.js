import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    let [list, setList] = useState([])
    useEffect(() => {
      axios.get('https://full1-backend-production.up.railway.app/posts').then((res) => {
        setList(res.data)
        console.log(res.data)
      })
    }, [])

    return (
        <div className="App">
          <a href='/'>Home</a>
          <a href='/createpost'>Create</a>
          {list.map(el => {
            return <Link to={`/post/${el.id}`}><p>{el.username}: {el.title} {el.postText} {el.createdAt}</p></Link>
          })}
        </div>
      );
}
