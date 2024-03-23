import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import './BlogDetails.scss';
import './Blog.scss';
import './Comment.scss';
import '../Contact/Contact.scss';
import Carousel from '../Slider/Carousel';

const BlogDetails = () => {
  const blogDetails = {
    heroBg: '/images/hero-bg17.jpg',
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: [
      {
        imgLink: '/images/hero-bg3.jpg',
      },
      {
        imgLink: '/images/hero-bg4.jpg',
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <section className="st-content">
      <div
        className="st-page-heading st-bg"
        style={{ backgroundImage: `url(${blogDetails.heroBg})` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">
            What Happens When Someone Objects to Your Wedding in Mauritius
              
            </h1>
            <div className="st-post-label">
              <span>
                By <Link to="">Mathieu Khood</Link>
              </span>
              <span>Mar 15, 20024</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <div className="st-post-details st-style1">
              <p>
                In a previous article we had seen that if you wish to get civilly married, you need to make an application at the Civil Status Office. 
                A publication of the proposed civil marriage should be made 10 days prior to the proposed date of marriage at the Civil Status Office of the locality
                within the District where the civil marriage is to take place and in the office of the district in which 
                each of the parties has resided in Mauritius for 7 days immediately preceding the day of publication.  
              </p>
              <p>
                During this 10 days, people can officially object to your wedding taking place, and once this time has elapsed, you can get married.
                But, what happens if someone objects to your marriage? This article will briefly look at what happens next.
              </p>
              <img
                className="st-zoom-in"
                src="/images/hero-bg3.jpg"
                alt="blog1"
              />
              <h2>Step 1: The Registrar of Civil Status Investigates</h2>
              <div className="st-post-info">
                <div className="st-post-text">
                  <p>
    According to section 22 of the Civil Status Act (Objections to marriage), where, after publication of a proposed civil marriage, any person has any ground to object to the celebration of the marriage or is of the opinion that any provision of the Civil Status Act or of any other enactment relating to the marriage is likely to be infringed, he may lodge with the Registrar of Civil Status a notice of objection to the proposed marriage, and upon receipt of a notice of objection, the Registrar of Civil Status shall enquire into the matter and, after hearing the parties, make a decision upholding or rejecting the objection, and inform the parties accordingly.
                  </p>
                  {/* <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize
                    customer directed convergence without revolutionary ROI.
                  </p>
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail.
                  </p> */}
                  <h2>Step 2: You go to Court in front of the Judge in Chambers</h2>
                  {/* For Youtube */}
                  {/* <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      width={'100%'}
                      height={459}
                      src="https://www.youtube.com/embed/vGOL7ZvuGMc"
                      allowFullScreen=""
                    ></iframe>
                  </div> */}
                  {/* For Vimeo */}
                  {/* <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" width="816" height="459" src="https://player.vimeo.com/video/172077385?title=0&st-byline=0&portrait=0&color=EE5A3F&autoplay=0&loop=0&wmode=transparent" allowfullscreen></iframe>
          </div> */}
                  <p>
          If the Registrar of Civil Status, does indeed uphold the objection made against your marriage, you may, within a period not exceeding 30 days from the date on which you are informed of the decision, apply to the Judge in Chambers through your Attorney (Avoué) for an order to quash the decision of the Registrar of Civil Status. The case is then heard in Chambers, where your legal representative, usually your Barrister (avocat) will present your case to the Judge in Chambers and upon hearing the case, the Judge in Chambers shall make an order quashing or upholding the decision, or such other order as he may deem fit. The Judge in Chambers will then transmit the order to the Registrar of Civil Status who shall cause it to be entered in the appropriate register.
                  </p>
                  {/* <blockquote>
                    Integer accumsan arcu ligula, eget dictum augue egestas sed.
                    Curabitur bibendum, lorem ac dapibus pellentesque, justo
                    lectus bibendum enim.
                    <small>
                      by: <span>Mark Parker</span>
                    </small>
                  </blockquote> */}
                  {/* <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration some
                    even slightly believable. If you are going to use passage of
                    Lorem Ipsum.
                  </p> */}
                  <h2>Step 3: You get Married (or not) </h2>
                  <p>
                    Where the proposed marriage may be celebrated in virtue of an order transmitted to the Registrar of Civil Status, the Registrar of Civil Status shall cause the marriage to be celebrated—
                    <ul>
                      <li>
                        (a) at such time as is convenient to the parties; and
                      </li>
                      <li>
                        (b) without the parties having to make a fresh publication of their proposed marriage.
                      </li>
                      <li>Content on this page is for information purposes only and does not constitute legal advice.</li>
                    </ul>

                  </p>
                  {/* <Carousel data={blogDetails} /> */}
                  {/* .st-slider */}
                  {/* <div className="st-height-b20 st-height-lg-b20" />
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.
                  </p>
                </div> */}
                {/* <div className="st-height-b35 st-height-lg-b35" />
                <div className="st-post-meta">
                  <div className="st-post-tages">
                    <h4 className="st-post-tage-title">Tags:</h4>
                    <ul className="st-post-tage-list st-mp0">
                      <li>
                        <Link to="#">App</Link>
                      </li>
                      <li>
                        <Link to="#">php</Link>
                      </li>
                      <li>
                        <Link to="#">web</Link>
                      </li>
                      <li>
                        <Link to="#">business</Link>
                      </li>
                      <li>
                        <Link to="#">agency</Link>
                      </li>
                      <li>
                        <Link to="#">development</Link>
                      </li>
                    </ul>
                  </div> */}
                  <div className="st-post-share">
                    <h4 className="st-post-share-title">Share:</h4>
                    <div className="st-post-share-btn-list">
                      <Link to="#">
                        <Icon icon="fa6-brands:facebook-f" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:twitter" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:behance" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:instagram" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:pinterest-p" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="st-height-b60 st-height-lg-b60" />
              </div>
              <div className="st-post-btn-gropu">
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </Link>
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </Link>
              </div>
            </div>
            <div className="st-height-b60 st-height-lg-b60" />

          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </section>
  );
};

export default BlogDetails;
