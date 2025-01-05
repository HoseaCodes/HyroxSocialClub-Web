"use client";
import { useState } from "react";
import StarRating from "./StarRating";
import NavBar from "./navigation";
import CopyrightSection from "./CopyrightSection";


const Landing = () => {
  const year = new Date().getFullYear();
  const clubName = 'Hyrox Social Club';
  const links = ['Privacy Policy', 'Terms of Conditions'];
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
      <NavBar />
      {/* Section For Hero Banner  Start */}
      <section className="section-for-hero-banner">
        <div className="main-rowfff">
          <div className="firstdiv">
            <div className="andiv">
              <img
                src="css/imgae/b983f04dcdebee988cae1db8b3665d36.jpg"
                className="shoulder"
              />
              <h4>Fitness and Traning Club App</h4>
            </div>
          </div>
          <h1>
            Training For Every Body
            <br /> and Mind
          </h1>
          <button className="btn"> Get Started</button>
          <div className="div-img-hb">
            <img src="css/imgae/Screenshot_21.png" />
          </div>
        </div>
      </section>
      {/* Section For Hero Banner  End */}
      {/* Section For Features Start  */}
      <section className="main-section-for-features wrapper">
        <div className="main-row-for-features">
          <button className="feature-btn"> Our Features</button>
          <h1>
            Track yout progress, crush your goals,
            <br /> and reach a fitter you!
          </h1>
          <img src="css/imgae/Screenshot_1.png" />
          <div className="text-f">
            <h3>
              Key features that propel your
              <br /> fitness journey{" "}
            </h3>
            <img src="css/imgae/Rectangle 34625161.png" />
          </div>
          <div className="tow-images">
            <div className="ff-image">
              <img src="css/imgae/Rectangle 34625163.png" />
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tempora eligendi ad impedit hic facere maxime veritatis vero
                inventore numquam.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat tempora eligendi ad impedit hic facere
                maxime veritatis vero inventore numquam.
              </p>
            </div>
            <div className="fs-image">
              <img src="css/imgae/Rectangle 34625164.png" />
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tempora eligendi ad impedit hic facere maxime veritatis vero
                inventore numquam.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat tempora eligendi ad impedit hic facere
                maxime veritatis vero inventore numquam.
              </p>
            </div>
          </div>
          <div className="three-images">
            <div className="ftfimage">
              <img src="https://images.unsplash.com/photo-1658557435945-ce41a396639f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJvZHlidWlsZGVyc3xlbnwwfHwwfHx8MA%3D%3D" />
              <h2>Tara Nicolas</h2>
              <p>
                No matter where you&apos;re starting, NTC&apos;s worldwide
                Community of fun, approachable trainers
              </p>
              <div className="texthover">
                <div className="hoverft">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  tempore incidunt commodi, quo quibusdam officia?
                </div>
                <div className="hoverst">
                  <h2>Xochilt Hoover</h2>
                  <p>Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="ftsimage">
              <img src="https://images.unsplash.com/photo-1667890787288-ecaaa4bc6994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJvZHlidWlsZGVyc3xlbnwwfHwwfHx8MA%3D%3D" />
              <h2>Tara Nicolas</h2>
              <p>
                No matter where you&apos;re starting, NTC&apos;s worldwide
                Community of fun, approachable trainers
              </p>
              <div className="texthover">
                <div className="hoverft">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  tempore incidunt commodi, quo quibusdam officia?
                </div>
                <div className="hoverst">
                  <h2>Xochilt Hoover</h2>
                  <p>Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="fttimage">
              <img src="https://images.unsplash.com/photo-1639496904311-93119bb81a36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJvZHlidWlsZGVyc3xlbnwwfHwwfHx8MA%3D%3D" />
              <h2>Tara Nicolas</h2>
              <p>
                No matter where you&apos;re starting, NTC&apos;s worldwide
                Community of fun, approachable trainers
              </p>
              <div className="texthover">
                <div className="hoverft">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  tempore incidunt commodi, quo quibusdam officia?
                </div>
                <div className="hoverst">
                  <h2>Xochilt Hoover</h2>
                  <p>Lorem, ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section For Features End  */}
      {/* Section For Review Start  */}
      <section className="section-for-review ">
        <div className="main-rowof-review-section wrapper">
          <div className="innerrowofreview">
            <div className="first-colum-ofreview">
              <img src="css/imgae/Screenshot_3.png" />
            </div>
            <div className="sec-colum-ofreview">
              <h1>
                Since Using Pulse, I&apos;ve Seen Remarkable Improvements In My
                Fitness Levels. Highly Recommended
              </h1>
              <p>Sarah J.</p>
              <div className="rankings">
                <div className="stars">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star unchecked" />
                </div>
                <div className="rankingtext">
                  4.2 <span className="rrr">Rated on</span>{" "}
                  <span className="appstorerr"> App Store</span>
                </div>
              </div>
              <div className="rowrankindicons"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Section For Review End  */}
      {/* Section For Blogs Start */}
      <section className="section-for-blogs wrapper">
        <div className="main-row-for-blog-section">
          <button className="feature-btn leftrp"> Our Blog</button>
          <h1>Read Our Blog</h1>
          <div className="threeblogsinrow">
            <div className="firstblog">
              <img src="css/imgae/Screenshot_4.png" />
              <p>Sports &amp; Activity</p>
              <h2>
                Here&apos;s What A Good Walking Pace Looks Like For A Mile
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                quibusdam nostrum, labore debitis corporis, esse inventore, unde
                aperiam consectetur dolores ratione omnis consequuntur atque.
              </p>
            </div>
            <div className="secblog">
              <img src="css/imgae/Screenshot_5.png" />
              <p>Sports &amp; Activity</p>
              <h2>Here&apos;s What A Good Walking </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus!
              </p>
            </div>
            <div className="thirdblog">
              <img src="css/imgae/Screenshot_6.png" />
              <p>Sports &amp; Activity</p>
              <h2>
                Here&apos;s What A Good Walking Pace Looks Like For A Mile
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cum perferendis voluptate labore magnam sint, architecto maiores
                recusandae facilis pariatur totam.
              </p>
            </div>
          </div>
          <button className="btn rightbtndown"> View More</button>
        </div>
      </section>
      {/* Section For Blogs End */}
      {/* Section For Footer Start  */}
      <footer>
        <section className="section-for-footer wrapper">
          <div className="main-row-for-footer">
            <div className="first-clom-footer">
              <button className="feature-btn leftrp footerbtn">Download</button>
              <h1>Wherever You Go Stay With Us!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium id provident fugiat reprehenderit nemo incidunt eos
                est optio dolore tempora. Tenetur minima amet dignissimos nisi
                doloremque dolorem rerum laboriosam? Sapiente, nam? Repudiandae
                soluta corporis officiis dignissimos amet doloribus minus cumque
                doloremque sint quibusdam assumenda, iure ut, reiciendis
                recusandae nostrum vel.
              </p>
              <img src="css/imgae/Screenshot_8.png" />
            </div>
            <div className="sec-clom-footer">
              {" "}
              <img src="css/imgae/Screenshot_7.png" />
            </div>
          </div>
        </section>
      </footer>
      {/* Section For Footer End  */}
      {/* last section for footer start  */}
      <section className="section-for-footer-lastmanu wrapper">
        <div className="main-row-oflast-section-footer">
          <div className="main-row-of-header-last-sec">
            <div className="logo-sec">
              <img src="css/imgae/images-removebg-preview.png" />
            </div>
            <div className="navbar">
              <ul>
                <a href="#">
                  <li>Home</li>
                </a>
                <li>About</li>
                <li>Community</li>
                <li>Download</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="lastmenufot">
              {" "}
              <img src="css/imgae/facebook-circle-fill.png" />{" "}
              <img src="css/imgae/twitter-fill.png" />{" "}
              <img src="css/imgae/instagram-fill(1).png" />
            </div>
          </div>
        </div>
      </section>
      {/* last section for footer End  */}
      <CopyrightSection year={year} clubName={clubName} links={links} />
    </>
  );
}

export default Landing