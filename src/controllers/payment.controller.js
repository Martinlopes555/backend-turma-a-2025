const PaymentController = {
    async createPayment(req, res){
      try{
         res.status(201).json({message: "Payment created succesfully"});
      } catch (error){
        res.status(500).json({ message: error.message});
      }
    }
}
export default PaymentController; 