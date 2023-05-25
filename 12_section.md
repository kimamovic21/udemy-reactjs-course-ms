React - The Complete Guide  (12_section)
A look Behind The Scenes Of React & Optimization Techniques

151. 
-Kako React radi


152. 
-Azuriranje komponenata u akciji
-u App12.js fajlu importujemo useState()
-dodajemo showParagraph, setShowParagraph useState()
-u UI folderu kreiramo Button.jsx komponentu i Button.module.css fajl
-u App12.js fajl importujemo Button.jsx komponentu
-u App12.js fajlu kreiramo toggleParagraphHandler funkciju
-unutar toggleParagraphHandler pozivamo setShowParagraph React hook funkciju
-u App12.js fajlu, Button komponenti dodajemo onClick props
-unutar onClick props proslijedujemo toggleParagraphHandler funkciju


153. 
-Bliži pogled na ponovnu evaluaciju dječije komponente
-kreiramo Demo folder i unutar njega kreiramo DemoOutput.jsx komponentu
-u App12.js fajl importujemo DemoOutput.jsx komponentu
-DemoOutput.jsx komponenti dodajemo show props
-u Demo folderu kreiramo MyParagraph.jsx komponentu
-u DemoOutput.jsx komponentu importujemo MyParagraph.jsx komponentu


154. 
-Spriječavanje nepotrebnih ponovnih evaluacija pomoću React.memo()
-u DemoOutput.jsx komponenti, dodajemo export default React.memo(DemoOutput)
-u Button.jsx komponenti, dodajemo export default React.memo(Button)


155. 
-Spriječavanje ponovnog kreiranja funkcije pomoću useCallback()
-u App12.js fajl importujemo useCallback React hook
-funkciji toggleParagraphHandler dodajemo useCallback() funkciju


156. 
-useCallback() i njegove zavisnoti
-u App12.js fajl dodajemo jos jednu Button komponentu - Allow Toggling
-dodajemo allowToggle, setAllowToggle useState()
-kreiramo allowToggleHandler funkciju
-u allowToggleHandler funkciji dodajemo setAllowToggle
-Button komponenti dodajemo props onClick i proslijedujemo vrijednost allowToggle funkcije
-DemoOutput komponenti koja ima show prop proslijedujemo showParagraph


157. 
-Prvi sazetak


158. 
-Bliži pogled na stanje i komponente


159. 
-Razumijevanje stanje rasporeda i batching


160. 
-Optimizacija sa useMemo() React hook

