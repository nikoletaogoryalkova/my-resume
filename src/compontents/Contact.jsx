export default function Contact() {
    return (
        <section className="contact">
            <div className="contact-text">
                <h2>Contact</h2>
                <p>Feel free to reach out for any inquiries, collaborations, or opportunities.</p>
                <p>I am open to discussing how my skills and experience can contribute to your marketing projects.</p>
            </div>
            <form>
                <div className="names-input-container">
                    <label>
                        First name *
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Last name *
                        <input type="text" name="lastName" />
                    </label>
                </div>
                <div className="contacts-input-container">
                    <label>
                        Email *
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Phone *
                        <input type="tel" name="phone" />
                    </label>
                </div>
                <label>
                    Message
                    <textarea name="message" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}