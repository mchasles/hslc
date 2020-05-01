import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: block;
  height: 2.8em;
  width: 10em;
  padding: 0 0.4em;
  border-radius: 1.4em;
  border: none;
  text-align: center;
  line-height: 2.8em;
  background-color: rgb(165, 188, 84);
  box-shadow: 0 0 8px 2px rgb(0, 0, 0, 0.2);
  color: white;

  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 600;

  cursor: pointer;
`;

const BookButton = ({ className }) => (
  <Button
    className={className}
    href="https://reservation.ke-booking.com/acc/v2/show?tok=Pbb531d60f3d422680253fea8&pid=P9892150&klang=fr&krc=98defd6ee70dfb1dea416cecdf391f58"
    target="_blank"
    rel="noopener noreferrer"
  >
    Réservez
  </Button>
);

export default BookButton;
