import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

export default function App() {
  const Numbers = [
    { id: 1, Name: 'punit sharma', mobno: '123 456 7898', address: 'idontknow@gmail.com' },
    { id: 2, Name: 'rohan kumar', mobno: '133 416 7438', address: 'evenIDontKnow@gmail.com' },
    { id: 3, Name: 'sohan rana', mobno: '198 138 9236', address: 'iDontCare@gmail.com' },
    { id: 4, Name: 'mohan mishra', mobno: '156 245 7289', address: 'whateverItIs@gmail.com' },
  ]



  return (
    <div>
      <Navbar />
      <div className='flex gap-5 flex-row col-span-2 justify-center'>
        {/* <Hero/> */}
        {Numbers.map(profiles => <div key={profiles.id} ><Hero everything={profiles} key={profiles.id} /></div>)}
      </div>
    </div>
  )
}
