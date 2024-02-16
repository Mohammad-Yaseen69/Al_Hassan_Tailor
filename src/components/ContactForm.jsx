import React, { useRef } from 'react'
import { sendForm } from '@emailjs/browser'

const ContactForm = ({setShowMessage}) => {
    const ref = useRef()
    const [data, setData] = React.useState({
        name: '',
        email: '',
        message: ''
    })

    const sendEmail = (e) => {
        e.preventDefault()

        sendForm('service_kko8emg', 'template_uyzt8yn', ref.current, 'FOalW6UxJgZczLQEa').then((result) => {
            setShowMessage(true)
        }).catch(error => {
            console.log(error);
        })
        setData({
            name: '',
            email: '',
            message: ''
        })
        console.log(ref.current);
    }
    return (
        <div>
            <div className="max-w-[400px] max-xs:max-w-[350px] my-11 w-full text-white mx-auto bg-[url(https://img.freepik.com/free-vector/overlapping-forms-background_52683-45675.jpg)] rounded-lg shadow-md p-4">
                <form ref={ref} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-50" htmlFor="name"> Name </label>
                        <input
                            placeholder="Your Name"
                            className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                            type="text"
                            name='from_name'
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-50" htmlFor="email"> Email </label>
                        <input
                            placeholder="Your Email"
                            className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                            name="from_email"
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-50" htmlFor="message"> Message </label>
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                            rows="4"
                            name="message"
                            id="message"
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}

                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <button
                            className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactForm