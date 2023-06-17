import React from "react"

const Table = ({users}) => {
  return (
    <div>
      {users.map((user)=> (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          
        </tr>
      ))}

    </div>
  )
}

export default Table