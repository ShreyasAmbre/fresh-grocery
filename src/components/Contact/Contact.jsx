import React, { useRef } from 'react'
import Banner from '../Banner/Banner';
import BgContact from '../../assets/contact-banner.png';
import emailjs from '@emailjs/browser'


function Contact() {
  const formData = useRef('');


  const sendEmail = (event) => {
    event.preventDefault();
    console.log(formData.current);
    const form = formData.current;

    const templateParams = {
      "user-name": form["user-name"].value,
      "user-email": form["user-email"].value,
      "user-subject": form["user-subject"].value,
      "user-message": form["user-message"].value
    };

    emailjs.send("service_4p7csi6", "template_fths57e", templateParams, "sP54Hl-DcZ9y2A9mX").then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message send successfully');
        formData.current.reset();
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message:');
      },
    );
  }

  return (
    <div>
      <Banner title='Contact'  bgImg={BgContact}/>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='flex items-center justify-center '>
          <div className='w-150 bg-green-100 p-10 rounded-lg shadow-xl'>
            <div className='text-center'>
              <h1 className='text-4xl text-zinc-800 mb-2 font-bold'>Get in Touch</h1>
              <p className='text-md text-zinc-500'>We're here to help, send us a message and we'll get back to you.</p>
            </div>
            <form action="" autoComplete='off' ref={formData} onSubmit={sendEmail}>
              <div className='flex flex-col gap-y-5'>
                <div className='flex gap-5'>
                  <div>
                    <label htmlFor="user-name" className='text-zinc-800'>Name</label>
                    <input type="text" name='user-name' id='user-name' placeholder='Enter your name' 
                    className='border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 rounded-lg mt-2 text-xl
                    focus:outline-green-600 rounded-lg ' required/>
                  </div>
                  <div>
                    <label htmlFor="user-email" className='text-zinc-800'>Email</label>
                    <input type="text" name='user-email' id='user-email' placeholder='Enter your email' 
                    className='border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 rounded-lg mt-2 text-xl
                    focus:outline-green-600 rounded-lg ' required/>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="user-subject" className='text-zinc-800'>Subject</label>
                  <input type="text" name='user-subject' id='user-subject' placeholder='Enter your subject' 
                  className='border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 rounded-lg mt-2 text-xl
                  focus:outline-green-600 rounded-lg ' required/>
                </div>
                <div>
                  <label htmlFor="user-message" className='text-zinc-800'>Message</label>
                  <textarea rows={10} name='user-message' id='user-message' placeholder='Enter your message' 
                  className='border-1 border-zinc-300 w-full bg-zinc-100 pl-3 rounded-lg mt-2 text-xl
                  focus:outline-green-600 rounded-lg ' required/>
                </div>
                <div>
                  <button type='submit' className='py-3 bg-green-600 text-white rounded-lg w-full cursor-pointer
                    active:bg-green-700'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>


          

        </div>

      </div>
    </div>
  )
}

export default Contact