import Image from "next/image";

export default function TailoredSection() {
  return (
    <section className="w-full py-2 bg-white">

    
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-px bg-gray-300 mx-auto my-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          
          <div className="w-full md:w-[400px] h-[500px] sm:h-[360px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg ">
            <Image
              src="/Assets/traditional/IMG-20250920-WA0142.jpg"
              alt="Tailored Just for You"
              fill
              className="object-cover"
            />
          </div>

          <span className="hidden md:block w-px h-[400px] bg-[#CDB5B5]"></span>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-[50px] font-serif font-bold text-gray-900 mb-6">
              Tailored Just for You.
            </h2>

            <p className="text-gray-600 text-[30px] text-bold font-serif leading-relaxed mb-8 max-w-md mx-auto md:mx-0 mt-10">
              Experience the luxury of Rajputi Poshakhs tailored to your measurements—crafted
              with precision, grace, and artistry.
            </p>

            <button className="bg-white border-2 border-black text-black font-serif px-3 py-1.5 rounded-3xl text-md font-medium hover:shadow-lg transition-all duration-300 mt-5">
              Customize now
            </button>
          </div>

        </div>
      </div>

      

    </section>
  );
}
