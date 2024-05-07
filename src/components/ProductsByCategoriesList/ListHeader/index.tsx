import React from 'react';

import {MainListHeader, MainListHeaderText} from './styles';

interface ListHeaderProps {
  name: string;
}

export function ListHeader({name}: ListHeaderProps) {
  return (
    <MainListHeader>
      <MainListHeaderText>{name}</MainListHeaderText>
    </MainListHeader>
  );
}
