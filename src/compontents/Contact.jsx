export default function Contact() {
    return (
        <section className="contact">
            <form className="contact-form">
                <div>
                    <h2>Contact</h2>
                    <p>Feel free to reach out for any inquiries, collaborations, or opportunities.</p>
                    <p>I am open to discussing how my skills and experience can contribute to your marketing projects.</p>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>First name *</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Last name *</label>
                        <input type="text" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email *</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <div className="phone-input">
                            <span role="img" aria-label="globe">🌐</span>
                            <input type="tel" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Message *</label>
                    <textarea required name="message" ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}