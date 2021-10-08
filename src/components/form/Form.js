import './form.css'

const form = () => {
    return (
        <div className="form-bg">
            <form action="post" className="group-form">
                <h2>LEAVE US A MESSAGE</h2>
                <div className="form-group">
                    <label htmlFor="Full-name">Name</label>
                    <input type="text" name="Full-name" id="name" placeholder="Enter your name here"  className="input-frm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="input-frm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="FPhone-number">Phone Number</label>
                    <input type="num" name="Phone-number" id="phoneNo" placeholder="Phone Number" className="input-frm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" id="message" placeholder="Enter your message here" className="input-frm"/>
                </div>
                <button type="submit" className="herobtn1 btn form-btn">Send message</button>
                
            </form>
        </div>
    )
}

export default form
