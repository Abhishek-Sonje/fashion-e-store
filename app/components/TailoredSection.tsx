import Image from "next/image";

export default function TailoredSection() {
  return (
    <section className="w-full py-16 bg-white border-b border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          

          <div className="w-full md:w-[398px] h-[400px] sm:h-[500px] md:h-[600px] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Assets/traditional/IMG-20250920-WA0139.jpg"
              alt="Tailored Just for You"
              fill
              className="object-cover"
            />
          </div>

       
          <div className="hidden md:block w-px h-[450px] bg-gray-400"></div>


          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6">
              Tailored Just for You.
            </h2>

            <p className="text-gray-600 font-bold leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Experience the luxury of Rajputi Poshakhs tailored to your measurements—crafted
              with precision, grace, and artistry.
            </p>

            <button className="bg-white border-2 border-black text-black font-serif px-8 py-3 rounded-3xl text-2xl font-medium  hover:shadow-lg transition-all duration-300">
              Customize now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
