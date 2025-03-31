
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CharacteristicScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.InventoryScalarFieldEnum = {
  productId: 'productId',
  stock: 'stock',
  isActive: 'isActive'
};

exports.Prisma.PriceScalarFieldEnum = {
  productId: 'productId',
  price: 'price',
  iva: 'iva',
  outstanding: 'outstanding'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  street: 'street',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country'
};

exports.Prisma.SupplierScalarFieldEnum = {
  id: 'id',
  name: 'name',
  seller: 'seller',
  email: 'email',
  phone: 'phone',
  addressId: 'addressId',
  url: 'url'
};

exports.Prisma.QuestionScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  content: 'content',
  createdAt: 'createdAt'
};

exports.Prisma.AnswerScalarFieldEnum = {
  id: 'id',
  questionId: 'questionId',
  content: 'content',
  createdAt: 'createdAt'
};

exports.Prisma.RatingScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  value: 'value',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.ProductImageScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  url: 'url',
  altText: 'altText'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  supplierId: 'supplierId',
  title: 'title',
  description: 'description',
  specification: 'specification',
  brand: 'brand',
  model: 'model',
  origin: 'origin',
  warranty: 'warranty',
  slug: 'slug',
  category: 'category',
  system: 'system',
  subCategory: 'subCategory',
  tags: 'tags',
  information: 'information',
  url: 'url',
  partner: 'partner',
  logo: 'logo'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.SystemEnum = exports.$Enums.SystemEnum = {
  on_grid: 'on_grid',
  off_grid: 'off_grid',
  hybrid: 'hybrid',
  heat_pipe: 'heat_pipe',
  termosifon: 'termosifon',
  other: 'other'
};

exports.SubCategoryEnum = exports.$Enums.SubCategoryEnum = {
  panel_solar: 'panel_solar',
  inversor: 'inversor',
  baterias: 'baterias',
  controlador: 'controlador',
  kit_solar: 'kit_solar',
  accesorios: 'accesorios',
  ferreteria: 'ferreteria',
  protecciones: 'protecciones',
  esruturas: 'esruturas',
  movilidad: 'movilidad',
  termica: 'termica',
  bombeoSolar: 'bombeoSolar',
  calefaccion_solar: 'calefaccion_solar',
  otros: 'otros'
};

exports.Prisma.ModelName = {
  Characteristic: 'Characteristic',
  Inventory: 'Inventory',
  Price: 'Price',
  Address: 'Address',
  Supplier: 'Supplier',
  Question: 'Question',
  Answer: 'Answer',
  Rating: 'Rating',
  ProductImage: 'ProductImage',
  Product: 'Product'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
