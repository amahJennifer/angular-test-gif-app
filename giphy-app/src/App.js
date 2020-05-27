import React ,{useEffect,useState} from 'react';
import './App.css';
import NavBar from "./Components/navbar/index"
import Search from "./Components/search/index"
import axios from "axios"


function App() {
const [users,setUsers]=useState()
//  useEffect(() => {
// axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${query}&limit=25&offset=0&rating=G&lang=en`)
//       .then(res => {
//         const persons = res.data;
//         setUsers(persons);
//        // console.log(users);
//       })
//  });
const [query,setQuery]=useState("");

const handleChange=({target})=>{
setQuery(target.value);
console.log(query)
}

const handleSubmit=()=>{
axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${query}&limit=25&offset=0&rating=G&lang=en`)
      .then(res => {
        const persons = res.data;
        setUsers(persons);
        console.log(users);
      })

}

  return (
    <div>
      <NavBar />
      <Search value={query} onChange={handleChange} onClick={handleSubmit}/>
      
    </div>
  );
}

export default App;
