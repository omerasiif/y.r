
import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Leaf,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import heroDesktop from '@/img/mobile.png';
import heroMobile from '@/img/desk.png';

const introPhoto = 'https://images.pexels.com/photos/5900823/pexels-photo-5900823.jpeg?auto=compress&cs=tinysrgb&w=1200';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/158228/home-farmhouse-old-house-old-farmhouse-158228.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'A rustic farmhouse adorned with lush greenery and vibrant flowers',
  },
  {
    src: 'https://images.pexels.com/photos/18025799/pexels-photo-18025799.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Rustic farmhouse surrounded by lush greenery and tall trees',
  },
  {
    src: 'https://images.pexels.com/photos/29473507/pexels-photo-29473507.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'A farm pathway with autumn foliage and rustic fence',
  },
  {
    src: 'https://images.pexels.com/photos/14771884/pexels-photo-14771884.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Outdoor garden scene with a traditional wooden shed and vibrant flowers',
  },
  {
    src: 'https://images.pexels.com/photos/38641236/pexels-photo-38641236.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Historic thatched roof cottage surrounded by lush greenery',
  },
  {
    src: 'https://images.pexels.com/photos/5900823/pexels-photo-5900823.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Bright and cozy modern farmhouse living room with fireplace',
  },
  {
    src: 'https://images.pexels.com/photos/9890644/pexels-photo-9890644.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Sunlit rustic living room with wooden walls and a fireplace',
  },
  {
    src: 'https://images.pexels.com/photos/833192/pexels-photo-833192.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'A modern farmhouse set in a rural landscape under dramatic storm clouds',
  },
];

const navItems = ['Home', 'About', 'Gallery', 'Amenities', 'Location'];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="J Farmhouse home">
          <span className="brand-mark"><Leaf size={14} strokeWidth={1.8} /></span>
          <span>J <em>Farmhouse</em></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
          <a className="nav-book" href="#book">Book Now <ArrowRight size={15} /></a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
        ))}
        <a className="mobile-nav-book" href="#book" onClick={closeMenu}>Book Now <ArrowRight size={15} /></a>
      </div>

      <main>
        <section className="hero" id="home">
          <picture className="hero-media">
            <source media="(max-width: 640px)" srcSet={heroMobile} />
            <img src={heroDesktop} alt="BTS Farmhouse in a peaceful natural setting" />
          </picture>
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <div className="eyebrow eyebrow--light"><span /> Private Farmhouse</div>
            <h1>J <i>Farmhouse</i></h1>
            <p className="hero-tagline">Your private escape <br className="mobile-break" /> into nature.</p>
            <p className="hero-copy">Relax, reconnect, and create unforgettable moments in a peaceful private setting surrounded by nature.</p>
            <div className="hero-actions">
              <a className="button button--gold" href="#book">Book your stay <ArrowRight size={17} /></a>
              <a className="button button--gold" href="#about">Explore farmhouse <ArrowDown size={16} /></a>
            </div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
          <div className="hero-corner">01 <span>/</span> 01</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro-inner page-width">
            <div className="intro-visual">
              <div className="intro-label eyebrow"><span /> Welcome to J Farmhouse</div>
              <img className="intro-photo" src={introPhoto} alt="BTS Farmhouse surrounded by nature" loading="lazy" />
            </div>
            <div className="intro-copy">
              <h2>A place to slow down <br /><i>& make memories.</i></h2>
              <p>J Farmhouse is a peaceful private getaway made for the moments that matter. Come together, breathe a little deeper, and enjoy the simple luxury of time well spent.</p>
              <a className="text-link" href="#gallery">Discover the farmhouse <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="highlights section-pad" id="amenities">
          <div className="page-width">
            <div className="section-heading">
              <div className="eyebrow"><span /> The J feeling</div>
              <p>Thoughtful space for easy days, shared laughter, and lasting memories.</p>
            </div>
            <div className="highlight-grid">
              <article className="highlight-card">
                <div className="highlight-icon"><Leaf size={21} strokeWidth={1.4} /></div>
                <span className="card-number">01</span>
                <h3>Private getaway</h3>
                <p>A space to relax and spend quality time together.</p>
              </article>
              <article className="highlight-card">
                <div className="highlight-icon"><Sparkles size={21} strokeWidth={1.4} /></div>
                <span className="card-number">02</span>
                <h3>Peaceful surroundings</h3>
                <p>Enjoy a calm escape surrounded by the quiet of nature.</p>
              </article>
              <article className="highlight-card">
                <div className="highlight-icon"><Users size={21} strokeWidth={1.4} /></div>
                <span className="card-number">03</span>
                <h3>Memorable moments</h3>
                <p>A setting for gatherings, celebrations, and unforgettable experiences.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="marquee-section section-pad" id="gallery">
          <div className="marquee-intro page-width">
            <div className="eyebrow"><span /> A glimpse of J farm</div>
            <h2>Moments worth <i>coming back for.</i></h2>
          </div>
          <div className="marquee-viewport" aria-label="Farmhouse photo gallery">
            <div className="marquee-track">
              {[...galleryImages, ...galleryImages].map((image, index) => (
                <div className="marquee-image" key={`${image.src}-${index}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span>{String((index % galleryImages.length) + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-strip" id="book">
          <div className="page-width booking-inner">
            <div>
              <div className="eyebrow eyebrow--light"><span /> Make your way here</div>
              <h2>Ready for a little <i>more time together?</i></h2>
            </div>
            <a className="button button--gold" href="mailto:hello@btsfarmhouse.com">Enquire about a stay <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="location-note" id="location">
          <div className="page-width location-inner">
            <MapPin size={20} strokeWidth={1.5} />
            <p>A quiet private setting, waiting to be discovered.</p>
            <span>Location details coming soon</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <a className="brand brand--footer" href="#home">
              <span className="brand-mark"><Leaf size={14} strokeWidth={1.8} /></span>
              <span>J <em>Farmhouse</em></span>
            </a>
            <p>Your private escape into nature.</p>
          </div>
          <div className="footer-links">
            <h3>Quick links</h3>
            <a href="#home">Home</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#amenities">Amenities</a><a href="#location">Location</a>
          </div>
          <div className="footer-contact">
            <h3>Get in touch</h3>
            <span><MapPin size={15} /> Location details coming soon</span>
            <a href="tel:+0000000000"><Phone size={15} /> Phone details coming soon</a>
            <a href="mailto:hello@btsfarmhouse.com"><MessageCircle size={15} /> hello@jfarmhouse.com</a>
          </div>
        </div>
        <div className="footer-bottom page-width">
          <span>© 2026 J Farmhouse. All rights reserved.</span>
          <span>Website by Omer</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
