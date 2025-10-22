import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

const description = ['Fundamental', 'Crucial', 'Essential'];
function genRandInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


// using dynamic content
const Header = () => {
    const dscp = description[genRandInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            {/* instead of src="src/assets/react-core-concepts.png" */}
            <h1>React Essentials</h1>
            <p>
            {dscp} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    );
};

export default Header;