import './App.css'
import {LeftWing, Tabs} from './leftwing/leftwing'
import Rightwing from './rightwing/rightwing'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Home } from './body/Homepage'
import { Message } from './body/MessagePages'
import { Search } from './body/Searchpage'
import { Body } from './body/Body'

//firts coment 
function App() {
  return (
    <div className='flex flex-row'>
      <div className='basis-1/4 flex flex-col'>
        {Tabs.map((info) => (
          <LeftWing LinkPath={info.LinkPath} text={info.text}></LeftWing>
        ))}
      </div>
      <div className='bg-yellow-200 basis-1/2'>
        <Body></Body>
      </div>
      <div className='bg-blue-200 basis-1/4'>
        <Rightwing ></Rightwing>
      </div>
    </div>
  )
}

export default App
