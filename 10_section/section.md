Section 10: React's Context API & useReducer - Advanced State Management

182. Module Introduction
-preuzmemo starte fajlove i instaliramo Vite ReactJS projekt sa npm install

183. Understanding Prop Drilling & Project Overview

184. Prop Drilling: Component Composition as a Solution
-u komponenti App.jsx, u return izjavu dodajemo otvarajuci i zatvarajuci tag komponenti Shop
-u komponentu Shop dodajemo niz DUMMY_PRODUCTS
-nizu DUMMY_PRODUCTS dodajemo metodu .map()
-u komponentu App.jsx importujemo komponentu Product.jsx
-u metodu .map() dodajemo komponentu Product
-komponenti Product dodajemo prop {...product}, onAddToCart
-u komponenti Shop, funkciji Shop dodajemo parametar destruktuirani prop children
-u return izjavu, u ul element dodajemo prop children

185. Introducing the Context API

186. Creating & Providing The Context
-u src folderu kreiramo folder store
-u folderu store kreiramo fajl shopping-cart-context.js
-u shopping-cart-context.js fajl importujemo funkciju createContext
-kreiramo funkciju createContext()
-vrijednost funkcije createContext() pohranimo u varijablu const CartContext
-eksportujemo varijablu const CartContext
-u funkciji createContext() kreiramo objekt {}
-u objektu kreiramo vrijednost items: []
-u komponentu App.jsx importujemo varijablu CartContext
-u return izjavu dodajemo otvarajuci i zatvarajuci tag CartContext

187. Consuming the Context
-u komponentu Cart.jsx importujemo varijablu CartContext
-importujemo React Hook useContext
-u funkciji Cart kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext(CartContext) pohranimo u varijablu const cartContext
-u return izjavu dodajemo {cartContext.items.length === 0 &&...}
-dodajemo {cartContext.items.length > 0 && ...}
-u ul elementu dodajemo varijabli cartContext metodu .map()
-u komponenti App.jsx, u return izjavi dodajemo CartContext.Provider
-komponenti CartContext.Provider dodajemo prop value
-u prop value proslijedujemo {items: []}
-u komponenti Cart.jsx mozemo uraditi destruktuiranje objekta cartContext - { items }
-u return izjavu umjesto cartContext.items dodajemo onda samo items

188. Linking the Context to State
-u komponenti App.jsx kreiramo varijablu objekt const contextValue
-u objekt contextValue dodajemo vrijednost items: shoppingCart.items
-dodajemo vrijednost addItemToCart: handleAddItemToCart
-u komponentu Product.jsx importujemo komponentu CartContext
-importujemo React Hook useContext
-u funkciji Product kreiramo varijablu const cartContext
-mozemo uraditi destruktuiranje objekta i kreirati varijablu const { addItemToCart }
-u shopping-cart-context.js fajlu u funkciju createContext() dodajemo vrijednost addItemToCart
-u button elementu, u dogadaj onClick proslijedujemo funkciju addItemToCart(id)

189. A Different Way of Consuming Context
-u komponentu Cart.jsx importujemo varijablu CartContext
-u return izjavu dodajemo komponentu CartContext.Consumer sa otvarajucim i zatvarajucim tagom
-u komponentu CartContext.Consumer dodajemo anonimnu funkciju sa parametrom (cartContext) => {...}

190. What Happens When Context Values Change ?

191. Migrating the Entire Demo Project to use the Context API
-u komponentu Header.jsx importujemo varijablu CartContext
-importujemo React Hook useContext
-u funkciji Header kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext(cartContext) pohranimo u varijablu const { items }
-u komponentu CartModal.jsx importujemo varijablu CartContext
-importujemo React Hook useContext
-kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext(CartContext) pohranimo u varijable const { items, updateItemQuantity }
-u komponenti App.jsx, u objekt contextValue dodajemo vrijednost updateItemQuantity: handleUpdateCartItemQuantity
-u fajlu shopping-cart-context.js fajlu, u funkciju createContext({ ... }) dodajemo vrijednost updateItemQuantity
-u komponenti Cart.jsx, u const { items } dodajemo funkciju updateItemQuantity
-u return izjavi button elementima u dogadaje onClick proslijedujemo funkcije updateItemQuantity()

192. Outsourcing Context & State Into a Separate Provider Component
-u shopping-cart-context.js fajlu kreiramo funkciju CartContextProvider()
-logiku iz komponente App.jsx premjestamo u shopping-cart-context.jsx fajl
-importujemo funkcije React Hook createContext i useState
-importujemo niz DUMMY_PRODUCTS
-eksportujemo kao default funkciju CartContextProvider
-funkciji CartContextProvider dodajemo parametar destruktuirani prop children
-u return izjavu dodajemo komponentu CartContext.Provider sa otvarajucim i zatvarajucim tagom
-komponenti CartContext.Provider dodajemo prop value
-u prop value proslijedujemo varijablu contextValue
-u komponentu CartContext.Provider dodajemo prop children
-u komponentu App.jsx importujemo komponentu CartContextProvider
-u return izjavu dodajemo komponente CartContextProvider sa otvarajucim i zatvarajucim tagom

Coding Exercise 27: Creating & Using Context

193. Introducing the useReducer Hook
-u shopping-cart-context.jsx fajl importujemo React Hook useReducer
-u funkciji CartContextProvider() kreiramo funkciju useReducer()
-vrijednost funkcije useReducer() pohranimo u const [shoppingCartState, shoppingCartDispatch]
-kreiramo funkciju shoppingCartReducer() sa dva parametra state, action
-u funkciju useReducer dodajemo dva argumenta
-prvi argument u funkciji useReducer je funkcija shoppingCartReducer, a drugi objekt sa vrijednosti items: []

194. Dispatching Actions & Editing State with useReducer
-u shopping-cart-context.jsx fajlu, u funkciju handleAddItemToCart(id) dodajemo funkciju shoppingCartDispatch()
-u funkciju shoppingCartDispatch() dodajemo objekt { ... }
-u objekt dodajemo vrijednost type, payload
-u funkciju shoppingCartReducer(state, action) dodajemo uslov if 
-u funkciji handleUpdateCartItemQuantity() dodajemo funkciju shoppingCartDispatch()
-u funkciju shoppingCartDispatch() dodajemo objekt { ... }
-u objekt dodajemo vrijednost type, payload
-u funkciju shoppingCartReducer dodajemo jos jedan uslov if

Coding Exercise 28: Using useReducer()
