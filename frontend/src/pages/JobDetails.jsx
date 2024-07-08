import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../components/Firebase';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function JobDetails() {
    const { title } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const docRef = doc(db, "Jobs", title); 
                const docSnap = await getDoc(docRef); 
                console.log(docSnap)

                if (docSnap.exists()) {
                    setJobDetails({ id: docSnap.id, ...docSnap.data().job });
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };

        getJobDetails();
    }, [title]); 

    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    const position = [jobDetails.latitude, jobDetails.longitude];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
                <div className='w-full outline rounded-md p-3'>
                    <h1 className="text-3xl font-bold mb-4">{jobDetails.jobTitle}</h1>
                    <p className="text-lg text-gray-600 mb-2">Company: {jobDetails.companyName}</p>
                    <p className="text-lg text-gray-600 mb-2">Location: {jobDetails.location}</p>
                    <p className="text-lg text-gray-600 mb-4">Description: {jobDetails.jobDescription}</p>
                </div>

                <div className='w-full outline items-center border-grey p-2 rounded-md bg-white shadow-lg'>
                    <h2 className='p-0 font-bold text-2xl'>Perks:</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-3 items-center'>
                        <div className='bg-[#fffaeb] rounded-lg p-4'>
                            <ul className='text-center'>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    Competitive Salary</li>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                    Health Insurance</li>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                    </svg>

                                    Retirement Plan</li>
                            </ul>
                        </div>

                        <div className='bg-[#fff9e6] rounded-lg p-4'>
                            <ul className='text-center'>
                                <li className='font-bold m-2 text-[#333333]  flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    Flexible Hours</li>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    Work from Home</li>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    Paid Time Off</li>
                            </ul>
                        </div>

                        <div className='bg-[#ffd600] rounded-lg p-4'>
                            <ul className='text-center'>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                    </svg>
                                    Development
                                </li>
                                <li className='font-bold m-1 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                    </svg>
                                    Employee Discounts
                                </li>
                                <li className='font-bold m-2 text-[#333333] flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                    </svg>
                                    Gym Membership
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


            <div className="mt-4 h-96 w-full">
                <MapContainer center={position} zoom={10} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            {jobDetails.companyName} <br /> {jobDetails.location}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default JobDetails;
