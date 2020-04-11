import React, { useRef, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

export const Context = React.createContext();

export const ModalProvider = ({ children }) => {
  const modalRef = useRef();
  const [context, setContext] = useState({ modalNode: null });

  // make sure re-render is triggered after initial
  // render so that modalRef exists
  useEffect(() => {
    setContext({ modalNode: modalRef.current });
  }, []);

  return (
    <Container>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </Container>
  );
};

export const Modal = ({ onClose, onOverlayClick, children, ...props }) => {
  const { modalNode } = useContext(Context);

  return modalNode
    ? ReactDOM.createPortal(
        <Overlay onClick={onOverlayClick}>
          <Dialog {...props}>{children}</Dialog>
        </Overlay>,
        modalNode
      )
    : null;
};

const fadeIn = keyframes`from { opacity: 0; }`;

const Container = styled.div`
  position: relative;
  z-index: 0;
`;

const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 82vw;
  height: 82vh;
  transform: translate(-50%, -50%);
  z-index: 1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
