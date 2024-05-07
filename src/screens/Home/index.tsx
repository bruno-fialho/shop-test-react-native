import React from 'react';

import {Container, MarketImage, ImageContainer, Body} from './styles';

import marketImg from '@assets/market.jpeg';
import {Header} from '@components/Header';

export function Home() {
  return (
    <Container>
      <Header title="Home" />

      <Body>
        <ImageContainer>
          <MarketImage source={marketImg} />
        </ImageContainer>
      </Body>
    </Container>
  );
}
