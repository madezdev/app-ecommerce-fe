'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ProductCard } from '@/components/product-card/product-card'
import { titleFont } from '@/config/fonts'
import { categoryPhotovoltaic } from '@/constants/categoryProduct'
import { IProductCard } from '@/interface/product-cards'
import { getProductCars } from '@/lib/get-product-cars'

export default function ProductsPage () {
  const [products, setProducts] = useState<IProductCard[]>( [] )
  const [filteredProducts, setFilteredProducts] = useState<IProductCard[]>( [] )
  const [selectedCategory, setSelectedCategory] = useState<string>( 'Todos los productos' ) // ✅ Valor por defecto

  useEffect( () => {
    const fetchProducts = async () => {
      const res = await getProductCars()
      setProducts( res.filter( ( p: IProductCard ) => p.category === 'fotovoltaico' ) )
    }
    fetchProducts()
  }, [] )

  // 🔹 Filtrar productos cuando cambia la categoría seleccionada
  useEffect( () => {
    if ( selectedCategory === 'Todos los productos' ) {
      setFilteredProducts( products ) // ✅ Muestra todos los productos
    } else {
      setFilteredProducts( products.filter( ( p ) => p.type === selectedCategory ) )
    }
  }, [selectedCategory, products] )

  return (
    <div className='relative xl:container mx-4 lg:mx-8 xl:mx-auto flex gap-3 p-4 shadow-md bg-nwhite rounded-xl mt-[140px] mb-4'>

      {/* 📌 Sidebar de Categorías */ }
      <div className='flex flex-col gap-4 bg-sblue/10 p-4 rounded-lg w-[300px]'>
        <h2 className={ `${ titleFont.className } text-[18px] text-sblue font-semibold` }>Categorías</h2>
        <ul className='flex flex-col gap-2'>
          { categoryPhotovoltaic.map( ( c ) => (
            <li
              key={ c.id }
              onClick={ () => setSelectedCategory( c.value ) } // ✅ Selecciona la categoría correcta
              className={ clsx( `capitalize text-sm text-sblue hover:bg-pyellow/50 p-1 rounded transition-all delay-50 hover:shadow-md cursor-pointer`, {
                'bg-pyellow/50': selectedCategory === c.value
              } ) }
            >
              { c.value }
            </li>
          ) ) }
        </ul>
      </div>

      {/* 📌 Lista de Productos */ }
      <div className='w-full flex gap-4 flex-wrap'>
        { filteredProducts.length > 0 ? (
          filteredProducts.map( ( p: IProductCard ) => (
            <ProductCard
              key={ p.slug }
              slug={ p.slug }
              title={ p.title }
              description={ p.description }
              brand={ p.brand }
              price={ p.price }
              img={ Array.isArray( p.img ) ? p.img[ 0 ] : p.img }
            />
          ) )
        ) : (
          <p className="text-gray-500">No hay productos en esta categoría.</p>
        ) }
      </div>

    </div>
  )
}
