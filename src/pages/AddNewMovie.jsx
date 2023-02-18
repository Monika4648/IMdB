import { Button, Input, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/common/Banner'
import Header from '../components/common/Header'
import { NOWPLAYING_API_URL } from '../constants/constant'
import { categoryMovies } from '../services/api'
import { setmovies } from '../store/reducer'

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
        "",
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
        const movies = useSelector((state) => state.movie.movies)
        const dispatch = useDispatch()
           console.log(movies)
        const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(setmovies([...movies,formdetail]))
        }
       
  return (
    <div>
        <Header/>
        <Banner movies={movies}/>
        <h1 style={{color:'red'}}>ADD NEW MOVIE</h1>
        <form onSubmit={handleSubmit}>
           
            
           <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: 15,  alignItems: 'center' }}>
                    {Object.keys(formdetail).map((fieldkey, i) => (
                        <div style={{ display: 'flex', justifyContent: 'space-between',width: '50%' }}>
                            <h3>{fieldkey}</h3>
                            <TextField    type={fieldkey === 'release_date' ? 'date' : fieldkey === 'poster_path' ? 'file' : 'text'} style={{  width: '55%',height:20, borderColor: '1px solid red' }}
                                onChange={handleChange} placeholder={fieldkey} name={fieldkey} variant="outlined" />
                        </div>
                    ))}
                </div>
       <Button variant="contained" type='submit'>Add New Movie</Button>
        
        </form>
    </div>
  )
}

export default AddNewMovie;