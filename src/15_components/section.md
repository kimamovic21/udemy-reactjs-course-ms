React - The Complete Guide  (15_section)
Building a Custom React Hook Function

187. 
-kreiranje custom hooks
-u 15_components folderu kreiramo hooks folder
-u hooks folderu kreiramo use-counter.jsx komponentu
-u use-counter.jsx komponenti kreiramo funkciju


188. 
-koristenje custom hooks
-u useForwardCounter.jsx komponentu importujemo useCounter
-u ForwardCounter.jsx komponenti dodajemo const counter = useCounter();


189. 
-konfiguracija custom hooks
-u use-counter.jsx komponenti, useCounter funkciji dodajemo forwards = true parametar
-unutar useEffect funkcije dodajemo if else uslov
-u BackwardCounter.jsx komponenti dodajemo  const counter = useCounter(false)


190. 
-naprijed prema realnijim primjerima
-kopiranje starter fajlova


191. 
-kreiranje custom hooks
-u hooks folderu kreiramo use-http.jsx komponentu
-u use-http.jsx komponenti kreiramo sendRequest funkciju
-unutar sendRequest funkcije kreiramo response varijablu


192. 
-koristenje custom hooks
-u App15.js fajlu importujemo useHttp
-u App15.js fajlu, unutar App15 funkcije, pozivamo useHttp funkciju
-u App15.js fajlu kreiramo transformTasks funkciju


193. 
-izmjene u custom hooks
-importujemo useCallback React hook


194. 
-koristenje custom hooks u vise komponenti

