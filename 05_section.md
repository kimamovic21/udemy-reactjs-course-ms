React - The Complete Guide  (05_section)
Rendering Lists & Conditional Content

63. 
-u Expenses.jsx komponenti, dodajemo javascript metodu ispod ExpensesFilter komponente
-u javascript map metodi dodajemo ExpenseItem.jsx komponentu sa props atributima


64. 
-u App05.js fajlu importujemo useState();
-const [expense, setExpense] = useState(DUMMY_EXPENSES);
-u App05.js fajlu mijenjano naziv expenses niza u DUMMY_EXPENSES
-niz DUMMY_EXPENSES izbacujemo iz App05. funkcije
-pravimo izmjene u addExpenseHandler funkciji
-u addExpensesHandler funkciji dodajemo setExpense funkciju sa parametrom prevExpenses
-u return izjavi dodajemo niz kojim azuriramo niz sa novim expense (troskom) i prethodnim troskovima (...prevExpenses)


65. 
-u Expenses.jsx komponenti, ExpenseItem komponenti dodajemo key prop


Assignment 3
-u Expenses.jsx komponenti kreiramo filteredExpenses funkciju
-filteredExpenses funkcija ce da prikaze troskove po godini
-umjesto props.items.map pisemo filteredExpenses.map


66. 
-dodajemo uslov kojim provjeravamo da li je vrijednost troska jednaka 0 i ako jeste, sta treba da se prikaze na ekranu
-dodajemo uslov kojim provjeramo da li je vrijednost troska veca od 0 i ako jete, sta treba da se prikaze na ekranu
-kreiramo varijablu expensesContent koja ima vrijednost <p> HTML elementa
-dodajemo if uslov ispod expensesContent varijable


67. 
-u Expenses folderu kreiramo ExpensesList.jsx komponentu
-u Expenses fodleru kreiramo ExpensesList.css fajl
-u ExpensesList.jsx komponenti importujemo ExpensesList.css fajl
-u ExpensesList.jsx komponenti importujemo ExpenseItem.jsx komponentu
-u Expenses.jsx komponentu importujemo ExpensesList.jsx komponentu
-importovanoj ExpensesList komponenti dodajemo props items cija je vrijednost funkcija filteredExpenses
-u ExpensesList.jsx komponentu dodajemo if uslov ukoliko nema troskova
-ExpenseList komponenti dodajemo ul element kao roditelj element
-unutar ul elementa dodajemo props.items.map metodu


Assignment 4
-u NewExpanse.jsx komponenti dodajemo button element
-u NewExpanse.jsx komponenti dodajemo useState()
-kreiramo novu funkciju startEditingHandler
-u startEditingHandler funkciju dodajemo setEditing funkciju sa argumentom true
-button elementu dodajemo onClick dogadaj
-u NewExpanse.jsx komponenti, dodajemo 2 uslova sa {!isEditing && ...} i {isEditing && ...}
-u ExpenseForm.jsx komponenti dodajemo Cancel button element
-u NewExpense.jsx komponenti dodajemo funkciju stopEditingHandler funkciju
-u stopEditingHandler funkciju dodajemo setIsEditing funkciju sa argumentom false
-u NewExpanse.jsx komponenti, unutar div elementa sa klasom new-expense, drugom uslovu dodajemo props onCancel 
-onCancel props proslijedujemo vrijednost stopEditingHandler funkciju
-u ExpenseForm.jsx komponenti, button elementu sa type button, dodajemo onClick dogadaj sa vrijednoscu props.onCancel
-u NewExpense.jsx komponenti, unutar funkcije saveExpanseDataHandler, na kraju dodajemo setIsEditing funkciju sa argumentom false


68. 
-kreiramo novi folder Chart
-u Chart folderu kreiramo Chart.jsx i ChartBar.jsx komponente
-u Chart folderu kreiramo Chart.css i ChartBar.css fajlove
-importujemo css fajlove u jsx komponente
-u Chart.jsx komponenti importujemo ChartBar.jsx komponente
-u Chart.jsx komponenti, unutar roditelj div elementa, dodajemo props.dataPoints.map metodu
-unutar map funkcije, ChartBar komponenti dodajemo value
-ChartBar komponenti dodajemo maxValue prop
-ChartBar komponenti dodajemo label prop
-ChartBar komponenti dodajemo key


69. 
-u ChartBar.jsx komponenti roditelj div elementu dodajemo klasu
-unutar roditelj div elementa dodajemo vise div elemenata sa klasama
-u ChartBar.jsx komponenti kreiramo barFilHeight varijablu 
-dodajemo if uslov ako je props.max vece od 0


70. 
-kreiraom novu ExpensesChart.jsx komponentu
-u ExpensesChart.jsx komponentu importujemo Chart.jsx komponentu
-u ExpensesChart.jsx komponenti kreiramo chartDataPoints niz koji sadrze objekte
-dodajemo for petlju
-u ExpensesChart.jsx komponenti, Chart komponenti dodajemo dataPoints props kojem proslijedujemo vrijednost chartDataPoints funkcije
-u Chart.jsx komponenti kreiramo dataPointValues i totalMaximum varijable
-u Expenses.jsx komponentu importujemo ExpensesChart.jsx komponentu
-u Expenses.jsx komponenti, ExpenseChart komponenti dodajemo expenses props sa vrijednoscu funkcije filteredExpenses
-
