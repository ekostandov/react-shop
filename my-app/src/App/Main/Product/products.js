const products = [
    {
        id: 1,
        name: 'iPhone 7',
        description: 'This is iPhone 7',
        image: 'images/products/iPhone.png',
        type: 'phone',
        screenSize: 4.5,
        capacity: 64,
        price: 799,
    },
    {
        id: 2,
        name: 'iPhone 8',
        image: 'images/products/iPad.png',
        description: 'This is iPhone 8',
        type: 'phone',
        screenSize: 4.5,
        capacity: 128,
        price: 999,
    },
    {
        id: 3,
        name: 'iPhone 7 Plus',
        image: 'images/products/mac.png',
        description: 'This is iPhone 7 Plus',
        type: 'phone',
        screenSize: 5.8,
        capacity: 256,
        price: 899,
    },
    {
        id: 4,
        name: 'iPhone X',
        image: 'images/products/appletv.png',
        description: 'This is iPhone X',
        type: 'phone',
        screenSize: 5.2,
        capacity: 256,
        price: 1299,
    },
]

export const getProductsMap = (array) => {
    return array.reduce((map,product) => ({
        ...map,
        [product.id] : product,
    }),{})
}

export default products