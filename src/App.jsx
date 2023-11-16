import { useEffect, useState } from 'react'
import JsonData from './data/data.json';
import  JobCard  from '../components/card';
import NavBar from '../components/navbar';
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() =>{
    setData(JsonData)
  }, [])

  return (
    <>
     <section className='App'>
      <NavBar />
      <div className='jobList'>
        <ul className='grid-container'>
          {data.map((job, id) => (
            <JobCard
              key = {id}
              icon={job.logo}
              time={job.postedAt}
              dot = {job.dot}
              title={job.position}
              type={job.contract}
              company={job.company}
              country={job.location}
              background={job.logoBackground}
            />
          ))}
        </ul>
      </div>
      <button className='btn'>Load More</button>
    </section>
    </>
  )
}

export default App
