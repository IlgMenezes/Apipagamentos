const pagarme = require('pagarme');

module.exports = {
  async index(req, res){
    const { cardNumber } = req.params;
    try {

      res.send(cardNumber + " - ilg");
      //res.sendFile("views/cartao.html");
      //res.send("Cliente criado: " + clienteCriado.body.email + " - Cartão criado");

    }catch(err){
      return res.send(err + " - erro desconhecido ilg");
    }         
},
  async all(req, res){
    
    /*      pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
        .then(client => client.security.encrypt({
          card_number: '7777695356233704',
            card_holder_name: 'Cara Cabuloso',
            card_expiration_date: '1211',
            card_cvv: '777',
        }))
        .then(card_hash => console.log(card_hash))
        .catch(error => res.send(error));  */
    
    /*     pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
        .then(client => client.cards.all())
        .then(card => res.send(card)) */
    
        pagarme.client.connect({ api_key: 'ak_test_qTmxSGjEjb88g8Z5R9w67ss26GMo8I' })
        .then(client => client.cards.all())
        .then(card => res.send(card))
    
      }
};