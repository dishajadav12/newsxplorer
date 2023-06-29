import './App.css';
import React, { useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

 const App = () => {

  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
    return (
      <BrowserRouter>
      <div>
        <LoadingBar color='red'
        progress={progress}
        />
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={12} country="in" category='general' />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={12} country="in" category='business'/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={12} country="in" category='entertainment'/>}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={12} country="in" category='general'/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={12} country="in" category='health'/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={12} country="in" category='science'/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={12} country="in" category='sports'/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={12} country="in" category='technology'/>}></Route>

        </Routes>
      </div> 
      </BrowserRouter>
    )
  }

  export default App

