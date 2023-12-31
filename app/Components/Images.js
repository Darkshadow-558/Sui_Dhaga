const Items = [
  {
    Id: 1,
    ItemName: "Jersey trousers",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Women",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 1,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe1%2F51%2Fe151f22058e91ac8f21d1f0236eb21cc9c431290.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F46%2F3e%2F463ed34cd306eb5825208ad2b24ad4f6b5681c61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 2,
    ItemName: "V-neck blouse",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Women",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 1,599.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdd%2Fd6%2Fddd64901b905c93761d653bcd7ee224135c8f7be.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2F0b%2Fb10b2bd6b78369d1d3c0be004e9ce4801a52304b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    ],
  },
  {
    Id: 3,
    ItemName: "Rib-knit jumper",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Women",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 2,999.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff6%2F85%2Ff68534609bb31f508d6c968ae3bd7ac2d03dee98.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe0%2F16%2Fe01616ab34aff41888f58ae2a6aea837011f1567.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 4,
    ItemName: "Slim Mom High Ankle Jeans",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Women",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 3,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fac%2F33%2Fac33c033d44e6e37aabfa44cf7d06bfc5545b8ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbc%2F84%2Fbc8490c84b8d9f88ff539b28ce503a54c3c5bc79.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 5,
    ItemName: "Pendant earrings",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Women",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 5,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2F72%2F2572da567009c0b550805cfb62aab91698c0a72c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd6%2F66%2Fd6669aed5000d99a007a826949edcfacf4646580.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 6,
    ItemName: "Oversized printed T-shirt",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Women",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 1,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2Fab%2Fc6ab5b0f42b01b7d7470e1046e3c2163038b1a8b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F49%2Fc9%2F49c9883c6a307e945c3adebad7d3708a784505d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 7,
    ItemName: "Jersey trousers",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 1,499.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695141106/770374_ZAM6S_4240_002_100_0000_Light-Cotton-jersey-jacket-with-Web.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1695141106/770374_ZAM6S_4240_001_100_0000_Light-Cotton-jersey-jacket-with-Web.jpg",
    ],
  },
  {
    Id: 8,
    ItemName: "Reversible denim and GG flannel shirt",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 4,400.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695140222/766142_XDCRJ_1043_002_100_0000_Light-Reversible-denim-and-GG-flannel-shirt.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1695140220/766142_XDCRJ_1043_001_100_0000_Light-Reversible-denim-and-GG-flannel-shirt.jpg",
    ],
  },
  {
    Id: 9,
    ItemName: "Wool jacket with Web",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 3,500.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695140142/762525_ZAPBF_4669_002_100_0000_Light-Wool-jacket-with-Web.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1695140141/762525_ZAPBF_4669_001_100_0000_Light-Wool-jacket-with-Web.jpg",
    ],
  },
  {
    Id: 10,
    ItemName: "GG wool jacquard sweater",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 1,350.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695058299/692900_XKCC5_1064_002_100_0000_Light-GG-wool-jacquard-sweater.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1695058298/692900_XKCC5_1064_001_100_0000_Light-GG-wool-jacquard-sweater.jpg",
    ],
  },
  {
    Id: 11,
    ItemName: "Men's Gucci Blondie ankle boot",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: [],
    ItemPrice: "Rs. 1,450.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1688401076/757777_06F80_2140_003_100_0000_Light-Mens-Gucci-Blondie-ankle-boot.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1687537886/757777_06F80_2140_001_100_0000_Light-Mens-Gucci-Blondie-ankle-boot.jpg",
    ],
  },
  {
    Id: 12,
    ItemName: "Diagonal Interlocking G necklace",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: [],
    ItemPrice: "Rs. 420.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695391270/774055_J8400_8106_003_100_0000_Light-Diagonal-Interlocking-G-necklace.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1689183006/774055_J8400_8106_001_100_0000_Light-Diagonal-Interlocking-G-necklace.jpg",
    ],
  },
  {
    Id: 13,
    ItemName: "Nylon canvas zip jacket with GG",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: ["SM", "M", "L", "XL", "XXL", "XXXL"],
    ItemPrice: "Rs. 2,600.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695141127/770762_ZAPDX_4433_002_100_0000_Light-Nylon-canvas-zip-jacket-with-GG.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1695141126/770762_ZAPDX_4433_001_100_0000_Light-Nylon-canvas-zip-jacket-with-GG.jpg",
    ],
  },
  {
    Id: 14,
    ItemName: "Felted wool baseball hat with patch",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Men",
    ItemSize: [],
    ItemPrice: "Rs. 490.00",
    ItemImageSrc: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1696263322/757903_4HA4T_4068_003_100_0000_Light-Felted-wool-baseball-hat-with-patch.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1691426804/757903_4HA4T_4068_001_100_0000_Light-Felted-wool-baseball-hat-with-patch.jpg",
    ],
  },
];

export default Items;
