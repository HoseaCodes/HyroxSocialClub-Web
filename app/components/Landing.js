"use client";
import { useState } from "react";
import StarRating from "./StarRating";



const Landing = () => {
  const testimonials = [
    {
      text: "Since using Pulse, I’ve seen remarkable improvements in my fitness levels. Highly recommend",
      stars: 5 // Example rating out of 5
    },
    {
      text: "Pulse has made a significant difference in my daily routine. Fantastic app!",
      stars: 4
    },
    {
      text: "I love how easy it is to track my progress with Pulse. A must-have for fitness enthusiasts!",
      stars: 5
    },
    {
      text: "The community features in Pulse are amazing. I've met so many supportive people!",
      stars: 5
    },
    {
      text: "Pulse is user-friendly and helps me stay on top of my fitness goals. Highly recommend.",
      stars: 4
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };
  return (
 <>

 <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        {/* Slick CSS */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        {/* Swiper CSS */}
        
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <title>Home</title>
        {/*--Header Section*/}
        <div className="header">
          <div className="wrap">
            <div className="nav-left"><a href="#"><img className="image" src="images/hyrox-logo.png" /></a></div>
            <div className="nav-right">
              <ul>
                <li><a className="link" href="#">Home</a></li>
                <li><a className="link" href="#">About</a></li>
                <li><a className="link" href="#">Community</a></li>
                <li><a className="link" href="#">Download</a></li>
                <li><a className="link" href="#">Blog</a></li>
              </ul>
            </div>
            <a href="#" className="btn-header">Join Now</a>
          </div>
        </div>
        {/*--Header Section End*/}
        {/*banner*/}
        <div className="banner">
          <div className="header-section">
            <span className="bg"><img className="img2" src="images/shoulder.png" /> </span><a className="fitness">Fitness and
              Training Club App</a>
          </div>
          <div className="header-text">
            <h1 className="text">Training For Every Body and Mind</h1>
          </div>
          <div className="tx-btn"> <a href="#" className="btn-header-text">Get Started</a></div>
          <div className="img-mobile"><img className="mobile" src="images/mobile.PNG" /> </div>
        </div>
        {/*end banner*/}
        {/*-Our Feature*/}
        <div className="feature">
          <div className="wrap">
            <a href="#" className="btn-feature">OUR FEATURES</a>
            <h2 className="progress">Track your progress, crush your goals, and reach a fitter you!</h2>
          </div>
          <div className="img-thumnail">
            <div className="wrap">
              <div className="video-container">
                <div className="video-overlay" id="videoOverlay">
                  <img src="images/thumbnail.png" alt="Overlay Image" className="overlay-image" />
                  <a href="#" id="playButton" className="play-button"><img src="images/play-icon.png" /></a>
                </div>
                <iframe id="youtubeVideo" src="https://www.youtube.com/embed/9xwazD5SyVg" title="Dummy Video For YouTube API Test" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
              <h2 className="lato">Key features that propel your fitness journey.</h2>
              <div className="box">
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/equipment.png" className="color" />
                    <a className="content">Gym planner and logger</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (4).png" className="color" />
                    <a className="content">Food intake tracker</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Vector.png" className="color" />
                    <a className="content">Track macros</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (1).png" className="color" />
                    <a className="content">Fasting</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (1).png" className="color" />
                    <a className="content">Local Meal Prep</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (2).png" className="color" />
                    <a className="content">Fitness Analytics</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (3).png" className="color" />
                    <a className="content">Fitness Programs</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (4).png" className="color" />
                    <a className="content">Integrated With Apple Watch fitness metrics</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="box-item">
                  <div className="box-size">
                    <img src="images/Group (5).png" className="color" />
                    <a className="content">Sleep Insights</a>
                    <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </div>
            {/*end feature*/}
            {/*How to Start*/}
          </div>
        </div>
        <div className="black">
          <div className="wrap">
            <div className="start"> <a href="#" className="btn-download">How to start</a>
              <p className="get">Getting Started is Simple!</p>
              <p className="easy">Easy step to start your workout.</p>
            </div>
            <div className="images-flex">
              <div className="img-1"> <img id="img1" src="images/play.png" />
                <h2 id="app">Download The App</h2>
                <h2 id="download">You can download the App from App Store or Google Play Store</h2>
              </div>
              <div className="img-2">
                <img id="img1" src="images/hello.png" />
                <h2 id="app">Create and Personalized</h2>
                <h2 id="download">Create your account and start personalized you preferences!</h2>
              </div>
              <div className="img-3">
                <img id="img1" src="images/activity.png" />
                <h2 id="app">Start Your Workout!</h2>
                <h2 id="download">Choose the workout based on your preferences.e</h2>
              </div>
              <div className="img-4">
                <img id="img1" src="images/complete.png" />
                <h2 id="app">Analyze and Repeat!</h2>
                <h2 id="download">Gain valuable insights into your progress and performance.</h2>
              </div>
            </div>
          </div>
        </div>
        {/*end how to start*/}
        {/*Test Monial*/}
        <div className="test-monials">
          <div className="wrap">
            <div className="our-feature">
              <a href="#" className="btn-features">OUR FEATURES</a>
            </div>
            <div className="matter">
              <p className="our-trainer">Our Trainers Meet You <br />Where You’re At</p>
              <a className="no-mater">No matter where you’re starting,
                NTC’s worldwide community of fun,
                approachable trainers can help guide you to where you’re headed.
                After all, an app can help you work out, but it’s the people who help you show up.</a>
            </div>
            <div className="images-testmonial">
              <div className="test-1">
                <img className="test-monials1" src="images/tara.png" />
                <a className="tara">Tara Nicolas </a>
                <a className="tara">Lorem Ipsum </a>
              </div>
              <div className="test-2"><img className="test-monials1" src="images/jonah.png" /> <a className="tara">Jonah Kest </a>
                <a className="tara">Lorem Ipsum </a>
              </div>
              <div className="test-3"><img className="test-monials1" src="images/alex.png" /> <a className="tara">Alex Piccilli </a>
                <a className="tara">Lorem Ipsum </a>
              </div>
              <div className="test-4"><img className="test-monials1" src="images/hover.png" /> <a className="tara">Xochilt Hoover </a>
                <a href="#" className="btn-header-view">View more</a>
              </div>
            </div>
          </div>
        </div>
        {/*end Test Monial*/}
        {/* Blog */}
        {/* Blog */}
        <div className="blog">
      <div className="testimonials">
        <div className="wrap">
          <div className="gym">
            <img className="fit" src="images/fitness.png" alt="Fitness Icon" />
            <div className="swiper-horizontals">
              <div className="small">❝</div>
              <div className="slider">
                <div className="slide">
                  <div className="arrow">
                    <p>{testimonials[currentSlide].text}</p>
                    <StarRating rating={testimonials[currentSlide].stars} />
                  </div>
                  <h2 className="name">Sarah J.</h2>
                </div>
              </div>
              <div className="controls">
              <button className="prev" onClick={prevSlide}>→</button>
              <button className="next" onClick={nextSlide}>←</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
        {/* End Blog */}
        {/*read blog*/}~
        <div className="our-blog">
          <div className="wrap">
            <div className="new-btn">
              <h2 href="#" className="btn-blog">Our Blog</h2>
              <h2 className="read-our-blog">Read Our Blog</h2>
            </div>
            <div className="img-fit">
              <div className="fit1"><img className="fit-1" src="images/fit1.png" /><a className="sport">Sports &amp; Activity</a> <a className="good">Here's What a Good Walking Pace Looks Like for a Mile</a><a className="aiming">Aiming
                  for a mile a day is a great way to incorporate more walking into your regular exercise routine
                  and reap the health benefits.</a></div>
              <div className="fit1"><img className="fit-1" src="images/fit3.png" /><a className="sport">Sports &amp; Activity</a><a className="Tower">What Is Tower Running?</a><a className="aiming">This type of racing is the ultimate
                  uphill battle.</a> <h2 href="#" className="btn-read">View More</h2></div>
              <div className="fit1"><img className="fit-1" src="images/fit2.png" /> <a className="sport">Sports &amp; Activity</a> <a className="over"> What Is Overtraining Syndrome — And How Can You Avoid It?</a><a className="aiming">Learn the signs and symptoms of overdoing exercise — and ways to prevent it from
                  happening in the first place.</a></div>
            </div>
          </div>
        </div>
        {/*end read blog*/}
        {/*-footer*/}
        <div className="footer">
          <div className="wrap">
            <div className="download"><a href="#" className="btn-download">Download</a>
              <h2 className="stay">Wherever You Go Stay with Us!</h2>
              <p className="lore">Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,</p>
              <div className="social"><img className="apple" src="images/apple.png" />
                <img className="play" src="images/playstore.png" />
              </div>
            </div>
            <div className="left"><img className="leftside" src="images/2mobile.png" /> </div>
          </div>
        </div>
        <div className="foot">
          <div className="wrap">
            <div className="top-footer">
              <div className="nav-left"><a href="#"><img className="image" src="images/hyrox-logo.png" /></a></div>
              <div className="nav-right">
                <ul>
                  <li><a className="link" href="#">Home</a></li>
                  <li><a className="link" href="#">About</a></li>
                  <li><a className="link" href="#">Community</a></li>
                  <li><a className="link" href="#">Download</a></li>
                  <li><a className="link" href="#">Blog</a></li>
                </ul>
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" className="social-icon"><i className="fab fa-facebook-f" /></a>
                <a href="https://www.twitter.com" target="_blank" className="social-icon"><i className="fab fa-twitter" /></a>
                <a href="https://www.instagram.com" target="_blank" className="social-icon"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <hr />
            <div className="bottom">
              <div className="left-side">
                © 2024 Hyrox Social Club
              </div>
              <div className="right-side">
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        {/*end footer*/}
        {/* Swiper JS */}
        {/* End Blog */}
      
 </>


  )
}

export default Landing