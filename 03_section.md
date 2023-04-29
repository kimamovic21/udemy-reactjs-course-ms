React - The Complete Guide  (03_section)

32. 
-unutar src foldera kreiramo components folder
-unutar components foldera kreiramo ExpenseItem.jsx fajl
-unutar ExpenseItem.jsx komponente kreiramo ExpenseItem.jsx funkciju
-eksportujemo funkciju
-ExpenseItem.jsx komponentu importujemo unutar App.js fajla


33. 
-HTML elementi unutar funkcije moraju biti unutar jednog roditelj div elementa
-dodajemo vise HTML elemenata unutar jednog roditelj div elementa


34. 
-kreiramo ExpenseItem.css fajl
-importujemo css fajl unutar ExpenseItem.jsx komponente
-umjesto class koristimo className 
-unutar ExpenseItem.jsx komponente dodajemo klase HTML elementima
-otvaramo i uredujemo HTML elemente u ExpenseItem.css fajlu


35. 
-u ExpenseItem.jsx komponenti kreiramo varijablu expenseDate koja sadrzi vrijednost objekta Date
-kreiramo varijablu expenseTitle koja sadrzi tekst 
-kreiramo varijablu expenseAmount koja sadrzi broj
-unutar HTML elemenata u kojima zelimo da prikazemo neke podatke dodajemo { } i unutar njih dodajemo javascript izraz ili vrijednost varijable
-expenseDate varijabli dodajemo metodu .toISOString()


36. 
-unutar App.js dodajemo jos jednu komponentu ExpenseItem.jsx
-prosljedivanje podataka unutar kompomenti pomocu props kocepta
-unutar App.js fajla kreiramo expenses niz koji sadrzi cetiri objekta 
-unutar App.js fajla, komponentama ExpenseItem dodajemo title, amount i date atribut
-ti atributi sadrze informacije iz objekata koji se nalaze u expenses nizu
-unutar ExpenseItem.jsx komponente, ExpenseItem funkciji dodajemo props parametar
-unutar HTML elemenata sada pisemo props.date, props.title i props.amount za prikaz podataka


37. 
-u ExpenseItem.jsx komponenti dodajemo tri div elementa u kojima ce se nalaziti podaci za mjesec, godinu i dan
-kreiramo month, day i year varijable 


38. 
-kreiramo novu ExpenseDate.jsx komponentu
-ExpenseDate funkciji dodajemo props parametar
-u ExpenseItem.jsx komponentu importujemo ExpenseDate.jsx komponentu
-u ExpenseItem.jsx komponenti, ExpenseDate.jsx komponenti dodajemo atribut date atribut
-kreiramo ExpenseDate.css fajl
-otvaramo i uredujemo ExpenseDate.css fajl
-u ExpenseDate.jsx komponentu importujemo ExpenseDate.css fajl
-HTML elementima unutar ExpenseDate dodajemo className


Assignment 1:
-u components folderu kreiramo novu Expenses.jsx komponentu
-unutar Expenses.jsx komponente importujemo ExpenseItem.jsx komponentu
-Expenses funkciji dodajemo props parametar
-unutar return izjave dodajemo ExpenseItem komponente sa atributima title, amount i date
-u ExpenseItem komponentama pravimo izmjene i dodajemo props.expenses
-unutar App.js komponente importujemo Expenses.jsx komponentu
-unutar Expenses.jsx fajla umjesto expenses dodajemo items
-unutar roditelj div elementa dodajemo Expenses.jsx komponentu sa atributom items 
-importujemo Expenses.css fajl u Expenses.jsx komponentu
-unutar funkcije Expenses, roditelj div elementu dodajemo klasu expenses


39. 
-unutar components foldera kreiramo Card.jsx komponentu
-kreiramo i uredujemo Card.css fajl
-Card.css fajl importujemo u Card.jsx komponentu
-importujemo Card.jsx komponentu unutar ExpenseItem.jsx komponente
-div roditelj element zamjenjujemo sa Card komponentom
-Card funkciji dodajemo props parametar
-roditelj div elementu dodajemo klasu card
-unutar div roditelj elementa dodajemo {props.children}
-vrijednost props.children ce uvijek biti sadrzaj izmedu otvarajuceg i zatvarajuceg sadrzaja nase custom komponente
-unutar Card.jsx komponente kreiramo classes varijablu
-unutar ExpenseItem.jsx komponente div roditelj element zamjenjujemo ca Card komponentom
-unutar Expenses.jsx komponente div roditelj element zamjenjujemo sa Card komponentom


40. 
-React.createElement() sa tri argumenta


41. 
-struktura foldera
-kreiranje UI i Expenses foldera


42. 
-pisanje funkcija sa strelicama umjesto standardnih funkcija sa function kljucnom rijec
