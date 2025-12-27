import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import NewArrivals from "@/app/components/NewArrivals";
import { HOME_NEW_ARRIVALS } from "@/app/data";

export default function RentalsNewArrivalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-center mb-6">
          Rentals — New Arrivals
        </h1>
      </section>
      <NewArrivals
        title="New Arrivals"
        products={HOME_NEW_ARRIVALS}
        seeAllHref="/rentals/new-arrival"
      />
      <Footer />
    </main>
  );
}
