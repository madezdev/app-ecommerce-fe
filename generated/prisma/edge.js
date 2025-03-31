
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/madez/Documents/Apps/app-ecommerce-fe/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/madez/Documents/Apps/app-ecommerce-fe/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n/// Enums para datos fijos\n\n// Enum para definir los sistemas\nenum SystemEnum {\n  on_grid\n  off_grid\n  hybrid\n  heat_pipe\n  termosifon\n  other\n}\n\n// Enum para subcategorías, basándose en el array typeSubCategory\nenum SubCategoryEnum {\n  panel_solar\n  inversor\n  baterias\n  controlador\n  kit_solar\n  accesorios\n  ferreteria\n  protecciones\n  esruturas\n  movilidad\n  termica\n  bombeoSolar\n  calefaccion_solar\n  otros\n}\n\nmodel Characteristic {\n  id       String    @id @default(uuid())\n  name     String    @unique\n  products Product[] @relation(\"ProductCharacteristics\")\n}\n\nmodel Inventory {\n  productId String  @id // Relacionado con Product.id\n  stock     Int\n  isActive  Boolean\n  product   Product @relation(fields: [productId], references: [id])\n}\n\nmodel Price {\n  productId   String  @id // Relacionado con Product.id\n  price       Float\n  iva         Float\n  outstanding Boolean\n  product     Product @relation(fields: [productId], references: [id])\n}\n\n// Tipo embebido para la dirección del supplier\nmodel Address {\n  id       String    @id @default(uuid())\n  street   String\n  city     String\n  state    String\n  zip      String\n  country  String\n  supplier Supplier?\n}\n\nmodel Supplier {\n  id        String    @id @default(uuid())\n  name      String\n  seller    String\n  email     String\n  phone     String\n  addressId String    @unique\n  address   Address   @relation(fields: [addressId], references: [id])\n  url       String\n  products  Product[]\n}\n\nmodel Question {\n  id        String   @id @default(uuid())\n  productId String\n  content   String\n  createdAt DateTime @default(now())\n  product   Product  @relation(fields: [productId], references: [id])\n  answers   Answer[]\n}\n\nmodel Answer {\n  id         String   @id @default(uuid())\n  questionId String\n  content    String\n  createdAt  DateTime @default(now())\n  question   Question @relation(fields: [questionId], references: [id])\n}\n\nmodel Rating {\n  id        String   @id @default(uuid())\n  productId String\n  value     Int // Por ejemplo, de 1 a 5\n  comment   String? // Comentario opcional\n  createdAt DateTime @default(now())\n  product   Product  @relation(fields: [productId], references: [id])\n}\n\nmodel ProductImage {\n  id        String  @id @default(uuid())\n  productId String\n  url       String // URL o path de la imagen\n  altText   String? // Texto alternativo opcional\n  product   Product @relation(fields: [productId], references: [id])\n}\n\nmodel Product {\n  id              String           @id @default(uuid()) // Se usa el identificador del seed (por ejemplo, supplierId o product_id)\n  supplierId      String // Clave foránea hacia Supplier (campo \"supplier\" en el seed)\n  title           String\n  description     String\n  specification   Json\n  brand           String\n  model           String\n  origin          String\n  warranty        String? // Opcional\n  slug            String           @unique\n  category        Int\n  system          SystemEnum // Se reemplaza el Int por el enum SystemEnum\n  subCategory     SubCategoryEnum // Se reemplaza el Int por el enum SubCategoryEnum\n  tags            String[]\n  information     String\n  url             String\n  partner         String[]         @default([]) // Lista requerida, puede estar vacía\n  logo            String? // Opcional\n  // Relaciones\n  inventory       Inventory? // Se define sin @relation, ya que Inventory es el dueño de la relación\n  price           Price? // Se define sin @relation, ya que Price es el dueño de la relación\n  supplier        Supplier         @relation(fields: [supplierId], references: [id])\n  characteristics Characteristic[] @relation(\"ProductCharacteristics\")\n  questions       Question[] // Preguntas de usuarios sobre el producto\n  ratings         Rating[] // Valoraciones del producto\n  images          ProductImage[] // Imágenes adicionales del producto\n}\n\n// model User {\n//   id        String   @id @default(cuid())\n//   name      String\n//   email     String   @unique\n//   password  String\n//   role      String   // Puede ser \"admin\", \"user\", etc.\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n// }\n// model Session {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model Cart {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model CartItem {\n//   id        String   @id @default(cuid())\n//   cartId    String\n//   productId String\n//   quantity  Int\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   cart      Cart     @relation(fields: [cartId], references: [id])\n//   product   Product  @relation(fields: [productId], references: [id])\n// }\n// model Order {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   total     Float\n//   status    String   // Puede ser \"pending\", \"completed\", \"cancelled\", etc.\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model OrderItem {\n//   id        String   @id @default(cuid())\n//   orderId   String\n//   productId String\n//   quantity  Int\n//   price     Float\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   order     Order    @relation(fields: [orderId], references: [id])\n//   product   Product  @relation(fields: [productId], references: [id])\n// }\n// model Review {\n//   id        String   @id @default(cuid())\n//   productId String\n//   userId    String\n//   rating    Int      // Rango de 1 a 5\n//   comment   String?\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   product   Product  @relation(fields: [productId], references: [id])\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model Wishlist {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model WishlistItem {\n//   id        String   @id @default(cuid())\n//   wishlistId String\n//   productId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   wishlist  Wishlist @relation(fields: [wishlistId], references: [id])\n//   product   Product  @relation(fields: [productId], references: [id])\n// }\n// model Address {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   street    String\n//   city      String\n//   state     String\n//   zip       String\n//   country   String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model Payment {\n//   id        String   @id @default(cuid())\n//   orderId   String\n//   amount    Float\n//   method    String   // Puede ser \"credit_card\", \"paypal\", etc.\n//   status    String   // Puede ser \"pending\", \"completed\", \"failed\", etc.\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   order     Order    @relation(fields: [orderId], references: [id])\n// }\n// model Notification {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   message   String\n//   isRead    Boolean  @default(false)\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n// }\n// model CartHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   cartId    String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   cart      Cart     @relation(fields: [cartId], references: [id])\n// }\n// model OrderHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   orderId   String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   order     Order    @relation(fields: [orderId], references: [id])\n// }\n// model WishlistHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   wishlistId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   wishlist  Wishlist @relation(fields: [wishlistId], references: [id])\n// }\n// model AddressHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   addressId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   address   Address  @relation(fields: [addressId], references: [id])\n// }\n// model PaymentHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   paymentId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   payment   Payment  @relation(fields: [paymentId], references: [id])\n// }\n// model NotificationHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   notificationId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   notification Notification @relation(fields: [notificationId], references: [id])\n// }\n// model CartItemHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   cartItemId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   cartItem  CartItem @relation(fields: [cartItemId], references: [id])\n// }\n// model OrderItemHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   orderItemId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   orderItem OrderItem @relation(fields: [orderItemId], references: [id])\n// }\n// model ReviewHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   reviewId  String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   review    Review   @relation(fields: [reviewId], references: [id])\n// }\n// model SupplierHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   supplierId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   supplier  Supplier @relation(fields: [supplierId], references: [id])\n// }\n// model ProductHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   productId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   product   Product  @relation(fields: [productId], references: [id])\n// }\n// model InventoryHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   inventoryId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   inventory Inventory @relation(fields: [inventoryId], references: [productId])\n// }\n// model PriceHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   priceId   String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   price     Price    @relation(fields: [priceId], references: [productId])\n// }\n// model CharacteristicHistory {\n//   id        String   @id @default(cuid())\n//   userId    String\n//   characteristicId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   characteristic Characteristic @relation(fields: [characteristicId], references: [id])\n// }\n\n// model QuestionHistory { \n//   id        String   @id @default(uuid())\n//   userId    String\n//   questionId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   question  Question @relation(fields: [questionId], references: [id])\n// }\n// model AnswerHistory { \n//   id        String   @id @default(uuid())\n//   userId    String\n//   answerId  String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   answer    Answer   @relation(fields: [answerId], references: [id])\n// }\n// model RatingHistory { \n//   id        String   @id @default(uuid())\n//   userId    String\n//   ratingId  String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   rating    Rating   @relation(fields: [ratingId], references: [id])\n// }\n// model ProductImageHistory { \n//   id        String   @id @default(uuid())\n//   userId    String\n//   productImageId String\n//   createdAt DateTime @default(now())\n//   updatedAt DateTime @updatedAt\n//   user      User     @relation(fields: [userId], references: [id])\n//   productImage ProductImage @relation(fields: [productImageId], references: [id])\n// }\n",
  "inlineSchemaHash": "f3a4135bbc0d05c8ae97e05cd929b555841107b1cf514de442c9358634738fac",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Characteristic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"ProductCharacteristics\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Inventory\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"InventoryToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Price\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outstanding\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"PriceToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Address\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"street\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supplier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Supplier\",\"nativeType\":null,\"relationName\":\"AddressToSupplier\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Supplier\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Address\",\"nativeType\":null,\"relationName\":\"AddressToSupplier\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"ProductToSupplier\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Question\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"ProductToQuestion\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Answer\",\"nativeType\":null,\"relationName\":\"AnswerToQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Answer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Question\",\"nativeType\":null,\"relationName\":\"AnswerToQuestion\",\"relationFromFields\":[\"questionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Rating\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"ProductToRating\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductImage\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"altText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"ProductToProductImage\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supplierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"origin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warranty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"system\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SystemEnum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCategory\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubCategoryEnum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"information\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Inventory\",\"nativeType\":null,\"relationName\":\"InventoryToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Price\",\"nativeType\":null,\"relationName\":\"PriceToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supplier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Supplier\",\"nativeType\":null,\"relationName\":\"ProductToSupplier\",\"relationFromFields\":[\"supplierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"characteristics\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Characteristic\",\"nativeType\":null,\"relationName\":\"ProductCharacteristics\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Question\",\"nativeType\":null,\"relationName\":\"ProductToQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rating\",\"nativeType\":null,\"relationName\":\"ProductToRating\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductImage\",\"nativeType\":null,\"relationName\":\"ProductToProductImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"SystemEnum\":{\"values\":[{\"name\":\"on_grid\",\"dbName\":null},{\"name\":\"off_grid\",\"dbName\":null},{\"name\":\"hybrid\",\"dbName\":null},{\"name\":\"heat_pipe\",\"dbName\":null},{\"name\":\"termosifon\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"SubCategoryEnum\":{\"values\":[{\"name\":\"panel_solar\",\"dbName\":null},{\"name\":\"inversor\",\"dbName\":null},{\"name\":\"baterias\",\"dbName\":null},{\"name\":\"controlador\",\"dbName\":null},{\"name\":\"kit_solar\",\"dbName\":null},{\"name\":\"accesorios\",\"dbName\":null},{\"name\":\"ferreteria\",\"dbName\":null},{\"name\":\"protecciones\",\"dbName\":null},{\"name\":\"esruturas\",\"dbName\":null},{\"name\":\"movilidad\",\"dbName\":null},{\"name\":\"termica\",\"dbName\":null},{\"name\":\"bombeoSolar\",\"dbName\":null},{\"name\":\"calefaccion_solar\",\"dbName\":null},{\"name\":\"otros\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

