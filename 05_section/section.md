Section 5: React Essentials - Practice Project (React Investment Calculator)

96. Module Introduction & A Challende For You !

97. Adding a Header Component
-kreiramo komponentu Header.jsx
-u komponentu App.jsx importujemo komponentu Header.jsx

98. Getting Started with a User Input Component
-kreiramo komponentu UserInput.jsx
-u komponentu UserInput.jsx kreiramo HTML elemente label i  input 

99. Handling Events & Using Two-Way-Binding
-u komponenti UserInput.jsx kreiramo const [userInput, setUserInput]
-kreiramo funkciju handleChange() sa dva parametra inputIdentifier i newValue
-u funkciju handleChange() dodajemo funkciju setUserInput()
-input elementima dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo anonimnu funkciju
-input elementima dodajemo prop value
-u komponentu App.jsx importujemo komponentu UserInput.jsx

100. Lifting State Up
-kreiramo investment.js fajl
-u investment.js fajlu kreiramo i eksportujemo funkciju calculateInvestmentResults()
-kreiramo komponentu Results.jsx
-premjestamo state varijablu const [userInput, setUserInput] = useState({...}) iz komponentu UserInput.jsx u komponentu App.jsx
-premjestamo funkciju handleChangeInput() u komponentu App.jsx
-u return izjavi komponenti UserInput dodajemo prop userInput i onChangeInput
-u prop onChangeInput proslijedujemo funkciju handleChangeInput
-u komponenti UserInput.jsx, funkciji UserInput dodajemo parametre destruktuirane prop userInput, onChangeInput
-u komponenti Result.jsx, funkciji Results dodajemo parametar destruktuirani prop input
-u komponentu App.jsx importujemo komponentu Results.jsx
-u return izjavi komponenti Results dodajemo prop input
-u prop input proslijedujemo varijablu userInput

101. Computing Values & Properly Handling Number Values
-u komponentu Results.jsx importujemo funkciju calculateInvestmentResults()
-u funkciju Results dodajemo funkciju calculateInvestmentResults(input)
-vrijednost funkcije calculateInvestmentResults() pohranjujemo u varijalbu const resultsData

102. Outputting Results in a List & Deriving More Values
-u komponenti Results.jsx kreiramo table element
-u return izjavi, u tbody elementu dodajemo varijabli resultsData metodu .map()
-u investment.js fajlu kreiramo i eksportujemo funkciju formatter()
-u metodi .map() kreiramo varijablu const totalInterest
-u funkciji Results kreiramo varijablu const initialInvestment 
-u metodi .map() kreiramo varijablu const totalAmountInvested

103. Outputting Content Conditionally
-u komponenti App.jsx kreiramo varijablu const inputIsValid 
-u return izjavu dodajemo uslov {inputIsValid && ...}
-dodajemo uslov {!inputIsValid && ...}