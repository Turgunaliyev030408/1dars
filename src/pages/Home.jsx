import { NavLink } from 'react-router-dom';
import '../styles/Home.css'
import { useState } from 'react';

export const Home = ()=> {
    const [oshir, setOshir] = useState(0)
    const Qosh = ()=> {
        let a = 0;
        let b = a + 1;
        setOshir(b)
    }
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="top-element">
                            <img src="../../public/svg/Logo.svg" alt="site-logo" />
                            <ul className='top-link-wrapper'>
                                <li className='link-item'><NavLink className='top-links' to={'/'}>Home</NavLink></li>
                                <li className='link-item'><NavLink className='top-links' to={'/about'}>About</NavLink></li>
                                <select className='top-pages-drops'>
                                    <option className='drop-items' value="Pages"><NavLink to={'/home'}>pages</NavLink></option>
                                    <option className='drop-items' value="salom"><NavLink to={'/about'}>home</NavLink></option>
                                    <option className='drop-items' value="salom2"><NavLink to={'/shop'}>about</NavLink></option>
                                </select>
                                <li className='link-item'><NavLink className='top-links' to={'/shop'}>Shop</NavLink></li>
                                <li className='link-item'><NavLink className='top-links' to={'/'}>Projects</NavLink></li>
                                <li className='link-item'><NavLink className='top-links' to={'/'}>News</NavLink></li>
                            </ul>
                            <div className="top-right-element">
                                <form className='top-input'>
                                    <input className='right-input' required type="text"/>
                                    <button className='right-btn'><img className='right-btn-logo' src="../../public/svg/search-logo.svg" alt="search-logo" /></button>
                                </form>
                                <div className="right-market">
                                    <button onClick={Qosh} className='market-btn'><img src="../../public/svg/market.svg" alt="marketing-logo" /></button>
                                    <h1>Cart ({oshir})</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                    <div className="max-container">
                        <div className="mini-container">
                            <div className="header-middle-element">
                                <img className='middle-logo' src="../../public/svg/food-logo.svg" alt="food-text" />
                                <h1 className='middle-title'>Choose the best <br /> healthier way <br /> of life</h1>
                                <button className='middle-btn' >Explore Now</button>
                            </div>
                        </div>
                    </div>
            </header>
            <main>
                <div className="main-top-element">
                    <div className="mini-container">
                        <div className="card-wrapper">
                            <img className='top-card' src="../../public/png/card-1.png" alt="card-logo" />
                            <img className='top-card' src="../../public/png/card-2.png" alt="card-logo" />
                        </div>
                    </div>
                    <div className="max-containers">
                        <div className="mini-container">
                            <div className="main-middle-element">
                                <img className='abaut-logo' src="../../public/svg/About Us.svg" alt="abaut-logo" />
                                <h1 className='middle-top-element'>We Believe in Working <br /> Accredited Farmers</h1>
                                <p className='middle-top-text'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br /> been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
                                <div className="cards">
                                    <img className='card-logos' src="../../public/svg/Icon1.svg" alt="logo" />
                                    <div className="cards-right">
                                        <h1 className='cards-title'>Organic Foods Only</h1>
                                        <p className='cards-text'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
                                    </div>
                                </div>
                                <div className="cards">
                                    <img className='card-logos' src="../../public/svg/Icon2.svg" alt="logo" />
                                    <div className="cards-right">
                                        <h1 className='cards-title'>Quality Standards</h1>
                                        <p className='cards-text'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
                                    </div>
                                </div>
                                <button className='main-middle-btn'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;