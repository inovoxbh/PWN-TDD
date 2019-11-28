let products = {
    items: [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product1 description',
            price: 19.00
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product2 description',
            price: 20.00
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product3 description',
            price: 21.00
        }
    ]
}

module.exports = {
    get(_, res) {
        res.json(products.items);
    },
    getById(req, res) {
        if (!req.params.id) {
            res.json({ error: 'Should receive an id' })
        } else {
            let produto;
            produto = products.items.filter(e => {return e.id == req.params.id});
            return res.json(produto);
        }
    },
    insert(req,res){
        if (req.body.description.length < 10)
            return res.json({error: 'descrição deve ter 10 (dez) ou mais caracteres.'});
        else {
            if (req.body.price <= 0)
                return res.json({error: 'preço deve ser maior ou igual a 0 (zero).'});
            else {
                products.items.push(req.body);
                res.json(products.items); 
            }
        }
    }
};
