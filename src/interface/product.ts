import { Inventory } from './inventory'
import { Price } from './price'

export interface Product {
  supplierId: string;
  title: string;
  description: string;
  specification?: Record<string, string | number>;
  brand: string;
  model: string;
  origin: string;
  images: string[];
  stock: Inventory;
  price: Price;
  warranty?: string;
  slug: string;
  category: number;
  system?: number;
  subCategory: number;
  tags: string[];
  information: string;
  url: string;
  logo?: string;
  reviews?: string[];
  questions?: string[];
}

export type System = [
  {id:1, name: 'on_grid'},
  {id:2, name: 'off_grid'},
  {id:3, name: 'hybrid'},
  {id:4, name: 'heat_pipe'},
  {id:5, name: 'termosifon'},
  {id:6, name: 'other'}
];
export type typeCharacteristic = [
  {id:1, name: 'fotovoltaico'},
  {id:2, name: 'bombas'},
  {id:3, name: 'climatizacion'},
  {id:4, name: 'termica'},
  {id:5, name: 'other'}
]
export type typeSubCategory = [
  {id:1, name: 'panel_solar'},
  {id:2, name: 'inversor'},
  {id:3, name: 'baterias'},
  {id:4, name: 'controlador'},
  {id:5, name: 'kit_solar'},
  {id:6, name: 'accesorios'},
  {id:7, name: 'ferreteria'},
  {id:8, name: 'protecciones'},
  {id:9, name: 'esruturas'},
  {id:10, name: 'movilidad'},
  {id:11, name: 'termica'},
  {id:12, name: 'bombeoSolar'},
  {id:13, name: 'calefaccion_solar'},
  {id:14, name: 'otros'}
]