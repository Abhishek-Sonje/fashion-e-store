
export default function OrderSummary() {
  return (
    <div className="border p-6 h-fit">
      <h3 className="font-semibold mb-4">ORDER SUMMARY</h3>

      <div className="flex gap-4">
        <img
          src="/Assets/traditional/wedding_lehenga.jpg"
          alt="Product"
          className="w-24 h-32 object-cover"
        />

        <div className="text-sm">
          <p className="font-medium">Pink Chiffon Handwork Saree</p>
          <p className="mt-1">₹5,000.00</p>
          <p className="mt-1">Qty: 1</p>
          <p className="mt-1">Colour: Pink</p>
          <p>Size: One Size</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-sm">
        <span>Subtotal (1 Item)</span>
        <span>₹5,000</span>
      </div>

      <div className="flex justify-between font-semibold mt-2">
        <span>Payable Amount</span>
        <span>₹5,000</span>
      </div>

      <button className="mt-6 w-full bg-black text-white py-3 text-sm">
        Next : Payment
      </button>
    </div>
  )
}
