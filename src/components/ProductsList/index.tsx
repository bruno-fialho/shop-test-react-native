import React from 'react';
import {
  ActivityIndicator,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import {useTheme} from 'styled-components';

import {
  Container,
  ListHeader,
  ListHeaderText,
  List,
  ListContainer,
  ListItem,
  ListItemText,
  ListItemName,
  ListItemCategory,
  ListItemPrice,
} from './styles';
import {SectionTitle} from '@components/SectionTitle';
import {capitalize} from '@utils/capitalize';

interface ProductsListProps {
  title: string;
  products: ProductProps[];
  isLoading?: boolean;
  onEndReached?: () => void;
}

export function ProductsList({
  title,
  products,
  isLoading,
  onEndReached,
}: ProductsListProps) {
  const {COLORS} = useTheme();

  const renderProducts: ListRenderItem<ProductProps> = ({
    item,
    index,
  }: ListRenderItemInfo<ProductProps>) => (
    <ListItem key={item?.id} index={index}>
      <ListItemName>
        <ListItemText numberOfLines={1}>{capitalize(item?.name)}</ListItemText>
      </ListItemName>
      <ListItemCategory>
        <ListItemText numberOfLines={1}>
          {capitalize(item?.category.name)}
        </ListItemText>
      </ListItemCategory>
      <ListItemPrice>
        <ListItemText>{`${item?.price},00`}</ListItemText>
      </ListItemPrice>
    </ListItem>
  );

  if (!products || isLoading) {
    return <ActivityIndicator size="large" color={COLORS.BLUE_600} />;
  }

  return (
    <Container>
      <SectionTitle title={title} />

      <ListContainer>
        <ListHeader>
          <ListItemName>
            <ListHeaderText>Nome</ListHeaderText>
          </ListItemName>
          <ListItemCategory>
            <ListHeaderText>Categoria</ListHeaderText>
          </ListItemCategory>
          <ListItemPrice>
            <ListHeaderText>R$</ListHeaderText>
          </ListItemPrice>
        </ListHeader>
        <List
          data={products}
          keyExtractor={item => item?.id.toString()}
          renderItem={renderProducts}
          onEndReached={onEndReached}
        />
      </ListContainer>
    </Container>
  );
}
