import react, { useEffect, useState } from "react";
import './About.css'


class About extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
        }
        
    }

    handleIsLoaded = () => {
        this.setState({
            isLoaded: true,
        })
    }

    render() {
        const { isLoaded } = this.state;
            return(
            <div className="about-main">
                <div className={`about-container ${isLoaded ? 'fade-in' : ''}`}>
                    <p className="about-txt">
                    Hello it's me Shayan...<br/><br/>
                    This is my first webpage with React<br/> DevTool and i hope you enjoy every part of it.<br/>
                    i would give you some infs to contact me...<br/><br/>
                    +98 939 5459 614<br/>not.dj.hawk@gmail.com
                    </p>
                </div>
            </div>  
            )
        }


}



export default About;
