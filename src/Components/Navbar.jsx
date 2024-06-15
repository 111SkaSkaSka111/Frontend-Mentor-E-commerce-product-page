import React from "react";

const Navbar = ({ quantity, handleHamburger, data, handleDelete, handleOpenCart }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div onClick={handleHamburger} className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <object data="/images/logo.svg" type="image/svg+xml" className="svg-logo"></object>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-right">
                <div onClick={handleOpenCart} className="cart">
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="svg-cart">
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="#69707D"
                            fillRule="nonzero"
                        />
                    </svg>
                    {data?.quantity > 0 && <span>{data?.quantity}</span>}
                    <div className="basket">
                        <h1>Cart</h1>
                        <div className="card">
                            {data ? (
                                <>
                                    <div className="card-img">
                                        <img src={`/images/${data?.images?.thumb[0]}`} alt="" />
                                    </div>
                                    <div className="card-text">
                                        <h3>{data?.title}</h3>
                                        <div className="card-price">
                                            <p>
                                                ${data?.new_price}.00 x {data?.quantity}
                                            </p>
                                            <p>${data?.new_price * data?.quantity}.00</p>
                                        </div>
                                    </div>
                                    <div onClick={handleDelete} className="card-delete">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                                        </svg>
                                    </div>
                                </>
                            ) : (
                                <p>Your cart is empty</p>
                            )}
                        </div>

                        {data && (
                            <div className="checkout">
                                <p>Checkout</p>
                            </div>
                        )}
                    </div>
                </div>
                <img src="/images/image-avatar.png" alt="" className="avatar" />
            </div>
        </nav>
    );
};

export default Navbar;
