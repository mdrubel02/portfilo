import React from 'react';

const ContactRight = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-12 mb-8 ms-10 text-xl text-[#424242] font-bold font-poppins'>Get in<span className='text-primary ms-2'>Touch</span></h1>
                <div className='mt-8'>
                    <form action="">
                        <div>
                        <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactRight;