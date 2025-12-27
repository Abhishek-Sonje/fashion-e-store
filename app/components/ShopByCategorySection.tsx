import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShopByCategorySection() {
  const router = useRouter();
  const categories = [
    {
      name: "TRADITIONAL",
      image: "/Assets/traditional/traditional_cat.jpg",
      link: "/traditional",
    },
    {
      name: "WESTERN",
      image: "/Assets/western/western_cat.jpg",
      link: "/western",
    },
    {
      name: "ACCESSORIES",
      image: "/Assets/western/accessories_cat.jpg",
      link: "/accessories",
    },
    {
      name: "RENTALS",
      image: "/Assets/traditional/rental_cat.jpg",
      link: "/rentals",
    },
    {
      name: "READY TO SHIP",
      image: "/Assets/traditional/ready_to_ship_cat.jpg",
      link: "/ready-to-ship",
    },
  ];

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-10 md:mb-12 uppercase tracking-wide">
          Shop By Category
        </h2>

        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] gap-1 md:gap-0">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => router.push(category.link)}
              className="relative flex-1 group overflow-hidden cursor-pointer bg-gray-200 border-r border-white last:border-r-0"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-8 md:pb-12">
                <h3 className="text-white text-lg md:text-xl font-medium tracking-widest uppercase drop-shadow-md text-center px-2">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
