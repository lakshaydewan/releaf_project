import { Navbar } from "../../components/navbar";



function Mycart(){

    const productlist = [
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},
        {productname:"xyz",qty:100,price:500,get amount(){return this.qty*this.price}},

    ]


    return <div className="flex flex-col relative h-full">
        <Navbar />
        <div className="text-3xl font-bold text-white pt-5 pb-10 px-5">My Cart</div>
        {productlist.map(item => {
                return( <div className="flex w-full">
            <div id="productlist" className="w-full flex flex-col">
                <div className="border w-full min-h-[80px] h-fit px-5 py-1 flex space-x-4 text-white">
                    <div className="w-1/12 flex flex-col items-center">
                        <div>S.no</div>
                        <div>1</div>
                    </div>
                    <div id="product name" className="w-5/12 ">
                        <div>NAME</div>
                        <div>{item.productname}</div>
                    </div>
                    <div className="w-2/12 flex flex-col items-center">
                        <div>qty</div>
                        <div>{item.qty}</div>
                    </div>
                    <div className="w-2/12 flex flex-col items-center">
                        <div>price</div>
                        <div>X{item.price}</div>
                    </div>
                    <div className="w-2/12 flex flex-col items-center">
                        <div>amount</div>
                        <div>{item.amount}</div>
                    </div>
                </div>
            </div>
        </div>)
        
    })}
        
        
         <div className="w-full flex  flex-col  items-center bg-black fixed bottom-0 ">
            <div className="text-white w-full flex justify-end ">
                <div className="w-4/12 py-1 px-4 flex justify-between">
                <div>total</div>
                <div>Rs.500</div>
                </div>
            </div>
            <div className="w-full h-[100px] flex justify-center items-center"><button className="bg-white w-11/12 h-[50px] rounded-md">CHECKOUT</button></div>
        </div>
    </div>
}

export {Mycart}