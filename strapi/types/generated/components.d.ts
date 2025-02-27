import type { Schema, Struct } from '@strapi/strapi';

export interface FotovoltaicoSystem extends Struct.ComponentSchema {
  collectionName: 'components_fotovoltaico_systems';
  info: {
    displayName: 'system';
  };
  attributes: {
    system: Schema.Attribute.Enumeration<['monophase', 'triphase', 'hybrid']>;
  };
}

export interface PanelSolarSolution extends Struct.ComponentSchema {
  collectionName: 'components_panel_solar_solutions';
  info: {
    displayName: 'solution';
  };
  attributes: {
    current: Schema.Attribute.Enumeration<['monofasico', 'trifasico']>;
  };
}

export interface PhotovoltaicTypeCurrent extends Struct.ComponentSchema {
  collectionName: 'components_photovoltaic_type_currents';
  info: {
    description: '';
    displayName: 'typeCurrent';
  };
  attributes: {
    typeCurrent: Schema.Attribute.Enumeration<['monofasico', 'trifasico']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fotovoltaico.system': FotovoltaicoSystem;
      'panel-solar.solution': PanelSolarSolution;
      'photovoltaic.type-current': PhotovoltaicTypeCurrent;
    }
  }
}
