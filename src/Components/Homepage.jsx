import Navbar from "./Navbar";
import './../App.css';
import Menu from './Menu'

function Homepage(){
    return(
        <div className="Home-app">
            <Navbar></Navbar>
            <Menu></Menu>
        </div>
    )
}
export default Homepage;