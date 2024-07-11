import { motion } from "framer-motion"

interface Review {
  name: string,
  reviewer: string,
  review: string
}

function Reviews() {

  const data = [
    {
      "id": 1,
      "dish_name": "Over Baked Pulled Ham",
      "review": "Deliciously tender and flavorful, the oven-baked pulled ham with sweet and spicy barbecue sauce is perfect for sandwiches. A crowd-pleaser that's easy to prepare and absolutely mouthwatering!",
      "reviewer_name": "Jessica Thompson"
    },
    {
      "id": 2,
      "dish_name": "Garlic Mashed Cauliflower",
      "review": "The garlic mashed cauliflower is a fantastic potato alternative! Creamy, flavorful, and a great way to sneak in vegetables. My family couldn't tell it wasn't mashed potatoes!",
      "reviewer_name": "Michael Johnson"
    },
    {
      "id": 3,
      "dish_name": "Mediterranean Baked Cod with Lemon",
      "review": "The Mediterranean baked cod with lemon is a quick, healthy, and tasty dish. The fresh herbs and garlic complement the cod perfectly. Ready in 25 minutes, it's a weeknight favorite!",
      "reviewer_name": "Emily Davis"
    },
    {
      "id": 4,
      "dish_name": "Copycat Onion Wrapped Flying Dutchman",
      "review": "This copycat onion wrapped flying Dutchman is a delightful twist on a cheeseburger. The onion 'bun' adds a sweet and crisp texture that pairs wonderfully with the rich, juicy meat.",
      "reviewer_name": "Christopher Martinez"
    },
    {
      "id": 5,
      "dish_name": "Chocolate Peanut Butter Protein Bars",
      "review": "These chocolate peanut butter protein bars are delicious and easy to make. The perfect snack for a protein boost, though it's hard to stop at just one!",
      "reviewer_name": "Samantha Wilson"
    },
    {
      "id": 6,
      "dish_name": "Baked Asian Rockfish",
      "review": "The baked Asian rockfish is a delightful dish with a light, flavorful sauce that enhances the delicate fish. Served over rice and vegetables, it's an easy, satisfying meal.",
      "reviewer_name": "Daniel Anderson"
    }
  ]

  return (
    <motion.div animate={{y: [-10, 0]}} transition={{duration: 0.5}} className="reviews-container">
      <h1 style={{textAlign: "center"}}>Reviews</h1>
      {data.map((element) => <Review key={element.id} name={element.dish_name} review={element.review} reviewer={element.reviewer_name}></Review>)}
    </motion.div>
  )
}

function Review({name, reviewer, review}: Review)
{
  return (
    <motion.div 
    initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="review-container">
      <p>Dish: {name}</p>
      <q>{review}</q>
      <br />
      <div>{reviewer}</div>
    </motion.div>
  )
}

export default Reviews