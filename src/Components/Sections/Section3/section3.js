import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './section3.scss'
function section3() {

    AOS.init({

    })
    return (
        <div>
            <div className="background-color">
                <section className="section">
                    <div className="container">
                        <h1 className="is-size-1 has-text-centered has-text-weight-bold" data-aos="fade-left">What we offer</h1>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="box" data-aos="fade-top">
                                <i className="fa fa-map-marker location-1"></i>
                                <h2 className="has-text-weight-bold is-size-4 has-text-centered">Address Pickup</h2>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <i class="fa fa-university location-2" aria-hidden="true"></i>
                                <h2 className="has-text-weight-bold is-size-4">Home-Town Delivery</h2>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <i class="fa fa-cubes location-3" aria-hidden="true"></i>
                                <h5 className="has-text-weight-bold is-size-4 has-text-centered">Free Home Delivery</h5>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <i class="fa fa-database location-4" aria-hidden="true"></i>
                                <a href="#!"><h4 className="has-text-weight-bold is-size-4 has-text-centered">Database Development</h4></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <img src="https://livedemo00.template-help.com/wt_prod-27536/images/home-01-390x780.png" data-aos="fade-up" />
                            </div>
                            <div className="column">
                                <div>
                                    <h1 className="is-size-1 has-text-weight-bold" data-aos="fade-right">Get more benefits with the UpDrive app</h1>
                                    <p className="is-size-3 has-text-weight-normal">
                                        Order through the application
and get a<b> 15% discount</b>
                                    </p>
                                    <ul>
                                        <li className="is-size-4">
                                            <i class="fa fa-check is-size-4" aria-hidden="true" style={{ color: "rgb(253, 197, 1)" }}></i>    <b>Fast booking</b> with the official app by UpDrive is now easier than ever before.
                                </li>
                                        <li className="is-size-4">
                                            <i class="fa fa-check" aria-hidden="true" style={{ color: "rgb(253, 197, 1)" }}></i>    <b> Easy-to-use </b>interface of the app can simplify the ordering process & improve your user experience.
                                </li>
                                        <li className="is-size-4">
                                            <i class="fa fa-check" aria-hidden="true" style={{ color: "rgb(253, 197, 1)" }}></i>    <b>Free bonuses</b>  are available to registered and regular app users right from the app.
                                </li>
                                    </ul>
                                    <div className="buttons">
                                        <button class="button is-dark active is-large">
                                            <i class="fa fa-apple is-size-3" aria-hidden="true"></i>
                                Available On APP STORE
                                </button>
                                        <button class="button active is-large" style={{ backgroundColor: "rgb(253, 197, 1)", color: "#fff" }}>
                                            <i class="fa fa-play is-size-3" aria-hidden="true"></i>
                                Available On Play STORE
                                </button>                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <div className="box">
                                    <i class="fa fa-car car-1" aria-hidden="true"></i>
                                    <h3 className="has-text-centered is-size-2 has-text-weight-bold">Standard</h3>
                                    <p className="has-text-centered">
                                        Our standard service is the first port of call for the most of our clients.
                            </p>
                                    <h1 className="is-size-2 has-text-weight-bold has-text-centered" style={{ color: "rgb(253, 197, 1)" }}>$2,8/<small>km</small></h1>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <i className="fa fa-car car-2" aria-hidden="true"></i>
                                    <h3 className="has-text-centered is-size-2 has-text-weight-bold">
                                        Busniess
</h3>
                                    <p>
                                        If you need a corporate transfer, then this type of services is for you.
</p>
                                    <h1 className="is-size-2 has-text-weight-bold has-text-centered" style={{ color: "rgb(253, 197, 1)" }}>$2,5/<small>km</small></h1>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <i className="fa fa-car car-3" aria-hidden="true"></i>
                                    <h3 className="has-text-centered is-size-2 has-text-weight-bold">Van</h3>
                                    <p>
                                        Van offers comfort as well as more space than any other modern taxi.
</p>
                                    <h1 className="is-size-2 has-text-weight-bold has-text-centered" style={{ color: "rgb(253, 197, 1)" }}>$2,9/<small>km</small></h1>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <i class="fa fa-car car-3" aria-hidden="true"></i>
                                    <h3 className="has-text-centered is-size-2 has-text-weight-bold">Ecnomy</h3>
                                    <p>
                                        A perfect choice for saving money and having a great ride.
</p>
                                    <h1 className="is-size-2 has-text-weight-bold has-text-centered" style={{ color: "rgb(253, 197, 1)" }}>$3,5/<small>km</small></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="location-image">
                        <div className="container">
                            <h2 className="is-size-3 has-text-centered has-text-grey">
                                "Taxis and cabs have always been my passion since I entered this industry. I’m glad that my dream has not only become a reality, but also helps people all over the US to reach the goals they set using UpDrive."
                    </h2>
                            <p className="has-text-centered is-size-4">
                                — <b>Ted McKinney,</b> Executive Director
                    </p>
                        </div>
                    </div>
                    <div className="background-car"> </div>

                    <h1 className="has-text-centered is-size-1 has-text-weight-bold" data-aos="fade-up">
                        Join our team and make<br />
a difference today
                   </h1>
                    <p className="has-text-centered is-size-5">
                        We are always looking for talents to join our qualified team. If you’d like to be a part of<br />
UpDrive, send your CV to<a href="#!" className="has-text-dark" style={{ borderBottom: "1px solid #000" }}>info@demolink.org</a>  and we’ll notify you about new vacancies.
                   </p>
                    <section className="section">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <div className="box">
                                        <i class="fa fa-graduation-cap cap-1" aria-hidden="true"></i>
                                        <h2 className="has-text-centered is-size-3 has-text-weight-medium">Reliable earnings</h2>
                                        <p className="has-text-centered">
                                            With UpDrive, you are guaranteed to get stable and reliable earnings as a part of our friendly team.
</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="box">
                                        <i class="fa fa-graduation-cap cap-2" aria-hidden="true"></i>
                                        <h2 className="is-size-3 has-text-centered has-text-weight-medium">Flexibility</h2>
                                        <p>We offer flexible schedule to all our staff members so you can select the most convenient time for your work.</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="box">
                                        <i class="fa fa-graduation-cap cap-3" aria-hidden="true"></i>
                                        <h2 className="is-size-3 has-text-centered">Driving safety</h2>
                                        <p>
                                            We ensure the safety of our drivers at all times. All cabs and taxis are checked several times a day.
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div><br />
                        <div class=" has-text-centered">
                            <button className="button is-medium has-text-centered" data-aos="fade-left">Join Now</button>

                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}
export default section3;