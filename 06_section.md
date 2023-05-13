React - The Complete Guide  (06_section)
Styling React Components

73. 
-kopiramo pocetne fajlove


74. 
-u CourseInput.jsx komponenti, unutar formSubmitHandler funkcije, dodajemo if uslov
-unutar ovog if uslova se nalazi logika da ne mozemo dodati prazan goal(cilj)
-dodajemo react hook - const [isValid, setIsValid] = useState(true);
-React funkciju setIsValid pozivamo sa argumentom false unutar if uslova
-label HTML elementu dodajemo inline style unutar kojeg se nalazi uslov !isValid
-input HTML elementu dodajemo inline style unutar kojeg se isto nalazi uslov !isValid
-unutar goalInputChangeHandler funkcije dodajemo if uslov
-unutar ovog if uslova se nalazi logika da input polje prestaje biti crveno ako je vrijednost unesenog stringa veca od 0


75. 
-otvaramo i uredujemo klase u CourseInput.css fajlu
-ispod form elemeneta, div elementu, dodajemo klasu cija je vrijednost dinamicna shodno stanju input polja


76. 
-koristenje stiliziranih komponenti
-instaliramo paket u terminalu - npm install styled-components
-https://stackoverflow.com/questions/70810819/npm-err-cannot-read-properties-of-null-reading-edgesout
-ako ne radi prethodno instalacija pokusati sa npm install styled-components@latest
-u Button.jsx komponenti imporujemo styled-components paket
-u Button.jsx komponenti kreiramo Button varijablu
-kod iz Button.css fajla kopiramo unutar Button varijable i pravimo manje izmjene


77. 
-u CourseInput.jsx komponenti kreiramo varijablu FormCotrol
-u CourseInput.jsx komponenti, unutar return izjave, zamjenimo div element sa FormControl elementom
-FormControl elementu dodajemo klasu


78. 
-u Button.jsx komponenti, unutar Button varijable, dodajemo @media upit


79. 
-koristenje CSS modula
-u UI folderu kreiramo Button.module.css fajl
-u Button.jsx komponenti importujemo styles na pocetku fajla


80. 
-u CourseGoal folderu kreiramo CourseInput.module.css fajl
-u CourseGoal.jsx komponentu importujemo Course.module.css fajl
-u return izjavi, umjesto FormControl elementa dodajemo div sa klasom

