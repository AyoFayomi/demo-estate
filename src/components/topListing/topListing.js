import './topListing.css';
import img1 from'./img/List1.jpg';
import img2 from'./img/List2.jpg';
import img3 from'./img/List3.jpg';
import img4 from'./img/List4.jpg';
import img5 from'./img/List5.jpg';

const topListing = () => {
    return (
        <section className="topListing">
            <div  className="topList-wrap">
                <div className="topList-header">
                    <h3>Top Listings</h3>
                    <form>
                        <div>
                            <input className="search" type="search" name="search" placeholder="Search for properties and home..." />
                            <button type="submit" className="fas fa-search search-btn"></button>
                        </div>
                        <div className="filter">
                            <select name="filter" id="filter">
                                <option value="Filter by:" defaultValue>Filter by:</option>
                                <option value="Lorem">Lorem</option>
                                <option value="Lorem">Lorem</option>
                                <option value="Lorem">Lorem</option>
                            </select>
                            <i className="fas fa-sliders-h filter-btn"></i>
                        </div>
                    </form>

                </div>
                <div className="lists">
                    <article className="listWrap">
                        <img src={img1} alt= "estate 1"/>
                        <div className="list-txts">
                            <div className="list-txt1">
                                <span className="list-txt1-title">
                                    <h3 className="list-title">New build terraced home for sale in Gwarinpa</h3>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                         No 6, Gwarimpa Maitama,  Abuja Nigeria.
                                    </p>
                                    <span>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                    </span>
                                </span>
                                <span className="list-det">
                                    <p>
                                        <i className="fas fa-bed i-grey"></i>
                                        3 Bedrooms
                                    </p>
                                    <p>
                                        <i className="fas fa-drafting-compass i-grey"></i>
                                        2,512 sqr/m
                                    </p>
                                    <p>
                                        <i className="fas fa-home i-grey"></i>
                                        Bungalow
                                    </p>
                                
                                </span>
                                
                            </div>
                            <div className="list-txt2">
                                <div className="list-txt1-btn">
                                    <button className="sched btn">
                                        <i className="fas fa-phone-alt"></i>
                                        Schedule a Call
                                    </button>
                                    <p className="text-tiny">Schedule a call and speak with the real estate agent and reach a deal.</p>
                                </div>
                        
                                <p className="more-details">See more details</p>
                            </div>
                        </div>

                        
                    </article>
                    <article className="listWrap">
                        <img src={img2} alt="estate 2"/>
                        <div className="list-txts">
                            <div className="list-txt1">
                                <span className="list-txt1-title">
                                    <h3 className="list-title">New build terraced home for sale in Gwarinpa</h3>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                         No 6, Gwarimpa Maitama,  Abuja Nigeria.
                                    </p>
                                    <span>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                    </span>
                                </span>
                                <span className="list-det">
                                    <p>
                                        <i className="fas fa-bed i-grey"></i>
                                        3 Bedrooms
                                    </p>
                                    <p>
                                        <i className="fas fa-drafting-compass i-grey"></i>
                                        2,512 sqr/m
                                    </p>
                                    <p>
                                        <i className="fas fa-home i-grey"></i>
                                        Bungalow
                                    </p>
                                
                                </span>
                                
                            </div>
                            <div className="list-txt2">
                                <div className="list-txt1-btn">
                                    <button className="sched btn">
                                        <i className="fas fa-phone-alt"></i>
                                        Schedule a Call
                                    </button>
                                    <p className="text-tiny">Schedule a call and speak with the real estate agent and reach a deal.</p>
                                </div>
                        
                                <p className="more-details">See more details</p>
                            </div>
                        </div>
                        
                    </article>
                    <article className="listWrap">
                        <img src={img3} alt="estate 3"/>
                        <div className="list-txts">
                            <div className="list-txt1">
                                <span className="list-txt1-title">
                                    <h3 className="list-title">New build terraced home for sale in Gwarinpa</h3>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                         No 6, Gwarimpa Maitama,  Abuja Nigeria.
                                    </p>
                                    <span>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                    </span>
                                </span>
                                <span className="list-det">
                                    <p>
                                        <i className="fas fa-bed i-grey"></i>
                                        3 Bedrooms
                                    </p>
                                    <p>
                                        <i className="fas fa-drafting-compass i-grey"></i>
                                        2,512 sqr/m
                                    </p>
                                    <p>
                                        <i className="fas fa-home i-grey"></i>
                                        Bungalow
                                    </p>
                                
                                </span>
                                
                            </div>
                            <div className="list-txt2">
                                <div className="list-txt1-btn">
                                    <button className="sched btn">
                                        <i className="fas fa-phone-alt"></i>
                                        Schedule a Call
                                    </button>
                                    <p className="text-tiny">Schedule a call and speak with the real estate agent and reach a deal.</p>
                                </div>
                        
                                <p className="more-details">See more details</p>
                            </div>
                        </div>

                        
                    </article>
                    <article className="listWrap">
                        <img src={img4} alt="estate 4"/>
                        <div className="list-txts">
                            <div className="list-txt1">
                                <span className="list-txt1-title">
                                    <h3 className="list-title">New build terraced home for sale in Gwarinpa</h3>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                         No 6, Gwarimpa Maitama,  Abuja Nigeria.
                                    </p>
                                    <span>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                    </span>
                                </span>
                                <span className="list-det">
                                    <p>
                                        <i className="fas fa-bed i-grey"></i>
                                        3 Bedrooms
                                    </p>
                                    <p>
                                        <i className="fas fa-drafting-compass i-grey"></i>
                                        2,512 sqr/m
                                    </p>
                                    <p>
                                        <i className="fas fa-home i-grey"></i>
                                        Bungalow
                                    </p>
                                
                                </span>
                            </div>
                            <div className="list-txt2">
                                <div className="list-txt1-btn">
                                    <button className="sched btn">
                                        <i className="fas fa-phone-alt"></i>
                                        Schedule a Call
                                    </button>
                                    <p className="text-tiny">Schedule a call and speak with the real estate agent and reach a deal.</p>
                                </div>
                        
                                <p className="more-details">See more details</p>
                            </div>
                        </div>

                        
                    </article>
                    <article className="listWrap">
                        <img src={img5} alt="estate 5"/>
                        <div className="list-txts">
                            <div className="list-txt1">
                                <span className="list-txt1-title">
                                    <h3 className="list-title">New build terraced home for sale in Gwarinpa</h3>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                         No 6, Gwarimpa Maitama,  Abuja Nigeria.
                                    </p>
                                    <span>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                        <i className="fas fa-star star"></i>
                                    </span>
                                </span>
                                <span className="list-det">
                                    <p>
                                        <i className="fas fa-bed i-grey"></i>
                                        3 Bedrooms
                                    </p>
                                    <p>
                                        <i className="fas fa-drafting-compass i-grey"></i>
                                        2,512 sqr/m
                                    </p>
                                    <p>
                                        <i className="fas fa-home i-grey"></i>
                                        Bungalow
                                    </p>
                                
                                </span>
                                
                            </div>
                            <div className="list-txt2">
                                <div className="list-txt1-btn">
                                    <button className="sched btn">
                                        <i className="fas fa-phone-alt"></i>
                                        Schedule a Call
                                    </button>
                                    <p className="text-tiny">Schedule a call and speak with the real estate agent and reach a deal.</p>
                                </div>
                        
                                <p className="more-details">See more details</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            
        </section>
    )
}

export default topListing
