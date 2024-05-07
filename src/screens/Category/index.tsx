import React from 'react';
import {Alert} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import api from '@services/api';
import {Header} from '@components/Header';
import {CustomInput} from '@components/CustomInput';
import {CustomRadio} from '@components/CustomRadio';
import {CustomButton} from '@components/CustomButton';
import {SectionTitle} from '@components/SectionTitle';
import {CategoriesList} from '@components/CategoriesList';
import {Body, Container, FormWrapper} from './styles';

const registerCategoryFormSchema = z.object({
  name: z
    .string()
    .min(3, {message: 'A categoria precisa ter pelo menos 3 letras'})
    .regex(/^([a-z\s]+)$/i, {
      message: 'A categoria pode ter apenas letras',
    })
    .transform(category => category.toLowerCase()),
  isForLegalAge: z.enum(['yes', 'no']).default('no'),
});

type RegisterCategoryFormData = z.infer<typeof registerCategoryFormSchema>;

export function Category() {
  const fetchCategories: () => Promise<CategoryProps[]> = async () => {
    const response = await api.get('/categories');

    return response.data;
  };

  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['/'],
    queryFn: fetchCategories,
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<RegisterCategoryFormData>({
    defaultValues: {
      name: '',
      isForLegalAge: 'no',
    },
    resolver: zodResolver(registerCategoryFormSchema),
  });

  async function handleRegister(formData: RegisterCategoryFormData) {
    try {
      const response = await api.post('/category', {
        name: formData.name,
        is_for_legal_age: formData.isForLegalAge === 'yes',
      });

      if (response.status === 200) {
        Alert.alert('Categoria cadastrada com sucesso!');
        reset();
        refetch();
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Container>
      <Header title="Categorias" />

      <Body>
        <FormWrapper>
          <SectionTitle title="Criar Categoria" />

          <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomInput
                label="Nome"
                placeholder="Nome da Categoria"
                onChangeText={onChange}
                value={value}
                errors={errors.name}
                {...register('name')}
              />
            )}
          />

          <Controller
            name="isForLegalAge"
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomRadio
                label="Restrito para maiores de 18 anos?"
                options={[
                  {label: 'Não', value: 'no'},
                  {label: 'Sim', value: 'yes'},
                ]}
                value={value}
                onChange={onChange}
              />
            )}
          />

          <CustomButton title="Salvar" onPress={handleSubmit(handleRegister)} />
        </FormWrapper>

        <CategoriesList
          title="Lista de Categorias"
          categories={categories}
          isLoading={isLoading}
        />
      </Body>
    </Container>
  );
}
