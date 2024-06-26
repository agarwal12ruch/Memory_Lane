import React from 'react' 
import facebook_dark from '../../src/components/assets/facebook_dark.png'
import Youtube_dark from '../../src/components/assets/youtube_dark.png'
import Telegram_dark from '../../src/components/assets/telegram_dark.png'
import Instagram_dark from '../../src/components/assets/instagram_dark.png'
import Linkedin_dark from '../../src/components/assets/linkedin_dark.png'
import facebook_light from '../../src/components/assets/facebook_light.png'
import Youtube_light from '../../src/components/assets/youtube_light.png'
import Telegram_light from '../../src/components/assets/telegram_light.png'
import Instagram_light from '../../src/components/assets/instagram_light.png'
import Linkedin_light from '../../src/components/assets/linkedin_light.png'
import logo_dark from '../../src/components/assets/logo_dark.png'
import logo_light from '../../src/components/assets/logo_light.png'
import home_dark from '../../src/components/assets/home_dark.png'
import home_light from '../../src/components/assets/home_light.png'
import call_dark from '../../src/components/assets/call_dark.png'
import call_light from '../../src/components/assets/call_light.png'
import email_dark from '../../src/components/assets/email_dark.png'
import email_light from '../../src/components/assets/email_light.png'
import './footer.css';
const Footer = ({theme,setTheme}) => {
    return (
        <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer_link'>
                <div className='sb_footer_link_div'>
                    <img src={theme==='light'? logo_light:logo_dark} alt='' className='logo' />
                    <div className='info'>
                        <div className='info_div'>
                            <img src={theme==='light'? home_dark:home_light} alt='' className='logo' />
                            <p>Surat 394185</p>
                        </div>
                        <div className='info_div'>
                            <img src={theme==='light'? call_dark:call_light} alt='' className='logo' />
                            <p>9363232256</p>
                        </div>
                        <div className='info_div'>
                            <img src={theme==='light'? email_dark:email_light} alt='' className='logo' />
                            <p>memlane@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='sb_footer_link_div'>
                    <h4>Products</h4>
                    <a href='http'>
                        <p>For Individual</p>
                    </a>
                    <a href='http'>
                        <p>Family Plan</p>
                    </a>
                    <a href='http'>
                        <p>VR Conversion</p>
                    </a>
                </div>
                <div className='sb_footer_link_div'>
                    <h4>Company</h4>
                    <a href='http'>
                        <p>About</p>
                    </a>
                    <a href='http'>
                        <p>Contact</p>
                    </a>
                    <a href='http'>
                        <p>Career</p>
                    </a>
                    <a href='http'>
                        <p>Explore</p>
                    </a>
                </div>
                <div className='sb_footer_link_div'>
                    <h4>Social Media</h4>
                    <div className='socialmedia'>
                        <a href='facebook'>
                        <img src={theme==='light'? facebook_dark:facebook_light }alt='' className='logo' />
                        </a>
                        <a href='insta'>
                        <img src={theme==='light'? Instagram_dark:Instagram_light }alt='' className='logo' />
                        </a>
                        <a href='linkedin'>
                        <img src={theme==='light'? Linkedin_dark:Linkedin_light} alt='' className='logo' />
                        </a>
                        <a href='telegram'>
                        <img src={theme==='light'? Telegram_dark:Telegram_light} alt='' className='logo' />
                        </a>
                        <a href='Youtube'>
                        <img src={theme==='light'?Youtube_dark:Youtube_light} alt='' className='logo' />
                        </a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb_footer_below'>
                <div className='sb_footer_copyrights'>
                    <p>
                        @{new Date().getFullYear()} CodeInn. All rights reserved
                    </p>
                </div>
                <div className='sb_footer_below_links'>
                    <a href='"/terms'><div><p>Terms & Condition</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/Security'><div><p>Security</p></div></a>
                    <a href='/cookies'><div><p>Cookie </p></div></a>
                </div>  
            </div>
        </div>
        </div>
    )
};
export default Footer;