const Tabs = ({ children, buttons, ButtonsContainer = 'menu' }) => { 
    console.log(children);
    console.log(buttons);
    console.log(ButtonsContainer); 

  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;