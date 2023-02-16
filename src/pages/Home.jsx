import { useState, useEffect } from 'react';

import { Box, styled } from '@mui/material';

import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';

// components
import Header from '../components/common/Header'
import Banner from '../components/common/Banner';
import UpNext from '../components/common/UpNext';
import Slides from '../components/Slides';

const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);    
        }
        getData();
      }, [])

      return (
          <>
              <Header />
              <Container>
                  <Wrapper>
                      <Banner movies={movies} />
                      <UpNext movies={movies} />
                  </Wrapper>
                  <Slides movies={movies} />
                  <Slides movies={movies} />
                  <Slides movies={movies} />
                  <Slides movies={movies} />
                  <Slides movies={movies} />
              </Container>
          </>
      )
  }
  
  export default Home;