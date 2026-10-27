
import { useState } from "react";
import {
  Flower2,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Can I order flowers separately?",
      answer:
        "Our concept includes individual bouquets and floral arrangements. Ordering options will be confirmed when the shop details are finalized.",
    },
    {
      question: "Can I browse books while enjoying coffee?",
      answer:
        "Absolutely! Petals & Pages is designed as a cozy space where books and coffee belong together.",
    },
    {
      question: "Do you offer takeaway?",
      answer:
        "Takeaway availability will be confirmed when the café's service details are finalized.",
    },
    {
      question: "Can I reserve a table?",
      answer:
        "Reservations are not available through this demo website yet.",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please choose a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Frontend demonstration only
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <div className="container text-center">
          <Flower2 size={30} strokeWidth={1.2} />

          <p className="section-label mt-3">WE'D LOVE TO HEAR FROM YOU</p>

          <h1>Let's Stay in Touch</h1>

        </div>
      </section>

      {/* Contact content */}
      <section className="contact-main">
        <div className="container">
          <div className="row g-5">

            {/* Left information */}
            <div className="col-lg-5">
              <div className="contact-info">
                <p className="section-label">COME SAY HELLO</p>

                <h2>
                  We'd Love to
                  <br />
                  Meet You
                </h2>

                <p className="contact-intro">
                  Whether it's a question about our collection
                  or a little note, we're always happy to connect.
                </p>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3>Find Us</h3>
                    <p>South Lebanon</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3>Email Us</h3>
                    <p>rest@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={22} />
                  </div>

                  <div>
                    <h3>Opening Hours</h3>
                    <p>Hours to be announced</p>
                  </div>
                </div>

               
              </div>
            </div>

            {/* Right form */}
            <div className="col-lg-7">
              <div className="contact-form-card">

                <h2>Send Us a Message</h2>

                {submitted && (
                  <div className="contact-success" role="status">
                    <CheckCircle2 size={22} />
                    <span>
                      Demo complete! Your form passed validation.
                      No message was sent.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label htmlFor="contact-name" className="form-label">
                        Your Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />

                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="contact-subject" className="form-label">
                        Subject *
                      </label>

                      <select
                        id="contact-subject"
                        name="subject"
                        className={`form-select ${errors.subject ? "is-invalid" : ""}`}
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Choose a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Coffee & Menu">Coffee & Menu</option>
                        <option value="Flowers">Flowers</option>
                        <option value="Books">Books</option>
                        <option value="Other">Other</option>
                      </select>

                      {errors.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="contact-message" className="form-label">
                        Your Message *
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows="6"
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      />

                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-burgundy contact-submit-btn"
                      >
                        Send Message <Send size={17} />
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;
