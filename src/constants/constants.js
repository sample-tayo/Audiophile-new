export const mainShopItems = [
  {
    imgSrc: "/assets/shared/image-headphones.png",
    title: "HEADPHONES",
    // creating target route here because this is the only way i can pass it to the shopchortcut component
    targetRoute: "/headphones",
  },
  {
    imgSrc: "/assets/shared/image-speakers.png",
    title: "SPEAKERS",
    // creating target route here because this is the only way i can pass it to the shopchortcut component
    targetRoute: "/speakers",
  },
  {
    imgSrc: "/assets/shared/image-earphones.png",
    title: "EARPHONES",
    // creating target route here because this is the only way i can pass it to the shopchortcut component
    targetRoute: "/earphones",
  },
];

export const HeadPhoneProducts = [
  {
    productCategory: "headphones",
    productId: "xx99-mark-two-headphones",
    newProduct: true,
    price: 2999,
    productType: "XX99 MARK II HEADPHONES",
    productInfo:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    productImgSrc: "/assets/categories/headphones/image-xx99-mark-two.jpg",
    features: {
      paragraph1:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat",
      paragraph2:
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    },
  },
  {
    productCategory: "headphones",
    productId: "xx99-mark-one-headphones",
    newProduct: false,
    price: 1750,
    productType: "XX99 MARK I HEADPHONES",
    productInfo:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    productImgSrc: "/assets/categories/headphones/image-xx99-mark-one.jpg",
    features: {
      paragraph1:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      paragraph2:
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
    },
  },
  {
    productCategory: "headphones",
    productId: "xx59-headphones",
    newProduct: false,
    price: 899,
    productType: "XX59 HEADPHONES",
    productInfo:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    productImgSrc: "/assets/categories/headphones/image-xx59.jpg",
    features: {
      paragraph1:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      paragraph2:
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    },
  },
];

export const SpeakersProducts = [
  {
    productCategory: "speakers",
    productId: "zx9-speaker",

    newProduct: true,
    price: 4500,

    productType: "ZX9 SPEAKER",
    productInfo:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    productImgSrc: {
      mobile: "/assets/categories/speakers/mobile/image-zx9.jpg",
      desktop: "/assets/categories/speakers/desktop/image-zx9.jpg",
    },
    features: {
      paragraph1:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      paragraph2:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    },
  },
  {
    productCategory: "speakers",

    productId: "zx7-speaker",

    newProduct: false,
    price: 3500,

    productType: "ZX7 SPEAKER",
    productInfo:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    productImgSrc: {
      mobile: "/assets/categories/speakers/mobile/image-zx7.jpg",
      desktop: "/assets/categories/speakers/desktop/image-zx7.jpg",
    },
    features: {
      paragraph1:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
      paragraph2:
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    },
  },
];
export const EarPhonesProducts = [
  {
    productCategory: "earphones",

    productId: "yx1-earphones",

    newProduct: true,
    price: 599,

    productType: "YX1 WIRELESS EARPHONES",
    productInfo:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    productImgSrc: {
      mobile: "/assets/categories/earphones/mobile/image-yx1-earphones.jpg",
      desktop: "/assets/categories/earphones/desktop/image-yx1-earphones.jpg",
    },
    features: {
      paragraph1:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound",
      paragraph2:
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    },
  },
];
