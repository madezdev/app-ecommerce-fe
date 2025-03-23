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

export interface FotovoltaicoType extends Struct.ComponentSchema {
  collectionName: 'components_fotovoltaico_types';
  info: {
    displayName: 'type';
  };
  attributes: {
    typeProduct: Schema.Attribute.Enumeration<
      ['panel solar', 'inversor', 'accesorios', 'protecciones']
    >;
  };
}

export interface FotovoltaicoTypeSystem extends Struct.ComponentSchema {
  collectionName: 'components_fotovoltaico_type_systems';
  info: {
    displayName: 'type-system';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['on-grid', 'off-grid', 'hybrid']>;
  };
}

export interface PanelSolarCharacteristics extends Struct.ComponentSchema {
  collectionName: 'components_panel_solar_characteristics';
  info: {
    displayName: 'characteristics';
  };
  attributes: {
    celltype: Schema.Attribute.String & Schema.Attribute.Required;
    dimensions: Schema.Attribute.String & Schema.Attribute.Required;
    moduleEfficiency: Schema.Attribute.String & Schema.Attribute.Required;
    openircuitVoltage: Schema.Attribute.String & Schema.Attribute.Required;
    ratedcurrent: Schema.Attribute.String & Schema.Attribute.Required;
    ratedOutput: Schema.Attribute.String & Schema.Attribute.Required;
    ratedVoltage: Schema.Attribute.String & Schema.Attribute.Required;
    shortCircuitCurrent: Schema.Attribute.String & Schema.Attribute.Required;
    weight: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface PhotovoltaicCharacteristics extends Struct.ComponentSchema {
  collectionName: 'components_photovoltaic_characteristics';
  info: {
    displayName: 'characteristics';
  };
  attributes: {
    celltype: Schema.Attribute.String & Schema.Attribute.Required;
    dimensions: Schema.Attribute.String & Schema.Attribute.Required;
    moduleEfficiency: Schema.Attribute.String & Schema.Attribute.Required;
    openircuitVoltage: Schema.Attribute.String & Schema.Attribute.Required;
    ratedcurrent: Schema.Attribute.String & Schema.Attribute.Required;
    ratedOutput: Schema.Attribute.String & Schema.Attribute.Required;
    ratedVoltage: Schema.Attribute.String & Schema.Attribute.Required;
    shortCircuitCurrent: Schema.Attribute.String & Schema.Attribute.Required;
    weight: Schema.Attribute.String;
  };
}

export interface PhotovoltaicSystem extends Struct.ComponentSchema {
  collectionName: 'components_photovoltaic_systems';
  info: {
    displayName: 'system';
  };
  attributes: {};
}

export interface PhotovoltaicTag extends Struct.ComponentSchema {
  collectionName: 'components_photovoltaic_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {};
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

export interface PhotovoltaicTypeSystem extends Struct.ComponentSchema {
  collectionName: 'components_photovoltaic_type_systems';
  info: {
    displayName: 'typeSystem';
  };
  attributes: {
    typeSystem: Schema.Attribute.Enumeration<['on-grid', 'off-grid', 'hybrid']>;
  };
}

export interface SystemSystem extends Struct.ComponentSchema {
  collectionName: 'components_system_systems';
  info: {
    displayName: 'system';
  };
  attributes: {
    system: Schema.Attribute.Enumeration<['on_grid', 'off_grid', 'hibrido']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fotovoltaico.system': FotovoltaicoSystem;
      'fotovoltaico.type': FotovoltaicoType;
      'fotovoltaico.type-system': FotovoltaicoTypeSystem;
      'panel-solar.characteristics': PanelSolarCharacteristics;
      'panel-solar.solution': PanelSolarSolution;
      'photovoltaic.characteristics': PhotovoltaicCharacteristics;
      'photovoltaic.system': PhotovoltaicSystem;
      'photovoltaic.tag': PhotovoltaicTag;
      'photovoltaic.type-current': PhotovoltaicTypeCurrent;
      'photovoltaic.type-system': PhotovoltaicTypeSystem;
      'system.system': SystemSystem;
    }
  }
}
