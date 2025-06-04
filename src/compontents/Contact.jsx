import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Contact() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [countryCode, setCountryCode] = useState('us'); // fallback

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.country_code) {
                    setCountryCode(data.country_code.toLowerCase());
                }
            });
    }, []);

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phone: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:');
        //Reset
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <section className="contact">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <h2>Contact</h2>
                    <p>Feel free to reach out for any inquiries, collaborations, or opportunities.</p>
                    <p>I am open to discussing how my skills and experience can contribute to your marketing projects.</p>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>First name *</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last name *</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <div className="phone-input">
                            <PhoneInput
                                country={countryCode}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                inputProps={{ name: 'phone' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Message *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}