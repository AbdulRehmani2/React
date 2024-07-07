interface Dish {
  id: number,
  name: string,
  link: string,
  description: string
}

interface Recipe {
  link: string,
  name: string,
  desc: string,
}

function Recipes() {

  const data: Dish[] = [{
    id: 1,
    name: "Over Baked Pulled Ham",
    link: "https://www.allrecipes.com/thmb/sttt0HT0ftFiTFHb-jwKN3GG6FE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8629515_Oven-Baked-Pulled-Ham_Dotdash-Meredith-Food-Studios_4x3-71e3735979064754914215cab660525e.jpg",
    description: "Oven baked pulled ham cooks low and slow, and then shreds easily for sandwiches. Sweet, spicy barbecue sauce and BBQ rub provide plenty of flavor.",
  },
  {
    id: 2,
    name: "Garlic Mashed Cauliflower",
    link: "https://www.allrecipes.com/thmb/hZ43LfTECABEbccKS9DBKIVo5l8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8623930_Garlic-Mashed-Cauliflower_Brenda-Venable_4x3-a989ffdf256a46e88b42fb3ba3c13175.jpg",
    description: "When I made this garlic mashed cauliflower, my husband told me that he sampled some of the “potatoes” while they were still in the skillet, and he said they were really good! So, next time you want to sneak in a vegetable, instead of mashed potatoes, try this for your family dinner table. I won’t tell!",
  },
  {
    id: 3,
    name: "Mediterranean Baked Cod with Lemon",
    link: "https://www.allrecipes.com/thmb/E66nkf5u9SwIqmxoONFaOyT4_vM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8576313_Mediterranean-Baked-Cod-with-Lemon_Brenda-Venable_4x3-b34ff9cd504b4aca9ba74d5ca8ba0c4d.jpg",
    description: "This Mediterranean baked cod with lemon, deliciously seasoned with fresh Mediterranean herbs, garlic, and lemon, is ready in 25 minutes, start to finish. Serve with your favorite potato dish, and a green vegetable or salad, and your meal is done.",
  },
  {
    id: 4,
    name: "Copycat Onion Wrapped Flying Dutchman",
    link: "https://www.allrecipes.com/thmb/evP4fbqCXY0ajW2jsJuZMsjyP8U=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8553215_CopycatOnionWrappedFlyingDutchman_4x3-0f893dfc18414f3498e284c3b0b11251.jpg",
    description: "This copycat onion wrapped flying Dutchman is essentially a cheeseburger served in an onion \"bun\" that is tender, crisp, and sweet, and pairs perfectly well with the richness of the meat.",
  },
  {
    id: 5,
    name: "Chocolate Peanut Butter Protein Bars",
    link: "https://www.allrecipes.com/thmb/fXPj21reHKXfDF5-f-Q1bhkmjKo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8421618_Chocolate-Peanut-Butter-Protein-Bars_Yolanda-Gutierrez_4x3-ec24d668ee804fcb9fa9902ef4c24166.jpg",
    description: "Chocolate peanut butter protein bars are easy to make in a small batch, and absolutely delicious. Using a good protein powder is the key. If there is a downside, it might be how hard it will be to only eat one.",
  },
  {
    id: 6,
    name: "Baked Asian Rockfish",
    link: "https://www.allrecipes.com/thmb/3at5lpHivCF9laIcCASu18D61CU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/7814108_Baked-Asian-Rockfish_Chef-Mo_4x3-7f93040d5bf44e03816761dff544b33d.jpg",
    description: "In this baked rockfish recipe, a light Asian-inspired sauce is poured over the filets, complimenting the delicate flavor of the rockfish. Serve over rice and vegetables with some of the cooked sauce for a nice easy meal.",
  },
]

  return (
  <>
    <h1 className="recipes-title">All Recipes</h1>
    <div className="recipes-container">
      {data.map((element: any) => {
        return <Recipe key={element.id} link={element.link} name={element.name} desc={element.description}></Recipe>
      })}
    </div>
      
  </>  
  )
}

function Recipe({link, name, desc}: Recipe)
{
  return (
    <div className="recipe-container">
      <img src={link} alt="Recipe Image" />
      <h3>{name}</h3>
      <p>{desc.slice(0, 100)}...</p>
    </div>
  )
  
}

export default Recipes