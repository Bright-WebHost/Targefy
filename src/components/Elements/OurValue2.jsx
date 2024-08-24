import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const img1 = require('./../../images/allimg/about.webp');


const OurValue2 = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('modalShown');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        if (!sessionStorage.getItem('modalShown')) {
            setTimeout(() => {
                openModal();
            }, 5000);
        }

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const openModal = () => {
        const modal = document.getElementById('Default-Modal');
        if (modal) {
            modal.classList.add('show');
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('in');

            sessionStorage.setItem('modalShown', 'true');
        }
    };

    const closeModal = () => {
        const modal = document.getElementById('Default-Modal');
        if (modal) {
            modal.classList.remove('show');
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            modal.classList.remove('in');
        }
    };

    const handleInputChange = () => {
        const form = document.getElementById('contactForm');
        const companyName = form.companyName.value.trim();
        const link = form.link.value.trim();
        const phoneNumber = form.phoneNumber.value.trim();
        const popupEmail = form.popupEmail.value.trim();

        setIsFormValid(companyName && link && phoneNumber && popupEmail);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = document.getElementById('contactForm');
        const companyName = form.companyName.value;
        const link = form.link.value;
        const phoneNumber = form.phoneNumber.value;
        const popupEmail = form.popupEmail.value;

        try {
            const response = await axios.post('https://sheet.best/api/sheets/0660ea93-25de-47dd-a29d-fe29f8a771a6', {
                companyName,
                link,
                phoneNumber,
                popupEmail,
            });

            console.log('Data sent:', response.data);

            // Close the modal
            closeModal();

            // Redirect to home page
            navigate('/'); // Use navigate to redirect
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Failed to send data. Please try again later.');
        }
    };

    return (
        <>
            <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-7 col-sm-6">
                                <div className="video-section-full-v2">
                                    <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: `url(${img1}) `}}>
                                        <div className="overlay-main bg-black opacity-04" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <div className="video-part-2">
                                    <h3>Drive Growth with <span className="font-weight-400" style={{ color: '#bb0000' }}>Effective</span> Branding Strategies</h3>
                                    <p>At Targefy, we transform digital presences into impactful brand stories. Our team, led by creative designers, marketing experts and seasoned sales professionals, under the guidance of a marketing veteran with 40 years of experience, combines unique insights and results-driven strategies to ensure unparalleled success and growth.</p>
                                    <ul className="list-angle-right anchor-line">
                                        <li>Innovative Digital Strategies</li>
                                        <li>Expertise in Brand Transformation</li>
                                        <li>Strategic Audience Connection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div id="Default-Modal" className="modal fade" role="dialog">
            <div className="modal-dialog"  
              style={{
                marginTop: '80px',
                '@media (max-width: 768px)': {
                  marginTop: '500px',
                },
              }}>
                {/* MODAL CONTENT */}
                <div className="modal-content">
                <div className="modal-header" style={{ backgroundColor: '#bb0000' }}>
  <button
    type="button"
    className="close"
    onClick={closeModal}
    style={{ color: 'white', fontWeight: 'bolder', fontSize: '30px',padding:'0',opacity:'1' }}  // Adjust fontSize if needed
  >
    ×
  </button>
</div>
                    <div className="modal-body">
                        <p>Send us your Website link and we will do a free website audit for you</p>

                        {/* Contact Form */}
                        <form className="contact-form cons-contact-form" method="post" id="contactForm" onSubmit={handleSubmit}>
                            <div className="contact-one m-b30">
                                <div className="form-group">
                                    <input
                                        name="companyName"
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Name of the company :"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="link"
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Website :"
                                        onChange={handleInputChange}
                                    />
                                </div>
                               
                                <div className="form-group">
                                    <input
                                        name="popupEmail"
                                        type="email"
                                        required
                                        className="form-control"
                                        placeholder="Email :"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="phoneNumber"
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Phone Number :"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="modal-footer" style={{ display: 'flex', gap: '30px', justifyContent: 'center',marginBottom:'-20px' }}>
                                <button
                                    type="submit"
                                    className="site-button btn-effect button-sm text-uppercase letter-spacing-2"
                                    disabled={!isFormValid}
                                    style={{ paddingLeft:'40px',paddingRight:'40px',textAlign:'center'}}
                                >
                                    Send
                                </button>
                                {/* <button
                                    type="button"
                                    className="site-button btn-effect button-sm text-uppercase letter-spacing-2"
                                    onClick={closeModal}
                                >
                                    Close
                                </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default OurValue2;
