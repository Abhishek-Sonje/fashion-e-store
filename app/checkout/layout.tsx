
import Stepper from './components/Stepper'
import OrderSummary from './components/OrderSummary'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>

   <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Stepper />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

        <div className="lg:col-span-2">{children}</div>

        <OrderSummary />
      </div>
    </div>
    <Footer/>
     </div>
  )
}
