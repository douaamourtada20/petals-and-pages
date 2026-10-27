import aboutImage from "../assets/hero1.jpg";
import expImage from "../assets/rest2.jpg";
import expImage2 from "../assets/hero3.jpg";


import SiteImage from "../components/SiteImage";
import { Link } from "react-router-dom";
import {
    Flower2,
    Coffee,
    BookOpen,
    Heart,
    ArrowRight,
    Sparkles,
} from "lucide-react";

import "../styles/About.css";

function About() {
    const values = [
        {
            id: 1,
            icon: Coffee,
            title: "Made with Care",
            description:
                "From your first morning coffee to your favorite afternoon treat, every detail matters.",
        },
        {
            id: 2,
            icon: Flower2,
            title: "Inspired by Nature",
            description:
                "Fresh blooms and soft colors bring a little beauty into everyday moments.",
        },
        {
            id: 3,
            icon: BookOpen,
            title: "A Love for Stories",
            description:
                "A welcoming space where every book opens the door to something new.",
        },
        {
            id: 4,
            icon: Heart,
            title: "A Place to Belong",
            description:
                "Whether you come alone or with friends, there's always a cozy corner waiting for you.",
        },
    ];

    return (
        <main className="about-page">

            {/* ABOUT HERO */}
            <section className="about-hero">
                <div className="container text-center">
                    <Flower2 size={30} strokeWidth={1.2} />

                    <p className="section-label mt-3">GET TO KNOW US</p>

                    <h1>Our Little Story</h1>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="about-story">
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <div className="about-image-area">

                                <div className="about-image-placeholder">
                                    <SiteImage
                                        src={aboutImage}
                                        alt="Coffee and flowers in a cozy reading space"
                                        fallback="A little corner of happiness"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-story-content">
                                <p className="section-label">THE HEART BEHIND PETALS & PAGES</p>

                                <h2>
                                    A Beautiful Blend of
                                    <br />
                                    Simple Pleasures
                                </h2>

                                <p>
                                    Petals & Pages began with a simple idea: to bring
                                    together three little joys that make everyday life
                                    feel special — coffee, flowers, and books.
                                </p>

                                <p>
                                    We imagined a place where you could slow down,
                                    enjoy your favorite drink, discover a beautiful
                                    bouquet, and lose yourself in a good story.
                                </p>

                                <p>
                                    More than a café, Petals & Pages is a cozy escape
                                    from the rush of everyday life.
                                </p>

                                <Link to="/menu" className="btn btn-burgundy">
                                    Explore Our Menu <ArrowRight size={17} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className="about-values">
                <div className="container text-center">

                    <p className="section-label">WHAT MAKES US SPECIAL</p>

                    <h2>Little Things, Lovely Moments</h2>

                    <p className="about-values-description mx-auto">
                        It's the thoughtful details that make a place feel like home.
                    </p>

                    <div className="row g-4 mt-4">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <div className="col-md-6 col-lg-3" key={value.id}>
                                    <div className="about-value-card">
                                        <div className="about-value-icon">
                                            <Icon size={30} strokeWidth={1.4} />
                                        </div>

                                        <h3>{value.title}</h3>
                                        {/* <p>{value.description}</p> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="about-experience">
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <div className="about-experience-content">
                                <p className="section-label">A SPACE TO SLOW DOWN</p>

                                <h2>
                                    Your Favorite
                                    <br />
                                    Little Escape
                                </h2>

                                <p>
                                    Find a quiet corner with a book, catch up with
                                    someone special over coffee, or choose flowers
                                    that brighten someone's day.
                                </p>

                                <p>
                                    Whatever brings you here, we hope you leave
                                    with a little more joy than you came with.
                                </p>

                                <Link to="/gallery" className="about-text-link">
                                    Explore Our Gallery <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="about-experience-image">
                                <SiteImage
                                    src={expImage2}
                                    alt="Warm coffee beside a book"
                                    fallback="Stay a little longer..."
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}

export default About;
