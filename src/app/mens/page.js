import ProductLayout from "../components/products/ProductLayout";

const products = [
  {
    name: "Oversized Structured Short Sleeve Shirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F50%2F8f%2F508ff185afdb4559f0db7c889b90f958c05ec65c.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fb8%2F2b%2Fb82b6722aa89bcc87fd37da029341cf21d2c937c.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Oversized Structured Short Sleeve Shirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F8f%2Fd8%2F8fd8ccc5daa236e3c2745c9b156997083ce5179b.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F7e%2F65%2F7e65278cac14f9943445b16fd7776d6c9eb865d2.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Raheem Tracksuit Trousers",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Ff2%2F1d%2Ff21d302e73c6d2e350af9ea5203e679c54588bb2.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fa2%2F1d%2Fa21d4850ca8f2c6969a9eacb0d8dfbf30f5e6774.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Standard Midweight T-shirt",
    price: 20,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F55%2F37%2F5537a2858367d93c6ff067f53364067d8138f09a.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      " https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F0e%2F3b%2F0e3b02d9a298b59b19e578f992d42061702af255.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Dream Loose Trousers",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F45%2F8c%2F458c72bd8a8630015080f93be61ee04c9bce2b7d.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F9d%2Fd0%2F9dd00ffae388a2b5140fea3d4cb109832a477d0f.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },

  {
    name: "Oversize Graphic Printed T-shirt",
    price: 30,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fe9%2Fae%2Fe9aed0956e635f48d6c29f8de3e8ab52a1de6b1c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F3c%2Fed%2F3cedb7f549fa0a9292e634157e58479c76fd3d98.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Relaxed Crochet Shirt",
    price: 65,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Fd5%2Fdc%2Fd5dc1393d30193be55a244ccb616002a3b9a8658.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2F90%2F5a%2F905a771a60b3f4763bece66ecc8742c237a27028.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Relaxed Structured Shirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fe6%2F4a%2Fe64a3b70b8feebac9c8d58da38f81f2760fc2cbc.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F2e%2Fb6%2F2eb69afafd80ef91c5e4ffd61a44832207b5f34f.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Galaxy Loose Straight Jeans",
    price: 75,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F19%2Fae%2F19ae68b4dcd051908709df4c09d9afe0989a7759.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fda%2F2c%2Fda2c885e55a6294c4cfd77eccb72b9eb0c3a91e0.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Mike Regular Cardigan",
    price: 80,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F72%2F54%2F72548ff5080ae1de1d72d66f25ded3572653e198.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F7f%2Fd9%2F7fd979cd5d275408c3427017b8952b578362da1e.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 40,
  },
];

export default function Mens() {
  return (
    <>
      <ProductLayout products={products} />
    </>
  );
}
