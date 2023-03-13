import React,{useState,useEffect} from 'react';
import './App.css'


function App  () {
  let[data,setData] = useState([])
  let[search ,setSearch] = useState('')

  useEffect(() =>{
    fetch('https://emoji-api.com/emojis?access_key=80f69dabb82f0487cef541e88c0ec7eb3c1bdf3f')
    .then(res => res.json())
    .then(res => setData(res))

  },[])
  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  let handlSubmit = () =>{
    if (search !== ''){
      fetch(`https://emoji-api.com/emojis?search=${search}&access_key=80f69dabb82f0487cef541e88c0ec7eb3c1bdf3f`)
    .then(res => res.json())
    .then(res => setData(res))

    }
  }

  return (
    <div className='App'>
      <div className='menu'>
      <div className='menu-items'>
      <h1>Emoji Search</h1>
      <p> A Sipmle Emoji Search App</p>
      <input type='text' placeholder='Emoji Name' value={search} onChange={(e) => handleSearch(e)}></input>
      <button onClick={() => handlSubmit()}>Search</button>
      </div>
      </div>
     
      <div className='container'>
        {
          data.map((e,i) => 
          <div className='card' key={e.slug}>
          <p className='emoji'>{e.character}</p>
          <p className='name'>{e.unicodeName}</p>
        </div>
          )
        }
      </div>
      
    </div>
  );
}

export default App
