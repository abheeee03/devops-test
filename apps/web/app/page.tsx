import { client } from '@repo/db/client'
import React from 'react'

async function Home() {

  const user = await client.user.findFirst()

  if(!user){
    return(
      <>
        <div className="">
          not found!
        </div>
      </>
    )
  }

  return (
    <div>
      <h1>User and Pass</h1>
      username: {user.username} <br />
      password: {user.password}
    </div>
  )
}

export default Home