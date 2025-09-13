import { useState } from "react";

export default function SecureCheckout() {
  const [formData, setFormData] = useState({
    cardholder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    email: "",
    country: "United Kingdom"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6" id="payment">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left - Secure Checkout */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Secure Checkout</h2>
          <p className="text-sm text-gray-500">Choose your preferred payment method</p>

          {/* Payment methods */}
          <div className="flex gap-3">
            <div className="border-2 border-blue-500 rounded-lg p-3 cursor-pointer">
              <img src="https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png" alt="card" className="w-10"/>
            </div>
            <div className="border rounded-lg p-3 cursor-pointer">
              <img src="https://img.icons8.com/ios-filled/50/000000/bank-card-front-side.png" alt="card" className="w-10"/>
            </div>
            <div className="border rounded-lg p-3 cursor-pointer">
              <span className="font-semibold">NETELLER</span>
            </div>
            <div className="border rounded-lg p-3 cursor-pointer">
              <span className="font-semibold">Fast Bank Transfer</span>
            </div>
          </div>

          {/* Card Details */}
          <input type="text" name="cardholder" placeholder="Cardholder Name" value={formData.cardholder} onChange={handleChange} className="w-full border rounded-lg p-2" required/>

          <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="w-full border rounded-lg p-2" required/>

          <div className="grid grid-cols-2 gap-3">
            <input type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} className="w-full border rounded-lg p-2" required/>
            <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} className="w-full border rounded-lg p-2" required/>
          </div>

          {/* Billing details */}
          <div>
            <label className="text-sm text-gray-600">Billing Details</label>
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="w-full border rounded-lg p-2 mt-1" required/>
          </div>

          <select name="country" value={formData.country} onChange={handleChange} className="w-full border rounded-lg p-2">
            <option>United Kingdom</option>
            <option>United States</option>
            <option>India</option>
            <option>Germany</option>
          </select>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Place Order</button>
          <button type="button" className="w-full text-gray-500 text-sm">Go Back</button>

          <div className="flex items-center justify-between text-gray-400 text-xs mt-2">
            <span>nuvei Secured</span>
            <div className="flex gap-2">
              <img src="https://img.icons8.com/color/36/visa.png" alt="visa"/>
              <img src="https://img.icons8.com/color/36/mastercard.png" alt="mastercard"/>
              <img src="https://img.icons8.com/color/36/amex.png" alt="amex"/>
            </div>
          </div>
        </form>

        {/* Right - Order Summary */}
        <div className="bg-blue-50 p-6">
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>

          <div className="flex justify-between mb-2">
            <span>Test Product</span>
            <span>€ 50.00</span>
          </div>

          <div className="text-sm text-gray-500 mb-4">Quantity: 1</div>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>€ 50.00</span></div>
            <div className="flex justify-between"><span>Promo Code Applied</span><span>- € 0.00</span></div>
            <div className="flex justify-between"><span>Shipping & Handling</span><span>€ 0.00</span></div>
            <div className="flex justify-between"><span>Estimated Tax</span><span>€ 0.00</span></div>
          </div>

          <hr className="my-3"/>

          <div className="flex justify-between font-semibold">
            <span>Order Total</span>
            <span>€ 50.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
