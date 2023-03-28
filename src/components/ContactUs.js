import {useState} from 'react';
import ReactDOM from 'react-dom/client';

let styles = {
        header: {
        textAlign: 'left',
        margin: '18px 5px',
        border: '5px #376e6f',
    },
    submitBtn: {
        backgroundColor: '#DA7B93',
        color: '#376e6f'
    },
    form: {
        margin: '7px',
        border: '4px solid #9FA0FF',
        padding: '5px 9px',
        outline: 'none',
    }

};
function ContactUs() {
    let [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    let handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <h2 style={styles.header}>Contact Us</h2>
        {/* <p> Sign up for our Exclusive Mailer</p> */}
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange}
            type="text" placeholder="Your Name" />
            <input name='email' onChange={handleChange}
            type="text" placeholder="Your Email" />
            <textarea name='message' onChange={handleChange} placeholder="Your Message to Us.." cols="22" rows="7" ></textarea>
        <button style={styles.submitBtn}>Submit Message</button>
        </form>
        </>
    )
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactUs/>);
export default ContactUs;