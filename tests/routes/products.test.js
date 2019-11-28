const expect = require('chai').expect;

const { get, getById, insert } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function() {
    describe('get() function', function() {
/*
        it('should return object with title ', function() {
            get(req, res);
            expect(res.jsonCalledWith).to.be.eql({ title: 'Products page'});
        });

        it('should receive return by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });
*/
        it('valida qtde caracteres descricao', function () {
            const postReq = req;
            postReq.body = {
                id: 1,
                name: 'product_name',
                description: 'abc',
                price: 1
            };

            insert(postReq,res);
            expect(res.jsonCalledWith).to.be.have.key('error')
        });

        it('valida preco > 0', function () {
            const postReq = req;
            postReq.body = {
                id: 1,
                name: 'product_name',
                description: 'product_description',
                price: 0
            };

            insert(postReq,res);
            expect(res.jsonCalledWith).to.be.have.key('error')
        });
    })
});