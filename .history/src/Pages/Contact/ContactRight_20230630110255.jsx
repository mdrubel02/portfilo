import React from 'react';

const ContactRight = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-12 mb-8 ms-10 text-xl text-[#424242] font-bold font-poppins'>Get in<span className='text-primary ms-2'>Touch</span></h1>
                <div className='mt-8'>
                    <form action="">
                        <div>
                        <label className="label">
                            <span className={`label-text ${!theme ? 'text-white' : ''}`}>Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Mr. Alex" className="input input-bordered w-full" />
                        <label className="label">
                            <span className='text-secondary' >Your Email</span>
                        </label>
                        <input type="email" name='email' placeholder="alex@gmail.com" className="input input-bordered w-full" />
                        <label className="label">
                            <span className="text-secondary">Your Message</span>
                        </label>
                        <textarea name='message' rows="6" className="textarea textarea-bordered" placeholder="Hi! I want to hire you for my company for the front-end developer role"></textarea>
                        <button type='submit' className='btn btn-accent btn-outline mt-4 text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactRight;