import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   
    setmovies: (state, action) => 
    {
        state.movies = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, setmovies } = movieSlice.actions
  
  export default movieSlice.reducer