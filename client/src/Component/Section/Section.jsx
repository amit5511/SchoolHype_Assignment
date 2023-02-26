import React from 'react'
import './Section.css'
import Automation from '../../Img/Automation.png'
const Section = () => {
    return <>
        <div id="section">
            <div className='top_section'>
                <div className='top_left_section'>
                    <p>OUR FEATURES</p>
                    <p>Know your audience
                        and boost sales</p>
                    <hr />
                </div>
                <div className='top_right_section'>
                    <p>Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.</p>
                </div>
            </div>
            <div className='bottom_section'>
                <div className='bottom_left_section'>
                    <p>Save precious time with automation</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.</p>
                    <a href='#section'>Learn More &rarr;</a>
                </div>
                <div className='bottom_right_section'>
                    <img src={Automation} alt='automation' />
                </div>
            </div>
        </div>
    </>
}

export default Section