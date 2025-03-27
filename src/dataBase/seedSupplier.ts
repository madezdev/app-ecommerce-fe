import { Supplier } from '@/interface/supplier'

export const initialSupplier: Supplier[] = [{
  id: '1',
  name: 'YPF Solar',
  seller: 'Juan Perez',
  email: 'name@name.com',
  phone: '1234567890',
  address: {
    street: 'Av. Rivadavia 1234',
    city: 'CABA',
    state: 'Buenos Aires',
    zip: '1234',
    country: 'Argentina'
  },
  url: 'www.ypfsolar.com'
}]