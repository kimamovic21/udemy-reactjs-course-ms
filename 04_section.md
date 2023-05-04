React - The Complete Guide (04_section)

46. 
-unutar src foldera kreiramo 04_components folder
-unutar ExpenseItem.jsx komponente kreiramo HTML button element
-button elementu dodajemo atribut onClick dogadaj
-definisemo, kreiramo funkciju clickHandler prije return izraza
-unutar HTML elementa, onClick dogadaju proslijedujemo clickHandler funkciju
-pogledati razliku kada napisemo clickHandler() i clickHandler u onClick dogadaju


47. 
-u ExpenseItem.jsx komponenti kreiramo title varijablu kojoj dodijeljujemo vrijednost props.title
-varijablu title prosljedujemo unutar h2 HTML elementa unutar {}
-unutar clickHandler funkcije promjenimo vrijednost varijable title


48. 
-state - kljucan koncept u react-u
-na pocetku ExpenseItem.jsx komponente, importujemo react funkciju useState
-react js hooks pocinju sa kljucnom rijecju use
-react js hooks funkcije se koriste unutar funkcije za komponentu
-useState funkcija zahtjeva default state vrijednost
-unutar useState funkcije prosljedujemo props.title kao argument
-useState vraca funkciju koji mozemo pozvati da dodijelimo novu vrijednost toj varijabli
-useState vraca niz gdje je prva vrijednost sama vrijednost, a druga vrijednost je funkcija
-koristimo metodu destrukturiranje niza da pohranimo vrijednost dobivene iz useState funkcije
-pisemo const [title, setTitle] = useState(props.title)
-title je nova vrijednost, a pomocu setTitle funkcije mijenjamo title vrijednost
-konvencija da se funkcija pise sa set
-useState hook uvijek vraca niz sa dva elementa
-prvi element je trenutna state vrijednost, a drugi element je funkcija za azuriranje te varijable
-uklanjamo title varijablu i title varijablu iz clickHandler funkcije
-unutar clickHandler funkcije pozivamo funkciju useState, funkciju za update state i useState funkciji 
proslijedimo argument, u nasem slucaju string


49. 
-dodajemo console.log(`Expense Item evaluated by React`);


51. 
-kreiramo NewExpense.jsx komponentu
-roditelj div elementu dodajemo klasu
-kreiramo NewExpense.css fajl
-importujemo NewExpense.css fajl unutar NewExpense.jsx komponente
-kreiramo ExpenseForm.jsx komponentu
-kreiramo ExpenseForm.jsx fajl
-importujemo ExpenseForm.css fajl unutar ExpenseForm.jsx komponente
-unutar ExpenseForm.jsx komponente dodajemo form HTML element kao roditelj element
-unutar form elementa dodajemo div element koji ce sadrzati vise divova unutar kojih se nalaze label i input elemente
-dodajemo div element unutar kojeg se nalazi button element
-HTML elementima dodajemo klase
-unutar NewExpense.jsx komponente importujemo ExpenseForm.jsx komponentu
-unutar App04.js fajla importujemo NewExpense.jsx komponentu


52. 
-u ExpenseForm.jsx komponenti kreiramo titleChangeHandler funkciju
-input elementima dodajemo onChange dogadaj
-funkciju titleChangeHandler proslijedujemo kao vrijednost onChange dogadaju
-titleChangeHandler funkcije dodajemo parametar event
-unutar titleChangeHandler funkcije dodajemo console.log da vidimo vrijednost input polja


53. 
-importujemo useState React funkciju unutar ExpenseForm.jsx komponente
-useState funkciji prosljedujemo prazan string kao argument
-koristimo destrukturiranje niza javascript metodu u kojoj se nalaze dva elementa enteredTitle i setEnteredTitle
-unutar ExpenseForm.jsx komponente kreiramo amountChangeHandler funkciju
-input elementu sa id-em amount dodajemo onChange dogadaj kojem prosljedujemo amountChangeHandler funkciju
-unutar titleChangeHandler funkcije dodajemo setEnteredTitle funkciju sa parametrom event.target.value
-kreiramo funkciju dateChangeHandler
-input elementu sa id-em date dodajemo onChange dogadaj kojem prosljedujemo dateChangeHandler funkciju
-dodajemo useState za promjenu stanja input amount
-u amountChangeHandler funkciju dodajemo setEnteredAmount funkciju
-dodajemo useState za promjenu stanja input date
-unutar dateChangeHandler funkcije dodajemo setEnteredDate funkciju
-set funkcije pozivamo sa praznim stringom


54. 
-drugi nacin pisanja useState React hook - koristenje samo jedne useState() funkcije 


55. 
-azuriranje novog stanja koje zavisi od prethodnog stanja


56. 
-rukovanje sa podnosenjem forme
-u ExpenseForm.jsx komponenti kreiramo submitHandler funkciju
-form roditelj elementu dodajemo onSubmit dogadaj kojem prosljedujemo submitHandler funkciju
-default stanje ako kliknemo dugme je da ce se stranica osvjeziti, zato sto pretrazivac salje zahtjev 
serveru, development serveru pretrazivaca
-submitHandler funkciji dodajemo parametar event
-submitHandler funkciji dodajemo event.preventDefault()
-unutar submitHandler funkcije kreiramo expenseData objekat koji ce sadrzavat key-value parove
-title, amount i date su proizvoljni nazivi po izboru koji sadrzavaju nove unesene vrijednosti
-ispisujemo expanseData u konzoli


57. 
-dodavanje dvosmjernog vezivanja
-u ExpenseForm.jsx komponenti input elementima dodajemo value atribut
-unutar value atributa proslijedimo vrijednost prvog elementa niza od useState funkcije
-u submitHandler funkciji pozivamo set funkcije sa praznim stringom


58. 
-u NewExpense.jsx komponenti, unutar div roditelj elementa, ExpenseForm komponenti dodajemo props sa proizvoljnim 
imenom (onSaveExpenseData)
-unutar newExpense.jsx komponente kreiramo saveExpenseDataHandler funkciju sa parametrom enteredExpenseData
-unutar saveExpenseDataHandler funkcije kreiramo expenseData objekt
-ExpenseForm komponenti sa props onSaveExpenseData prosljedujemo vrijednost saveExpenseDataHandler funkcije
-u ExpenseForm.jsx komponenti, ExpenseForm funkciji dodajemo props kao parametar funkciji
-unutar submitHandler funkcije dodajemo props.onSaveExpenseData()
-u App.js fajlu, kreiramo funkciju addExpenseHandler sa expense parametrom
-u App.js fajlu, unutar return izjave, NewExpense komponenti dodajemo onAddExpense props kojem prosljedujemo 
vrijednost addExpenseHandler funkcije
-u NewExpense.jsx komponenti, NewExpensi funkciji dodajemo props parametar
-saveExpenseDataHandler funkciji dodajemo props.onAddExpense sa argumentom expenseData


59. 
-podizanje stanja navise


Assignment 2:
-kreiramo ExpenseFilter.jsx komponentu
-kreiramo ExpenseFilder.css fajl
-importujemo ExpenseFilter.css fajl unutar ExpenseFilter.jsx komponente
-unutar roditelj div elementa dodajemo div element
-unutar tog div elementa dodajemo label, select i option elemente
-select elemente dodajemo onChange props
-kreiramo dropdownChangeHandler funkciju sa parametrom event
-unutar onChange props prosljedujemo dropdownChangeHandler funkciju
-ispisujemo event.target.value u konzoli
-u Expenses.jsx komponentu importujemo ExpensesFilter.jsx komponentu
-u Expenses.jsx komponenti kreiramo filterChangeHandler funkciju sa selectedYear parametrom
-ExpensesFilter komponenti dodajemo props onChangeFilter
-unutar onChangeFilter props proslijedimo vrijednost funkcije filterChangeHandler
-unutar ExpensesFilter.jsx komponente, unutar ExpensesFilter funkcije, dodajemo props.onChangeFilter sa 
argumentom event.target.value
-u Expenses.jsx komponenti importujemo useState React hook
-u Expenses funkciji dodajemo useState hook sa dva elementa niza filteredYear i setFilteredYear
-u filterChangeHandler funkciji, pozivamo setFilteredYear funkciju sa argumentom selectedYear
-u Expenses.jsx komponenti, ExpensesFilter komponenti dodajemo props selected cija ja vrijednost filteredYear
-u ExpensesFilter.jsx komponenti, select elementu dodajemo value atribut sa props.selected vrijednoscu


60. 
-Komponente sa stanjem i komponente bez stanja
