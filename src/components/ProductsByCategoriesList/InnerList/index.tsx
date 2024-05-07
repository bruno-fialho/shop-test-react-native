import React, {useEffect, useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {ListRenderItem, ListRenderItemInfo} from 'react-native';

import {
  Container,
  InnerFlatList,
  InnerListItem,
  InnerListItemTitle,
  InnerListItemImageContainer,
  InnerListItemImage,
  InnerListItemPrice,
} from './styles';
import {ListHeader} from '../ListHeader';
import api from '@services/api';
import {capitalize} from '@utils/capitalize';

interface InnerListProps {
  categoryId: number;
}

interface FetchProductsRequestProps {
  pageParam: number;
}

export function InnerList({categoryId}: InnerListProps) {
  const [products, setProducts] = useState<ProductByCategoryProps[]>([]);

  const fetchProductsByCategory = async ({
    pageParam,
  }: FetchProductsRequestProps) => {
    const response = await api.get(`/category/${categoryId}`, {
      params: {page: pageParam, perPage: 4},
    });

    return response.data;
  };

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery({
      queryKey: [`/productsByCategory/${categoryId}`],
      queryFn: fetchProductsByCategory,
      initialPageParam: 1,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getNextPageParam: (lastPage, pages) => {
        const nextPage = lastPage.meta.page + 1;
        return nextPage <= lastPage.meta.lastPage ? nextPage : undefined;
      },
    });

  useEffect(() => {
    const newProducts = data?.pages[data.pages.length - 1].data || [];
    setProducts(prev => [...prev, ...newProducts]);
  }, [data]);

  function handlefetchNextPage() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  const renderProducts: ListRenderItem<ProductByCategoryProps> = ({
    item,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index,
  }: ListRenderItemInfo<ProductByCategoryProps>) => (
    <InnerListItem key={item.id}>
      <InnerListItemTitle numberOfLines={1}>
        {capitalize(item.name)}
      </InnerListItemTitle>
      <InnerListItemImageContainer>
        <InnerListItemImage
          source={{uri: item.image}}
          alt={`Imagem do ${item.name}`}
        />
      </InnerListItemImageContainer>
      <InnerListItemPrice>{`R$ ${item.price},00`}</InnerListItemPrice>
    </InnerListItem>
  );

  return (
    <Container>
      <InnerFlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={ListHeader}
        renderItem={renderProducts}
        initialNumToRender={4}
        horizontal
        onEndReached={handlefetchNextPage}
      />
    </Container>
  );
}
