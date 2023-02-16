import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import { NOWPLAYING_API_URL } from '../constants/constant'
import { categoryMovies } from '../services/api'

function AddNewMovie() {

    const [formdetail, setformdetail] = useState({adult
        : 
        false,
        backdrop_path
        : 
        "/tCpMRsHlfR6CcqJYA3kJMS3YApt.jpg",
        genre_ids
        : 
        (3) [28, 53, 80],
        id
        : 
        1035806,
        original_language
        : 
        "en",
        original_title
        : 
        "Detective Knight: Independence",
        overview
        : 
        "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
        popularity
        : 
        1365.727,
        poster_path
        : 
        "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
        release_date
        : 
        "2023-01-20",
        title
        : 
        "Detective Knight: Independence",
        video
        : 
        false,
        vote_average
        : 
        6.4,
        vote_count
        : 
        58})
        const handleChange = (e) => {
            const { name, value } = e.target
            setformdetail(prevState => {
              return { ...prevState, [name]: value }
            })
        }
        const [movies, setMovies] = useState([]);

        useEffect(() => {
            const getData = async () => {
                let response = await categoryMovies(NOWPLAYING_API_URL);
                setMovies(response.results);    
            }
            getData();
          }, [])
           console.log(movies)
        const handleSubmit = (e) => {
            e.preventDefault()

        }
  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit} style={{display:'flex',flexWrap:'wrap'}}>
            {Object.keys(formdetail).map((fieldkey,i)=>(

        <TextField style={{margin:10,width:'25%'}} onChange={handleChange}id="outlined-basic" label={fieldkey}name={fieldkey} variant="outlined" />
            ))}
       
       <Button variant="contained" type='submit'>Add</Button>
        
        </form>
    </div>
  )
}

export default AddNewMovie;