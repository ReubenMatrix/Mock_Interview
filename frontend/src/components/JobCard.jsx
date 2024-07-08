import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function JobCard({ post, description, location, companyName }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/jobroles/${post}`);
  };

  return (
    <div className='border border-gray-300 p-4 mx-2 mt-2 shadow-lg rounded-lg'>
      <h1 className='font-bold text-2xl p-2 text-gray-800'>{post}</h1>
      <h2 className='text-xl p-2 text-gray-600'>{companyName}</h2>
      <p className='text-lg p-2 text-gray-500'>{description}</p>
      <p className='text-lg p-2 text-gray-600'>{location}</p>
      <div className='flex justify-end'>
        <Button onClick={handleViewDetails} title={'View Details'} />
      </div>
    </div>
  );
}

export default JobCard;
