import './Header.css';
import reactCoreConceptsImage from '../../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const generateRandomInteger = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
    console.log('HEADER COMPONENT EXECUTING');
    const description = reactDescriptions[generateRandomInteger(2)];

    return (
        <header>
            <img src={reactCoreConceptsImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
};

export default Header;