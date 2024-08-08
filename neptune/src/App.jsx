import './App.css'
import {LeftWing, Tabs} from './leftwing/leftwing'
import Rightwing from './rightwing/rightwing'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Home } from './body/Homepage'
import { Message } from './body/MessagePages'
import { Search } from './body/Searchpage'

//firts coment 
function App() {
  return (
    <div className='flex flex-row'>
      <div className='basis-1/4 flex flex-col'>
        {Tabs.map((info) => (
          <LeftWing text={info.text}></LeftWing>
        ))}
      </div>
      <div className='bg-yellow-200 basis-1/2'>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="messages" element= {<Message/>}/>
            <Route path="search" element= {<Search/>}/>
        </Routes>
        
      </div>
      <div className='bg-blue-200 basis-1/4'>
        <Rightwing ></Rightwing>
      </div>
    </div>
  )
}

export default App
