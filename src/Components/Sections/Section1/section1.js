import React from 'react';
import jQuery from 'jquery';
import $ from 'jquery';
import './section1.scss'
export default function section1() {
    (function ($) { // Begin jQuery
        $(function () { // DOM ready
            // If a link has a dropdown, add sub menu toggle.
            $('nav ul li a:not(:only-child)').click(function (e) {
                $(this).siblings('.nav-dropdown').toggle();
                // Close one dropdown when selecting another
                $('.nav-dropdown').not($(this).siblings()).hide();
                e.stopPropagation();
            });
            // Clicking away from dropdown will remove the dropdown class
            $('html').click(function () {
                $('.nav-dropdown').hide();
            });
            // Toggle open and close nav styles on click
            $('#nav-toggle').click(function () {
                $('nav ul').slideToggle();
            });
            // Hamburger to X toggle
            $('#nav-toggle').on('click', function () {
                this.classList.toggle('active');
            });
        }); // end DOM ready
    })(jQuery); // end jQuery\\


    $(window).on('load', function () {
        $("#cover").fadeOut(8000);
        });
    return (
        <div>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <a href="#!"><img src="https://livedemo00.template-help.com/wt_prod-27536/images/logo-default-312x75.png" /></a>
                    </div>
                    <nav>
                        <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                        <ul className="nav-list">
                            <li>
                                <a href="#!" style={{color:"#FDC501"}}>Home</a>
                            </li>
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li>
                                <a href="#!">Services</a>
                                <ul className="nav-dropdown">
                                    <li>
                                        <a href="#!">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#!">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="#!">Graphic Design</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Careers</a>
                            </li>
                            <li>
                                <a href="#!">Pages</a>
                                <ul className="nav-dropdown">
                                    <li>
                                        <a href="#!">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#!">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="#!">Graphic Design</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Contact us</a>
                            </li>
                            <li >
                                <a href="#!" style={{ color: "#FDC501" }}><i className="fa fa-phone"></i><strong>Call Now:</strong><b style={{ color: "rgb(13, 255, 0)" }}> (+92) 1303903</b></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <div id="cover"> <span class="glyphicon glyphicon-refresh w3-spin preloader-Icon"><i class="fa fa-refresh" aria-hidden="true"></i></span>Please Wait Browser IS Loading......!</div>
        </div>
    )
}
