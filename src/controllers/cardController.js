const pagarme = require('pagarme');

module.exports = {
  async index(req, res){
    try {
        pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
        .then(client => client.cards.create({
            card_number: req.body.cardNumber,
            card_holder_name: req.body.CardHolderName,
            card_expiration_date: req.body.cardExpirationDate,
            card_cvv:req.body.cardCCV
        }))
        .catch(error => console.log(error));

    }catch(err){
      return res.send(err + " - erro desconhecido ilg");
    }         
},
  async all(req, res){
         pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
        .then(client => client.cards.all())
        .then(card => res.send(card))
    
    }
};