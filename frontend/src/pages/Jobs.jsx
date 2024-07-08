import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../components/Firebase';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Jobs"));
        const jobsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data().job }));
        setJobs(jobsList);
        console.log(jobsList);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Available Jobs</h2>
        <button
          onClick={() => navigate('/newJob')}
          className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add New Job
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {jobs.map((job) => (
          <JobCard 
            key={job.id} 
            post={job.jobTitle} 
            location={job.location} 
            description={job.jobDescription} 
            companyName={job.companyName} 
          />
        ))}

      </div>
    </div>
  );
}

export default Jobs;
