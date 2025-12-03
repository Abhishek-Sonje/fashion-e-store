export default function Services()
{
    return <div className="pt-10">
        <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-20 justify-center pb-8">

            <div className="flex flex-col justify-center items-center">
                <img src={"./custom.png"} width={"60px"} height={"60px"}/>
                <div className="text-center underline uppercase text-xl font-serif font-bold">
                    custom fit
                </div>
                <div className="font-serif text-center ">
                    Rajputi Poshakhs tailored to your exact<br/> size for the perfect fit.
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={"./Time.png"} width={"60px"} height={"60px"}/>
                <div className="text-center underline uppercase text-xl font-serif font-bold">
                    Rentals Available
                </div>
                <div className="font-serif text-center ">
                    Elegant outfits & jewelry available for rental<br/>—look stunning for every occasion.
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={"./customer.png"} width={"60px"} height={"60px"}/>
                <div className="text-center underline uppercase text-xl font-serif font-bold">
                    Customer Support
                </div>
                <div className="font-serif text-center ">
                    Need help? Our team is available <br/>Mon–Sat, 10 AM – 6 PM.
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 pt-10 pb-10 gap-20">
            <div className="flex flex-col justify-center items-center">
                <img src={"./payment.png"} width={"60px"} height={"60px"}/>
                <div className="text-center underline uppercase text-xl font-serif font-bold">
                    Secure Payments
                </div>
                <div className="font-serif text-center ">
                    Pay safely via UPI, Cards, Net Banking<br/> & COD (selected locations).
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={"./shipping.png"} width={"60px"} height={"60px"}/>
                <div className="text-center underline uppercase text-xl font-serif font-bold">
                    All Over India Shipping
                </div>
                <div className="font-serif text-center ">
                    Elegant designs delivered to your<br/> doorstep, all over India.
                </div>
            </div>
        </div>
    </div>
}