import { Product } from "@/types";
import queryString from "query-string";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
} 

const getProducts = async (query: Query): Promise<Product[]> => {
  const uri = queryString.stringifyUrl({
    url: url,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  });

  const res = await fetch(uri);

  return res.json();
}

export default getProducts;