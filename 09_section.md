React - The Complete Guide  (09_section)
Diving Deeper: Working with Fragments, Portals & "Refs"


100. 
-ogranicenost jsx komponente
-dodavanje komponenti unutar niza, gdje su komponente razdvojene zarezom


101. 
-kreiranje Wrapper komponente
-u 09_commponents folderu kreiramo Helpers folder
-u Helpers folderu kreiramo Wrapper.jsx komponentu
-Wrapper.jsx komponenti dodajemo props parametar
-u Wrapper.jsx komponenti, u return izjavi, pisemo props.children
-u AddUser.jsx komponenti importujemo Wrapper.jsx komponentu
-u AddUser.jsx komponenti umjesto div elementa pisemo dodajemo Wrapper komponentu kao roditelj element


102. 
-u App09.js fajlu umjesto div roditelj elementa dodajemo prazan fragment <> ... </>
-Mozemo umjesto praznog fragmenta dodati React.Fragment


103. 
-razumijevanje react portala


104. 
-rad sa portalima
-u ErrorModal.jsx komponenti umjesto div roditelj elementa pisemo React.Fragment
-u public folderu, unutar index.html fajla, dodajemo dva div elementa
-prvi div element ima id backdrop-root a drugi div element ima id overlay-roo
-u ErrorModal.jsx komponenti kreiramo Backdrop komponentu
-u Backdrop komponenti, u return izjavi, dodajemo div element
-u ErrorModal.jsx komponenti kreiramo ModalOverlay komponentu
-u ModalOverlay komponenti, u return izjavi, dodajemo Card komponentu
-u ErrorModal.jsx komponenti importujemo ReactDOM
-u ErrorModal.jsx komponenti, unutar return izjave, u React.Fragment komponenti, dodajemo metodu {}
-unutar te metode pisemo ReactDOM.createPortal()
-ReactDOM.createPortal() metoda uzima dva argumenta
-prvi argument je komponenta, a drugi javascript metoda document.getElementById
-dodajemo jos jednu ReactDOM.createPorta() metodu


105. 
-rad sa ref
-ref nam omogucava pristup drugim DOM elementima i rad sa njima
-u AddUser.jsx komponenti importujemo useRef
-u AddUser funkciji pozivamo useRef() React hook
-kreiramo varijablu nameInputRef cija je vrijednost jednaka rezultatu useRef() funkcije
-input elementu za ime dodajemo ref prop sa vrijednoscu nameInputRef
-input elementu za ime dodajemo ref prop sa vrijednoscu ageInputRef
-u AddUser.jsx komponenti, unutar addUserHandler funkcije, kreiramo enteredUsernameRef i enteredUserAgeRef varijable
-u if islove dodajemo varijable sa ref
-brisemo useState() za ime i godine
-u props.onAddUser dodajemo dva argumenta sa ref
-nakon props.onAddUser dodajemo varijablama nameInputRef i ageInputRef prazan string



106. 
-kontrolisane i nekontrolisane komponente 

