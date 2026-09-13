'use client'

import React, { useEffect, useState } from 'react'
import UserProfileModalButton from '../UserProfileModal';
import LoadData from '@/app/backend/LoadData';

type Users = {
    id:number;
    name:string;
    email:string;
}

const UsersPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<Users[]>([]);

    useEffect(() => {
        LoadData("https://jsonplaceholder.typicode.com/users").then((data) => {
            setUsers(data);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);
    

  return (
    <>
    
    <div className='p-3'>
        {
        <div className='text-base-content'>
            {
                isLoading?
                (
                    <ul className='list bg-base-100 rounded-box'>
                        {Array.from({length: 10}).map((_, i)=>
                            <li key={i} className='list-row animate-pulse'>
                            <div className='size-15 shrink-0 rounded-full bg-[currentColor]/10'></div>
                            <div className='justify-start flex w-full flex-col pt-1'>
                                    <div className='w-[60%] h-4 bg-[currentColor]/10 rounded-box mb-2'></div>
                                    <div className='w-[40%] h-3 bg-[currentColor]/10 rounded-box'></div>
                                </div>
                            <div className='w-25 h-10 bg-[currentColor]/10 rounded-[8] mb-3'></div>
                        </li>
                        )}
                    </ul>
                    ):(
                    users.length <= 0?(
                    <div className='grid place-items-center h-[80vh]'>
                        <p>No Data</p>
                    </div>
                ):(
                    <ul className='list bg-base-100 rounded-box'>
                        {users.map((u) => <li className='list-row' key={u.id}>
                            <div><img className='size-15 rounded-full' src="profile-icon.jpg" alt="profile-icon" /></div>
                            <div>
                                <strong>{u.name??""}</strong>
                                <p>{u.email}</p>
                            </div>
                            <div>
                                <UserProfileModalButton id={u.id} name={u.name} email={u.email} buttonColor='base-300'>View User</UserProfileModalButton>
                            </div>
                        </li>)}
                    </ul>
                )
            )
            }
        </div>
    }
    </div>
        
    
    </>
  )
}

export default UsersPage