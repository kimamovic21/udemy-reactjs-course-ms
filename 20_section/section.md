Section 20: Advanced Redux

426. Module Introduction

427. Redux & Side Effects (and Asynchronous Code)

428. Refresher / Practice: Part 1/2
-preuzmemo pocetne fajlove
-instaliramo Vite ReactJS projekt sa npm i
-instaliramo pakete React Redux i Redux Toolkit
-u terminal ukucamo komandu npm i react-redux @reduxjs/toolkit
-kreiramo folder store
-u folderu store kreiramo fajlove cart-slice.jsm index.js, ui-slice.js
-u ui-slice.js fajl importujemo funkciju createSlice iz Redux Toolkit paketa
-kreiramo funkciju createSlice() sa konfiguracionim objektom
-u konfiguracioni objekt dodajemo property name, initialState, reducers
-u objekt reducers dodajemo funkciju toggle(state)
-kreiramo i eksportujemo varijablu uiActions
-vrijednost funkcije createSlice() pohranjujemo u varijablu const uiSlice
-varijablu uiSlice eksportujemo kao default
-u index.js fajl importujemo funkciju configureStore iz Redux Toolkit paketa
-kreiramo funkciju configureStore() sa konfiguracionim objektom
-importujemo varijablu uiSlice iz cart-slice.js fajla
-u objekt reducer dodajemo ui: uiSlice.reducer
-vrijednost funkcije configureStore() pohranjujemo u varijablu const store
-eksportujemo varijablu store kao default
-u root index.js fajl importujemo komponentu Provider iz paketa React Redux
-importujemo varijablu store iz store/index.js fajla
-u metodu render dodajemo komponentu Provider sa otvorenim i zatvorenim tagom
-komponentu App dodajemo u komponentu Provider
-komponenti Provider dodajemo prop store
-u prop store proslijedujemo vrijednost varijable store
-u komponenti CartButton.jsx kreiramo funkciju toggleCartHanlder()
-importujemo varijablu uiActions iz ui-slice.js fajla
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednost funkcije toggleCartHanlder
-importujemo React Hook useDispatch
-kreiramo funkciju useDispatch()
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch
-u funkciju toggleCartHanlder dodajemo funkciju dispatch
-u funkciju dispatch dodajemo uiActions.toggle()
-u komponentu App.jsx importujemo React Hoook useSelector()
-kreiramo funkciju useSelector() 
-u funkciju useSelector() dodajemo anonimnu funkciju sa parametrom state
-u anonimnu funkciju dodajemo state.ui.cartIsVisible
-vrijednost funkcije useSelector() pohranjujemo u varijablu const showCart
-u return izjavu dodajemo uslov {showCart && <Cart />}
-u cart-slice.js fajl importujemo funkciju createSlice
-kreiramo funkciju createSlice() sa konfiguracionim objektom
-u konfiguracioni objekt dodajemo property name, initialState, reducers
-u initialState objekt dodajemo items, totalQuantity, totalAmount
-u objekt reducers dodajemo addItemToCart(), removeItemFromCart()
-funkciji addItemToCart() dodajemo parametre state, action
-u funkciji addItemToCart() kreiramo varijablu const newItem = action.payload
-kreiramo varijablu const existingItem
-dodajemo uslov if (!existingItem)
-u uslov if dodajemo state.items.push({ ... })
-dodajemo uslov else

429. Refresher / Practice: Part 2/2
-u cart-slice.js fajlu, funkciji removeItemFromCart() dodajemo parametre state, action
-u funkciji removeItemFromCart() kreiramo varijablu const id
-kreiramo varijablu const existingItem
-dodajemo uslov if (existingItem.quantity === 1)
-dodajemo uslov else
-u uslov else dodajemo existingItem.quantity--
-vrijednost funkcije createSlice() pohranjujemo u varijablu const cartSlice
-varijablu cartSlice eksportujemo kao default
-eksportujemo varijablu const cartActions
-u store/index.js fajl importujemo varijablu cartSlice iz cart-slice.js fajla
-u objekt reducer dodajemo cart:cartSlice.reducer
-u komponenti Products.jsx kreiramo varijablu const DUMMY_PRODUCTS
-u izjavi return dodajemo varijablu DUMMY_PRODUCTS
-varijabli DUMMY_PRODUCTS dodajemo metodu .map()
-u metodu .map() dodajemo komponentu ProductItem
-komponenti ProductItem dodajemo props key, id, title, price, description
-u komponenti ProductItem.jsx kreiramo funkciju addToCartHandler()
-importujemo React hook useDispatch
-kreiramo funkciju useDispatch()
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch
-importujemo varijablu cartActions iz cart-slice.js fajla
-u funkciju addToCartHandler() dodajemo funkciju dispatch()
-u funkciju dispatch() dodajemo cartActions.addItemToCart({ ... })
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju addToCartHandler
-u komponentu CartButton.jsx importujemo React Hook useSelector
-kreiramo funkciju useSelector()
-u funkciji useSelector() kreiramo anonimnu funkciju sa parametrom state
-vrijednost funkcije useSelector() pohranjujemo u varijablu const cartQuantity
-u komponentu Cart.jsx importujemo React Hook useSelector()
-kreiramo funkciju useSelector()
-u funkciji useSelector() dodajemo anonimnu funkciju sa parametrom state
-vrijednost funkcije useSelector() pohranjujemo u varijablu const cartItems
-u ul element dodajemo varijablu cartItems
-varijabli cartItems dodajemo metodu .map()
-u metodu .map() dodajemo komponentu CartItem
-komponenti CartItem dodajemo prop item
-u komponentu CartItem.jsx importujemo React Hook useDispatch()
-importujemo varijablu cartActions iz cart-slice.js fajla
-kreiramo funkciju useDispatch() 
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch
-kreiramo funkcije removeItemHandler() i addItemHandler()
-u funkciju removeItemHandler() dodajemo funkciju dispatch()
-u funkciju dispatch() dodajemo cartActions.removeItemFromCart(id)
-u funkciju addItemHandler() dodajemo funkciju dispatch()
-u funkciju dispatch() dodajemo cartActions.addItemToCart({ ... })

430. Using Firebase as a Backend

431. Redux & Async Code

432. Frontend Code vs Backend Code

433. Where To Put Our Logic

434. Using useEffect with Redux
-u komponentu App.jsx importujemo React Hook useSelector
-kreiramo funkciju useSelector()
-u funkciju useSelector() dodajemo anonimnu funkciju sa parametrom state
-vrijednost funkcije useSelector() pohranjujemo u varijablu const cart
-importujemo React Hook useEffect
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju fetch('') i konfiguracioni objekt
-u dependency niz dodajemo varijblu cart

435. A Problem with useEffect()

436. Handling Http States & Feedback with Redux
-kreiramo komponentu Notification.jsx i Notification.module.css fajl
-u komponenti App.jsx, u funkciji useEffect() kreiramo asinhronu funkciju sendCartData()
-u funkciji sendCartData() kreiramo varijablu const responseData
-dodajemo uslov if (!response.ok)
-u uslov if dodajemo objekt Error
-u ui-slice.js fajlu kreiramo funkciju showNotification sa dva parametra state i action
-u funkciju showNotification() dodajemo state.notification
-u komponentu App.jsx importujemo React Hook useDispatch
-kreiramo funkciju useDispatch()
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch
-importujemo varijablu uiActions
-u funkcije sendCartData() dodajemo funkciju dispatch()
-u funkciju dispatch() dodajemo uiActions.showNotification({ ... })
-u funkciju useEffect() dodajemo sendCartData().catch()
-kreiramo varijablu const notification
-u return izjavu dodajemo uslov {notification && <Notification />}
-kreiramo varijablu let isInitial = true
-dodajemo uslov if (isInitial) 

437. Using an Action Creator Thunk
-u cart-slice.js fajlu kreiramo funkciju sendCartData() sa parametrom sendCartData
-u return izjavu dodajemo anonimnu funkciju sa parametrom dispatch
-importujemo varijablu uiActions iz ui-slice.ja fajla
-kreiramo asinhronu funkciju sendRequest()
-dodajemo try - catch blokove koda
-u komponentu App.jsx importujemo funkciju sendCartData iz cart-slice.js fajla
-u funkciju useEffect() dodajemo funkciju dispatch(sendCartData(cart))

438. Getting Started with Fetching Data
-kreiramo cart-actions.js fajl
-u cart-actions.js fajlu kreiramo i eksportujemo funkciju sendCartData()
-kreiramo i eksportujemo funkciju fetchCartData()
-u funkciju fetchCartData() dodajemo anonimnu funkciju sa parametrom dispatch
-u anonimnu funkciji kreiramo funkciju fetchData()
-u funkciji fetchData() kreiramo varijablu const response
-dodajemo uslov if (!response.ok)
-u uslov if dodajemo objekt throw new Error()
-kreiramo varijablu const data
-kreiramo try - catch blokove koda
-u try bloku koda kreiramo funkciju const cartData
-u cart-actions.js fajl importujemo funkciju cartActions
-u try blok koda dodajemo funkciju dispatch(cartActions.replaceCart(cartData))
-u komponenti App.jsx kreiramo jos jednu funkciju useEffect()
-importujemo funkciju fetchCartData
-u funkciju useEffect() dodajemo funkciju dispatch(fetchCartData())

439. Finalizing the Fetching Logic
-u cart-slice.js fajlu, u objekt initialState dodajemo property changed
-u funkcije addItemToCart() i removeItemFromCart() dodajemo state.changed = true
-u komponenti App.jsx, u funkciju useEffect() dodajemo uslov if(cart.changed)

440. Exploring the Redux DevTools

441. Summary
