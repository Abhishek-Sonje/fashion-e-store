
export default function ContactPage() {
  return (
    <div>
      <p className="text-sm text-gray-500">STEP 1 OF 3</p>
      <h1 className="text-4xl font-serif mt-2 mb-4">Shipping</h1>

      <p className="text-sm underline mb-6 cursor-pointer">
        Already Registered? Sign In
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Mobile number *"
          className="w-full border-b outline-none py-2"
        />

        <input
          type="email"
          placeholder="Email Id *"
          className="w-full border-b outline-none py-2"
        />

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked />
          Yes, I would like to be a registered user.
        </label>

        <h3 className="font-semibold mt-8">SHIPPING ADDRESS</h3>

        <div className="grid grid-cols-2 gap-6">
          <input placeholder="First Name *" className="border-b py-2" />
          <input placeholder="Last Name *" className="border-b py-2" />
        </div>

        <input placeholder="Address 1 *" className="w-full border-b py-2" />
        <input placeholder="Address 2 *" className="w-full border-b py-2" />

        <div className="grid grid-cols-2 gap-6">
          <select className="border-b py-2">
            <option>India</option>
          </select>
          <input placeholder="Pin Code *" className="border-b py-2" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <input placeholder="City *" className="border-b py-2" />
          <select className="border-b py-2">
            <option>State</option>
          </select>
        </div>
      </form>
    </div>
  )
}
