import React from 'react'
// import Navbar from "../components/Navbar/checkoutNavbar"
const CheckoutLayout =
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    {/* <Navbar/> */}
                    <div className='contianer mx-auto px-4 lg:px-20'>
                        <Component {...props} />

                    </div>
                </>
            )

        }

export default CheckoutLayout