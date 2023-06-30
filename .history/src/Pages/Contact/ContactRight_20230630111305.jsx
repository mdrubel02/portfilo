import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const ContactRight = () => {
    const handleSendEmail = e => {
        e.preventDefault();
        toast.success('Your Message Send Successfully')
    }
    return (
        <div>
            <div>
                <h1 className='text-center mt-12 mb-8 ms-10 text-xl text-[#424242] font-bold font-poppins'>Get in<span className='text-primary ms-2'>Touch</span></h1>
                <div className='mt-8'>
                    <form action="" onSubmit={handleSendEmail} >
                        <div>
                            <label className="label">
                                <span className="text-secondary">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Mr. Alex" className="input input-bordered w-full" />
                            <label className="label">
                                <span className='text-secondary' >Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="alex@gmail.com" className="input input-bordered w-full" />
                            <label className="label">
                                <span className="text-secondary">Your Message</span>
                            </label>
                            <textarea name='message' rows="6" className="textarea textarea-bordered w-full" placeholder="Hi! I want to hire you for my company for the front-end developer role"></textarea>
                            <button type='submit' className='btn btn-sm mb-3 bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl mt-3 w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactRight;