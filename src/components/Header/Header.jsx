import { Fragment } from "react";
import './Header.scss';
import Twitter from '../../assets/twitter.svg';
import Home from '../../assets/home fill.svg';
import Explore from '../../assets/rishotka.svg';
import Notifications from '../../assets/qongiroq.svg';
import Messages from '../../assets/messages.svg';
import Bookmarks from '../../assets/bookmarks.svg';
import Lists from '../../assets/lists.svg';
import Profile from '../../assets/profile outline.svg';
import More from '../../assets/more.svg';
import Man1 from '../../assets/man.1.svg';
import Vector from '../../assets/Vector (1).svg';
import Group from '../../assets/Group.svg';
import Vector3 from '../../assets/Vector (3).svg';
import Vector4 from '../../assets/Vector (4).svg';
import Vector5 from '../../assets/Vector (5).svg';
import Vector6 from '../../assets/Vector (6).svg';
import Frame from '../../assets/Frame.svg';
import Comment from '../../assets/comment.svg';
import Retweet from '../../assets/retweet (1).svg';
import Like from '../../assets/like1.svg';
import Gframe from '../../assets/uatish.svg';
import Dframe from '../../assets/daraga.svg';
import Retweet1 from '../../assets/pavtor.svg';
import Like1 from '../../assets/like fill.svg';
import Imgjpg from '../../assets/image 8.jpg';
import Searchicon from '../../assets/search.svg';
import Settings from '../../assets/settings.svg';
import Man3 from '../../assets/man.3.svg';
import Man4 from '../../assets/man.4.svg';
import Man5 from '../../assets/man.5.svg';
import WoMan5 from '../../assets/woman.svg';
import Man6 from '../../assets/man6.svg';
import { NavLink } from "react-router-dom";

export const Header = () => {
    function clickImg() {
        const img = document.querySelector('.img');
    img.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Text connot be written ');
    });
    }

        const url = 'https://twitter154.p.rapidapi.com/user/details?username=omarmhaimdat&user_id=96479162';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be12371dfbmshc4d13e7c503e779p18b7e6jsna54b3671ded8',
		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
	}
};

async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getData();


  return (
    <>
        <header>
                <div className="container">
                    <div className="box">
                    <div className="left_content">
                        <img className="twitter_icon" src={Twitter} alt="twitter-img" />
                        <ul className="text">
                            <li className="iteam iteam_link"><img src={Home} alt="Home-img" />
                        <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className="iteam"><img src={Explore} alt="Explore-img" />
                            <NavLink to='explore'>Explore</NavLink>
                            </li>
                            <li className="iteam"><img src={Notifications} alt="Notifications-img" />
                            <NavLink to='notifications'>Notifications</NavLink>
                            </li>
                            <li className="iteam"><img src={Messages} alt="Messages-img" />
                            <NavLink to="messages">Messages</NavLink>
                            </li>
                            <li className="iteam"><img src={Bookmarks} alt="Bookmarks-img" />
                            <NavLink to='bookmarks'>Bookmarks</NavLink>
                            </li>
                            <li className="iteam"><img src={Lists} alt="Lists-img" />
                            <NavLink to='lists'>Lists</NavLink>
                            </li>
                            <li className="iteam"><img src={Profile} alt="Profile-img" />
                            <NavLink to='profile'>Profile</NavLink>
                            </li>
                            <li className="iteam"><img src={More} alt="More-img" />
                            <NavLink to='more'>More</NavLink>
                            </li>
                            <button className="button">Tweet</button>
                        </ul>

                        <div className="data_img">
                            <img className="man1" src={Man1} alt="man-img" />
                          <div className="informations">
                              <h5>Bobur</h5>
                              <p>@bobur_mavlonov</p>
                           </div>
                           <img src={Vector} alt="vector-icon" />
                        </div>
                    </div>
                    <div className="center_content">

                        <div className="home_con">
                            <h1>Home</h1>
                            <img src={Group} alt="group-icon" />
                        </div>

                        <div className="data_happining">
                            <div className="what_hap">
                            <img src={Man1} alt="img" />
                            <p>What’s happening</p>
                            </div>
                            <div className="grapih_icons">
                                <img src={Vector3} alt="icon" />
                                <img src={Vector4} alt="icon" />
                                <img src={Vector5} alt="icon" />
                                <img src={Vector6} alt="icon" />
                                <img src={Frame} alt="icon" />
                            </div>
                            <button className="btn">Tweet</button>
                        </div>
                        
                        <div className="designsta_data">
                            <div className="fol_upfol">
                                <img src={Man3} alt="img" />
                                <div>
                                <h4>Designsta <span>@inner · 25m</span></h4>
                                <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                                </div>
                                <img src={Vector} alt="icon" />
                            </div>

                            <div className="follov_icons">
                                <img onClick={clickImg} className="img" src={Comment} alt="icon" />
                                <img src={Retweet} alt="icon" />
                                <img src={Like} alt="icon" />
                                <img src={Gframe} alt="icon" />
                                <img src={Dframe} alt="icon" />
                            </div>
                        </div>

                        <div className="designsta_data">
                            <div className="fol_upfol">
                                <img src={Man4} alt="img" />
                                <div>
                                <div className="more_menu">
                                <h4>cloutexhibition <span>@RajLahoti · 22m</span></h4>
                                <img src={Vector} alt="icon" />
                                </div>
                                <h5>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</h5>
                                </div>
                            </div>
                            
                            <div className="follov_icons">
                                <img onClick={getData} className="img" src={Comment} alt="icon" />
                                <img src={Retweet1} alt="icon" />
                                <img src={Like1} alt="icon" />
                                <img src={Gframe} alt="icon" />
                                <img src={Dframe} alt="icon" />
                            </div>
                        </div>

                        <div className="designsta_foll">
                            <div className="fol_upfol">
                                <img src={Man5} alt="img" />
                                <div>
                                <div className="more_menu">
                                    <h4>CreativePhoto <span>@cloutexhibition · 1h</span></h4>
                                    <img className="iiim" src={Vector} alt="icon" />
                                </div>
                                <p>Обетда..... <br />Кечиринглар</p>
                                </div>
                            </div>
                        </div>

                        <div className="the_and-nofooter">
                            <img className="the_img" src={Imgjpg} alt="img" />
                            <div className="icons-fl">
                                <img onClick={clickImg} className="img" src={Comment} alt="icon" />
                                <img src={Retweet} alt="icon" />
                                <img src={Like} alt="icon" />
                                <img src={Gframe} alt="icon" />
                                <img src={Dframe} alt="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="rigth_content">
                        <div className="inp_box">
                            <img className="search" src={Searchicon} alt="i" />
                            <input className="inp" type="text" placeholder="Search Twitter" />
                        </div>

                        <div className="teades">
                            <div className="settings">
                                <h3>Trends for you</h3>
                                <img src={Settings} alt="s-img" />
                            </div>
                            <div className="revolution">
                                <div>
                                <p>Trending in Germany</p>
                                <h4>Revolution</h4>
                                <p>50.4K Tweets</p>
                                </div>
                                <img src={Vector} alt="icon" />
                            </div>
                            <div className="revolution">
                            <div>
                            <p>Trending in Germany</p>
                                <h4>Revolution</h4>
                                <p>50.4K Tweets</p>
                            </div>
                            <img src={Vector} alt="icon" />
                            </div>
                            <div className="revolution">
                            <div>
                            <p>Trending in Germany</p>
                                <h4>Revolution</h4>
                                <p>50.4K Tweets</p>
                            </div>
                            <img src={Vector} alt="icon" />
                            </div>
                            <span className="span"><a href="/">Show more</a></span>
                        </div>

                        <div className="you_might-like">
                            <h2>You might like</h2>

                            <div className="follow_div">
                                <img src={WoMan5} alt="img" />
                            <div>
                                <h5>Mushtariy</h5>
                                <p>@Mushtar565266</p>
                            </div>
                            <button className="btn_follow">Follow</button>
                            </div>

                            <div className="follow_div">
                                <img src={Man6} alt="img" />
                            <div>
                                <h5>Mushtariy</h5>
                                <p>@Mushtar565266</p>
                            </div>
                            <button className="btn_follow">Follow</button>
                            </div>
                            <span className="span2"><a href="/">Show more</a></span>
                        </div>
                    </div>
                    </div>
                </div>
        </header>
    </>
  )
}

