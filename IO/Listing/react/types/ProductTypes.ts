export interface ProductDataType {
  title: string
  brand: string
  itemId: string
  link: string
  imageLink: string
  price: { value: number }
  salePrice: { value: number }
  variations: ProductVariation;
}

interface ProductVariation {
  availability: boolean[];
  imageLink: string[];
  images: string[];
  isActive: boolean[];
  itemId: number[];
  listPrice: {
    value: string[];
  };
  price: {
    value: string[];
  };
  salePrice: {
    value: string[];
  };
  title: string[];
}
