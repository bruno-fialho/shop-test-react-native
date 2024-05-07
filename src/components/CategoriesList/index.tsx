import React from 'react';
import {
  ActivityIndicator,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import {useTheme} from 'styled-components';

import {SectionTitle} from '@components/SectionTitle';
import {
  Container,
  ListHeader,
  ListHeaderText,
  List,
  ListContainer,
  ListItem,
  ListItemText,
  ListItemName,
  ListItemAge,
} from './styles';
import {capitalize} from '@utils/capitalize';

interface CategoriesListProps {
  title: string;
  categories: CategoryProps[] | undefined;
  isLoading?: boolean;
}

export function CategoriesList({
  title,
  categories,
  isLoading,
}: CategoriesListProps) {
  const {COLORS} = useTheme();

  const renderProducts: ListRenderItem<CategoryProps> = ({
    item,
    index,
  }: ListRenderItemInfo<CategoryProps>) => (
    <ListItem key={item.id} index={index}>
      <ListItemName>
        <ListItemText numberOfLines={1}>{capitalize(item.name)}</ListItemText>
      </ListItemName>
      <ListItemAge>
        <ListItemText>{item.is_for_legal_age ? 'S' : 'N'}</ListItemText>
      </ListItemAge>
    </ListItem>
  );

  if (!categories || isLoading) {
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
          <ListItemAge>
            <ListHeaderText>{'+18'}</ListHeaderText>
          </ListItemAge>
        </ListHeader>
        <List
          data={categories.filter(c => c.name !== '')}
          keyExtractor={item => item?.id.toString()}
          renderItem={renderProducts}
        />
      </ListContainer>
    </Container>
  );
}
