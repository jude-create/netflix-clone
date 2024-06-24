import React from 'react';
import Main from './components/Main';
import Row from './components/Row';
import requests from './Request';
const Home =() => {
  return (
    <>
      <Main />
      <Row rowID='1' title= 'Top Rated' fetchUrl= {requests.fetchTopRated}  />
      <Row rowID='2' title= 'Trending' fetchUrl= {requests.fetchTrending}  />
      <Row rowID='3' title= 'Recommendation' fetchUrl= {requests.fetchRecommedation}  />
      <Row rowID='4' title= 'UpComing' fetchUrl= {requests.fetchUpcoming}  />
      <Row rowID='5'title= 'Popular' fetchUrl= {requests.fetchPopular}  />
      
    </>
  )
}

export default Home;
