Section 29: Replacing Redux with React Hooks

01. Module Introduction

02. React 18 & This Section
-manje izmjene u main.jsx fajlu

03. Starting Project & Why You Would Replace Redux

04. Alternative: Using the Context API
-kreiramo folder context
-u folderu context kreiramo products-context.js fajl
-u products-context.js fajl importujemo funkciju createContext 
-kreiramo funkciju createContext()
-u funkciju createContext() dodajemo objekt products
-vrijednost funkcije createContext() pohranjujemo u varijablu const ProductsContext
-eksportujemo anonimnu funkciju sa parametrom props
-u return izjavu dodajemo komponentu ProductsContext.Provider sa otvorenim i zatvorenim tagom
-importujemo React Hook useState
-u komponentu ProductsContext.Provider dodajemo props.children
-kreiramo state varijablu const [products, setProducts] = useState({ ... })
-komponenti ProductsContext.Provider dodajemo prop value
-u prop value proslijedujemo objekt
-u main.jsx fajl importujemo komponentu ProductsProvider.jsx
-u return izjavu dodajemo komponentu ProductsProvider sa otvorenim i zatvorenim tagom
-u komponentu Products.jsx importujemo objekt ProductsContext
-importujemo React Hook useContext
-kreiramo funkciju useContext()
-vrijednost funkcije useContext() pohranjujemo u varijablu const productList

05. Toggling Favorites with the Context API
-u products-context.js fajlu kreiramo funkciju toggleFavorites()
-u funkciju toggleFavorites() dodajemo funkciju setProductsList()
-u funkciju createContext({ ... }) dodajemo property products, toggleFav
-u prop value dodajemo property toggleFav
-u komponentu ProductItem.jsx importujemo objekt ProductsContext
-importujemo React Hook useContext
-kreiramo funkciju useContext()
-vrijednost funkcije useContext pohranjujemo u varijablu const toggleFav
-u funkciju toggleFavHandler dodajemo funkciju toggleFav(props.id)
-u komponentu Favorites.jsx importujemo objekt ProductsContext
-importujemo React Hook useContext
-kreiramo funkciju useContext()
-vrijednost funkcije useContext() pohranjujemo u varijablu const favoriteProducts

06. Context API Summary (and why NOT to use it instead of Redux)

07. Getting Started with a Custom Hook as a Store
-kreiramo folder hooks-store
-u folderu hooks-store kreiramo store.js fajl
-u store.js fajlu kreiramo varijablu let globalState = {}
-kreiramo varijablu let listeners = []
-kreiramo varijablu let actions = {}
-kreiramo funkciju useStore()
-importujemo React Hook useState
-u funkciju useStore dodajemo funkciju useState(globalState)
-vrijednost funkcije useState() pohranjujemo u varijablu const setState
-importujemo React Hook useEffect
-u funkciju useStore() dodajemo funkciju useEffect()
-u funkciju useEffect() dodajemo listeners.push(setState)
-u return izjavu dodajemo cleanup anonimnu funkciju 

08. Finishing the Store Hook
-u store.js fajlu, kreiramo funkciju dispatch() sa parametrom actionIdentifier
-u funkciju dispatch() kreiramo varijablu const newState
-dodajemo varijablu globalState
-dodajemo petlju for of petlju
-u petlju for of dodajemo funkciju listener(globalState)
-u return izjavu dodajemo [globalState, dispatch]
-eksportujemo funkciju useStore()
-kreiramo i eksportujemo funkciju initStore() sa parametrima userActions i initialState
-u funkciju initStore() dodajemo uslov if (initialState)
-u uslov if dodajemo varijablu globalState
-u funkciju initStore() dodajemo varijablu actions

09. Creating a Concrete Store
-u folderu hooks-store kreiramo products-store.js fajl
-u products-store.js fajl importujemo funkciju initStore iz store.js fajla
-kreiramo funkciju configureStore()
-u funkciji configureStore() kreiramo objekt varijablu const actions
-dodajemo funkciju initStore()

10. Using the Custom Store
-u main.jsx fajl importujemo funkciju configureStore
-u komponentu Products.jsx importujemo React Hook useStore
-u funkciji Products() kreiramo varijablu const [state, dispatch] = useStore();
-u return izjavi dodajemo state.products.map()
-u komponentu ProductItem.jsx importujemo funkciju useStore
-kreiramo funkciju useStore()
-vrijednost funkcije useStore() pohranjujemo u varijablu const dispatch
-u funkciju toggleFavHandler() dodajemo funkciju dispatch()

11. Custom Hook Store Summary

12. Optimizing the Custom Hook Store
-u komponentu ProductItem.jsx dodajemo funkciju memo()
-u store.js fajl, u funkciju useEffect() dodajemo uslov if (shouldListen)

13. Bonus: Managing Multiple State Slices with the Custom Store Hook

14. Wrap Up

15. Module Resources
