import React, { useState } from "react";
import { Product } from "./Product";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = [
    {
      id: Math.random(),
      productName: "Royal Canin Maxi Puppy Dog Dry Food ",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame12314_89a8f769-48d6-4acd-8f9c-e3e10f1c8577.png?v=1696602504",
      originalPrice: 11500,
      currency: "₹",
      discountedPrice: 10120,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Pedigree Adult Meat & Rice 10kg    ",
      imgUrl:
        "https://supertails.com/cdn/shop/products/7170359-1_PedigreeProSMPLargeBreed10kg_FOP-658241.jpg?v=1696575052",
      originalPrice: 1500,
      currency: "₹",
      discountedPrice: 1700,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Kennel Kitchen Air Dried Chicken for Adult Dog   ",
      imgUrl:
        "https://supertails.com/cdn/shop/files/image1432_ba85cce8-2a9b-4be0-b72b-23a0dd1f27d7.png?v=1710334509",
      originalPrice: 1999,
      currency: "₹",
      discountedPrice: 1880,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Wahl Oatmeal Shampoo for Dogs  ",
      imgUrl:
        "https://supertails.com/cdn/shop/files/GroomingShampoo_17.png?v=1696635938",
      originalPrice:499,
      currency: "₹",
      discountedPrice:395,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Trixie Nail Clipper for Dogs and Cats  ",
      imgUrl:
        "https://supertails.com/cdn/shop/files/Frame10687.png?v=1696622435",
      originalPrice:925,
      currency: "₹",
      discountedPrice: 726,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Drools Focus Super Premium Adult Dog Dry Food  ",
      imgUrl:
        "https://supertails.com/cdn/shop/files/DroolsFocusAdultSuperPremiumDogFood_12kg_1kgExtraFreeInside.png?v=1704794076",
      originalPrice: 5500,
      currency: "₹",
      discountedPrice: 4950,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "SmartHeart Chicken Power Pack Puppy Dog Dry Food",
      imgUrl:
        "https://supertails.com/cdn/shop/products/Supertails_2.jpg?v=1696612055",
      originalPrice: 6050,
      currency: "₹",
      discountedPrice: 5545,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Printed Tank Jersey for Dogs (Black)",
      imgUrl:
        "https://supertails.com/cdn/shop/files/image1758_64165673-01d4-4b64-b712-6f311bae4771.png?v=1710939339",
      originalPrice: 899,
      currency: "₹",
      discountedPrice: 1200,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "SKATRS Hoodie with Pockets for Dog and Cats (Blue)",
      imgUrl:
        "https://supertails.com/cdn/shop/files/Skatrs_2_23b8326d-a24e-4435-850b-66dc2d855b75.png?v=1706937720",
      originalPrice: 999,
      currency: "₹",
      discountedPrice: 1499,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Hank 3M Reflective Harness for Puller Dogs (Black)",
      imgUrl:
        "https://supertails.com/cdn/shop/products/Frame1-2023-02-24T121129.506-884993.png?v=1696529391",
      originalPrice: 1405,
      currency: "₹",
      discountedPrice: 1999,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Henlo Everyday Topper for Home Cooked Food  Nutrition for Dogs",
      imgUrl:
        "https://supertails.com/cdn/shop/files/Frame12677_2.jpg?v=1696847878",
      originalPrice: 1099,
      currency: "₹",
      discountedPrice: 1049,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Outward Hound Dogwood Durable Stick for Dogs | For Aggressive Chewers",
      imgUrl:
        "https://supertails.com/cdn/shop/products/DTOBT0001OH_1_1.jpg?v=1683109655",
      originalPrice: 519,
      currency: "₹",
      discountedPrice: 550,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Basil Silicon Vacuum Cup with Rope & Ball Toy for Dogs",
      imgUrl:
        "https://supertails.com/cdn/shop/products/Frame7_9_3fdc8ab7-f899-44b8-b84f-5b1e40d66aa9-455499.png?v=1696474487",
      originalPrice: 525,
      currency: "₹",
      discountedPrice: 675,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Royal Pets Cart Polyester Reversible Bed for Dogs",
      imgUrl:
        "https://supertails.com/cdn/shop/files/Frame12614_1_1.png?v=1713783555",
      originalPrice: 999,
      currency: "₹",
      discountedPrice: 749,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Kibbo Anti Skid Stainless Steel Printed Bowl for Dogs",
      imgUrl:
        "https://supertails.com/cdn/shop/products/image866-691402.png?v=1696546339",
      originalPrice:399,
      currency: "₹",
      discountedPrice: 299,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Intas Eazypet Dog Deworming Tablet",
      imgUrl:
        "https://supertails.com/cdn/shop/products/Pharmacy_7-122490.png?v=1696543477",
      originalPrice: 499,
      currency: "₹",
      discountedPrice: 399,
      category: "dog",
    },
    {
      id: Math.random(),
      productName: "Whiskas Adult Hairball Control Chicken ",
      imgUrl: "https://supertails.com/cdn/shop/products/61HcCwYJDWL._SL1000.jpg?v=1700817567",
      originalPrice: 499,
      currency: "₹",
      discountedPrice: 699,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Sheba Chicken Flavour Irresistible All Life Stage Cat Dry Food ",
      imgUrl: "https://supertails.com/cdn/shop/files/BOGO_6_90e45554-4ae5-49d8-9cb9-414e5966a791.png?v=1711454996",
      originalPrice:1999,
      currency: "₹",
      discountedPrice: 1360,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Purepet Tuna and Salmon Adult Cat Dry Food ",
      imgUrl: "https://supertails.com/cdn/shop/files/1_1_dcf71c04-6ac4-4a84-8ad9-5402560ce171.png?v=1707730829",
      originalPrice: 1499,
      currency: "₹",
      discountedPrice:949,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Royal Canin Persian Adult Cat Dry Food ",
      imgUrl: "https://supertails.com/cdn/shop/products/petandparents_31.png?v=1696603571",
      originalPrice: 10500,
      currency: "₹",
      discountedPrice: 9240,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Emily Pets Lavender Scented Cat Litter ",
      imgUrl: "https://supertails.com/cdn/shop/products/Frame6_097ad1e3-daf8-442b-a02b-26a98c79f160_1_1.jpg?v=1696497151",
      originalPrice: 1398,
      currency: "₹",
      discountedPrice: 698,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Boltz Odour and Urine Smell Remover with Lavender for Cat ",
      imgUrl: "https://supertails.com/cdn/shop/products/Frame1-2022-03-04T1600591_1.jpg?v=1696477890",
      originalPrice: 799,
      currency: "₹",
      discountedPrice: 719,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Drools Real Chicken Creamy Cat Treats",
      imgUrl: "https://supertails.com/cdn/shop/files/DroolsRealChicken.png?v=1705040036",
      originalPrice: 1347,
      currency: "₹",
      discountedPrice: 1145,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Jinny Tuna Cat Treat ",
      imgUrl: "https://supertails.com/cdn/shop/products/Frame1-2021-11-12T161414.712_2.png?v=1696545086",
      originalPrice: 580,
      currency: "₹",
      discountedPrice: 493,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "SKATRS Adjustable Collar with Bell for Cats & Kittens (Black) ",
      imgUrl: "https://supertails.com/cdn/shop/files/Frame106723056.png?v=1710582746",
      originalPrice: 199,
      currency: "₹",
      discountedPrice: 99,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "SKATRS Whisker Wonderland Circular Three Scratching Post with Hanging Pom Pom Cat Tree Toy (Beige) ",
      imgUrl: "https://supertails.com/cdn/shop/files/4182_4_1800x1800_ec8172fc-2d2a-4b47-9bcd-c88be14c4c5a.webp?v=1696451393",
      originalPrice: 2599,
      currency: "₹",
      discountedPrice:1999,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Wobble Wag Pop N Play Interactive Toy for Cats ",
      imgUrl: "https://supertails.com/cdn/shop/products/Frame1-2022-11-22T170804.043.png?v=1696428479",
      originalPrice: 2499,
      currency: "₹",
      discountedPrice: 2199,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "GiGwi Melody Chaser with Motion Activated Sound Chip Beetle Toy for Cats ",
      imgUrl: "https://supertails.com/cdn/shop/products/CTOBC0004GI_1_1.jpg?v=1696522770https://supertails.com/cdn/shop/products/CTOBC0004GI_1_1.jpg?v=1696522770",
      originalPrice: 599,
      currency: "₹",
      discountedPrice: 509,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Pet Vogue Cartoon Pattern Colourful Bowl for Dogs and Cats",
      imgUrl: "https://supertails.com/cdn/shop/files/Frame_17_0bf305ff-e2d4-40fb-b811-f37f2e8a2f0e.png?v=1696579672",
      originalPrice: 799,
      currency: "₹",
      discountedPrice: 599,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Wahl Oatmeal Shampoo for Cats ",
      imgUrl: "https://supertails.com/cdn/shop/files/GroomingShampoo-35.png?v=1696636130",
      originalPrice: 700,
      currency: "₹",
      discountedPrice: 575,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Wahl Grooming Comb for Dogs and Cats (24cm) ",
      imgUrl: "https://supertails.com/cdn/shop/files/Frame11972_afc86695-3a05-4d4e-a9fb-88e91980bbdd.png?v=1696635431",
      originalPrice: 499,
      currency: "₹",
      discountedPrice: 799,
      category: "cat",
    },
    {
      id: Math.random(),
      productName: "Bark Out Loud by Vivaldis Pillows for Sensitive Gut Cat Treats",
      imgUrl: "https://supertails.com/cdn/shop/products/catpillowssensitive0-138990.png?v=1696470436",
      originalPrice: 650,
      currency: "₹",
      discountedPrice: 799,
      category: "cat",
    },
  ];

  const dogProducts = products.filter(
    (product) => product.category === "dog"
  );

  const catProducts = products.filter(
    (product) => product.category === "cat"
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="imgcontainer">
        <div className="dogcontainer">
        <img 
          src="https://supertails.com/cdn/shop/files/Group_3787_6d0903d1-2fff-48e1-8dcd-1fdfc2b89dde.png?v=1688308640&width=535"
          alt="Dog"
          onClick={() => handleCategoryChange("dog")}
          className="dogimage"
          style={{ cursor: "pointer", width: "16.5rem", }}
        />
        <p className="productName">Dog Products</p>
        </div>
        <div className="catcontainer">
        <img
          src="https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k"
          alt="Cat"
          onClick={() => handleCategoryChange("cat")}
          className="catimage"
          style={{ cursor: "pointer", width: "15rem", borderRadius: "9rem" }}
        />
        <p className="productName">Cat Products</p>
        </div>
      </div>
      {selectedCategory && (
        <section>
          <h2 className="productName">{selectedCategory === "dog" ? "Dog Products" : "Cat Products"}</h2>
          <div className="product-section">
            {selectedCategory === "dog"
              ? dogProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : catProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Product } from "./Product";

// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const products = [
//     {
//       id: Math.random(),
//       productName: "JerHigh roasted duck in gravy ",
//       imgUrl:
//         "https://passport.petcart.in/images/prodimgs//j/e/jerhighroasted_duck_in_garvy.jpg",
//       originalPrice: 59,
//       currency: "₹",
//       discountedPrice: 99,
//       category: "cat",
//     },
//     {
//       id: Math.random(),
//       productName: "Royal Pets Cart Dog & Cat Bed Anti-Skid Bottom ",
//       imgUrl:
//         "https://royalpetscart.com/cdn/shop/products/photo4_720x716.jpg?v=1664275838",
//       originalPrice: 8999,
//       currency: "₹",
//       discountedPrice: 9999,
//       category: "cat",
//     },
//     {
//       id: Math.random(),
//       productName: "  Acana Sport & Agility Dog Food",
//       imgUrl:
//         "https://headsupfortails.com/cdn/shop/files/064992530112.jpg?v=1705916011&width=823",
//       originalPrice: 8999,
//       currency: "₹",
//       discountedPrice: 9999,
//       category: "cat",
//     },
//     {
//       id: Math.random(),
//       productName: "  TickFree Dog Soap",
//       imgUrl: "https://m.media-amazon.com/images/I/81MCW+ww0oL._SX569_.jpg",
//       originalPrice: 99,
//       currency: "₹",
//       discountedPrice: 199,
//       category: "dog",
//     },
//     {
//       id: Math.random(),
//       productName: "EPISKEY Pet Hair Remover Brush",
//       imgUrl: "https://m.media-amazon.com/images/I/516NDoHIbxL._SX569_.jpg",
//       originalPrice: 299,
//       currency: "₹",
//       discountedPrice: 399,
//       category: "dog",
//     },
//   ];

//   const dogProducts = products.filter((product) => product.category === "dog");
//   const catProducts = products.filter((product) => product.category === "cat");

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <div>
//         <div style={{ textAlign: "center" }}>
//           <Link to="/products/dog">
//             <img
//               src="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
//               alt="Dog"
//               onClick={() => handleCategoryChange("dog")}
//               style={{ cursor: "pointer", width: "200px", height: "200px" }}
//             />
//             <p>Dog Products</p>
//           </Link>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <Link to="/products/cat">
//             <img
//               src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=b9124b32&itok=_EDDhHzY"
//               alt="Cat"
//               onClick={() => handleCategoryChange("cat")}
//               style={{ cursor: "pointer", width: "200px", height: "200px" }}
//             />
//             <p>Cat Products</p>
//           </Link>
//         </div>
//       </div>
//       {selectedCategory === "dog" && (
//         <section>
//           <h2>Dog Products</h2>
//           <div className="product-section">
//             {dogProducts.map((product) => (
//               <Product key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//       )}
//       {selectedCategory === "cat" && (
//         <section>
//           <h2>Cat Products</h2>
//           <div className="product-section">
//             {catProducts.map((product) => (
//               <Product key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Products;


