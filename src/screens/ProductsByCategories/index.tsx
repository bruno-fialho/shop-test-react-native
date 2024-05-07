import React from 'react';

import {Header} from '@components/Header';
import {ProductsByCategoriesList} from '@components/ProductsByCategoriesList';
import {Body, Container} from './styles';

export function ProductsByCategories() {
  return (
    <Container>
      <Header title={`Produtos${'\n'}por${'\n'}Categorias`} />

      <Body>
        <ProductsByCategoriesList />
      </Body>
    </Container>
  );
}
