import React from 'react'
import multiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${multiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>
                Welcome to Aziken's Pizza, where every slice tells a story of passion, flavor, and community.

                At the heart of our pizzeria is an unwavering dedication to crafting the perfect pie, one that transcends the boundaries of taste and imagination. Our journey began with a simple dream: to create a haven where friends and families can gather to savor the timeless joy of sharing a delicious meal together.

                Our story is one of authenticity and innovation. With roots deeply woven in the rich tapestry of traditional Italian culinary heritage, we pay homage to the art of pizza-making by using the finest, freshest ingredients. From the sun-kissed tomatoes of the Mediterranean to the creamy mozzarella crafted in local dairies, each element is carefully chosen to compose a symphony of flavors that dance harmoniously on your palate.

                Yet, we're not content with mere tradition. Our chefs are culinary visionaries, constantly pushing the boundaries of what's possible within the realm of pizza. Their creative prowess leads to the birth of our signature gourmet masterpieces, where unexpected pairings and daring toppings unite to create an experience that is both nostalgic and excitingly new.

                </p>
        </div>
    </div>
  )
}

export default About