import gal1 from "../assets/flowers2.jpg";
import gal2 from "../assets/flowers4.jpg";
import gal3 from "../assets/flowers5.jpg";
import gal4 from "../assets/rest8.jpg";
import gal5 from "../assets/rest7.jpg";
import gal6 from "../assets/rest5.jpg";
import gal7 from "../assets/caffe3.jpg";
import gal8 from "../assets/rest2.jpg";
import gal9 from "../assets/gal9.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Flower2,
    Coffee,
     ArrowRight,
    BookOpen,
    Croissant,
    X,
    ChevronLeft,
    ChevronRight,
    Expand,
} from "lucide-react";
import SiteImage from "../components/SiteImage";
import "../styles/Gallery.css";

const galleryItems = [
    { id: 1, title: "Morning Coffee", category: "Coffee", icon: Coffee, image: gal6 },
    { id: 2, title: "Fresh Blooms", category: "Flowers", icon: Flower2, image: gal1 },
    { id: 3, title: "A Quiet Reading Corner", category: "Books", icon: BookOpen, image: gal8 },
    { id: 4, title: "Sweet Afternoon", category: "shop", icon: Croissant, image: gal4 },
    { id: 5, title: "Coffee Moments", category: "Coffee", icon: Coffee, image: gal7 },
    { id: 6, title: "A Garden of Roses", category: "Flowers", icon: Flower2, image: gal3 },
    { id: 9, title: "Little Floral Details", category: "Flowers", icon: Flower2, image: gal2 },
    { id: 8, title: "Freshly Baked", category: "Bakery", icon: Croissant, image: gal5 },
    { id: 7, title: "Stories & Coffee", category: "Books", icon: BookOpen , image: gal9 },

];

function Gallery() {
    // Only one state is needed: which image is open
    const [selectedIndex, setSelectedIndex] = useState(null);

    const selectedItem =
        selectedIndex !== null ? galleryItems[selectedIndex] : null;

    const showPrevious = () => {
        setSelectedIndex((index) =>
            (index - 1 + galleryItems.length) % galleryItems.length
        );
    };

    const showNext = () => {
        setSelectedIndex((index) =>
            (index + 1) % galleryItems.length
        );
    };

    // Keyboard controls
    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedIndex(null);
            }

            if (event.key === "ArrowRight") {
                setSelectedIndex((index) =>
                    (index + 1) % galleryItems.length
                );
            }

            if (event.key === "ArrowLeft") {
                setSelectedIndex((index) =>
                    (index - 1 + galleryItems.length) % galleryItems.length
                );
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return (
        <main className="gallery-page">

            {/* GALLERY HEADER */}
            <section className="gallery-header">
                <div className="container text-center">
                    <Flower2 size={30} strokeWidth={1.2} />

                    <p className="section-label mt-3">
                        A GLIMPSE INTO OUR WORLD
                    </p>

                    <h1>Our Gallery</h1>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="gallery-section">
                <div className="container">
                    <div className="row g-4">

                        {galleryItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div className="col-sm-6 col-lg-4" key={item.id}>
                                    <button
                                        type="button"
                                        className={`gallery-card gallery-${item.category.toLowerCase()}`}
                                        onClick={() => setSelectedIndex(index)}
                                        aria-label={`View ${item.title}`}
                                    >

                                        <div className="gallery-placeholder">
                                            <SiteImage
                                                src={item.image}
                                                alt={item.title}
                                                fallback={item.title}
                                            />
                                        </div>


                                        <div className="gallery-card-overlay">
                                            <div>
                                                <span>{item.category}</span>
                                                <h3>{item.title}</h3>
                                            </div>

                                            <Expand size={22} />
                                        </div>
                                    </button>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

{/* GALLERY INVITATION */}
<div className="gallery-invitation text-center">
    <h2>Captured a Little Moment?</h2>

    <p>
        We'd love to hear about your experience at Petals & Pages.
    </p>

    <Link to="/contact" className="btn btn-burgundy">
        Get in Touch <ArrowRight size={17} />
    </Link>
</div>

            {/* LIGHTBOX MODAL */}
            {selectedItem && (
                <div
                    className="gallery-lightbox"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedIndex(null);
                        }
                    }}
                >
                    <div
                        className="gallery-lightbox-content"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedItem.title}
                    >

                        {/* Close button */}
                        <button
                            className="gallery-close-btn"
                            type="button"
                            onClick={() => setSelectedIndex(null)}
                            aria-label="Close gallery"
                        >
                            <X size={24} />
                        </button>

                        {/* Selected image */}
                        <div
                            className={`gallery-lightbox-image gallery-${selectedItem.category.toLowerCase()}`}
                        >
                            {(() => {
                                const Icon = selectedItem.icon;
                                return <Icon size={110} strokeWidth={1} />;
                            })()}
                        </div>

                        {/* Navigation + category */}
                        <div className="gallery-lightbox-bottom">
                            <button
                                type="button"
                                onClick={showPrevious}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="text-center">
                                <h3>{selectedItem.title}</h3>
                                <p>{selectedItem.category}</p>
                            </div>

                            <button
                                type="button"
                                onClick={showNext}
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </main>
    );
}

export default Gallery;
