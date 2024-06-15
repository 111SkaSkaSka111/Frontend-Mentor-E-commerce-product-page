import React from "react";

const Lightbox = ({ openLightbox, setOpenLightbox, imgLightbox, handlePrevImageLightbox, handleNextImageLightbox, imageLightbox, handleImageLightbox, thumbnails }) => {
    return (
        <div className={`lightbox ${openLightbox ? "active" : ""}`}>
            <div className="overlay">
                <div className="close-lightbox" onClick={() => setOpenLightbox(!openLightbox)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-close" width="22" height="22" fill="#ff7d1a" viewBox="0 0 256 256">
                        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                    </svg>
                </div>
            </div>
            <div className="large-image-lightbox">
                <img src={`/images/${imgLightbox}`} alt="" className="large-image" />
                <div className="prev-next">
                    <div onClick={handlePrevImageLightbox} className="btn-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z"></path>
                        </svg>
                    </div>
                    <div onClick={handleNextImageLightbox} className="btn-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="thumbnail-lightbox">
                {thumbnails?.map((thumb, index) => (
                    <div className={`thumb-image ${index === imageLightbox ? "active" : ""}`} key={index} onClick={() => handleImageLightbox(index)}>
                        <img src={`/images/${thumb}`} alt="" className={`thumbnail-image ${index === imageLightbox ? "active" : ""}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lightbox;
