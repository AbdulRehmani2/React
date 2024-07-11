import { motion } from "framer-motion"

function About() {

    return (
      <motion.div animate={{y: [-10, 0]}} transition={{duration: 0.5}} className="main">
        <h1>Welcome to HomeChef Delights</h1>
        <p>Discover the joy of homemade cooking with our diverse collection of mouthwatering recipes! Whether you're a seasoned chef or just starting your culinary journey, HomeChef Delights offers a treasure trove of recipes to inspire your kitchen adventures.</p>
        <h2>What's Cooking Today?</h2>
        <h3>Explore, Cook, and Share:</h3>
        <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}>
          <li><b>Recipe Collections:</b> From timeless classics to modern twists, our curated collections cater to every taste and occasion. Browse through categories like Comfort Food, Quick & Easy Meals, and Healthy Choices to find your next favorite dish.
          </li>
          <li><b>Step-by-Step Guides:</b> Our detailed recipes come with step-by-step instructions, photos, and tips to ensure your cooking experience is smooth and enjoyable.
          </li>
          <li><b>Community Favorites:</b> See what our vibrant community of home chefs is cooking up! Check out top-rated recipes and read reviews from fellow food enthusiasts.
          </li>
        </motion.ul>
        <h2>Join Our Community</h2>
        <h3>Share Your Creations:</h3>
        <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}>
          <li><b>Submit Your Recipes:</b> Have a family recipe or a personal creation you'd love to share? Submit your recipes and join our ever-growing collection of culinary delights.
          </li>
          <li><b>Connect and Inspire:</b> Engage with fellow food lovers, exchange tips, and get inspired by their culinary masterpieces.
          </li>
        </motion.ul>
        <h2>Why HomeChef Delights?</h2>
        <h3>A Passion for Homemade:</h3>
        <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}>
          <li><b>Fresh Ingredients:</b> We believe in the power of fresh, wholesome ingredients to create delicious meals that nourish both body and soul.
          </li>
          <li><b>Cooking with Love:</b> Each recipe is crafted with love and care, bringing you the warmth and satisfaction of homemade goodness.
          </li>
        </motion.ul>
      </motion.div>
    )
  }
  
  export default About