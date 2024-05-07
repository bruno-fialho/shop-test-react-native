import React from 'react';

import {Title} from './styles';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({title}: SectionTitleProps) {
  return <Title>{title}</Title>;
}
