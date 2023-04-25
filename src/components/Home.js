import React, { useEffect, useState } from 'react'
import './home.css'

export default function Home() {
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const fetchapi = async () =>{
            const fetch = await fetch('https://api.unsplash.com/photos/?client_id=OkTTvOx749uraf0HfLe4gAxJYyRkb3SIt50uGQM6h-8')
            console.log(fetch.data)
        }
        fetchapi()
    },[])
  return (
    <>
     <div className='container'>
     <div className='bookmark'>
     <h3>React Photo Search</h3>
     <button className='button'>Bookmark</button>
     </div>
     <div className='search-bar'>
        <input type='text' onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}></input>
        <button className='search'>search</button>
     </div>
     </div>

    </>
  )
}
