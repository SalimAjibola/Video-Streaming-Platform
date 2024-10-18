import React, { useContext } from 'react';
import { ModalContext } from '../App';

const Modal = ({ isOpen }) => {
  const { setIsOpen } = useContext(ModalContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button className="float-right" onClick={() => setIsOpen(false)}>Close</button>
        <h2 className="text-xl font-bold mb-4">Login or Sign Up</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
