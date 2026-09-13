'use client'

import { useRef } from 'react'

interface UserModalProps {
    id: number;
    name: string;
    email: string;
    children: string;
    buttonColor: string;
}

const UserProfileModalButton = ({id, name, email, children, buttonColor}:UserModalProps) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const opemModal = () => {
      modalRef.current?.showModal();
    }
  return (
    <>
    <button className={"btn bg-"+buttonColor} onClick={opemModal}>{children}</button>
    
    <dialog ref={modalRef} className="modal">
    <div className="modal-box">
        <img className='rounded-box' src="profile-icon.jpg" alt="" />
        <h3 className="pt-5 text-lg font-bold">{name}</h3>
        <p>{email}</p>
        <div className="modal-action">
        <form method="dialog">
            <button className="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
    </>
  )
}

export default UserProfileModalButton