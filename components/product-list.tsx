import React from 'react'

import { Product } from '@/types'
import NoResults from '@/components/ui/no-results'
import ProductCard from './ui/product-card'

interface ProductListProps {
  title: string
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3'>
        {items.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList