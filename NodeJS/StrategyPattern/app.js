const Payment = require('./Payment')
const Chase = require('./Chase')
const Citibank = require('./Citibank')

const payment = new Payment()

payment.pay(new Chase(200, "4354324234"))
payment.pay(new Citibank(40, "98763245"))

payment.refund(new Chase(20, "98741234"))
payment.refund(new Citibank(30, "317865234"))

