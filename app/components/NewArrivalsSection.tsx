import Image from "next/image";

export default function NewArrivalsSection() {
  const products = [
    { 
      name: "Silk Saree", 
      price: "₹75,000",
      image: "/Assets/traditional/newArrival1.jpg"
    },
    { 
      name: "Handcrafted Kurta Set", 
      price: "₹45,000",
      image: "/Assets/traditional/newArrival2.jpg"
    },
    { 
      name: "Embroidered Lehenga", 
      price: "₹1,20,000",
      image: "/Assets/traditional/newArrival3.jpg"
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-medium text-center mb-12 uppercase tracking-wide">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full aspect-3/4 bg-gray-200 rounded-md mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 z-10 text-white hover:text-red-500 transition-colors">
                  <span className="text-xl">♡</span>
                </button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-10 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300 uppercase tracking-wide">
            See All
          </button>
        </div>
      </div>
    </section>
  );
}
