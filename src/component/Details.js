import React from 'react'

const Details = () => {
    return (
        <main className='product_details'>
            <div class="container-details">
                <div class="left-column" />
                <img data-image="black" src="./media/prsd49.hsm100_1_base.jpg" alt="" />
                <div />
                <div class="right-column">
                    <div class="product-description">
                        <span>Headphones</span>
                        <h1>Beats EP</h1>
                        <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                    </div>
                    <div class="product-price">
                        <span>148$</span>
                        <a href="#" class="cart-btn">Add to cart</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Details