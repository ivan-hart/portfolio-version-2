// importing css
import './main-comp.css'

// defining the Goals custom element with es6
const Goals = () => {
    return (
        <div className="component box-shadow">
            <p className="main-header">My Goals</p>
            <hr color='#333333'/>
            <ul className="list">
                <li>Touch the lives of others and inspire them to broaden their horizons </li>
                <li>Improve my Web Dev skills by building websites for people</li>
                <li>Better myself by meeting new people</li>
            </ul>
        </div>
    )
}

// exporting the Goals element to Main.jsx
export default Goals