import React from 'react';
import {
  ActivityIndicator,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {useTheme} from 'styled-components';

import {Container, MainList, MainListItem, MainListTitle} from './styles';
import {InnerList} from './InnerList';
import api from '@services/api';
import {capitalize} from '@utils/capitalize';

export function ProductsByCategoriesList() {
  const {COLORS} = useTheme();

  const fetchCategories: () => Promise<CategoryProps[]> = async () => {
    const response = await api.get('/categories');

    return response.data;
  };

  const {data: categories, isLoading: isLoadingCategories} = useQuery({
    queryKey: ['/'],
    queryFn: fetchCategories,
  });

  const renderCategories: ListRenderItem<CategoryProps> = ({
    item,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index,
  }: ListRenderItemInfo<CategoryProps>) => {
    return (
      <MainListItem>
        <MainListTitle>{capitalize(item.name)}</MainListTitle>

        <InnerList categoryId={item.id} />
      </MainListItem>
    );
  };

  if (isLoadingCategories) {
    return <ActivityIndicator size="large" color={COLORS.BLUE_600} />;
  }

  return (
    <Container>
      <MainList
        data={categories?.filter(c => c.name !== '')}
        initialNumToRender={3}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCategories}
      />
    </Container>
  );
}
