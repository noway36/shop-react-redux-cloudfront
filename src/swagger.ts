export const swaggerConfiguration = {
  swagger: "2.0",
  info: {
    description: "This is a simple API",
    version: "3.0",
    title: "Simple Shop API",
    contact: {
      email: "alexander.dren36@gmail.com",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  tags: [
    {
      name: "products",
      description: "Operations to get products",
    },
  ],
  paths: {
    "/products": {
      get: {
        tags: ["products"],
        summary: "get all available products",
        operationId: "searchProducts",
        description: "Get all available products\n",
        produces: ["application/json"],
        responses: {
          "200": {
            description: "all available products",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/ProductItem",
              },
            },
          },
          "500": {
            description: "Failed to get products list",
          },
        },
      },
    },
    "/product/{productId}": {
      get: {
        parameters: [
          {
            in: "path",
            name: "productId",
            type: "string",
            required: true,
            description: "product ID to get",
          },
        ],
        tags: ["products"],
        summary: "Get product by id",
        operationId: "searchProduct",
        description: "Get product by a specific id\n",
        produces: ["application/json"],
        responses: {
          "200": {
            description: "specific product",
            schema: {
              type: "object",
              $ref: "#/definitions/ProductItem",
            },
          },
          "404": {
            description: "Product with productId not found",
          },
        },
      },
    },
  },
  definitions: {
    ProductItem: {
      type: "object",
      required: ["count", "description", "id", "price", "title"],
      properties: {
        id: {
          type: "string",
          format: "uuid",
          example: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        },
        count: {
          type: "number",
          example: 6,
        },
        description: {
          type: "string",
          example: "Nice Product 1",
        },
        price: {
          type: "number",
          example: 20,
        },
        title: {
          type: "string",
          example: "Nice Product 1",
        },
      },
    },
  },
  schemes: ["https"],
  host: "ynbaj9n6f2.execute-api.eu-west-1.amazonaws.com",
  basePath: "/dev",
};
