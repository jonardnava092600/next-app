'use client'

import { DeleteMovie } from "@/app/backend/DeleteMovie"
import { InsertMovie } from "@/app/backend/InsertMovie"
import { LoadMovies } from "@/app/backend/LoadMovies"
import { UpdateMovie } from "@/app/backend/UpdateMovie"
import { title } from "process"
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
    <div>MAY BAGO</div>
    <button className="btn bg-sky-500">Accent</button>

    {/* <div>{JSON.stringify(movies)}</div> */}

    {/* <form className="m-5 p-2 bg-base-200 card shadow-xl w-[50%]">
      <fieldset className="fieldset">
          <label className="label" htmlFor="title">Title</label>
          <input type="text" id="title" className="input w-full" placeholder="Title" />
          <label className="label" htmlFor="year">Year</label>
          <input type="number" id="year" className="input w-full" placeholder="Year" />
              <div><button type="submit" className="btn btn-primary w-full">Add</button></div>

      </fieldset>
    </form>

    <div><button onClick={()=> {
      UpdateMovie(2, "Batman", 2010)
    }} className="btn btn-primary m-2">Update</button></div>
    <div><button onClick={DeleteMovie} className="btn btn-primary m-2">Delete</button></div> */}
    </>
  )
}

export default HomePage
