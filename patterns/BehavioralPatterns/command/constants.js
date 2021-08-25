const PAYLOAD = {
    inventory: [
        {
            id: 1343,
            description: 'Triplo X Bacon',
            quantity: 10
        },
        {
            id: 120,
            description: 'Refrigerante',
            quantity: 2
        },
        {
            id: 4563,
            description: 'Água',
            quantity: 4
        }
    ],

    sales: [
        {
            id: 1,
            id_store: 18,
            total_amount: 20.50,
            items: [
                {
                    id: 1,
                    id_product: 1343,
                    description: 'Triplo X Bacon',
                    id_sale: 1,
                    quantity: 3
                },
                {
                    id: 2,
                    id_product: 120,
                    description: 'Refrigerante',
                    id_sale: 1,
                    quantity: 2
                }
            ]
        },
        {
            id: 2,
            id_store: 18,
            total_amount: 20.50,
            items: [
                {
                    id: 1,
                    description: 'Triplo X Bacon',
                    id_product: 1343,
                    id_sale: 2,
                    quantity: 4
                }
            ]
        },
        {
            id: 3,
            id_store: 18,
            total_amount: 20.50,
            items: [
                {
                    id: 1,
                    description: 'Triplo X Bacon',
                    id_product: 1343,
                    id_sale: 2,
                    quantity: 1
                },
                {
                    id: 3,
                    description: 'Água',
                    id_product: 4563,
                    id_sale: 3,
                    quantity: 4
                }
            ]
        }
    ]
}

module.exports = PAYLOAD;