import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color='#FFA600' />
      </header>
      <p>Fazer a migração completa do servidor</p>
      <img src="https://api.adorable.io/avatars/150/abott@adorable.png" alt="" />
    </Container>
  );
}
