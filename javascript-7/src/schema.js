
const Products = require('./data/products');
const Customers = require('./data/customers');
const Carts = require('./data/carts');

let {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "Модель представляет продукт магазина",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt), description: "Ид продукта" },
    name: { type: new GraphQLNonNull(GraphQLString), description: "Название продукта" },
    weigth: { type: GraphQLInt, description: "Вес продукта" },
    price: { type: GraphQLNonNull(GraphQLInt), description: "Стоимость продукта" },
    count: { type: GraphQLNonNull(GraphQLInt), description: "Кол-во на складе" }
  })
});

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  description: "Модель представляет информацию о покупателе",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt), description: "ID покупателя" },
    fio: { type: new GraphQLNonNull(GraphQLString), description: "ФИО покупателя" },
    mail: { type: GraphQLInt, description: "ФИО покупателя" },
    phone: { type: GraphQLString, description: "Телефон покупателя" },
  })
});

const CartType = new GraphQLObjectType({
  name: "Cart",
  description: "Модель представляет корзину покупателя",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt), description: "Id корзины" },
    idCustomer: { type: new GraphQLNonNull(GraphQLInt), description: "Id покупателя" },
    listProducts: { type: GraphQLList(GraphQLInt), description: "Список продуктов в корзине" }
  })
});

const ShopQueryRootType = new GraphQLObjectType({
  name: 'ShopSchema',
  description: "Схема запроса информации о товарах и покупателях магазина",
  fields: () => ({
    products: {
      type: new GraphQLList(ProductType),
      description: "Список продуктов",
      resolve: function () {
        return Products
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      description: "Список покупателей",
      resolve: function () {
        return Customers
      }
    },
    carts: {
      type: new GraphQLList(CartType),
      description: "Покупательские корзины",
      resolve: function () {
        return Carts
      }
    }
  })
});

const ShopMutationRootType = new GraphQLObjectType({
  name: 'createCarts',
  fields:
  {
    createCart: {
      description: "Создание корзины покупателя",
      type: CartType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        idCustomer: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (value, args) => {
        const newCart = { id: args.id, idCustomer: args.idCustomer, listProducts: [] }
        Carts.push(newCart)
        return newCart
      }
    },
    addProductInCart: {
      description: "Добавление продукта в корзину",
      type: CartType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        idProduct: { type: new GraphQLNonNull(GraphQLInt) }
      }, resolve: (value, args) => {
        const newCart = Carts.find(x => x.id = args.id);
        if (newCart.listProducts === undefined) {
          newCart.listProducts = [];
        }
        newCart.listProducts.push(args.idProduct);
        return newCart;
      }
    },
    clearCart: {
      description: "Очистка корзины",
      type: CartType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      }, resolve: (value, args) => {
        const newCart = Carts.find(x => x.id = args.id)
        newCart.listProducts = [];
        return newCart;
      }
    }
  }
});

const ShopAppSchema = new GraphQLSchema({
  query: ShopQueryRootType,
  mutation: ShopMutationRootType
});

module.exports = ShopAppSchema;