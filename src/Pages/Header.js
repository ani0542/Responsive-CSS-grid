import React from 'react'

function Header() {
    return (
        <>
               <section class="top-container">
                           <header class="showcase">
                                       <h1>Your Web Presence</h1>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam! Nihil quo minima nulla atque!</p>
                                       <a href="#" class="btn">Read More</a>
                            </header>

                            <div class="top-box top-box-a">
                                           <h4>Membership</h4>
                                           <p class="price">$199/mo</p>
                                           <a href="" class="btn">Buy Now</a>
                            </div>

                            <div class="top-box top-box-b">
                                        <h4>Pro Membership</h4>
                                        <p class="price">$299/mo</p>
                                        <a href="" class="btn">Buy Now</a>
                           </div>
                  </section>
        </>
    )
}

export default Header
