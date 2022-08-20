import React, { useEffect, useMemo } from 'react'
import { useAuthContext } from '../providers/AuthProvider'

const Home = () => {

  const { logged, user, getUser } = useAuthContext()


  useEffect(() => {
    getUser()
  }, [])



  return (
    <div> {logged ? "Hi, " + user.name : "Yore not logged in"}</div>
  )
}

export default Home