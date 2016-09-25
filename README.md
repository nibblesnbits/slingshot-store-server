# Slingshot Store Server

This is a NodeJS API that is used for the [Slingshot Sagas](https://github.com/nibblesnbits/slingshot-sagas) demo.

## Available APIs

### Product APIs

#### GET `api/products`

Returns an array of all products

#### GET `api/products/:id`

Returns the product with the specfied Id

#### GET `api/products/count`

Returns the count of all products

#### POST `api/products`

Create a new product with the properties specified in the body

#### PUT `api/products/:id`

Updates the product with the specified Id

#### DELETE `api/products/:id`

Deletes the product with the specified Id

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
