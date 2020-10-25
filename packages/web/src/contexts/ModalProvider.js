import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

const enableBodyScroll = () => {
  document.body.style.overflow = 'hidden auto';
};

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const ModalProvider = ({ children }) => {
  const [value, setValue] = useState({
    isOpen: false,
    windowOffet: 0,
    onCloseModal: () => {
      enableBodyScroll();
      setValue(prev => ({ ...prev, isOpen: false }));
    },
    onOpenModal: () => {
      disableBodyScroll();
      setValue(prev => ({
        ...prev,
        isOpen: true,
        windowOffet: window.scrollY,
      }));
    },
  });

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
