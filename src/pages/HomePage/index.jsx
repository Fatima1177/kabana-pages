import React from 'react'
import './style.scss'
import edit from '../../assets/icons/edit.svg'
import moon from '../../assets/icons/moon.svg'
import info from '../../assets/icons/info.svg'
import search from '../../assets/icons/search.svg'
import notification from '../../assets/icons/notification.svg'
import img1 from '../../assets/imgs/img1.svg'
import img2 from '../../assets/imgs/img2.svg'
import avatar1 from '../../assets/avatars/avatar1.svg'
import avatar2 from '../../assets/avatars/avatar2.svg'
import avatar4 from '../../assets/avatars/avatar4.svg'


const HomePage = () => {
  return (
    <div className='kabanaPage'>
        <div className="nav-sec">
            <div className="txtNav">
                <span>Pages/Kaban</span>
                <h1>Kaban</h1>
            </div>
            <div className="inpt-sec">
                <div className="inpt-serch">
                    <img src={search} alt="" />
                    <input type="text" name="" id="" placeholder='Serch'/>
                </div>
                <div className="inpt-icons">
                    <img src={notification} alt="" />
                    <img src={moon} alt="" />
                    <img src={info} alt="" />
                </div>
                <img id='user' src={avatar4} alt="" />
            </div>
        </div>
        
        <div className="home">

            <div className="bigBox">
                <div className="txt-sec">
                    <h1>Backlog</h1>
                    <button>+</button>
                </div>

                <div className="cards">
                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Option to "use local/server version" feature</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                            <img id='absolute' src={avatar1} alt="" />

                        </div>
                        <button>UPDATES</button>
                    </div>

                    </div>

                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Add/modify your own CSS-Selectors</h2>
                        <img src={edit} alt="" />
                    </div>
                    <img id='img' src={img1} alt="" />
                    <p>Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                            <img id='absolute' src={avatar1} alt="" />
                        </div>
                        <button id='orange'>PENDING</button>
                    </div>

                    </div>

                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Shortcode for templates to display correctly</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                        </div>
                        <button id='red'>UPDATES</button>
                    </div>

                    </div>  
                </div>

            </div>



            <div className="bigBox">
                <div className="txt-sec">
                    <h1>In progress</h1>
                    <button>+</button>
                </div>

                <div className="cards">
                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>General ideas to improve 'Edit' workflow</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                            <img id='absolute' src={avatar1} alt="" />

                        </div>
                        <button id='orange'>PENDING</button>
                    </div>

                    </div>


                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Shortcode for templates to display correctly</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                        </div>
                        <button>UPDATES</button>
                    </div>

                    </div> 

                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>[UX Design] - Set the default Library tab</h2>
                        <img src={edit} alt="" />
                    </div>
                    <img id='img' src={img2} alt="" />
                    <p>I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                            <img id='absolute' src={avatar1} alt="" />
                        </div>
                        <button id='red'>ERRORS</button>
                    </div>

                    </div>

                     
                </div>

            </div>



            <div className="bigBox">
                <div className="txt-sec">
                    <h1>Done</h1>
                    <button>+</button>
                </div>

                <div className="cards">
                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Copy/Paste elements between pages</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>We can only copy/paste elements (or group of elements) in the same page, which is quite limited.</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />

                        </div>
                        <button id='green'>DONE</button>
                    </div>

                    </div>


                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Remove Extra DIV for each container added</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>I still hope there won't have an extra div for each container we added. It should be something for better styling...</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            
                            <img id='reletive' src={avatar2} alt="" />
                        </div>
                        <button id='green'>DONE</button>
                    </div>

                    </div> 

                    <div className="miniBox">
                    <div className="name-sec">
                        <h2>Add Figma files for the Library design blocks</h2>
                        <img src={edit} alt="" />
                    </div>
                    <p>I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...</p>
                    <div className="users-sec">
                        <div className="imgBox">
                            <img id='reletive' src={avatar2} alt="" />
                            <img id='absolute' src={avatar1} alt="" />
                        </div>
                        <button id='green'>DONE</button>
                    </div>

                    </div>

                     
                </div>

            </div>


        </div>


    </div>
  )
}

export default HomePage