'use client';

import React from 'react';
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
      name: 'James',
      photoUrl: '/images/James2.jpg'
    },
    {
      id: '5',
      name: 'John',
      photoUrl: '/images/John.jpg'
    },
    {
      id: '6',
      name: 'Julian',
      photoUrl: '/images/Julian.JPG'
    },
    {
      id: '7',
      name: 'Nolan',
      photoUrl: '/images/Nolan.JPG'
    },
    {
      id: '8',
      name: 'Obiora',
      photoUrl: '/images/Obiora.jpg'
    },
    {
      id: '9',
      name: 'Ryan',
      photoUrl: '/images/Ryan.jpg'
    }
  ];

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
            >
              {/* User photo card with 3:4 aspect ratio */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
                <Image 
                  src={user.photoUrl} 
                  alt={user.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
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
    </div>
  );
}
