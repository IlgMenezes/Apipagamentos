const pagarme = require('pagarme');

module.exports = {
  async index(req, res){

  pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
  .then(client => client.transactions.create(
    { 
      amount: req.body.amount,
      payment_method:"credit_card",
      card_id: req.body.cardId,
    }
  ))
  .then(transactions => res.send(transactions))
  .catch(
      error => console.log(error),
      console.log(req.body.cardId)
  )

  }
};