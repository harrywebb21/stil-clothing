import ProceedCheckout from "../components/checkout/ProceedCheckout";
import CheckoutCard from "../components/products/CheckoutCard";
import ProductCard from "../components/products/ProductCard";

const cartProducts = [
  {
    name: "Square Oversized Heavyweight Hoodie",
    price: 90,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F51%2Fad%2F51ad832194db8bea2df0b78d942905a3f85e5d65.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2Fa8%2F06a8aef652e80fcc049a76faf44a4abbe05f132c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    size: "M",
    colour: "Blue",
    quantity: 1,
  },
  {
    name: "Square Oversized Heavyweight Hoodie",
    price: 90,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F51%2Fad%2F51ad832194db8bea2df0b78d942905a3f85e5d65.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2Fa8%2F06a8aef652e80fcc049a76faf44a4abbe05f132c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    size: "M",
    colour: "Blue",
    quantity: 1,
  },
];

const extraProducts = [
  {
    name: "Blues Top",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F93%2F1b%2F931b2f8343f80f0199231ae5ddcf2a43eca22363.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F96%2Fcc%2F96cc428aeddc7f1d5338e1cf01033238ea21c6e7.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Blues Top",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F93%2F1b%2F931b2f8343f80f0199231ae5ddcf2a43eca22363.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F96%2Fcc%2F96cc428aeddc7f1d5338e1cf01033238ea21c6e7.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
];

export default function Cart() {
  return (
    <>
      <div className="flex justify-evenly mx-5 mb-6 ">
        <div className="flex flex-col justify-evenly w-fit gap-6 ">
          <h1 className=" font-semibold">Shopping bag items</h1>
          <div className="flex flex-col gap-6">
            {cartProducts.map((product) => (
              <CheckoutCard key={product} {...product} />
            ))}
          </div>
          <div className="flex flex-col ">
            <h1 className=" font-semibold">Last minute items</h1>
            <div className=" flex gap-6">
              {extraProducts.map((product) => (
                <ProductCard key={product} {...product} />
              ))}
            </div>
          </div>
        </div>
        <div className="translate-y-12">
          <ProceedCheckout />
        </div>
      </div>
    </>
  );
}
