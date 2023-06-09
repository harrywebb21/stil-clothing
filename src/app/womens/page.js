import ProductLayout from "../components/products/ProductLayout";

const products = [
  {
    name: "Square Oversized Heavyweight Hoodie",
    price: 90,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F51%2Fad%2F51ad832194db8bea2df0b78d942905a3f85e5d65.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2Fa8%2F06a8aef652e80fcc049a76faf44a4abbe05f132c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Blues Top",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F93%2F1b%2F931b2f8343f80f0199231ae5ddcf2a43eca22363.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F96%2Fcc%2F96cc428aeddc7f1d5338e1cf01033238ea21c6e7.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Slim Mock Neck Tank Top",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fca%2F94%2Fca94dd6dcf539d4f8a6f943f1bb183d4f84e4f9c.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F49%2Fbe%2F49be343ebf7be7435ca52930efb98f8bee2a8dd5.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Geri Denim Short Wrap Dress",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2F45%2Fc6%2F45c6a7026f40a68235044c898f6cd1528de5caae.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Fc6%2F98%2Fc698da144f6d9605c45b4d8bbe681aa6e487e024.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Anaheim Long Denim Skirt",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F4c%2F60%2F4c60cfd58fa5ba12fe7e280cad93b5dc29f0ba39.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fdb%2Fb3%2Fdbb345b420c8203ea7ab657194a289cc2b067581.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Pop Mini Skirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Fd4%2Fba%2Fd4ba5613792d211490f173054cebbe0f32e34777.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2F72%2F5f%2F725fcdc47523d9812d5c439a7b0c21b148f10f94.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Off Shoulder Long Sleeve",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2F04%2F06040ad2363eaa915d441f351c7463b1a6bdc9a5.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F3d%2F37%2F3d373a0821be78e4904b3266d09198598c12ad3b.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Blend Cotton Crinkle Shirt",
    price: 55,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F0a%2Ffc%2F0afc85018c9b8588e1fe10c109ed245b200a2120.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fbb%2Fe9%2Fbbe9a1d2bbe44da6ba58d7b0feb4e99d93bc4cf4.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Ruby Cardigan",
    price: 60,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F19%2Fca%2F19cac0d015b014ffc530fcf7ba3e17438f7e7580.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F30%2F43%2F304316ffb67b7e1d5c5e63795e6d4d74dad98101.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
  {
    name: "Ample Low Loose Jeans",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fa8%2F45%2Fa84542c4271221324a88ff6416472d18f76bb004.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Ff2%2Fa3%2Ff2a395256a4c88945c6ce777f1ec15ce1fc3005d.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
  },
];

export default function Womens() {
  return (
    <>
      <ProductLayout products={products} />
    </>
  );
}
