'use client'

import { LoadMovies } from "@/app/backend/LoadMovies"
import { useEffect, useState } from "react"

const HomePage = () => {

  const [movies, setMovies] = useState<unknown[]>([])

  useEffect(() => {
    LoadMovies().then((data) => {
      if (Array.isArray(data)) {
        setMovies(data)
      }
    })
  }, [])

  return (
    <>
    <div>POASDIASDHIOASdyhas</div>
    <div>{JSON.stringify(movies)}</div>
    </>
  )
}

export default HomePage