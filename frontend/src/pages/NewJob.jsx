import React, { useState } from 'react'
import InputField from '../components/InputField'
import AuthenticationHeader from '../components/AuthenticationHeader'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../components/Firebase';

function NewJob() {
  const[jobTitle, setJobtitle] = useState('')
  const[companyName, setCompanyName] = useState('')
  const[jobDescription, setJobDescription] = useState('')
  const[location, setLocation] = useState('')
  const[latitude, setLatitude] = useState('')
  const[longitude, setLongitude] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const job = {
        jobTitle: jobTitle,
        companyName: companyName,
        jobDescription: jobDescription,
        location: location,
        latitude: latitude,
        longitude: longitude
      }
      await setDoc(doc(db,"Jobs",jobTitle),{
        job
      });
    }catch(err){
      console.log(err.message)
    }
  }


  return (
    <div className='bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg items-center my-auto mx-auto mt-6 p-8 w-96 rounded-lg'>
      <div className='p-4 w-full bg-white rounded-md shadow-md'>
        <AuthenticationHeader title='Add New Job' />
        <div className='p-3'>
          <InputField onChange={(e)=>{
            setJobtitle(e.target.value)
          }} placeholder='Enter job title' label='Job Title' />
        </div>

        <div className='p-3'>
          <InputField onChange={(e)=>{
            setCompanyName(e.target.value)
          }} placeholder='Enter company name' label='Company Name' />
        </div>
        
        <div className='p-3'>
          <InputField onChange={(e)=>{
            setJobDescription(e.target.value)
          }} placeholder='Enter job description' label='Job Description' />
        </div>

        <div className='p-3'>
          <InputField onChange={(e)=>{
            setLocation(e.target.value)
          }} placeholder='Enter location' label='Location' />
        </div>

        <div className='p-3 flex flex-row gap-2 items-end'>
          <InputField onChange={(e)=>{
            setLatitude(e.target.value)
          }} placeholder='Enter latitude' label='Coordinates' />
          
          <InputField onChange={(e)=>{
            setLongitude(e.target.value)
          }} placeholder='Enter longitude' />
        </div>

        <div className='p-3'>
          <button onClick={handleRegister} className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'>
            Add Job
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewJob
