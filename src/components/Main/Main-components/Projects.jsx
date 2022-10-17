// importing css
import './main-comp.css'

// defining the Projects custom element with es6
const Projects = () => {
    return (
        <div className="component box-shadow">
            <p className="main-header">My Projects</p>
            <hr color='#333333'/>
            <ul className="list">
                <li>Protfolio source code <a href='https://github.com/ivan-hart/ivan-hart.github.io'>here</a></li>
                <li>Personal logo <a href='https://github.com/ivan-hart/logo'>here</a></li>
                <li>More coming soon</li>
            </ul>
        </div>
    )
}

// exporting the Projects element to Main.jsx
export default Projects