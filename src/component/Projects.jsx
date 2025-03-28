import React from 'react'
import "./Projects.css"
import Card from './Card'
import img1 from "../assets/blog1.jpeg"
import img2 from "../assets/ecommerce.png"
import img3 from "../assets/luxhaven.jpeg"
import img4 from "../assets/chair2.jpeg"
import img5 from "../assets/sunglass.jpg"
import img6 from "../assets/gallery.jpeg"
import img7 from "../assets/coffe.jpg"
import img8 from "../assets/weatherapp.jpeg"
import img9 from "../assets/tic-toc-toe.jpeg"
import img10 from "../assets/todo.jpg"
import img11 from "../assets/ecommerceStore.jpeg"
import img12 from "../assets/passwordgen.jpg"
import img13 from "../assets/counter.jpeg"
import img14 from "../assets/calculator.jpg"
import img15 from "../assets/clg.png"
import img16 from "../assets/userlist.jpeg"
import img17 from "../assets/reactecommerce.png"

function Projects() {
  return (
    <>
      <h1>projects</h1>
      <div className='procont'>

   <Card descripition="Welcome to Luxe Haven
Experience unparalleled luxury in the heart of the city. Where comfort meets sophistication, and every stay becomes an unforgettable memory." title="LuxeHaven" url="https://mustafa-mmd.github.io/luxeHaven/"  img={img3}/>

<Card descripition="Step into style with our premium sunglasses! Trendy, UV-protected, and designed for ultimate comfort. Shop now and elevate your look! " title="sunglasses store" url="https://pakshades-8gz5.vercel.app/"  img={img5}/>

<Card descripition="Time to get your house clean and in order.To  have a good air quality is as simple as moving away from the city to a quiet suburb or rural enviroment" title="Smart.uv " url="https://mustafa-mmd.github.io/Blog-Website-1/" img={img1}/>

<Card descripition="We help you make modern interior.We will help you to make an elegant and luxurious interior designed by professional interior designer." title="Furni.interior design" url="https://mustafa-mmd.github.io/ecommerce-websit/"  img={img2}/>

      <Card descripition="Here you can find Modern chair if you have to need any type of chair you can easily buy here Anytypes of varities available here .And the price is also low so visit our website." title="Modern Chairs" url="https://mustafa-mmd.github.io/Modern-Chair/"  img={img4}/>


      <Card descripition="This is my image gallery.created by html and css its very amaizing and good design and also include hover effects and multiple pictures are present in this gallery." title="Gallery" url="https://mustafa-mmd.github.io/gallery-img-project/"  img={img6}/>

      <Card descripition="
      The coffe you will fall in love with slip savour and spread the love where every cup is a caffeinated hug at our cozy cofee haven. " title="Coffe Shope
      " url="https://mustafa-mmd.github.io/coffee-Shop/"  img={img7}/>

      <Card descripition="This is weather application it tell you about every counterie weathere simply you you write the country name in the input field and the click to the button you have show a correct result." title="weather Application" url="https://mustafa-mmd.github.io/weather-application/"  img={img8}/>

      <Card descripition="This is Tic-Tac-To game application .Here play two player only x and 0 if x fill firstly horizentally or vertically the given boxes so the winer is x otherwise the winner is 0." title="Tic Toc Toe Game" url="https://mustafa-mmd.github.io/Tic-Toc-Toe/"  img={img9}/>

      <Card descripition="This is Todo list aplication . you everything write in the input and then you clicked to the add button automatically added in the list .if you want to delete your activities simply press delete button.
" title="Todo list" url="https://mustafa-mmd.github.io/todo-list-project/"  img={img10}/>

      <Card descripition="This is ecommerce store application in this store have different products. Use redux tolkit for statemanagement and also used Api. when we click to add to cart button the product automatically add to another card page" title="Ecommerce Store" url="https://silver-palmier-d293fe.netlify.app/" img={img11}/>

      <Card descripition=" This is password generator its create and generate a random password .its include multiple option if  you want to generat just simple and hard password ." title="Password Generator" url="https://mustafa-mmd.github.io/passwordGenerator/"  img={img12}/>

      <Card descripition="This counter app it have two buttons one + button and - button if you click add button you number is increment and you click to - your numbers is decrease." title="Counter" url="https://mustafa-mmd.github.io/counter/"  img={img13}/>

      <Card descripition="This is a realistic calculater if you want to test this simply visit and do every type of  calculation give u a correct response its created by html css javascript." title="Calculator" url="https://mustafa-mmd.github.io/calculator/"  img={img14}/>
      
      <Card descripition="This is university website . And we provide different programe visite to site.We Ensure better education for a better world. " title="university website" url="https://react-website-two-ashy.vercel.app/"  img={img15}/>

      <Card descripition="This is user detail list application add user details and delete user detail using react and for state managment redux tolkit. " title="user list application" url="https://66eeb11433a5bb45b23d3880--preeminent-cuchufli-05af48.netlify.app/"  img={img16}/>

      {/* <Card descripition="This is ecommerce store .when you click to add to cart those item add automatically in to cart.using api   react and redux tolkit for state managment . " title="react redux ecommerce store" url=""  img={img17}/> */}
      </div>
    </>
  )
}

export default Projects