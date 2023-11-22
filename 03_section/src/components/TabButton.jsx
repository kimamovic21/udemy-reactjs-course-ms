const TabButton = ({ children, onSelect, isSelected }) => {
  console.log('TABBUTTON COMPONENT EXECUTING');

  // const handleClick = () => {
  //   console.log('Hello world');
  // };

  return (
    <li>
       <button 
          className={isSelected ? 'active' : ''}
          onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;