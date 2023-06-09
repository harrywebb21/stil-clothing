import Image from "next/image";

import ProductCard from "../components/products/ProductCard";

export default function ProductPage() {
  return (
    <>
      <div className="flex w-screen items-center px-24 gap-6">
        <div className="grid grid-cols-2 grid-flow-col gap-6 ">
          <div className=" row-span-2 ">
            <Image
              width={1025}
              height={500}
              src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F51%2Fad%2F51ad832194db8bea2df0b78d942905a3f85e5d65.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D"
              alt="Square Oversized Heavyweight Hoodie"
            />
          </div>
          <div className=" col-span-2 ">
            <div className=" grid grid-flow-row-dense md:grid-cols-2 h-fit gap-y-8 ">
              <Image
                src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F51%2Fad%2F51ad832194db8bea2df0b78d942905a3f85e5d65.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D"
                width={185}
                height={500}
                alt="Square Oversized Heavyweight Hoodie"
              />
              <Image
                src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B100%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F15%2Fb1%2F15b19281602cf212badf19cbe301676ab0bbde69.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D"
                width={185}
                height={500}
                alt="Square Oversized Heavyweight Hoodie"
              />
              <Image
                src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B100%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2Fa8%2F06a8aef652e80fcc049a76faf44a4abbe05f132c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D"
                width={185}
                height={500}
                alt="Square Oversized Heavyweight Hoodie"
              />
              <Image
                src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B100%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F6a%2Fcc%2F6acc23c0c10017c7e6896101003f5599f2d4b377.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D"
                width={185}
                height={500}
                alt="Square Oversized Heavyweight Hoodie"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-left px-10">
          <h1 className=" font-black text-2xl">
            Square Oversized Heavyweight Hoodie
          </h1>
          <p>$90</p>
          <button className=" py-4   border-2 border-black">Add to bag</button>

          <p className="  text-sm">
            A cropped square-shaped oversized hoodie made from soft, heavyweight
            cotton terry enhanced with recycled polyester. This go-to layer has
            a double-layered drawstring hood, dropped shoulders, gathered ribbed
            cuffs and hemline, and a kangaroo pocket. The model is
            175cm/5&#39;9&#34; and wears a size S
          </p>
          <div>
            <p>Supplier</p>
            <p>Bangladesh</p>
            <ul className=" list-disc text-sm">
              <li>Supplier: FAKIR FASHION LTD</li>
              <li>Factory: FAKIR FASHION LTD</li>
              <li>
                Address: Songargaon Road, Dohargaom, Baliapara, Rupgonj, 1400,
                Narayonganj
              </li>
            </ul>
            <p>Product No: 1154560543</p>
          </div>
          <div>
            <h2 className=" ">Delivery</h2>
            <ul className=" list-disc text-sm">
              <li>Standard shipping: $5 / Free over $50</li>
              <li>Delivery timeframe shown at checkout</li>
              <li>Shipping to: Worldwide</li>
              <li>Import duties paid on delivery</li>
              <li>Minimum order value: $6</li>
              <li>Pay with Credit Cards, Paypal or Klarna</li>
            </ul>
            <p className=" italic font-semibold">Free shipping over $50.</p>
            <p className=" italic font-semibold">30 days return policy</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className=" font-black text-2xl">You might also like:</h1>
        <ProductCard
          name={"Tina Zip Long Sleeve"}
          price={"50"}
          source={
            "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B250%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F68%2F88%2F6888b1c78664ae7f6171d019645465474a7c26bb.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D"
          }
        />
      </div>
    </>
  );
}
