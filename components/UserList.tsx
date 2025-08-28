'use client';

import React, { useState } from 'react';
import Image from 'next/image';

/**
 * Interface for user data
 */
interface User {
  id: string;
  name: string;
  photoUrl: string;
}

/**
 * UserList Component
 * 
 * A simple scrollable grid displaying users with their photos and names
 * Similar to the reference image with a 2-column layout
 */
export default function UserList() {
  // State for modal
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // User data matching your actual photos
  const users: User[] = [
    {
      id: '1',
      name: 'Gabe',
      photoUrl: '/images/Gabe.jpeg'
    },
    {
      id: '2', 
      name: 'Jack',
      photoUrl: '/images/jack.jpg'
    },
    {
      id: '3',
      name: 'James',
      photoUrl: '/images/James.JPG'
    },
    {
      id: '4',
      name: 'John',
      photoUrl: '/images/John.jpg'
    },
    {
      id: '5',
      name: 'Julian',
      photoUrl: '/images/Julian.JPG'
    },
    {
      id: '6',
      name: 'Nolan',
      photoUrl: '/images/Nolan.JPG'
    },
    {
      id: '7',
      name: 'Obiora',
      photoUrl: '/images/Obiora.jpg'
    },
    {
      id: '8',
      name: 'Ryan',
      photoUrl: '/images/Ryan.jpg'
    },
    {
      id: '9',
      name: 'Scott',
      photoUrl: '/images/Scott.jpeg'
    },
    {
      id: '10',
      name: 'James',
      photoUrl: '/images/James2.jpg'
    }
  ];

  // Open modal
  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  // Close modal
  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Main container with padding */}
      <div className="px-4 pt-4 pb-8">
        {/* Grid of users - 2 columns on mobile, responsive */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="relative cursor-pointer transition-all duration-200 hover:scale-[1.02]"
              onClick={() => openModal(user)}
            >
              {/* User photo card with 3:4 aspect ratio */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
                <img 
                  src={user.photoUrl} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                  style={{ imageOrientation: 'from-image' }}
                />
              </div>
              
              {/* User name below photo */}
              <div className="mt-2 px-1">
                <h3 className="font-semibold text-sm text-white text-center">
                  {user.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded image */}
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          {/* Modal content */}
          <div 
            className="relative max-w-full max-h-full flex items-center justify-center"
          >
            {/* Expanded image - clicking it will close the modal */}
            <div 
              className="relative transition-all duration-300 ease-in-out transform scale-100 opacity-100 cursor-pointer"
              onClick={closeModal}
            >
              <img
                src={selectedUser.photoUrl}
                alt={selectedUser.name}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                style={{
                  touchAction: 'pinch-zoom'
                }}
              />
            </div>
            
            {/* User name below expanded image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-lg pointer-events-none">
              <h3 className="text-white text-lg font-semibold text-center">
                {selectedUser.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
