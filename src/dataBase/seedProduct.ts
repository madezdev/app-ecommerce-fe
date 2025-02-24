interface SeedProduct {
  supplierId: number | string;
  title: string;
  description: string;
  characteristics?: typeCharacteristicSolar[] | typeCharacteristicBattery[] | typeCharacteristicInverter[];
  brand: string;
  model: string;
  origin: string;
  images: string[];
  stock: number;
  price: number;
  slug: string;
  category: 'photovoltaic' | 'solar pumps' | 'solar-thermal' | 'electric-mobility' | 'energy-storage' | 'smart-grid' | 'other';
  system?: typeSistem[];
  type?: 'solar-panels' | 'inverters' | 'batteries' | 'accessories';
  current?: 'monophase' | 'three-phase' | 'charge regulator';
  tags: string[];
  qualification: number;
  opinions: string[];
  info?: string;
}
type typeSistem = 'on-grid' | 'off-grid' | 'hybrid';
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
type typeCharacteristicBattery = {
  dimensions: string;
  weight: string;
  nominalVoltage?: string;
  cathodeTechnology?: string;
  nominalCapacity?: string;
  capacidadNominal?: string;
  maximumDischargeCurrent?: string;
  maximumChargingCurrent?: string;
  máximaDoD?: string;
}

type typeCharacteristicInverter = {
  dimensions: string;
  weight: string;
  nominalPower?: string;
  batteryVoltage?: string;
  maximunPVarrayPower?: string;
  MPPToperatingVoltageRange?: string;
  chargingCurrent?: string;
  efficiency?: string;
  protectionDegree?: string;
};
interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      supplierId: 5960,
      title: 'Panel solar 450W - Bifacial - monocristalino - Black Frame - Astro N7s - Tier 1',
      description: 'Inversor Híbrido 3.6kW 48V CC - 220V CA, MPPT 75A 125-550V CC, Máx potencia paneles 4.6kWp, baterías de litio hasta 2000Ah (Recomendado hasta 4 x 150Ah), Inyección a red (Ley Distribuída)',
      characteristics: [{ dimensions: '1762x1134x30', weight: '21.5', celltype: 'monocristalino', ratedOutput: '450', ratedVoltage: '32.94', ratedcurrent: '13.66', openircuitVoltage: '39.20', shortCircuitCurrent: '14.35', moduleEfficiency: '22.5' }],
      brand: 'Astronergy',
      model: 'Astro N7s',
      origin: 'China',
      images: ['ps-bi-astro-450W.webp', 'ps-bi-astro-450W_1.webp', 'ps-bi-astro-450W_2.webp'],
      stock: 50,
      price: 250,
      slug: 'panel-solar/astro-n7s-450w-bifacial-monocristalino-Tier-one-5960',
      category: 'photovoltaic',
      system: ['on-grid', 'off-grid', 'hybrid'],
      type: 'solar-panels',
      tags: ['solar', 'panel', 'monocristalino', 'Black Frame', 'Astro N7s', '450W', 'Bifacial', 'high-efficiency', 'photovoltaic'],
      qualification: 5,
      opinions: ['Excelente panel solar', 'Muy buena calidad', 'Gran eficiencia'],
      info: 'La serie ASTRO N7s utiliza tecnología ZBB-TF, que incluye la tecnología de celdas de alta eficiencia TOPCon 4.0 desarrollada por Astronergy. Esta tecnología de celdas de alta eficiencia TOPCon 4.0 se basa en la tecnología TOPCon de celdas de alta eficiencia de Astronergy, que ha sido probada en el mercado durante muchos años y ha demostrado ser altamente confiable y eficiente. La tecnología ZBB-TF de Astronergy es una tecnología de celdas de alta eficiencia que utiliza una estructura de celdas de alta eficiencia para mejorar la eficiencia de conversión de energía solar de los paneles solares. La tecnología ZBB-TF de Astronergy también utiliza una estructura de celdas de alta eficiencia para mejorar la resistencia a la degradación de los paneles solares y prolongar su vida útil.',
    },
    {
      supplierId: 5391,
      title: 'Panel Solar 290W AMERISOLAR AS-6P30',
      description: 'Panel Solar 290W AMERISOLAR AS-6P30, policristalino, 60 células, 5BB, 25 años de garantía de potencia lineal, 10 años de garantía de producto, certificado por TÜV Rheinland, UL, CE, ISO, IEC, INMETRO, ANATEL, CQC, PV CYCLE, CEC',
      characteristics: [{ dimensions: '1650x992x35', weight: '18.5', celltype: 'policristalino', ratedOutput: '290', ratedVoltage: '31.1', ratedcurrent: '9.33', openircuitVoltage: '38.2', shortCircuitCurrent: '9.83', moduleEfficiency: '17.8' }],
      brand: 'Amerisolar',
      model: 'AS-6P30',
      origin: 'China',
      images: ['solar-panel-3.jpg', 'solar-panel-4.jpg'],
      stock: 100,
      price: 150,
      slug: 'panel-solar-290w-amerisolar-as-6p30-5391',
      category: 'photovoltaic',
      system: ['on-grid', 'off-grid', 'hybrid'],
      type: 'solar-panels',
      tags: ['solar', 'panel', 'policristalino', '290W', 'AMERISOLAR', 'AS-6P30', 'high-efficiency', 'photovoltaic'],
      qualification: 4,
      opinions: ['Muy buena calidad', 'Gran eficiencia'],
      info: 'Amerisolar es una empresa líder en la fabricación de paneles solares. La serie AS-6P30 es una de las más populares de Amerisolar. Los paneles solares de la serie AS-6P30 son paneles solares policristalinos de alta eficiencia que ofrecen una potencia de 290W. Los paneles solares de la serie AS-6P30 son ideales para aplicaciones residenciales y comerciales. Los paneles solares de la serie AS-6P30 cuentan con una garantía de potencia lineal de 25 años y una garantía de producto de 10 años. Los paneles solares de la serie AS-6P30 están certificados por TÜV Rheinland, UL, CE, ISO, IEC, INMETRO, ANATEL, CQC, PV CYCLE y CEC.',
    },
    {
      supplierId: 5114,
      title: 'Batería Litio Monobloque LFP 12V 200Ah BLUNERY(@2000 ciclos)',
      description: 'La serie de baterías de iones de litio BATBLUIND12 es el reemplazo ideal de las baterías de plomo-ácido tradicionales. Utiliza tecnología avanzada LiFePO4 y BMS integrado con los beneficios de un ciclo de vida prolongado, peso ligero, seguridad y excelente rendimiento a altas y bajas temperaturas.',
      brand: 'Blunery',
      model: 'BATBLUIND12200',
      origin: 'EE.UU.',
      current: 'monophase',
      system: ['off-grid', 'hybrid'],
      category: 'energy-storage',
      images: ['battery-1.jpg', 'battery-2.jpg'],
      stock: 2,
      price: 1275,
      tags: ['lithium-ion', 'battery', '200Ah', '12V', 'BLUNERY', 'high-efficiency', 'energy-storage'],
      characteristics: [{ dimensions: '218x240x522', weight: '22', nominalCapacity: '2400', nominalVoltage: '12', maximumDischargeCurrent: '100', maximumChargingCurrent: '100', máximaDoD: '100' }],
      slug: 'bateria-litio-monobloque-lfp-12v-200ah-blunery-5114',
      type: 'batteries',
      qualification: 5,
      opinions: ['Excelente batería', 'Muy buena calidad', 'Gran eficiencia'],
      info: 'La serie de baterías de iones de litio BATBLUIND12 de Blunery es el reemplazo ideal de las baterías de plomo-ácido tradicionales. Utiliza tecnología avanzada LiFePO4 y BMS integrado con los beneficios de un ciclo de vida prolongado, peso ligero, seguridad y excelente rendimiento a altas y bajas temperaturas. La serie de baterías de iones de litio BATBLUIND12 de Blunery es ideal para aplicaciones de almacenamiento de energía solar, y de respaldo. La serie de baterías de iones de litio BATBLUIND12 de Blunery es una excelente opción para aplicaciones de almacenamiento de energía que requieren una alta densidad de energía, una larga vida útil y un rendimiento fiable.',
    },
    {
      supplierId: 5494,
      title: 'Batería Growatt AXE 5.0L para inversores SPF y WIT',
      description: 'El sistema de batería AX adopta una química LiFePO4 libre de cobalto, un optimizador de energía modular, un fusible y un aerosol para garantizar una mayor seguridad, confiabilidad y larga vida útil. Además, la optimización de energía modular garantiza que el sistema utilice completamente la energía de cada paquete, mezcle paquetes de lotes nuevos y antiguos y mezcle paquetes de diferente capacidad, lo que ofrece la aplicación del sistema más flexible.',
      brand: 'Growatt',
      model: 'AXE 5.0L',
      origin: 'China',
      system: ['off-grid'],
      current: 'monophase',
      category: 'energy-storage',
      images: ['battery-3.jpg', 'battery-4.jpg'],
      stock: 5,
      price: 1785,
      tags: ['lithium-ion', 'battery', 'Growatt', 'AXE 5.0L', 'high-efficiency', 'energy-storage'],
      characteristics: [{ dimensions: '442x222x528', weight: '30', nominalCapacity: '5000', nominalVoltage: '51.2', maximumDischargeCurrent: '100', maximumChargingCurrent: '100', máximaDoD: '100' }],
      slug: 'bateria-growatt-axe-5.0l-para-inversores-spf-y-wit-5494',
      type: 'batteries',
      qualification: 4,
      opinions: ['Muy buena calidad', 'Gran eficiencia'],
      info: 'El sistema de batería AX de Growatt adopta una química LiFePO4 libre de cobalto, un optimizador de energía modular, un fusible y un aerosol para garantizar una mayor seguridad, confiabilidad y larga vida útil. Además, la optimización de energía modular garantiza que el sistema utilice completamente la energía de cada paquete, mezcle paquetes de lotes nuevos y antiguos y mezcle paquetes de diferente capacidad, lo que ofrece la aplicación del sistema más flexible. El sistema de batería AX de Growatt es ideal para aplicaciones de almacenamiento de energía solar, y de respaldo. El sistema de batería AX de Growatt es una excelente opción para aplicaciones de almacenamiento de energía que requieren una alta densidad de energía, una larga vida útil y un rendimiento fiable.',
    },
    {
      supplierId: 3809,
      title: 'Inversor Goodwe GW3648D-ES Híbrido 3.6kW 48V',
      description: 'Inversor Goodwe GW3648D-ES Híbrido 3.6kW 48V, monofásico, 230V, 50Hz, 60A MPPT, 48V, 3.6kW, 5kVA, 5kW, 60A, 1 MPPT, 2 baterías de litio, 1 batería de plomo-ácido, 1 batería de flujo, 1 batería de sal, 1 batería de níquel-cadmio, 1 batería de níquel-hierro',
      brand: 'Goodwe',
      model: 'GW3648D-ES',
      origin: 'China',
      category: 'smart-grid',
      current: 'monophase',
      system: ['off-grid', 'hybrid'],
      images: ['inverter-1.jpg', 'inverter-2.jpg'],
      stock: 10,
      price: 1700,
      tags: ['inverter', 'Goodwe', 'GW3648D-ES', 'hybrid', 'high-efficiency', 'smart-grid'],
      characteristics: [{ dimensions: '450x470x180', weight: '20', nominalPower: '3600', batteryVoltage: '48', maximunPVarrayPower: '5000', MPPToperatingVoltageRange: '125~550', chargingCurrent: '60', efficiency: '97.6', protectionDegree: 'IP65' }],
      slug: 'inversor-goodwe-gw3648d-es-hibrido-3.6kw-48v-3809',
      type: 'inverters',
      qualification: 5,
      opinions: ['Excelente inversor', 'Muy buena calidad', 'Gran eficiencia'],
      info: 'inversores solares híbridos o bidireccionales, se utiliza para gestionar la energía en sistemas solares compuestos por paneles FV, batería, cargas y la red eléctrica. La energía generada por el sistema FV se utiliza para optimizar el uso doméstico, mientras que el exceso de energía de las baterías y cualquier otro excedente de energía pueden verterse a la red. Cuando la energía FV no sea suficiente para cubrir las necesidades de autoconsumo, la batería se descargará para soportar las cargas. Si la batería no dispone de suficiente energía, el sistema consumirá energía de la red para soportar las cargas.'
    },
    {
      supplierId: 6010,
      title: 'Inversor monofásico para uso fuera de red Growatt SPF 5000 ES',
      description: 'Inversor monofásico para uso fuera de red Growatt SPF 5000 ES, 5kW, 48V, 230V, 50Hz, 21.7A, 27.2A, 97.6%, 48V, 50-2000Ah, 125~550V, IP65',
      brand: 'Growatt',
      model: 'SPF 5000TL HVM-48',
      origin: 'China',
      category: 'photovoltaic',
      system: ['off-grid'],
      current: 'monophase',
      images: ['inverter-3.jpg', 'inverter-4.jpg'],
      stock: 15,
      price: 2000,
      tags: ['inverter', 'Growatt', 'SPF 5000TL HVM-48', 'hybrid', 'high-efficiency', 'smart-grid'],
      characteristics: [{ dimensions: '516x440x184', weight: '30', nominalPower: '5000', batteryVoltage: '48', maximunPVarrayPower: '6500', MPPToperatingVoltageRange: '125~550', chargingCurrent: '80', efficiency: '97.6', protectionDegree: 'IP65' }],
      slug: 'spf-5000tl-hvm-48-incl-ant-wifi-growatt-6010',
      type: 'inverters',
      qualification: 4,
      opinions: ['Muy buena calidad', 'Gran eficiencia'],
      info: 'Es una combinación de un inversor, un cargador de batería y un interruptor de transferencia que gestiona el flujo de energía entre los paneles solares, las baterías y la red eléctrica. El inversor Growatt SPF es conocido por su alta eficiencia, fiabilidad y flexibilidad. Puede funcionar tanto con sistemas solares conectados a la red como fuera de ella, y puede utilizarse como fuente de energía de reserva durante cortes de energía. También tiene una variedad de características, como un controlador de carga MPPT integrado, una pantalla LCD y capacidades de monitorización remota a través de una aplicación móvil..'
    },
    {
      supplierId: 5992,
      title: 'MIN 5000TL-X2  Inc. Ant. WIFI X',
      description: 'inversor cuenta con un precio asequible y alta calidad. Está certificado para el mercado global y se usa a menudo en instalaciones de consumo. Los inversores Growatt se pueden comprar con dispositivos de visualización de generación de energía llamados visión brillante. Esta es una solución extremadamente conveniente cuando el inversor está ubicado en algún lugar de la trastienda o en la sala técnica y la pantalla en sí se puede colocar en la sala de estar y observar convenientemente la producción de energía.',
      brand: 'Growatt',
      model: 'MIN 5000TL-X2',
      origin: 'China',
      category: 'smart-grid',
      system: ['on-grid'],
      current: 'monophase',
      images: ['inverter-5.jpg', 'inverter-6.jpg'],
      stock: 20,
      price: 585.90,
      tags: ['inverter', 'Growatt', 'MIN 5000TL-X2', 'high-efficiency', 'smart-grid'],
      characteristics: [{ dimensions: '450x470x180', weight: '20', nominalPower: '5000', batteryVoltage: '48', maximunPVarrayPower: '6500', MPPToperatingVoltageRange: '125~550', chargingCurrent: '80', efficiency: '97.6', protectionDegree: 'IP65' }],
      slug: 'min-5000tl-x2-inc-ant-wifi-x-growatt-5992',
      type: 'inverters',
      qualification: 5,
      opinions: ['Excelente inversor', 'Muy buena calidad', 'Gran eficiencia'],
      info: 'diseñado para aplicaciones industriales pequeñas y residenciales. Capacidades disponibles: 2.5kW, 3kW, 3.6kW, 4.2kW, 4.6kW, 5kW, 6kW. El inversor también está equipado con una gama de funciones avanzadas que facilitan su instalación y uso. Tiene una interfaz fácil de usar que permite a los propietarios e instaladores monitorear el rendimiento del sistema y ajustar la configuración según sea necesario. El inversor también es compatible con una variedad de sistemas de monitoreo, incluidos WiFi, Ethernet y RS485'
    },
    {
      supplierId: 'TS-TV150',
      title: 'Termotanque Solar Tubo de Vacío 150 Litros - Tanque Galvanizado',
      description: 'Termosifónico Tanque 150 litros  (int. 0.6mm espesor) 15 tubos (2mm espesor) con estructura y ánodo de magnesio. No incluye materiales instalación.',
      brand: 'YPF Solar',
      model: 'TS-TV150',
      origin: 'China',
      category: 'solar-thermal',
      images: ['solar-thermal-1.jpg', 'solar-thermal-2.jpg'],
      stock: 10,
      price: 500,
      slug: 'termotanque-solar-tubo-de-vacio-150-litros-tanque-galvanizado-YPF-Solar-TS-TV150',
      tags: ['solar', 'led', 'street-light'],
      qualification: 4,
      opinions: ['Muy buena calidad', 'Gran eficiencia'],
      info: 'El termotanque solar de tubo de vacío de 150 litros de YPF Solar es un sistema de calentamiento de agua solar que utiliza la energía del sol para calentar el agua. El termotanque solar de tubo de vacío de 150 litros de YPF Solar consta de un tanque de almacenamiento de agua de 150 litros, 15 tubos de vacío de 2 mm de espesor, una estructura y un ánodo de magnesio. El termotanque solar de tubo de vacío de 150 litros de YPF Solar es un sistema termosifónico que no requiere bombas ni controladores para funcionar. El termotanque solar de tubo de vacío de 150 litros de YPF Solar es ideal para aplicaciones residenciales y comerciales.',
    },
  ],
}
