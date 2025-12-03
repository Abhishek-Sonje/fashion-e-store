export default function Footer() {
  return (
    <div className="bg-black text-white w-full">
   
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 border-b border-[#3b3b3b]">
        <div className="flex flex-col md:flex-row justify-between gap-16">

         
          <div>
            <div className="flex flex-col gap-2">
              <div className="uppercase text-4xl md:text-5xl font-bold leading-tight">
                <span className="font-cinzeld">N</span>
                <span className="font-serif">eha Rajput</span>
              </div>
              <div className="text-sm tracking-[0.35em] text-[#b3b3b3] font-serif">
                FASHION DESIGNER
              </div>
            </div>

          
            <p className="mt-8 max-w-md text-sm leading-relaxed text-[#d4d4d4] font-serif">
              Creating Timeless Fashion Pieces That Celebrate The Beauty Of
              Traditional Craftsmanship And Modern Elegance.
            </p>

      
            <div className="mt-10 flex gap-8">
  
              <button className="flex h-11 w-11 items-center justify-center rounded">
                
                <img src={"/insta.png"}/>
              </button>
              <button className="flex h-11 w-11 items-center justify-center  rounded">
                <img src={"/wp.png"}/>
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded">
                <img src={"/fb.png"}/>
              </button>
            </div>
          </div>

          <div className="text-sm">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#e5e5e5]">
              <li>Traditional</li>
              <li>Western</li>
              <li>Accessories</li>
              <li>Rentals</li>
              <li>Ready To Ship</li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-[#e5e5e5]">
              <li>Custom Design</li>
              <li>Outfit &amp; Jewelry Rental</li>
              <li>Accessories</li>
              <li>Personal Styling</li>
              <li>Ready To Ship</li>
            </ul>
          </div>

     
          <div className="text-sm">
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-[#e5e5e5]">
              <li className="flex items-center gap-3">
                <img src={"/mail.png"} className="h-5 w-5"/>
                <span>neharajput@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={"/call.png"} className="h-5 w-5"/>
                <span>9420087800</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={"/location.png"} className="h-5 w-5"/>
                <span>Nashik, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="mx-auto max-w-6xl px-6 py-6">
        <p className="text-xs md:text-sm text-[#d4d4d4]">
          © 2025 Neha Rajput. All rights reserved.
        </p>
      </div>
    </div>
  );
}
