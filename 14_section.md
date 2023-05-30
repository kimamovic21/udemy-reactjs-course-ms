React - The Complete Guide  (12_section)
Sending Http Requests (e.g. Connecting to a Database)

176. 
-slanje GET zahtjeva
-u App14.js fajlu kreiramo fetchMoviesHandler() funkciju
-u fetchMoviesHandler funkciju dodajemo javascript fetch metodu
-nakon fetch metode dodajemo then metodu
-importujemo useState React hook
-kreiramo movies i setMovies useState hook
-unutar return izjave, MoviesList komponenti sa props movies, proslijedujmo stanje movies iz useState hook
-dodajemo jos jednu then metodu
-kreiramo transformedMovies varijablu
-button elementu dodajemo onClick dogadaj i proslijedujemo fetchMoviesHandler funkciju


177. 
-Koristenje async/await metode
-fetchMoviesHandler funkciji dodajemo async keyword
-kreiramo varijablu response
-fetch metodi dodajemo await keyword


178. 
-Rukovanje ocitavanjem i stanjem podataka
-dodajemo loading, setIsLoading useState hook
-unutar return izjave, unutar section elementa, dodajemo uslove


179. 
-Rukovanje Http Greskom
-dodajemo error, setError useState hook
-dodajemo try - catch blokove koda
-dodajemo uslov if (!response.ok)
-u cacth bloku koda dodajemo setError funkciju
-kreiramo varijablu content


180. 
-importujemo useEffect React hook
-unutar useEffect funkcije, unutar callback funkcije, pozivamo fetchMoviesHandler funkciju
-importujemo useCallback React hook
-vrijednost useCallback funkcije pohranjujemo unutar fetchMoviesHandler funkcije


181. 
-Pripremanje projekta za sljedece korake
-kreiramo AddMovie jsx komponentu i AddMovie.module.css fajl
-u App14.js fajl importujemo AddMovie.jsx komponentu
-u return izjavi, unutar section elementa, dodajemo AddMovie.jsx komponentu
-u App14.js fajlu kreiramo addMovieHandler funkciju
-AddMovie.jsx komponenti dodajemo onAddMovie props kojem proslijedujemo vrijednost addMovieHandler funkcije
-otvorimo Firebase i kreiramo novi projekt
-kad kreiramo projekt otvorimo realtime database
-kreiramo database i odabiremo start in test mode


182. 
-Slanje POST zahtjeva
-u App14.js fajlu, unutar addMovieHandler funkcije, dodajemo fetch metodu
-fetch metoda ima dva argumenta, prvi je link a drugi objekt
-kreiramo loadedMovies varijablu cija je vrijednost prazan niz
-kreiramo for petlju





Firebase configuration

Start in locked mode

{
  "rules": {
    ".read": false,
    ".write": false
  }
}


Start in test mode

{
  "rules": {
    ".read": "now < 1687903200000",  // 2023-6-28
    ".write": "now < 1687903200000",  // 2023-6-28
  }
}
