import { initialInventory } from './seedInventory'
import { initialPrice } from './seedPrice'
import { Product } from '../interface/product'
import { Price } from '../interface/price'
import { Inventory } from '../interface/inventory'

const getInventory = (productId: string): Inventory => {
  return initialInventory.find(p => p.product_id === productId) ?? {
    product_id: productId,
    stock: 0,
    isActive: true
  }
}

const getPrice = (productId: string): Price => {
  return initialPrice.find(p => p.product_id === productId) ?? {
    price: 0,
    iva: 0,
    outstanding: false,
    product_id: productId
  }
}

interface SeedData {
  products: Product[];
}

export const initialData: SeedData = {
  products: [
    {
      supplierId: '5912',
      title: 'Panel solar 585W - bifacial Astro N5 - Tier 1',
      description: '14.36A (Isc) | 51.50V (Voc) | 144 medias celdas | Monocristalino Half Cell',
      specification: {
        dimensiones: '2278x1134x30',
        peso: '32.1',
        tipo_Celda: 'monocristalino',
        potencia_nominal: '585',
        voltaje_nominal: '43.27',
        corriente_nominal: '13.52',
        voltaje_circuito_abierto: '51.50',
        corriente_cortocircuito: '14.36',
        eficiencia_modulo: '22.6'
      },
      brand: 'Astronergy',
      model: 'Astro N5',
      origin: 'China',
      images: ['ps-bi-astro.webp', 'ps-bi-astro-585W_1.webp', 'ps-bi-astro-585W_2.webp'],
      stock: getInventory('5912'),
      price: getPrice('5912'),
      slug: 'panel-solar-585wp-astronergy-5912',
      category: 1,
      system: 6,
      subCategory: 1,
      tags: ['solar', 'panel', 'policristalino', '585W', 'astronergy', 'astro N5', 'high-efficiency', 'photovoltaic', 'bifacial'],
      information: 'Panel solar 585W bifacial monocristalino Astro N5 - Tier 1, 144 celdas, 5BB, 30 años de garantía de potencia lineal, 15 años de garantía de producto, certificado por TÜV Rheinland. La serie ASTRO N5 emplea la tecnología de celdas TOPCon 4.0 tipo n de última generación, desarrollada por Astronergy, y obleas de silicio de gran tamaño de 182 mm, combinadas con tecnología SMBB. Gracias a su encapsulado de alta densidad, corte no destructivo y otros procesos avanzados, el producto mejora aún más el rendimiento y la fiabilidad de la generación de energía para satisfacer las necesidades de los clientes en cualquier escenario.',
      url: 'www.astronergy.com'
    },
    {
      supplierId: '5960',
      title: 'Panel solar 450W - bifacial Astro N7s - Tier 1',
      description: 'Black frame | 14.35A (Isc) | 39.2 (Voc) | 108 celdas ',
      specification: {
        dimensiones: '1762x1134x30',
        peso: '21.5',
        tipo_celda: 'mono_cristalino_tipo_N',
        potencia_nominal: '450',
        voltaje_nominal: '32.94',
        corriente_nominal: '13.66',
        voltaje_circuito_abierto: '39.20',
        corriente_cortocircuito: '14.35',
        eficiencia_modulo: '22.5'
      },
      brand: 'Astronergy',
      model: 'Astro N7s',
      origin: 'China',
      images: ['ps-bi-astro-black.webp', 'ps-bi-astro-450W_1.webp', 'ps-bi-astro-450W_2.webp'],
      stock: getInventory('5960'),
      price: getPrice('5960'),
      slug: 'panel-solar-450wp-astroenrgy-5960',
      category: 1,
      system: 6,
      subCategory: 1,
      tags: ['solar', 'panel', 'monocristalino', 'Black Frame', 'Astro N7s', '450W', 'bifacial', 'high-efficiency', 'photovoltaic'],
      information: 'Panel solar 450W bifacial monocristalino Black Frame Astro N7s - Tier 1, 108 celdas, 5BB, 30 años de garantía de potencia lineal, 15 años de garantía de producto, certificado por TÜV Rheinland. Equipado con la tecnología de células solares TOPCon 4.0 de Astronergy, recientemente mejorada, que utiliza obleas de silicio rectangulares y la innovadora tecnología ZBB, el módulo completamente negro de 48 células alcanza una potencia de 460 W y una eficiencia de hasta un 23,0 %. No tiene barras colectoras, cintas tipo arpón ni puntos PAD. La incorporación de accesorios negros, como marcos, realza su estética. Su diseño elegante, con una dimensión única de <2 m² y un peso de <23 kg, facilita su instalación y manejo por una sola persona. Se adapta perfectamente a las aplicaciones residenciales, con las ventajas únicas de ser ligero, eficiente, de alta calidad y estético.',
      url: 'www.astronergy.com'
    },
    {
      supplierId: '5856',
      title: 'Panel solar 330W policristalino Nuuko',
      description: '9.22A (Isc) | 45.5V (Voc) | 72 celdas | Policristalino',
      specification:
        {
          dimensiones: '1956x992x35',
          peso: '22',
          tipo_celda: 'policristalino',
          potencia_nominal: '330',
          voltaje_nominal: '37.8',
          corriente_nominal: '8.73',
          voltaje_circuito_abierto: '45.5',
          corriente_cortocircuito: '9.22',
          eficiencia_modulo: '17.0'
        }
      ,
      brand: 'Nuuko',
      model: 'NKP330-72P',
      origin: 'China',
      images: ['ps-pl-nuuko.webp', 'ps-pl-nuuko-330w_1.webp', 'ps-pl-nuuko-330w_2.webp'],
      stock: getInventory('5856'),
      price: getPrice('5856'),
      slug: 'panel-solar-330wp-nuuko-5856',
      category: 1,
      system: 6,
      subCategory: 1,
      tags: [
        'solar',
        'panel',
        'policristalino',
        '330W',
        'nuuko',
        'high-efficiency',
        'photovoltaic'
      ],
      information: 'Panel solar 330W policristalino Nuuko, 72 celdas, 25 años de garantía de potencia lineal, 12 años de garantía de producto. El panel solar Nuuko 330W policristalino está diseñado para ofrecer una combinación de alta eficiencia y resistencia estructural. Cuenta con un marco reforzado con tecnología de doble capa impermeable, protección contra microgrietas y PID, asegurando un rendimiento estable a largo plazo. Su capacidad de soportar condiciones extremas lo convierte en una excelente opción para proyectos residenciales y comerciales.',
      url: 'www.nuukopower.com'
    },
    {
      supplierId: '5391',
      title: 'Panel Solar 290W AMERISOLAR AS-6P30',
      description: ' 9,59A (Isc) | 39,2V (Voc) | 60 celdas | Policristalino',
      specification: {
        dimensiones: '1640x992x35',
        peso: '17.5',
        tipo_celda: 'policristalino',
        potencia_nominal: '290',
        voltaje_nominal: '32.0',
        corriente_nominal: '9.07',
        voltaje_circuito_abierto: '39.2',
        corriente_cortocircuito: '9.59',
        eficiencia_modulo: '17.83'
      },
      brand: 'Amerisolar',
      model: 'AS-6P30',
      origin: 'China',
      images: ['ps-pl-amerisolar.webp', 'ps-pl-amerisolar-290w_1.webp', 'ps-pl-amerisolar-290w_2.webp'],
      stock: getInventory('5391'),
      price: getPrice('5391'),
      slug: 'panel-solar-290wp-amerisolar-5391',
      category: 1,
      system: 6,
      subCategory: 1,
      tags: ['solar', 'panel', 'policristalino', '290W', 'AMERISOLAR', 'AS-6P30', 'high-efficiency', 'photovoltaic'],
      information: 'Panel Solar 290W AMERISOLAR AS-6P30, policristalino, 60 celdas, 5BB, 30 años de garantía de potencia lineal, 20 años de garantía de producto. Alta eficiencia de conversión de módulos de hasta el 18,44 % gracias a la innovadora tecnología de celdas de cinco barras colectoras. Baja degradación y excelente rendimiento en condiciones de alta temperatura y baja luminosidad. Su robusta estructura de aluminio garantiza que los módulos soporten cargas de viento de hasta 3600 Pa y cargas de nieve de hasta 5400 Pa. Alta fiabilidad en condiciones ambientales extremas (superando las pruebas de niebla salina, amoníaco y granizo). Resistencia a la degradación inducida por potencial (PID).',
      url: 'www.https://www.weamerisolar.eu/es/'
    },
    {
      supplierId: '5432',
      title: 'Panel Solar 285W AMERISOLAR AS-6P30',
      description: '9,42A (Isc) | 38,7V (Voc) | 60 celdas | Policristalino',
      specification: {
        dimensiones: '1640x992x35',
        peso: '17.5',
        tipo_celda: 'policristalino',
        potencia_nominal: '285',
        voltaje_nominal: '31.8',
        corriente_nominal: '8.97',
        voltaje_circuito_abierto: '39.0',
        corriente_cortocircuito: '9.48',
        eficiencia_modulo: '17.52'
      },
      brand: 'Amerisolar',
      model: 'AS-6P30',
      origin: 'China',
      images: ['ps-pl-amerisolar.webp', 'ps-pl-amerisolar-290w.webp_1.webp', 'ps-pl-amerisolar-290w.webp_2.webp'],
      stock: getInventory('5432'),
      price: getPrice('5432'),
      slug: 'panel-solar-285wp-amerisolar-5432',
      category: 6,
      system: 1,
      subCategory: 6,
      tags: ['solar', 'panel', 'policristalino', '285W', 'AMERISOLAR', 'AS-6P30', 'high-efficiency', 'photovoltaic'],
      information: 'Panel Solar 285W AMERISOLAR AS-6P30, policristalino, 60 celdas, 5BB, 30 años de garantía de potencia lineal, 20 años de garantía de producto. Alta eficiencia de conversión de módulos de hasta el 18,44 % gracias a la innovadora tecnología de celdas de cinco barras colectoras. Baja degradación y excelente rendimiento en condiciones de alta temperatura y baja luminosidad. Su robusta estructura de aluminio garantiza que los módulos soporten cargas de viento de hasta 3600 Pa y cargas de nieve de hasta 5400 Pa. Alta fiabilidad en condiciones ambientales extremas (superando las pruebas de niebla salina, amoníaco y granizo). Resistencia a la degradación inducida por potencial (PID).',
      url: 'www.https://www.weamerisolar.eu/es/'
    },
    {
      supplierId: '5855',
      title: 'Panel solar 280W policristalino Nuuko',
      description: ' 9.29A (Isc) | 38.5V (Voc) | 60 celdas | Policristalino',
      specification:
        {
          dimensiones: '1640x992x35',
          peso: '19',
          tipo_celda: 'policristalino',
          potencia_nominal: '280',
          voltaje_nominal: '31.6',
          corriente_nominal: '8.86',
          voltaje_circuito_abierto: '38.5',
          corriente_cortocircuito: '9.29',
          eficiencia_modulo: '17.2'
        }
      ,
      brand: 'Nuuko',
      model: 'NKP280-60M2',
      origin: 'China',
      images: ['ps-pl-nuuko.webp', 'ps-nuuko-280w_1.webp', 'ps-nuuko-280w_2.webp'],
      stock: getInventory('5855'),
      price: getPrice('5855'),
      slug: 'panel-solar-280wp-nuuko-5855',
      category: 1,
      system: 6,
      subCategory: 1,
      tags: [
        'solar',
        'panel',
        'policristalino',
        '280W',
        'nuuko',
        'high-efficiency',
        'photovoltaic'
      ],
      information: 'Panel solar 280W policristalino Nuuko, 60 celdas, 25 años de garantía de potencia lineal, 12 años de garantía de producto. El panel solar Nuuko 280W policristalino está diseñado para ofrecer una combinación de alta eficiencia y resistencia estructural. Cuenta con un marco reforzado con tecnología de doble capa impermeable, protección contra microgrietas y PID, asegurando un rendimiento estable a largo plazo. Su capacidad de soportar condiciones extremas lo convierte en una excelente opción para proyectos residenciales y comerciales.',
      url: 'www.nuukopower.com'
    },
  ]
}
