export default function AboutUs() {
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="h-[500px] flex items-center justify-center">
        
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          
          <div className="font-serif font-bold border rounded-3xl text-xl px-5 py-2">
            About Us
          </div>

          <p className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            <span className="uppercase">Neha Rajput</span> brings you timeless
            designs crafted with luxury, detail, and{" "}
            <span className="text-[#BDAFAF]">
              artistry—fashion that reflects individuality, confidence, and grace.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
