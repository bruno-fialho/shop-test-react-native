import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import api from '@services/api';
import {Header} from '@components/Header';
import {CustomInput} from '@components/CustomInput';
import {CustomButton} from '@components/CustomButton';
import {CustomSelect} from '@components/CustomSelect';
import {SectionTitle} from '@components/SectionTitle';
import {ProductsList} from '@components/ProductsList';
import {CustomCurrencyInput} from '@components/CustomPriceInput';
import {Body, Container, FormWrapper} from './styles';

const registerProductFormSchema = z.object({
  name: z
    .string({
      required_error: 'O produto é obrigatório',
      invalid_type_error: 'O produto precisa ser uma string',
    })
    .min(3, {message: 'O produto precisa ter pelo menos 3 letras'})
    .regex(/^([a-z\s]+)$/i, {
      message: 'O produto pode ter apenas letras',
    })
    .transform(product => product.toLowerCase()),
  price: z.coerce
    .number({
      required_error: 'O preço é obrigatório',
      invalid_type_error: 'O preço precisa ser um número',
    })
    .positive({message: 'O preço precisa ser positivo'}),
  category: z.string({
    required_error: 'A categoria é obrigatória',
    invalid_type_error: 'A categoria precisa ser uma string',
  }),
});
-2;
type RegisterProductFormData = z.infer<typeof registerProductFormSchema>;

interface FetchProductsRequestProps {
  pageParam: number;
}

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const fetchCategories: () => Promise<CategoryProps[]> = async () => {
    const response = await api.get('/categories');

    return response.data;
  };

  const {data: categories, isLoading: isLoadingCategories} = useQuery({
    queryKey: ['/categories'],
    queryFn: fetchCategories,
  });

  const fetchProducts = async ({pageParam}: FetchProductsRequestProps) => {
    const response = await api.get('/', {params: {page: pageParam}});

    return response.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingProducts,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['/products'],
    queryFn: fetchProducts,
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

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<RegisterProductFormData>({
    defaultValues: {
      name: undefined,
      price: undefined,
      category: undefined,
    },
    resolver: zodResolver(registerProductFormSchema),
  });

  async function handleRegister(formData: RegisterProductFormData) {
    try {
      const response = await api.post('/', {
        name: formData.name,
        price: formData.price / 100,
        category: formData.category,
      });

      if (response.status === 200) {
        Alert.alert('Produto cadastrado com sucesso!');
        reset();
        refetch();
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Container>
      <Header title="Produtos" />

      <Body>
        <FormWrapper>
          <SectionTitle title="Criar Produto" />

          <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomInput
                label="Nome"
                placeholder="Nome do Produto"
                onChangeText={onChange}
                value={value}
                inputMode="text"
                errors={errors.name}
                {...register('name')}
              />
            )}
          />

          <Controller
            name="price"
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomCurrencyInput
                label="Preço"
                placeholder="0.00"
                onChangeText={onChange}
                value={value?.toString()}
                inputMode="decimal"
                errors={errors.price}
                {...register('price')}
              />
            )}
          />

          <Controller
            name="category"
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomSelect
                label="Categoria"
                placeholder="Selecione uma categoria"
                options={categories || []}
                value={value}
                onValueChange={onChange}
                isLoading={isLoadingCategories}
                errors={errors.category}
                {...register('category')}
              />
            )}
          />

          <CustomButton title="Salvar" onPress={handleSubmit(handleRegister)} />
        </FormWrapper>

        <ProductsList
          title="Lista de Produtos"
          products={products}
          isLoading={isLoadingProducts}
          onEndReached={handlefetchNextPage}
        />
      </Body>
    </Container>
  );
}
