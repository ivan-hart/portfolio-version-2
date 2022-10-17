// importing css
import './main-comp.css'

// defining the Experience custom element with es6
const Experience = () => {
    return (
        <div className="component box-shadow">
            <p className="main-header">My Experience</p>
            <hr color='#333333'/>
            <ul className="list">
                <li>Enrolled in a AP Computer Science</li>
                <li>Collaberated on school's vocaional center <a href="gavc.org" target="_blank">website</a></li>
                <li>Constantly prototyping and developing new ideas!</li>
                <li>Worked for 2 months at Hy-Vee</li>
            </ul>
        </div>
    )
}

// exporting the Experience element to Main.jsx
export default Experience