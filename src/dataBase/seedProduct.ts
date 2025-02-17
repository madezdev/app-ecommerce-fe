import bcrypt from 'bcryptjs'

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    category: 'residential' | 'commercial' | 'industrial';
}

interface SeedUser {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'client';
}

type ValidTypes = 'solar-panels' | 'inverters' | 'batteries' | 'accessories';

interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Solar Admin',
      email: 'admin@solarpower.com',
      password: bcrypt.hashSync('123456'),
      role: 'admin'
    },
    {
      name: 'John Doe',
      email: 'john.doe@solarpower.com',
      password: bcrypt.hashSync('123456'),
      role: 'client'
    },
  ],
  products: [
    {
      description: 'High-efficiency monocrystalline solar panel with a power output of 400W. Ideal for residential and commercial use.',
      images: [
        'solar-panel-1.jpg',
        'solar-panel-2.jpg',
      ],
      inStock: 50,
      price: 250,
      slug: 'high-efficiency-solar-panel',
      type: 'solar-panels',
      tags: ['solar', 'panel', 'monocrystalline'],
      title: 'High-Efficiency Solar Panel',
      category: 'residential'
    },
    {
      description: 'Advanced solar inverter with a maximum efficiency of 98%. Compatible with all types of solar panels.',
      images: [
        'inverter-1.jpg',
        'inverter-2.jpg',
      ],
      inStock: 30,
      price: 500,
      slug: 'advanced-solar-inverter',
      type: 'inverters',
      tags: ['inverter', 'solar', 'high-efficiency'],
      title: 'Advanced Solar Inverter',
      category: 'commercial'
    },
    {
      description: 'Lithium-ion solar battery with a capacity of 10kWh. Perfect for energy storage in residential solar systems.',
      images: [
        'battery-1.jpg',
        'battery-2.jpg',
      ],
      inStock: 20,
      price: 3000,
      slug: 'lithium-ion-solar-battery',
      type: 'batteries',
      tags: ['battery', 'lithium-ion', 'energy-storage'],
      title: 'Lithium-Ion Solar Battery',
      category: 'residential'
    },
    {
      description: 'Solar panel mounting kit for rooftop installations. Includes all necessary hardware for a secure setup.',
      images: [
        'mounting-kit-1.jpg',
        'mounting-kit-2.jpg',
      ],
      inStock: 100,
      price: 150,
      slug: 'solar-panel-mounting-kit',
      type: 'accessories',
      tags: ['mounting', 'accessories', 'installation'],
      title: 'Solar Panel Mounting Kit',
      category: 'industrial'
    },
    {
      description: 'Portable solar charger for small devices. Perfect for outdoor activities and emergency power backup.',
      images: [
        'portable-charger-1.jpg',
        'portable-charger-2.jpg',
      ],
      inStock: 200,
      price: 50,
      slug: 'portable-solar-charger',
      type: 'accessories',
      tags: ['portable', 'charger', 'solar'],
      title: 'Portable Solar Charger',
      category: 'residential'
    },
    {
      description: 'Commercial-grade solar panel with a power output of 500W. Designed for large-scale solar farms.',
      images: [
        'commercial-panel-1.jpg',
        'commercial-panel-2.jpg',
      ],
      inStock: 15,
      price: 400,
      slug: 'commercial-solar-panel',
      type: 'solar-panels',
      tags: ['commercial', 'solar', 'panel'],
      title: 'Commercial Solar Panel',
      category: 'commercial'
    },
    {
      description: 'Hybrid solar inverter with battery backup. Ideal for off-grid and hybrid solar systems.',
      images: [
        'hybrid-inverter-1.jpg',
        'hybrid-inverter-2.jpg',
      ],
      inStock: 25,
      price: 800,
      slug: 'hybrid-solar-inverter',
      type: 'inverters',
      tags: ['hybrid', 'inverter', 'battery-backup'],
      title: 'Hybrid Solar Inverter',
      category: 'industrial'
    },
    {
      description: 'Solar-powered LED street light with a built-in battery. Perfect for remote areas and public spaces.',
      images: [
        'street-light-1.jpg',
        'street-light-2.jpg',
      ],
      inStock: 40,
      price: 200,
      slug: 'solar-led-street-light',
      type: 'accessories',
      tags: ['solar', 'led', 'street-light'],
      title: 'Solar LED Street Light',
      category: 'industrial'
    },
  ]
}