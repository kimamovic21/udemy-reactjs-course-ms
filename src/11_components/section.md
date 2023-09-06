React - The Complete Guide  (11_section)
Practice Project: Building a Food Order App

131. 
-kreiranje foldera - Cart, Layout, Meals, UI

132. 
-dodavanje Header komponente
-u Layout folderu kreiramo Header.jsx komponentu
-u Header.jsx funkciji dodajemo props kao parametar
-u return izjavi dodajemo header i div element
-kreiramo assets folder u kojem ce se nalaziti slike
-u Header.jsx komponentu importujemo sliku
-u Header.jsx komponentu importujemo Header.module.css fajl
-HTML elementima dodajemo modul klase


133. 
-dodavanje Cart Dugme komponente
-kreiramo HeaderCartButton.jsx komponentu i HeaderCartButton.css fajl
-kreiramo CartIcon.jsx komponentu
-u HeaderCartButton.jsx komponentu importujemo HeaderCartButton.css fajl
-u HeaderCartButton.jsx komponentu importujemo CartIcon.jsx komponentu


134. 
-dodavanje Meals komponente
-kreiramo Meals.jsx, MealsSummary.jsx i AvailableMeals.jsx komponente
-u MealsSummary.jsx komponeti dodajemo HTML elemente
-u AvailableMeals.jsx komponenti kreiramo DUMMY_MEALS niz u kojem se nalaze objekti o hrani
-u AvailableMeals funkciji, kreiramo varijablu mealsList
-mealsList varijabli jednaka je vrijednosti map metode
-u return izjavi dodajemo section element kao roditelj element
-unutar section elementa dodajemo ul element
-unutar ul elementa dodajemo mealsList varijablu
-u Meals.jsx komponentu importujemo MealsSummary.jsx i AvailableMeals.jsx komponente
-u App11.js fajlu dodajemo main element
-unutar main elementa dodajemo Meals.jsx komponentu


135. 
-dodavanje individualne Meal Items komponente i njihovo prikazivanje
-kreiramo Card.jsx komponentu i Card.module.css fajl
-u Card.jsx komponentu importujemo Card.module.css fajl
-Card funkciji dodajemo parametar props
-unutar return izjave, unutar div roditelj elementa, dodajemo props.children metodu
-u AvailableMeals.jsx komponentu, importujemo Card.jsx komponentu
-u Meals folderu kreiramo MealItem.jsx komponentu i MealItem.module.css fajl
-u MealItem funkciji dodajemo parametar props
-kreiramo price varijablu
-kreiramo MealItemForm.jsx komponentu i MealItemForm.css fajl
-u AvailableMeals.jsx komponentu importujemo MealItem.jsx komponentu


136. 
-dodavanje MealItemForm komponente
-kreiramo MealItemForm.jsx komponentu
-u MealItemForm.jsx komponentu importujemo MealItemForm.module.css fajl
-u MealItem.jsx komponentu importujemo MealItemForm.jsx komponentu
-u UI folderu kreiramo Input.jsx komponentu i Input.module.css fajl
-u MealItemForm.jsx komponentu importujemo Input.jsx komponentu
-importovanoj Input.jsx komponenti dodajemo props atribute


137. 
-izmjene u Form input id


138. 
-rad na Shopping Cart komponenti
-u Cart folderu kreiramo Cart.jsx komponentu i Cart.module.css fajl
-u Cart.jsx komponenti kreiramo cartItems niz


139. 
-dodavanje Modala
-u UI folderu kreiramo Modal.jsx komponentu i Modal.modules.css fajl
-u index.html kreiramo div element sa id-em overlays
-u Modal.jsx komponenti kreiramo Backdrop funkciju i ModalOverlay funkcije
-u Modal.jsx komponentu importujemo ReactDOM
-kreiramo portalElement varijablu
-u Cart.jsx komponenti, div element zamjenjujemo sa Modal komponentom
-u App11.js fajlu importujemo Cart.jsx komponentu


140. 
-upravljanje sa Cart i Modal stanjem
-u App11.js fajl importujemo useState() hook
-u App11.js fajlu kreiramo funkcije showCartHandler i hideCartHandler
-u App11.js fajlu Header komponenti dodajemo props onShowCart
-u Header.jsx komponenti, HeaderCartButton komponenti dodajemo onClick prop u kojem proslijedujemo showCartHandler funkciju
-u HeaderCartButton.jsx komponenti, unutar button elementa, dodajemo onClick dogadaj
-u App11.js fajlu, unutar React.Fragment, Cart komponenti dodajemo props onClose kojem proslijedujemo hideCartHandler funkciju
-u Cart.jsx komponenti, Close button elementu dodajemo onClick dogadaj
-u Modal.jsx komponenti, unutar Backdrop funkcije, div elementu dodajemo onClick props
-u Cart.jsx komponenti, unutar return izjave, Modal komponenti dodajemo props


141. 
-dodavanje Cart konteksta
-kreiramo store folder
-u store folderu kreiramo cart-context.js fajl
-u cart-context.js fajlu dodajemo React.createContext()
-unutar createContext() dodajemo objekt koji ce nam pomoci za automatsko dovrsavanje rijeci
-rezultat React.createContext() pohranjujemo u CartContext varijablu
-eksportujemo CartContext varijablu
-u store folderu kreiramo CartProvider.jsx komponentu
-u CartProvider.jsx komponentu importujemo CartContext
-u return izjavi, dodajemo CartContext.Provider kao roditelj komponentu
-u CartContextProvider komponente dodajemo {props.children}
-u CartProvider.jsx komponenti kreiramo CartProvider objekt
-u CartProvider.jsx komponenti kreiramo addItemToCartHandler funkciju sa parametrom item
-u CartProvider.jsx komponenti kreiramo removeItemFromCartHandler funkciju sa parametrom id
-u CartProvider.jsx komponenti, CartContext.Provider komponenti dodajemo value={cartContext}
-u App11.js fajlu umjesto Fragment roditelj komponente, dodajemo CartProvider komponentu


142. 
-koristenje React Konteksta
-u HeaderCartButton.jsx komponentu importujemo useContext React hook
-u HeaderCartButton.jsx komponentu importujemo CartContext.jsx komponentu
-u HeaderCartButton.jsx komponenti, unutar HeaderCartButton kreiramo varijablu cartContext
-vrijednost varijable cartContext jednaka je useContext(CartContext);
-kreiramo varijablu numberOfCartItems cija je vrijednost jednaka varijabli cartContext nakon koristenja reduce metode
-u span elementu sa klasom classes.badge, dodajemo vrijednost varijable numberOfCartItems


143. 
-dodavanje Cart reducer
-u CartProvider.jsx komponenti importujemo useReducer React hook
-u CartProvider.jsx komponenti kreiramo cartReducer funkciju
-kreiramo defaultCartState varijablu 
-u CartProvider funkciji dodajemo useReducer React hook
-u addItemToCartHandler funkciji pozivamo dispatchCartAction funkciju
-u cartReducer funkciji dodajemo if uslov
-u cartReducer funkciji, unutar if uslova, kreiramo updatedItems i updatedTotalAmount varijable
-u CartReducer funkciji, unutar return izjave, dodajemo objekt


144. 
-rad sa refs i forward refs
-u MealItemForm.jsx komponenti, unutar MealItemForm funkcije, dodajemo submitHandler funkciju sa parametrom event
-u return izjavi, form elementu dodajemo onSubmit dogadaj kojem proslijedujemo submitHandler funkciju
-kreiramo amountInputRef varijablu
-u Input.jsx komponenti, Input funkciji dodajemo React.forwardRef
-u Input.jsx komponenti, input elementu dodajemo ref atribut
-u submitHandler funkciji kreiramo enteredAmount varijablu
-kreiramo enteredAmountNumber cija je vrijednost jednaka +enteredAmount varijabli
-u MealItemForm.jsx komponenti dodajemo if uslov
-u MealItemForm.jsx komponentu importujemo useState React hook
-u if uslovu dodajemo setAmountIsValid funkciju
-ispod button elementa dodajemo uslov ako kolicina nije dobro unesena da se pojavi greska
-ispod if uslova dodajemo props.onAddToCart
-u MealItem.jsx komponenti kreiramo addToCardHandler funkciju sa amount parametrom
-u MealItem.jsx komponenti, unutar return izjave, MealItemForm komponenti dodajemo onAddToCart props gdje proslijedujemo funkciju addToCartHandler
-u MealItem.jsx komponentu importujemo useContext
-u MealItem funkciji kreiramo cartContext varijablu cija je vrijednost jednaka useContext React hook
-u addToCartHandler funkciju dodajemo cartContext.addItem()


145. 
-prikazivanje Cart items
-u Cart.jsx komponenti importujemo useContext React hook
-u Cart funkciji kreiramo cartContext varijablu
-u Cart funkciji kreiramo totalAmount varijablu
-u Cart funkciji kreiramo hasItems varijablu
-kreiramo CartItem.jsx komponentu i CartItem.module.css fajl
-u Cart.jsx komponentu importujemo CartItem.jsx komponentu
-u cartItems varijabli umjesto li elementa dodajemo CartItem komponentu sa props vrijednostima
-u Cart.jsx komponenti kreiramo cartRemoveHandler i cartItemAddHandler funkcije
-u Cart.jsx komponenti, unutar CartItem komponente dodajemo onRemove props gdje proslijedimo cartItemRemoveHandler funkciju
-u Cart.jsx komponenti, unutar CartItem komponente dodajemo onAdd props gdje proslijedimo cartItemAddHandler funkciju
-u onRemove i onAdd props, cartItemRemoveHandler i cartItemAddHandler funkcijama dodajemo .bind metodu


146. 
-Vise kompleksna Reducer logika
-u CartProvider.jsx komponenti, unutar cartReducuer funkcije, kreiramo existingCartItemIndex varijablu
-kreiramo existingCartItem varijablu
-kreiramo updatedItem i updatedItems varijable
-dodajemo if uslov koji provjeravamo da li vec postoji item u korpi i ako postoji sta treba da se desi


147. 
-brisanje itema
-u Cart.jsx komponenti, unutar cartItemAddHandler funkcije dodajemo cartContext.addItem(item)
-u CartProvider.jsx komponenti dodajemo jos jedan if uslov koji ce da izbrise item iz korpe
-u if uslovu kreiramo existingCartItemIndex, existingItem i updatedTotalAmount varijable
-u Cart.jsx komponenti, unutar cartItemRemoveHandler funkcije dodajemo cartContext.removeItem(id)


148. 
-koristenje useEffect() React hook
-u HeaderCartButton.jsx komponenti, kreiramo btnClasses varijablu
-u HeaderCartButton.jsx komponentu importujemo useEffect() React hook
-u HeaderCartButton funkciji dodajemo useEffect() React hook
-u HeaderCartButton.jsx komponentu importujemo useEffect React hook
-u HeaderCartButton funkciji, dodajemo useEffect() React hook
-u useEffect React hook, unutar callback funkcije, dodajemo setBtnIsHighlighted funkciju sa argumentom true
-u useEffect Reacz hook, unutar callback funkcije, dodajemo if uslov
-dodajemo const { items } = cartContext
-u useEffect(), u dependency nizu, dodajemo [items]
-u useEffect(), unutar callback funkcije, kreiramo timer funkciju cija je vrijednost rezultat setTimeout funkcije
-nakon timer funkcije dodajemo return izjavu i clearTimeout
-
