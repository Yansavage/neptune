import { Route, Routes } from "react-router";
import { Home } from "./Homepage";
import { Message } from "./MessagePages";
import { Search } from "./Searchpage";




export function Body () {
    return (
        <Routes>
            <Route path="*" element= {<Home/>}></Route>
            <Route path="messages" element= {<Message/>}></Route>
            <Route path="search" element= {<Search/>}></Route>
        </Routes>
    )
}