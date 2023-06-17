import React, { useEffect, useState } from 'react'
import Table from './components/Table'

const App = () => {
  const [users, setUsers] = useState([
    
  ])
  const userDetails = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(Data=>{
      setUsers(Data)
    })
  }
useEffect(()=>{
  userDetails()
}, [])

  return (
    <div>
      <Table users={users}/>
    </div>
  )
}

export default App
