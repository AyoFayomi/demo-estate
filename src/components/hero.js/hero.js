import './hero.css';

const hero = () => {
    return (
        <div className="hero">
            <div className="hero-bg">
                <div className="hero-container">
                    <div className="txt-left">
                        <h1>Best home & properties curated for you</h1>
                        <p>Let's connect you with quality home and properties listed by verified sellers and real estate agents</p>
                        <div className="hero-btns">
                            <button className="btn herobtn1">Buy a Property</button>
                            <button className="btn herobtn2">Visit Our Store</button>
                        </div>
                    </div>
                    <div className="txt-right">
                        <div className="blueBox">
                            <p>Buy top-rated properties and shop for all your home building materials.</p>
                        </div>
                        <div className="eclipse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero
