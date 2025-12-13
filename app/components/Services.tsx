import Image from "next/image";

export default function Services() {
  return (
    <section className="flex flex-col items-center bg-white pt-16 px-4">

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 justify-center pb-16 w-full max-w-6xl">
        
        <div className="flex flex-col items-center text-center gap-3">
          <Image src="/custom.png" width={60} height={60} alt="custom" />
          <div className="underline uppercase text-xl font-serif font-bold">
            Custom Fit
          </div>
          <div className="font-serif">
            Rajputi Poshakhs tailored to your exact
            <br /> size for the perfect fit.
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <Image src="/Time.png" width={60} height={60} alt="time" />
          <div className="underline uppercase text-xl font-serif font-bold">
            Rentals Available
          </div>
          <div className="font-serif">
            Elegant outfits & jewelry available for rental
            <br />—look stunning for every occasion.
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <Image src="/customer.png" width={60} height={60} alt="customer" />
          <div className="underline uppercase text-xl font-serif font-bold">
            Customer Support
          </div>
          <div className="font-serif">
            Need help? Our team is available
            <br />Mon–Sat, 10 AM – 6 PM.
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl pb-20">
        
        <div className="flex flex-col items-center text-center gap-3">
          <Image src="/payment.png" width={60} height={60} alt="payment" />
          <div className="underline uppercase text-xl font-serif font-bold">
            Secure Payments
          </div>
          <div className="font-serif">
            Pay safely via UPI, Cards, Net Banking
            <br />& COD (selected locations).
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <Image src="/shipping.png" width={60} height={60} alt="shipping" />
          <div className="underline uppercase text-xl font-serif font-bold">
            All Over India Shipping
          </div>
          <div className="font-serif">
            Elegant designs delivered to your
            <br /> doorstep, all over India.
          </div>
        </div>

      </div>
    </section>
  );
}
