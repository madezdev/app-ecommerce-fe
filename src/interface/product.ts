export interface Product {
  supplierId: number | string;
  title: string;
  description: string;
  characteristics?: typeCharacteristicSolar[];
  brand: string;
  model: string;
  origin: string;
  images: string[];
  stock: number;
  price: number;
  iva: number;
  slug: string;
  system?: typeSistem[];
  current?: typeCurrent;
  tags: string[];
  info?: string;
}

type typeCharacteristicSolar = {
  dimensions: string;
  weight: string;
  celltype?: string;
  ratedOutput?: string;
  ratedVoltage?: string;
  ratedcurrent?: string;
  openircuitVoltage?: string;
  shortCircuitCurrent?: string;
  moduleEfficiency?: string;
}

type typeSistem = 'on-grid' | 'off-grid' | 'hybrid';

type typeCurrent = 'monophase' | 'three-phase' | 'charge regulator'