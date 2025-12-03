import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
           
            <Image
              src="/Assets/traditional/header2.jpg"
              alt="Hero Image Placeholder"
              fill
              className="object-cover"
            />
            
          
            <div className="absolute inset-0 flex items-center justify-start p-8 max-w-md md:p-16">
                <div className="max-w-md text-left">
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-white text-shadow-lg mb-4 leading-tight">
                        Crafted For Celebration
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Timeless elegance designed for your most cherished moments.
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
