import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Synergy.css'
const SynergyUniversal = () => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };
    
    return (
        <>
            <nav>
            <div className="navbar-logo">
<img src=".\images\download.jpg"/>
      </div>
                {/* /* <a href="index.html"><svg id="logo-16" width="109" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" class="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" class="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" class="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" class="ccustom" fill="#1F84EF"></path> </svg></a> */}
<div>
    <ul id="navbar" className={clicked ? "on" : ""}>
        <li>
            <a className="on" href="index.html">HOME</a>
            </li>
        <li>
            <a href="index.html">ABOUT</a>
            </li>
        <li>
            <a href="index.html">SERVICES</a>
            </li>
        <li>
            <a href="index.html">CAREERS</a>
            </li>
        <li>
            <a href="index.html">CONTACT</a>
            </li>
    </ul>
</div>
{/* <div id="smalldev" onClick={this.handleClick}>
    <i id="lines" className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i> */}
    <div id="smalldev" onClick={handleClick}>
          <i id="lines" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>

</div>
        </nav>





<div class="container">
<div class="carousel slide" data-bs-ride="carousel" id="carouselEX">
<div class="carousel-inner">
<div class="carousel-item active">
    <p>
    <figure>
    <img src="./images/car222.jpg" alt="sunny" style={{width:"100%",height:"70%"}}/>
    <figcaption><h1 id="cr2">Modern & Responsive Structure</h1>
    <p id="crp2">Our company has been structured in a way in which cross- functional teams help foster collaboration & innovation with the agile organizational structure for flexible & adaptability as our pillars</p>
    </figcaption>
    </figure> 
    </p>


</div>
<div class="carousel-item">
<p>
<figure>
    <img src="./images/car333.jpg" alt="sunny" width="110%" height="70%"/>
    <figcaption><h1 id="cr3">Our work is presentation of our capabilities</h1>
    <p id="crp3">Our capabilities lie in leveraging cutting-edge technologies, employing comprehensive project management practices, delivering tailored solutions for diverse industries, and providing exceptional customer service
    </p>
    </figcaption>
    </figure> 
    </p>
</div>
<div class="carousel-item">
<p>
    <figure>
    <img src="./images/car111.jpg" alt="sunny" width="205%"height="70%"/>
    <figcaption><h1 id="cr1">We Build Professional values</h1>
    <p id="crp1">Professional Values are backbone of the corporate world with our core values as the key pillars. Our Services & Strategies will surpass industry's expectations.</p>
    </figcaption>
    </figure> 
    </p>

</div>
<button type="button" class="carousel-control-prev" data-bs-target="#carouselEX" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button type="button" class="carousel-control-next" data-bs-target="#carouselEX" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
 <span class="visually-hidden">next</span>
</button>
 <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselEX" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselEX" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselEX" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
</div>
</div>
</div>
<div id="mcont">
<div id="whoweare">
    <h1>WHO WE ARE</h1>
<p>We pride ourselves in the services we provide as our work speaks for itself. Our DNA is rooted in innovation, industry-leading solutions & the passion for success. At Synergy Universal we combine years of experience, Technical prowess, and an unwavering commitment to client satisfaction. We are driven by the Passion for delivering exceptional results that empower businesses to thrive in the digital era. Also at the forefront of this revolution we, the synergy universal offer a comprehensive suite of services including web development, app development, Digital marketing, Database management &exceptional testing capabilities.</p>
</div>
<div id="imcc">
    <img src="./images/who1.jpg" />
</div>
</div>
<div>
    <h1 style={{textAlign:'center',marginTop:'90px'}}>Our Services</h1>
    <p id="poc">Synergy Universal is synonymous with exceptional quality. With our team of creative experts and state-of-the-art production facility, we deliver projects swiftly without compromising on the high standards that our clients demand. From web development to app development, digital marketing to database management, we infuse every project with unmatched precision and finesse. Partner with us to experience the pinnacle of quality and achieve remarkable results for your business.</p>
</div>
<div class="containerb">
        <div class="box">
            <h1><i class="fa-solid fa-laptop" style={{width:'50px',height:'80px',marginTop:'50px'}}></i></h1>Web Development</div>
        <div class="box">
            <h1><i class="fa-solid fa-database" style={{width:'50px',height:'80px',marginTop:'50px'}}></i></h1>Database management</div>
        <div class="box">
            <h1><i class="fa-solid fa-mobile-screen-button" style={{width:'50px',height:'80px',marginTop:'50px'}}></i></h1>Mobile App Development</div>
        <div class="box">
            <h1><i class="fa-solid fa-toolbox" style={{width:'50px',height:'80px',marginTop:'50px'}}></i></h1>ERP Solutions</div>
        <div class="box">
            <h1><i class="fa-solid fa-tachograph-digital" style={{width:'50px',height:'80px',marginTop:'50px'}}></i></h1>Digital Marketing</div>
        <div class="box">
            <h1><i class="fa-solid fa-bug" style={{width:'50px',height:'80px',marginTop:'50px'}}></i></h1>Testing</div>
        
    </div>
    <figure>
  <img id="imgd" src="./images/car7.jpg" alt="Example Image"/>
  <figcaption>
    <h1 id="pp">Preparing For Your<br></br>
    <span id="sc">Success?</span><br></br>
Partner with Us!</h1>
<p id="pps">Synergy Universal is your go-to partner for designing brands, executing campaigns, and creating impactful digital projects. With our expertise, we'll help your business stand out with visually stunning brand identities, engaging campaigns, and cutting-edge digital solutions. Trust us to be the driving force behind your success.</p>
<Link to={'/register'}>
<button id="btp">Get In Touch</button>
</Link>
</figcaption>
</figure>
<p id="plst">
We foster a dynamic environment where creativity flourishes, and our team's expertise is harnessed to deliver outstanding results. With a client-centric approach, we prioritize your goals and aspirations, ensuring that every project is executed with precision, passion, and a commitment to exceeding your expectations. Join us in shaping a successful partnership where your vision becomes a reality.
</p>
<img id="imgl" src="./images/talent.png" alt="Example Image"/>
<div><h1 id="hdd">Our Clients</h1></div>
<div class="containerc">
    <img src="./images/lg6.jpg" class="moving-image"/>
    <img src="./images/lg1.jpg" class="moving-image"/>
    <img src="./images/logo2.jpg" class="moving-image"/>
    <img src="./images/lg3.jpg" class="moving-image"/>
    <img src="./images/lg7.jpg" class="moving-image"/>
    <img src="./images/lg1.jpg" class="moving-image"/>
    
   
    
    
  </div>
  <div class="containerd">
    <img src="./images/lg9.jpg" class="moving-imager"/>
    <img src="./images/lg10.jpg" class="moving-imager"/>
    <img src="./images/lg11.jpg" class="moving-imager"/>
    <img src="./images/lg12.jpg" class="moving-imager"/>
    <img src="./images/lg13.jpg" class="moving-imager"/>
    <img src="./images/logo2.jpg" class="moving-imager"/>
    
    
  </div>
  <div class="containere">
    <img src="./images/lg14.jpg" class="moving-image"/>
    <img src="./images/lg5.jpg" class="moving-image"/>
    <img src="./images/lg15.jpg" class="moving-image"/>
    <img src="./images/lg16.jpg" class="moving-image"/>
    <img src="./images/logo2.jpg" class="moving-image"/>
    <img src="./images/lg12.jpg" class="moving-image"/>
    
    
  </div>
     
  <footer className="footer" /*style={{backgroundColor:'black'}}*/ style={{marginTop:'80px'}}>
      <div className="footer-content">
        <div className="column">
          <h3> <i class="fa-solid fa-location-dot" style={{color:'blue'}}></i> Hyderabad</h3>
          <p id="ftp">SV Chambers, 4th Floor , plot no:193, Block B,<br /> Kavuri Hills, Madhapur, Hyderabad - 500081,<br /> Telangana.</p>
        </div>
        <div className="column">
          <h3>Pune</h3>
          <p id="ftp">Sr. No.207, 9th floor 9E Solitaire Business Hub,<br /> opp. NECO Garden Society, Clover Park, Viman<br /> Nagar, Pune, Maharashtra 411014</p>
        </div>
        <div className="column">
          <h3>Dubai</h3>
          <p id="ftp"> Shubbar Majid Building, Khaild bin Waleed Road,<br /> Near Jubilee Aster Hospital, Dubai, U.A.E, P.O.BOX<br /> : 5370.</p>
        </div>
      </div>
      {/* New Row */}
      <div className="footer-content">
        <div className="column">
          <h3> <i class="fa-solid fa-phone" style={{color:'blue'}}></i> Call Us</h3>
          <p id="ftp">+91 40 4017 5137<br /> 1800 3090 89</p>
        </div>
        <div className="column">
          <h3><i class="fa-solid fa-envelope" style={{color:'blue',marginRight:'10px'}}></i>Mail Us</h3>
          <p id="ftpp">info@synergyuniversal.in<br /> sales@synergyuniversal.in</p>
        </div>
      </div>
      <hr></hr>
      <div className="footer-content">
        <div className="column">
          <img src=".\images\su.png" alt="SynergyUniversal" style={{width:'250px'}}/>
          <p>At our core, we strive to be more than just a business<br /> organization. We are committed to creating a culture of<br /> value, respect, and transparency that sets us apart from <br />the rest. Our aim is to continuously innovate, improve, <br />and deliver efficient and effective business solutions that <br />drive tangible results for our clients.</p>
        </div>
        <div className="column li">
          <h3>Useful Links</h3>
          <a href="#">Home</a><br />
          <a href="#">About </a><br />
          <a href="#">Careers</a><br />
          <a href="#">Our Services</a><br />
          <a href="#">Contact</a>
        </div>
        {/* Registration Form */}
        <div className="form-column">
          <h3>REQUEST FOR QUOTE</h3>
          {/* <form id="frm">
           
              <input type="text" name="name" placeholder="Enter your Name" />
            <br />
            
              <input type="email" name="email" placeholder="Enter your Number" />
            <br />
            <input type="email" name="email" placeholder="Enter your Mail" />
            <br />
            <input type="text" name="message" placeholder="Enter your Message" /><br />
            <button type="submit">Submit</button>
          </form>
           */}
           {/* <form class="mt-5">
                              <input type="text" class="form-control" placeholder="Enter Your Name" />
                              <input type="text" class="form-control" placeholder="Enter Your Number" />
                              <input type="email" class="form-control" placeholder="Enter Your Email" />
                              <textarea rows="3" class="form-control" placeholder="Message"></textarea>
                              <button>Submit</button>
                            </form> */}
                            <form id="frm">
    <div class="form-group">
      <input className="ipt" type="text" id="name" name="name" required/>
      <label  id="lbb" for="name">Enter your Name</label>
    </div>
    <div class="form-group">
      <input className="ipt" type="tel" id="email" name="email" required/>
      <label  id="lbb" for="number">Enter Your Number</label>
    </div>
    <div class="form-group">
      <input className="ipt" type="email" id="email" name="email" required/>
      <label id="lbb" for="email">Enter Your Email</label>
    </div>
    <div class="form-group">
      <input className="ipt" type="text" id="password" name="password" required/>
      <label id="lbb" for="msg">Message</label>
    </div>
    <button id="btnf" type="submit">Submit</button>
  </form>
        </div>
        
      </div>
      <div className="footer-content">
        <div className="Column" style={{marginBottom:"95px"}}>
            <h3>FOLLOW US</h3>
          <a href="#"><h1><i class="fa-brands fa-facebook"></i></h1></a>
          <a href="#"><h1><i class="fa-brands fa-instagram "></i></h1></a>
          <a href="#"><h1><i class="fa-brands fa-twitter"></i></h1></a>
          <a href="#"><h1><i class="fa-brands fa-linkedin" aria-hidden="true"></i></h1></a>
        </div>
      </div>
      
    </footer>


        </>       
)
    }

export default SynergyUniversal;



