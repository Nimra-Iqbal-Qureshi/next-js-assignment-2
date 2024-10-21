import React from 'react'
import cssStyle from "./hero.module.css"

function Hero() {
  return (
    <>
    <div className={cssStyle.hero}>
      
      <h1 className={cssStyle.h1}>HERO SECTION</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dignissimos dolor delectus omnis hic magni iusto ipsa enim sapiente, esse accusantium at id repudiandae nemo possimus doloremque ipsam. Nostrum, velit.
      Eveniet similique nisi atque quibusdam, earum impedit iste soluta voluptatibus ratione alias labore expedita quod laboriosam praesentium voluptates quas! Rerum sapiente non vel neque aliquid distinctio culpa necessitatibus, illo quas?
      Praesentium excepturi eaque est laboriosam iure. Facere facilis deserunt totam alias repellendus voluptates, commodi debitis id sint impedit ipsa ullam laborum sit sed dolorem iste. Optio pariatur quod delectus!.</p>
    </div>
    
    </>
  )
}

export default Hero