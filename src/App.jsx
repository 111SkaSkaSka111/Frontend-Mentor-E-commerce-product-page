import { useEffect } from "react";
import { useState } from "react";
import Lightbox from "./Components/Lightbox";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";

function App() {
    const [data, setData] = useState([]);
    const [largeImage, setLargeImage] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imageLightbox, setImageLightbox] = useState(0);
    const [openLightbox, setOpenLightbox] = useState(false);
    const [addToCart, setAddToCart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    const thumbnails = data[0]?.images?.thumb;
    const images = data[0]?.images?.image[largeImage];
    const price = data[0]?.price;
    const discount = data[0]?.discount;
    const discountPrice = price - (price * discount) / 100;
    const totalImage = data[0]?.images?.image;
    const imgLightbox = data[0]?.images?.image[imageLightbox];

    const handleImageLightbox = (index) => {
        setImageLightbox(index);
    };

    const handleOpenLightbox = () => {
        setOpenLightbox(!openLightbox);
    };

    const handleNextImage = () => {
        setLargeImage((prev) => (prev + 1) % totalImage?.length);
        setImageLightbox((prev) => (prev + 1) % totalImage?.length);
    };

    const handlePrevImage = () => {
        setLargeImage((prev) => (prev - 1 + totalImage?.length) % totalImage?.length);
        setImageLightbox((prev) => (prev - 1 + totalImage?.length) % totalImage?.length);
    };

    const handleNextImageLightbox = () => {
        setImageLightbox((prev) => (prev + 1) % totalImage?.length);
    };

    const handlePrevImageLightbox = () => {
        setImageLightbox((prev) => (prev - 1 + totalImage?.length) % totalImage?.length);
    };

    const handleLargeImage = (index) => {
        setLargeImage(index);
        setImageLightbox(index);
    };

    const handleHamburger = () => {
        document.querySelector(".hamburger").classList.toggle("active");
        document.querySelector("ul").classList.toggle("active");
    };

    const handleCart = () => {
        setAddToCart((prevItem) => {
            const existingItem = prevItem.find((item) => item.id === data[0].id);
            if (quantity === 0) {
                return [];
            } else if (existingItem) {
                return prevItem.map((item) => (item.id === data[0].id ? { ...item, quantity: item.quantity + quantity, new_price: discountPrice } : item));
            } else {
                return [...prevItem, { ...data[0], quantity: quantity, new_price: discountPrice }];
            }
        });
    };

    const handleDelete = () => {
        setAddToCart([]);
    };

    const handleOpenCart = () => {
        document.querySelector(".cart").classList.toggle("active");
    };

    return (
        <>
            <section className="container">
                <Navbar quantity={quantity} handleHamburger={handleHamburger} data={addToCart[0]} handleDelete={handleDelete} handleOpenCart={handleOpenCart} />

                <Content
                    data={data}
                    discount={discount}
                    largeImage={largeImage}
                    handleLargeImage={handleLargeImage}
                    handleOpenLightbox={handleOpenLightbox}
                    thumbnails={thumbnails}
                    images={images}
                    price={price}
                    discountPrice={discountPrice}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    handlePrevImage={handlePrevImage}
                    handleNextImage={handleNextImage}
                    handleCart={handleCart}
                />
            </section>

            <Lightbox
                openLightbox={openLightbox}
                setOpenLightbox={setOpenLightbox}
                imgLightbox={imgLightbox}
                handlePrevImageLightbox={handlePrevImageLightbox}
                handleNextImageLightbox={handleNextImageLightbox}
                handleImageLightbox={handleImageLightbox}
                imageLightbox={imageLightbox}
                thumbnails={thumbnails}
            />
        </>
    );
}

export default App;
