const pagarme = require('pagarme');

module.exports = {
  async index(req, res){
    
  pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
  .then(client => client.transactions.create(
    { 
      card_id: "card_ck4ygnxza07od0e6d0lukj0bm",
      amount: 7799
    }
  ))
  .then(transactions => res.send(transactions))
  .catch(error => console.log(error))
  }
};