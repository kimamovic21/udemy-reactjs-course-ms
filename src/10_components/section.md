React - The Complete Guide  (10_section)
Advanced: Handling Side Effects, Using Reducers & Using the Context API

109. 
-sta su efekti sa strane
-useEffect() React hook
-kopiramo starter fajlove


110. 
-koristenje useEffect()
-u App10.js fajlu, unutar LoginHandler funkcije, dodajemo localStorage objekt
-localStorage objektu dodajemo metodu .setItem sa dva argumenta
-metoda .setItem sadrzi 2 key - value para
-u App10.js fajlu importujemo useEffect() React hook
-u App10. funkciji, pozivamo useEffect() funkciju
-unutar useEffect() funkcije kreiramo callback funkciju
-unutar te callback funkcije kreiramo storedUserLoggedInInformation varijablu
-dodajemo if uslov 
-u funkciji logoutHandler dodajemo localStorage objekt sa metodom .removeItem()


111. 
-u Login.jsx komponenti dodajemo useEffect() hook
-unutar useEffect() dodajemo setFormIsValid i dependency niz


112. 
-sta dodati i sta ne treba dodati kao dependency


113. 
-u Login.jsx komponenti, unutar useEffect() funkcije dodajemo setTimeout funkciju
-setTimeout funkciju pohranjujemo u varijablu identifier
-unutar callback funkcije dodajemo setFormIsValid funkciju
-dodajemo return izjavu 
-unutar return izjave dodajemo clearInterval funkciju sa argumentom identifier


114. 
-dodavanje jos jedne useEffect() funkcije bez parametara i sa return izjavom


115. 
-uvod u useReducer() React hook


116. 
-koristenje useReducer() React hook
-u Login.jsx komponenti importujemo useReducer
-unutar Login funkcije dodajemo useReducer() funkciju
-kreiramo emailReducer funkciju
-unutar emailReducer funkcije dodajemo if uslov
-pravimo izmjene u handler funkcijama


117. 
-kreiramo passwordReducer funkciju
-kreiramo izmjene u funkcijama


119. 
-useState() ili useReducer() za kontrolisanje stanja


120. 
-Uvod u React kontekst


121. 
-Koristenje React konteksta
-kreiramo store folder
-unutar store foldera kreiramo auth-context.js
-unutar auth-context.js fajla kreiramo React.createContext() objekt
-u App.js importujemo AuthContext komponentu
-u App.js fajlu, unutar return izjave, dodajemo AuthContext komponentu
-u Navigation.jsx komponentu importujemo AuthContext komponentu
-u Navigation funkciji dodajemo AuthContext komponentu
-unutar AuthContext.Consumer komponente dodajemo funkciju bez imena sa context parametrom 


122. 
-u Navigation.jsx komponentu importujemo useContext React hook
-

123. 
-omogucavanje kontekst dinamicnim


124. 
-u auth-context.js fajlu, kreiramo AuthContextProvider funkciju
-u App.js fajl importujemo useContext()
-u Home.jsx komponentu importujemo useContext


125. 
-ogranicenost React konteksta


126. 
-pravila React hook


127. 
-u UI folderu, kreiramo Input.jsx komponentu


128. 
-u Input.jsx komponentu importujemo useImperativeHandle React hook
-dodajemo forward refs
