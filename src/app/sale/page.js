import ProductLayout from "../components/products/ProductLayout";
import SaleScroll from "../components/products/SaleScroll";

const products = [
  {
    name: "Square Oversized Heavyweight Hoodie",
    price: 90,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F51%2Fad%2F51ad832194db8bea2df0b78d942905a3f85e5d65.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2Fa8%2F06a8aef652e80fcc049a76faf44a4abbe05f132c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 45,
  },
  {
    name: "Blues Top",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F93%2F1b%2F931b2f8343f80f0199231ae5ddcf2a43eca22363.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F96%2Fcc%2F96cc428aeddc7f1d5338e1cf01033238ea21c6e7.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 25,
  },
  {
    name: "Slim Mock Neck Tank Top",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B400%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fca%2F94%2Fca94dd6dcf539d4f8a6f943f1bb183d4f84e4f9c.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F49%2Fbe%2F49be343ebf7be7435ca52930efb98f8bee2a8dd5.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 15,
  },
  {
    name: "Geri Denim Short Wrap Dress",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2F45%2Fc6%2F45c6a7026f40a68235044c898f6cd1528de5caae.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Fc6%2F98%2Fc698da144f6d9605c45b4d8bbe681aa6e487e024.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 45,
  },
  {
    name: "Anaheim Long Denim Skirt",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F4c%2F60%2F4c60cfd58fa5ba12fe7e280cad93b5dc29f0ba39.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fdb%2Fb3%2Fdbb345b420c8203ea7ab657194a289cc2b067581.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 45,
  },
  {
    name: "Pop Mini Skirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Fd4%2Fba%2Fd4ba5613792d211490f173054cebbe0f32e34777.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2F72%2F5f%2F725fcdc47523d9812d5c439a7b0c21b148f10f94.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 25,
  },
  {
    name: "Off Shoulder Long Sleeve",
    price: 40,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F06%2F04%2F06040ad2363eaa915d441f351c7463b1a6bdc9a5.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F3d%2F37%2F3d373a0821be78e4904b3266d09198598c12ad3b.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 25,
  },
  {
    name: "Blend Cotton Crinkle Shirt",
    price: 55,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F0a%2Ffc%2F0afc85018c9b8588e1fe10c109ed245b200a2120.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fbb%2Fe9%2Fbbe9a1d2bbe44da6ba58d7b0feb4e99d93bc4cf4.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 30,
  },
  {
    name: "Ruby Cardigan",
    price: 60,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F19%2Fca%2F19cac0d015b014ffc530fcf7ba3e17438f7e7580.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F30%2F43%2F304316ffb67b7e1d5c5e63795e6d4d74dad98101.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 30,
  },
  {
    name: "Ample Low Loose Jeans",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fa8%2F45%2Fa84542c4271221324a88ff6416472d18f76bb004.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Ff2%2Fa3%2Ff2a395256a4c88945c6ce777f1ec15ce1fc3005d.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 55,
  },
  {
    name: "Oversized Structured Short Sleeve Shirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F50%2F8f%2F508ff185afdb4559f0db7c889b90f958c05ec65c.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fb8%2F2b%2Fb82b6722aa89bcc87fd37da029341cf21d2c937c.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 25,
  },
  {
    name: "Oversized Structured Short Sleeve Shirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F8f%2Fd8%2F8fd8ccc5daa236e3c2745c9b156997083ce5179b.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F7e%2F65%2F7e65278cac14f9943445b16fd7776d6c9eb865d2.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 25,
  },
  {
    name: "Raheem Tracksuit Trousers",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Ff2%2F1d%2Ff21d302e73c6d2e350af9ea5203e679c54588bb2.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fa2%2F1d%2Fa21d4850ca8f2c6969a9eacb0d8dfbf30f5e6774.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 40,
  },
  {
    name: "Standard Midweight T-shirt",
    price: 20,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F55%2F37%2F5537a2858367d93c6ff067f53364067d8138f09a.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      " https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F0e%2F3b%2F0e3b02d9a298b59b19e578f992d42061702af255.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 8,
  },
  {
    name: "Dream Loose Trousers",
    price: 70,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F45%2F8c%2F458c72bd8a8630015080f93be61ee04c9bce2b7d.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F9d%2Fd0%2F9dd00ffae388a2b5140fea3d4cb109832a477d0f.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 45,
  },

  {
    name: "Oversize Graphic Printed T-shirt",
    price: 30,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fe9%2Fae%2Fe9aed0956e635f48d6c29f8de3e8ab52a1de6b1c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F3c%2Fed%2F3cedb7f549fa0a9292e634157e58479c76fd3d98.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",

    sale: 20,
  },
  {
    name: "Relaxed Crochet Shirt",
    price: 65,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2Fd5%2Fdc%2Fd5dc1393d30193be55a244ccb616002a3b9a8658.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B%2F90%2F5a%2F905a771a60b3f4763bece66ecc8742c237a27028.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 40,
  },
  {
    name: "Relaxed Structured Shirt",
    price: 50,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fe6%2F4a%2Fe64a3b70b8feebac9c8d58da38f81f2760fc2cbc.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F2e%2Fb6%2F2eb69afafd80ef91c5e4ffd61a44832207b5f34f.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 30,
  },
  {
    name: "Galaxy Loose Straight Jeans",
    price: 75,
    source:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2F19%2Fae%2F19ae68b4dcd051908709df4c09d9afe0989a7759.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    altSource:
      "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B%2Fda%2F2c%2Fda2c885e55a6294c4cfd77eccb72b9eb0c3a91e0.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile%3A%2Fproduct%2Fdynamic.chain%5D",
    sale: 50,
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

export default function Sale() {
  return (
    <>
      <SaleScroll />
      <ProductLayout products={products} />
    </>
  );
}
