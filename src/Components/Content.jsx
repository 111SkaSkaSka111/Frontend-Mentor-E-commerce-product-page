import React from "react";

const Content = ({ data, handleCart, largeImage, handleLargeImage, handleOpenLightbox, thumbnails, images, price, discount, discountPrice, quantity, setQuantity, handlePrevImage, handleNextImage }) => {
    return (
        <div className="content">
            <div className="img">
                <div className="img-large">
                    <img onClick={handleOpenLightbox} src={`/Frontend-Mentor-E-commerce-product-page/images/${images}`} alt="" className="large-img" />
                    <div className="prev-next">
                        <div onClick={handlePrevImage} className="btn-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z"></path>
                            </svg>
                        </div>
                        <div onClick={handleNextImage} className="btn-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    {thumbnails?.map((thumb, index) => (
                        <div key={index} className={`img-thumb ${index === largeImage ? "active" : ""}`}>
                            <img onClick={() => handleLargeImage(index)} src={`/Frontend-Mentor-E-commerce-product-page/images/${thumb}`} alt="" className={`thumbnail-img ${index === largeImage ? "active" : ""}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="desc-item">
                <p>{data[0]?.company}</p>
                <h1>{data[0]?.title}</h1>
                <p className="item-desc">{data[0]?.item_desc}</p>
                <div className="price">
                    <div className="discount-price">
                        <p>${discountPrice}.00</p>
                        <p className="discount">{discount}%</p>
                    </div>
                    <p>${price}.00</p>
                </div>
                <div className="actions-btn">
                    <div className="qty">
                        {quantity === 0 ? (
                            <div className="btn-minus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256">
                                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                                </svg>
                            </div>
                        ) : (
                            <button onClick={() => setQuantity(quantity - 1)} className="btn-minus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256">
                                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                                </svg>
                            </button>
                        )}
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)} className="btn-plus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256">
                                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </button>
                    </div>
                    <button onClick={handleCart} className="btn">
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="svg-cart">
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#69707D"
                                fillRule="nonzero"
                            />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Content;
