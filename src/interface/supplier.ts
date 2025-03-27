export interface Supplier {
  id: string
  name: string
  seller: string
  email: string
  phone: string
  address: Address
  url?: string
}

type Address ={
  street: string
  city: string
  state: string
  zip: string
  country: string
}