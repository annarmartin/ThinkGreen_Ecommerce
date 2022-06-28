// import all images from my img file 
import basil from './img/basil_.png';
import cilantro from './img/cilantro.png';
import dill from './img/dill.png';
import lavender from './img/lavender.png';
import mint from './img/mint.png';
import oregano from './img/oregano.png';
import parsley from './img/parsley.png';
import rosemary from './img/rosemary.png';
import sage from './img/sage.png';
import thyme from './img/thyme.png';


const data = {
    products: [
      {
        id: '1',
        name: 'Basil',
        description: 'Regular basil has a sweet and savory taste profile with peppery and minty undertones. Some also say it has a hint of anise.',
        price: 4.99,
        stock: "in-stock",
        image: basil,
      },
      {
        id: '2',
        name: 'Cilantro',
        description: 'Cilantro is said to have a fresh, citrusy, and/or soapy taste — depending on who you ask — and is also called Chinese parsley.',
        price: 2.99,
        stock: "in-stock",
        image: cilantro,
      },
      {
        id: '3',
        name: 'Dill',
        description: "Dill has a deliciously fresh, citrus-like taste, with a slightly grassy undertone. The trademark subtle sweetness means it works particularly well with garlic and mint, and it's sometimes used as a substitute for parsley.",
        price: 2.99,
        stock: "in-stock",
        image: dill,
      },
      {
        id: '4',
        name: 'Lavender',
        description: "Lavender has a distinctive taste that's floral with hints of mint and rosemary (two plants to which it's related) and, used correctly, it makes the perfect flavoring for spring.",
        price: 4.99,
        stock: "out-of-stock",
        image: lavender,
      },
      {
        id: '5',
        name: 'Mint',
        description: 'Mint is a subtly sweet taste and cool sensation that comes from the menthol contained in the herb.',
        price: 3.99,
        stock: "in-stock",
        image: mint,
      },
      {
        id: '6',
        name: 'Oregano',
        description: "Oregano, a robust herb with a peppery bite and a sweet, almost minty aroma. It stands with red pepper flakes and Parmesan cheese as one of America's favorite “shake-on” pizza toppings.",
        price: 4.99,
        stock: "in-stock",
        image: oregano,
      },
      {
        id: '7',
        name: 'Parsley',
        description: "Parsley has a bright, herbaceous, and slightly bitter taste that serves as a contrast to emphasize the other flavors in a dish, similar to lemon zest.",
        price: 4.99,
        stock: "in-stock",
        image: parsley,
      },
      {
        id: '8',
        name: 'Rosemary',
        description: "There is no flavor quite like rosemary. This woodsy aromatic herb has notes of evergreen, citrus, lavender, pine, sage, pepper, mint, and sage.",
        price: 4.99,
        stock: "in-stock",
        image: rosemary,
      },
      {
        id: '9',
        name: 'Sage',
        description: "Sage has a pronounced herbal flavor that is earthy, slightly peppery taste with hints of mint, eucalyptus, and lemon. It works well in heavier dishes with rich ingredients that can hold their own against such a bold flavor.",
        price: 2.99,
        stock: "in-stock",
        image: sage,
      },
      {
        id: '10',
        name: 'Thyme',
        description: "Thyme is an herb that has its own distinct identity. It has a delightful flavor balance that dances between earthy and minty, minty and citrus-laced, savory but also sweet, and slightly woodsy but also flowery.",
        price: 4.99,
        stock: "in-stock",
        image: thyme,
      },
    ],
  };
  export default data;