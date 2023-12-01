import InvestmentCalculator from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header id='header'>
        <img src={InvestmentCalculator} alt="Investment Calculator Logo" />
        <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;