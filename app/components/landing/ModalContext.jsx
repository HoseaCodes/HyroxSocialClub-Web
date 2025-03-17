'use client';

import { createContext, useContext, useState } from 'react';
import Modal from './WaitListModal';
import WaitlistForm from './WaitlistForm';

const ModalContext = createContext({
  openWaitlistModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => setIsWaitlistModalOpen(true);
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <ModalContext.Provider value={{ openWaitlistModal }}>
      {children}
      
      {/* Waitlist Modal */}
      <Modal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Join Our Waitlist</h3>
          <p className="text-gray-600 mt-2">Be the first to know when PhysiquePro AI launches</p>
        </div>
        <WaitlistForm />
      </Modal>
    </ModalContext.Provider>
  );
}