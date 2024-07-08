import React from 'react';
import VideoChatForm from '../components/VideoChatForm';
import CameraPreview from '../components/CameraPreview';


export default function Lobby() {
  return (
    <div className="flex flex-col items-center pt-0 justify-center h-screen bg-[#fff9e6]">
      <div className="max-w-4xl w-full px-8 py-12 rounded-lg shadow-lg bg-white">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-8">
          <VideoChatForm />
          <CameraPreview />
        </div>
      </div>
    </div>
  );
}
