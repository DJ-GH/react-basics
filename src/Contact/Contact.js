import React, { useState , useRef, useEffect} from "react";
import './Contact.css';

const Contact = () => {
    const [firstn, setfirstn] = useState('')
    const [lastn, setlastn] = useState('')
    const [number, setnumber] = useState('')
    const [email, setemail] = useState('')
    const [errors, seterrors] = useState({})
    const inputFirstnameRef = useRef(null)

    // Validate the form on submit
    const submitForm = (event) => {
        event.preventDefault();  // Prevents the form from refreshing the page

        if (firstn && lastn && number && email && !errors.phonenumber && !errors.email) {
            alert('Form submitted successfully');
            console.log(errors);
        } else {
            alert('Please fill all the fields correctly');
            console.log(errors);
        }
    }


    const handlePhoneBlur = (event) => {
        const phoneRe = new RegExp('^(\\+98|0)?9\\d{9}$');
        if (!phoneRe.test(event.target.value)) {
            seterrors({
                ...errors,
                phonenumber: 'Phone number is not valid'
            });
        } else {
            seterrors({
                ...errors,
                phonenumber: null
            });
        }
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value.toLowerCase();
        const emailRe = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!emailRe.test(email)) {
            seterrors({
                ...errors,
                email: 'Email is not valid'
            });
        } else {
            seterrors({
                ...errors,
                email: null
            });
        }
    }
    useEffect(() => {
        inputFirstnameRef.current.focus()
    }, [])

    return (
        <div className="contact-container">
            <form className="contact-lead" onSubmit={submitForm}>
                <div className="cli-form">
                    <input
                        ref={inputFirstnameRef}
                        type="text" 
                        placeholder="First Name:" 
                        onChange={(event) => setfirstn(event.target.value)} 
                    />
                </div>
                <div className="cli-form">
                    <input 
                        type="text" 
                        placeholder="Last Name:" 
                        onChange={(event) => setlastn(event.target.value)} 
                    />
                </div>
                <div className="cli-form">
                    <input 
                        type="number" 
                        placeholder="Phone Number:" 
                        onChange={(event) => setnumber(event.target.value)} 
                        onBlur={handlePhoneBlur}  // Validate when the user unfocuses
                    />
                    <br />
                    {errors.phonenumber && <span>{errors.phonenumber}</span>} {/* Show error message on blur */}
                </div>
                <div className="cli-form">
                    <input 
                        type="email" 
                        placeholder="Email:" 
                        onChange={(event) => setemail(event.target.value)} 
                        onBlur={handleEmailBlur}  // Validate when the user unfocuses
                    /><br />
                    {errors.email && <span>{errors.email}</span>} {/* Show error message on blur */}
                </div>
                <div className="cli-form">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
