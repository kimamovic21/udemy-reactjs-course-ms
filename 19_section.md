React - The Complete Guide  (19_section)
Advanced Redux

286. 
-podsjetnik/praksa: dio 1/2
-kopiramo pocetne fajlove
-kreiramo store folder
-u store folderu kreiramo tri fajla
-u ui-slice.js fajlu importujemo createSlice funkciju
-u createSlice funkciji kreiramo konfiguracijski objekt
-vrijednost createSlice funkcije pohranjujemo u uiSlice varijablu
-u ui-slice.js fajlu kreiramo i eksportujemo uiActions varijablu
-u myStore.js fajl importujemo configureStore funkciju
-u myStore.js fajl importujemo uiSlice
-kreiramo funkciju configureStore unutar koje se nalazi konfiguracijski objekt
-vrijednost configureStore funkcije pohranjujemo u store varijablu
-u CartButton.jsx komponenti kreiramo toggleCartHandler funkciju
-button elemenentu dodajemo onClick dogadaj
-onClick dogadaju proslijedujemo vrijednost toggleCartHandler funkciju
-u CartButton.jsx komponenti importujemo useDispatch React hook
-kreiramo dispatch varijablu
-vrijednost dispatch varijable jednaka je useDispatch() funkciji
-u toggleCartHandler funkciju dodajemo dispatch(uiActions.toggle())
-u App19.js fajlu importujemo useSelector React hook
-u App19 funkciju dodajemo useSelector() funkciju
-vrijednost useSelector() funkcije pohranjujemo u showCart varijablu
-u return izjavi dodajemo uslov {showCart && <Cart/>} za pokazivanje korpe
-u cart-slice.js fajlu importujemo createSlice funkciju
-kreiramo createSlice funkciju sa konfiguracijski objektom
-u cart.slice.js fajlu kreiramo funkciju addItemToCart i removeItemFromCart


287. 
-podsjetnik/praksa: dio 2/2
-u cart-slice.js fajlu uredujemo removeItemFromCart funkciju
-vrijednost createSlice funkcije pohranjujemo u cartSlice varijablu
-kreiramo i eksportujemo cartActions varijablu
-eksportujemo cartSlice varijablu 
-u myStore.js fajl importujemo cartSlice 
-u Products.jsx komponenti kreiramo DUMMY_PRUDUCTS niz
-u return izjavi dodajemo DUMMY_PRUDUCTS.map metodu
-u ProductItem.jsx komponenti importujemo useDispatch React hook
-u ProductItem.jsx komponenti kreiramo addToCartHandler funkciju
-kreiramo dispatch funkcija cija je vrijednost jednaka useDispatch() funkciji
-u addToCartHandler funkciju dodajemo dispatch(cartActions.addItemToCart())
-button elementu Add to Cart dodajemo onClick dogadaj
-onClick dogadaju proslijedujemo vrijednost addToCartHandler funkcije
-u CartButton.jsx komponentu importujemo useSelector React hook
-kreiramo varijablu cartQuantity cija je vrijednost jednaka useSelector funkciji
-u span elementu prikazujemo cartQuantity varijablu 
-u Cart.jsx komponentu importujemo useSelector React hook
-kreiramo cartItems varijablu cija je vrijednost jednaka useSelector funkciji
-u Cart.jsx komponenti, unutar ul elementa, dodajemo cartItems.map metodu
-u CartItem.jsx komponentu importujemo useDispatch React hook
-importujemo cartActions
-kreiramo dispatch varijablu cija je vrijednost jednaka useDispatch()funkciji
-kreiramo removeItemHandler i addItemHandler funkcije
-u removeItemHandler funkciju dodajemo dispatch(cartActions.removeItemFromCart(id))
-u addItemHandler funkciju dodajemo dispatch(cartActions.addItemToCart({ ... }))
-button elementima dodajemo onClick dogadaje
-prvom button elementu u onClick dogadaj proslijedujemo removeItemHandler funkciju
-drugom button elementu u onClick dogadaj proslijedujemo addItemHandler funkciju

