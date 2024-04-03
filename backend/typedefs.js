export const typedefs = `
  type Book {
    id:ID!
    title: String!
    author: String!
    price: Float!
    number_of_sheets: Int!
    category: String!
    
  }
  
  type Query {
    books(id: ID, limit:Int): [Book]
    booksByCategory(categories: [String]!):[Book]
    search(value: String!): [Book]
  }
  
`;
