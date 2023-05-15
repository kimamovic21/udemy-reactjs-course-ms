React - The Complete Guide  (08_section)
Time to Practice: A Complete Practice Project


89.  
-kreiranje User komponente
-u folderu 08_components kreiramo UI i Users foldere
-u Users folderu kreiramo AddUser.jsx komponentu
-unutar returj izjave dodajemo form element kao roditelj element
-unutar form elementa dodajemo label i input elemente
-na kraju unutar forme dodajemo button element
-kreiramo addUserHandler funkciju
-form elementu dodajemo onSubmit dogadaj i proslijedujemo addUserHandler funkciju
-u App08.js fajlu importujemo AddUser.jsx komponentu


90.  
-kreiranje Card komponente za visekratnu upotrebu
-u UI folderu kreiramo Card.jsx komponentu
-u Card.jsx komponenti pisemo props.children
-u UI folderu kreiramo Card.module.css fajl
-U Card.jsx komponentu importujemo Card.module.css fajl
-Card.jsx komponentu importujemo u AddUser.jsx komponentu
-Card komponentu dodajemo kao roditelj element
-u Users folderu folderu kreiramo AddUser.module.css fajl
-u AddUser.jsx komponentu importujemo AddUser.module.css fajl
-u AddUser.jsx komponenti, Card komponenti koja sluzi kao roditelj element u return izjavi dodajemo klasu
-u AddUser.jsx komponenti div roditelj elementu dodajemo dinamicnu klasu sa {`${...}`}


91.  
-kreiranje dugmeta za visekratnu upotrebu
-u UI folderu kreiramo Button.jsx komponentu
-u UI folderu kreiramo Button.module.css fajl
-u Button.jsx komponentu importujemo Button.module.css fajl
-u Button.jsx komponenti dodajemo button element kao roditelj element
-button elementu dodajemo klasu
-button elementu dodajemo type atribut
-u type atributu dodajemo props.type u zavisnosti na kojem mjestu u aplikaciji koristimo dugme
-button elementu dodajemo onClick dogadaj
-u onClick dogadaju dodajemo props.onClick u zavisnosti na kojem mjest u aplikaciji kliknemo dugme
-izmedu otvarajuceg i zatvarajuceg button element taga dodajemo {props.children}
-u AddUser.jsx komponenti importujemo Button.jsx komponentu
-umjesto button sada pisemo Button


92. 
-upravljanje sa unosom podataka korisnika
-u AddUser.jsx komponenti importujemo useState()
-dodajemo const [enteredUsername, setEnteredUsername] = useState('');
-kreiramo funkciju usernameChangeHandler
-input elementu sa id-em username dodajemo onChange dogadaj
-unutar onChange dogadaja proslijedujemo usernameChangeHandler funkciju
-dodajemo jos jedan useState za godine
-input elementu sa id-em age dodajemo onChange dogadaj 
-unutar onChange dogadaja proslijedujemo ageChangeHandler funkciju


93. 
-dodavanje validacije i resetovanje logike
-u AddUser.jsx komponenti input elementima u form elementu dodajemo value atribut
-u addUserHandler funkciji dodajemo if uslov 
-unutar if uslova enteredUsername i enteredAge state varijablama dodajemo metodu trim() da uklonimo visak praznog prostora sa desne i lijeve
-unutar if uslova provjeravamo da li state varijable enteredUsername ili enteredAge imaju duzinu karaktera 0
-dodajemo if uslov da provjerimo da li su unesene godine manje od 1


94. 
-dodavanje liste korisnika
-u Users folderu kreiramo UsersList.jsx komponentu
-u UsersList.jsx komponenti dodajemo ul element kao roditelj element
-u Users folderu kreiramo UsersList.module.css fajl
-u UsersList.jsx komponentu importujemo UsersList.module.css fajl
-u App08.js fajlu importujemo UsersList komponentu
-u App08.js fajlu UsersList komponenti dodajemo users props sa praznim nizom


95. 
-upravljanje listama korisnika pomocu stanja
-u App08.js fajl importujemo useState 
-dodajemo const [usersList, setUsersList] = useState([])
-kreiramo addUserHandler funkciju sa dva parametra
-unutar addUserHandler funkcije pozivamo setUsersList funkciju
-u App08.js fajlu u return izjavi AddUser komponenti dodajemo props onAddUser
-unutar onAddUser proslijedujemo addUserHandler funkciju
-u AddUser.jsx komponenti, unutar addUserHandler funkcije, dodajemo props.onAddUser()
-props.onAddUser() funkcije proslijedujemo dva argumenta enteredUsername i enteredAge
-u funkciji addUserHandler, objektu dodajemo kljuc id cija je vrijednost random broj
-u UsersList.jsx komponenti, li elementu dodajemo atribut key


96. 
-dodavanje error modal komponente
-u UI folderu kreiramo ErrorModal.jsx komponentu
-u ErrorModal.jsx komponentu importujemo Card komponentu
-Card komponenta ce da sluzi kao roditelj element
-unutar Card komponente kreiramo header, div, p i footer HTML elemente
-u ErrorModal.jsx komponentu importujemo Button komponentu
-u UI folderu kreiramo ErrorModal.css fajl
-u ErrorModal.jsx komponentu importujemo ErrorModal.module.css fajl
-u AddUser.jsx komponenti importujemo ErrorModal.jsx komponentu
-u ErrorModal.jsx komponenti dodajemo div sa klasom backdrop


97. 
-upravljanje sa error stanjem
-u AddUser.jsx komponenti dodajemo useState() za upravljanje error porukom
-dodajemo 
-u addUserHandler funkciji, u if uslovu, dodajemo setError funkciju sa objektom kao argumentom
-u drugom if uslovu isto dodajemo setError funkciju sa objektom kao argumentom
-u return izjavi ispod div elementa dodajemo {error && <ErrorModal ... />}
-kreiramo funkciju errorHandler 
-u funkciji errorHandler pozivamo setError funkciju sa argumentom null
-null se tretira kao falsy vrijednost
-u ErrorModal.jsx komponenti, div elementu sa klasom backdrop dodajemo onClick dogadaj
-unutar onClick dogadaja proslijedujemo props.onConfirm
-Button komponenti dodajemo onClick dogadaj u koji proslijedujemo props.onConfirm
-u AddUser.jsx komponenti unutar {error & <ErrorModal ... />, ErrorModal komponenti dodajemo props onConfirm}
-unutar onConfirm props, proslijedujemo errorHandler funkciju
