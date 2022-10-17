// importing css
import './main-comp.css'

// defining the Footer custom element with es6
const Footer = () => {
    return (
        <div className="component footer box-shadow">
            <p className="main-header">Contacts</p>
            <hr color='#333333'/>
            <ul className="list">
                <li>ihart@ivanhart.dev</li>
                <li><a href='https://www.fiverr.com/ivan_hart?public_mode=true' rel="noreferrer" target="_blank">Fiverr</a></li>
                <li><a href="https://www.linkedin.com/in/ivan-hart-983007249/" rel="noreferrer" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/ivan-hart/" rel="noreferrer" target="_blank">Github</a></li>
            </ul>
        </div>
    )
}

// exporting the Footer element to Main.jsx
export default Footer