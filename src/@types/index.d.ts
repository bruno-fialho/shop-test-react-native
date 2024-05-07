declare interface CategoryProps {
  id: number;
  name: string;
  is_for_legal_age: boolean;
}

declare interface ProductCategoryProps {
  name: string;
  is_for_legal_age: boolean;
}

declare interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
  category: ProductCategoryProps;
}

declare interface ProductByCategoryProps {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  image: string;
}
