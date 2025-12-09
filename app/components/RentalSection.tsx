import Image from "next/image";
import { Heart } from "lucide-react";

export default function RentalSection() {
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className="font-serif  text-[50px]">RENTAL</div>
      <div className="font-serif text-[22px] text-[#4B4646] uppercase text-center">
        Designer Outfits and Timeless Jewellery, Rented Just for You.
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 pt-4 ">
        <div>
          <Image
            alt="rental1"
            src="/Assets/traditional/rental1.jpg"
            width={300}
            height={400}
          />

          <div className="flex items-center justify-between font-sans pt-2">
            <span>WEDDING LEHENGA</span>
            <button
              type="button"
              title="like"
              className="hover:text-red-500 transition-colors"
            >
              <Heart className="w-5 h-5 hover:fill-current" />
            </button>
          </div>
          <p className="font-sans">₹5,000</p>
        </div>

        <div>
          <Image
            src={"/Assets/traditional/rental2.jpg"}
            width={300}
            height={400}
            alt="rental2"
          />
          <div className="flex items-center justify-between font-sans pt-2">
            <span>DESIGNER BLOUSE</span>
            <button
              type="button"
              title="like"
              className="hover:text-red-500 transition-colors hover:fill-current "
            >
              <Heart className="w-5 h-5 hover:fill-current" />
            </button>
          </div>
          <div className="font-sans">₹5,000</div>
        </div>
        <div>
          <Image
            src={"/Assets/traditional/rental3.jpg"}
            width={300}
            height={400}
            alt="rental3"
          />
          <div className="flex items-center justify-between font-sans pt-2">
            <span>BRIDAL NECKLACE SET</span>
            <button
              type="button"
              title="like"
              className="hover:text-red-500 transition-colors hover:fill-current "
            >
              <Heart className="w-5 h-5 hover:fill-current" />
            </button>
          </div>
          <div className="font-sans">₹5,000</div>
        </div>
        <div>
          <Image
            src={"/Assets/traditional/rental4.jpg"}
            width={300}
            height={400}
            alt="rental4"
          />
          <div className="flex items-center justify-between font-sans pt-2">
            <span>JHUMKA WITH CHOKER</span>
            <button
              type="button"
              title="like"
              className="hover:text-red-500 transition-colors"
            >
              <Heart className="w-5 h-5 hover:fill-current" />
            </button>
          </div>
          <div className="font-sans">₹5,000</div>
        </div>
      </div>
      <div className="pt-10 pb-10">
        <button className="font-serif font-bold  border rounded-3xl p-2 pr-5 pl-5 ">
          SEE ALL
        </button>
      </div>
    </div>
  );
}
