# Standardform

:::{goals} Læringsmål
* Kunne representere en lineær funksjon på standardform og beskrive sammenhengen med den grafiske representasjonen
* Kunne bestemme $f(x)$ fra graf
* Kunne gå fra funksjonsuttrykk til graf
:::

En lineær funksjon er en funksjon som beskriver en skrå linje i et koordinatsystem. Det som kjennetegner funksjonen spesielt er at når vi øker $x$ med $1$, så øker funksjonsverdien med et fast tall $a$ som kalles for **stigningstallet til funksjonen**.


Ulike måter å skrive funksjonsuttrykk på kaller for **algebraiske representasjoner**. Ulike slike representasjoner lar oss lese av noen egenskaper ved grafen til funksjonen rett fra funksjonsuttrykket. Den første vi skal se på kalles for **standardform**. 


:::::::::::::::{summary} Standardform

En lineær funksjon $f$ kan skrives på **standardform** som

:::{figure} ./figurer/teori/algebraisk/standardform.svg
---
width: 60%
class: no-click, adaptive-figure
:::

* Verdien til $a$ er hvor mye $f(x)$ endrer seg når vi øker $x$ med $1$. Vi kaller $a$ for **stigningstallet** til grafen til $f$.
* Verdien til $b$ er $y$-koordinaten til skjæringspunktet mellom grafen til $f$ og $y$-aksen. Vi kaller ofte $b$ for **konstantleddet** til $f(x)$.


:::{plot}
function: 2*x - 1, f 
width: 60%
hline: f(1), 1, 2
vline: 2, f(1), f(2)
ticks: off
xmin: -2
xmax: 5
ymin: -2
ymax: 5
text: 1.5, 1, "$1$", bottom-center
text: 2, 0.5 * (f(1) + f(2)), "$a$", center-right
point: (0, -1)
annotate: (1, -1), (0, -1), "Skjæring med $y$-aksen $(0, b)$", -0.4
:::


:::::::::::::::

---


:::::::::::::::{example} Eksempel 1
:::{plot}
function: -2*x + 1, f
width: 350px
align: right
fontsize: 26
:::

Grafen til en lineær funksjon $f$ er vist i figuren til høyre. 

Bestem $f(x)$.



::::{solution}
---
open:
---
En lineær funksjon på standardform er gitt ved

$$
f(x) = ax + b
$$

Vi ser at grafen til $f$ skjærer $y$-aksen i $(0, 1)$ som betyr at $b = 1$. 

Hvis vi velger ut et punkt på grafen til $f$, for eksempel $(0, 1)$, så ser vi at når vi øker $x$ med $1$, så synker funksjonsverdien $f(x)$ med $-2$ (husk $y = f(x)$) som betyr at stigningstallet er $a = -2$. 

Da er $f(x)$ gitt ved

$$
f(x) = ax + b = -2 \cdot x + 1 = -2x + 1
$$
::::


:::::::::::::::


---


:::::::::::::::{exercise} Underveisoppgave 1
:::{plot}
function: 3*x - 4, f
width: 350px
align: right
fontsize: 26

:::
Grafen til en lineær funksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$. 



:::::{answer}
$$
f(x) = 3x - 4
$$

::::{solution}
En lineær funksjon på standardform er gitt ved 

$$
f(x) = ax + b
$$

Vi ser at grafen til $f$ skjærer $y$-aksen i $(0, -4)$ som betyr at $b = -4$. 

Hvis vi velger et punkt på grafen til $f$, for eksempel $(0, -4)$ og øker $x$ med $1$, så er vi at $f(x)$ øker med $3$ siden grafen går gjennom punktet $(1, -1)$. Det betyr at stigningstallet er $a = 3$. 

Da er 

$$
f(x) = 3 \cdot x - 4 = 3x - 4
$$
::::

:::::



:::::::::::::::



---


La oss se på et eksempel der vi går fra funksjonsuttrykk til graf. 

:::::::::::::::{example-2} Eksempel 2
En lineær funksjon $f$ er gitt ved 

$$
f(x) = -x + 2
$$

Lag en skisse av grafen til $f$. 


::::{solution-2}
---
open:
---
Fra funksjonsuttrykket

$$
f(x) = -x + 2 = (-1) \cdot x + 2
$$

ser vi at stigningstallet til $f$ er $a = -1$ og konstantleddet er $b = 2$. Det betyr at grafen til $f$ skjærer $y$-aksen i $(0, 2)$. Da kan vi lage følgende skisse av grafen til $f$:


:::{plot}
function: -x + 2, f
width: 60%
ticks: off
point: (0, 2)
text: 0, 2, "$(0, 2)$", center-right
hline: 4, -2, -1
vline: -1, 4, 3
xmin: -4
xmax: 4
ymax: 5
ymin: -3
text: -1.5, 4, "$1$", top-center
text: -1, 3.5, "$-1$", center-right


:::::::::::::::


---


:::::::::::::::{exercise-2} Underveisoppgave 2
En lineær funksjon $f$ er gitt ved

$$
f(x) = -2x + 3
$$

Lag en skisse av grafen til $f$ der du markerer skjæringspunktet med $y$-aksen og stigningstallet.


:::::{answer-2}
:::{plot}
function: -2*x + 3, f
width: 50%
ticks: off
point: (0, 3)
text: 0, 3, "$(0, 3)$", center-left
ymin: -2
hline: 2, 0.5, 1.5
vline: 1.5, 0, 2
text: 1, 2, "$1$", top-center
text: 1.5, 1, "$-2$", center-right
fontsize: 26
:::

::::{solution-2}
Vi har at 

$$
f(x) = (-2) \cdot x + 3
$$

som betyr at stigningstallet er $a = -2$ og konstantleddet er $b = 3$. Grafen til $f$ skjærer derfor $y$-aksen i $(0, 3)$. 
::::

:::::



:::::::::::::::


Vi vet allerede nå at vi kan bestemme stigningstallet $a$ til en lineær funksjon ved å sjekke hvor mye $f(x)$ endrer seg når vi øker $x$ med $1$. Men vi vet ikke alltid funksjonsverdier til $f$ i $x$-verdier som ligger en avstand $1$ fra hverandre. Da trenger vi en annen metode for å bestemme stigningstallet. 


:::::::::::::::{summary-2} Topunktsformelen

:::{plot}
function: x + 1
width: 100%
align: right
ticks: off
xmin: -1
xmax: 4.5
ymin: -1
point: (1, 2)
point: (4, 5)
text: 1, 2, "$(x_1, y_1)$", top-left
text: 4, 5, "$(x_2, y_2)$", top-left
hline: 2, 1, 4
vline: 4, 2, 5
text: 2.5, 2, "$\Delta x$", bottom-center
text: 4, 3.5, "$\Delta y$", center-right
fontsize: 28
:::


Dersom en lineær funksjon $f$ går gjennom to punkter $(x_1, y_1)$ og $(x_2, y_2)$, så er stigningstallet $a$ gitt ved

$$
a = \dfrac{y_2 - y_1}{x_2 - x_1}
$$

Vi definerer gjerne $\Delta y = y_2 - y_1$ og $\Delta x = x_2 - x_1$. Da kan vi skrive stigningstallet som

$$
a = \frac{\Delta y}{\Delta x}
$$


der vi leser $\Delta$ som "endring i". Altså er $\Delta y$ endringen i $y$-verdien og $\Delta x$ endringen i $x$-verdien.



:::::::::::::::

---


:::::::::::::::{example-2} Eksempel 3
:::{plot}
nocache:
function: 3*x - 5, f
width: 350px
align: right
fontsize: 26
ticks: off
xmin: -1
xmax: 5
ymin: -7
ymax: 5
point: (0, -5)
point: (2, 1)
text: 0, -5, "$(0, -5)$", center-right
text: 2, 1, "$(2, 1)$", top-left
:::

Grafen til en lineær funksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


::::{solution-2}
---
open:
---
En lineær funksjon på standardform er gitt ved

$$
f(x) = ax + b.
$$

Vi ser at grafen til $f$ skjærer $y$-aksen i $(0, -5)$ som betyr at $b = -5$. 

Vi ser at grafen til $f$ også går gjennom punktet $(2, 1)$. Vi kan bruke topunktsformelen til å bestemme stigningstallet:

$$
a = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{1 - (-5)}{2 - 0} = \dfrac{6}{2} = 3
$$

Dermed er 

$$
f(x) = 3x - 5
$$
::::

:::::::::::::::

---


:::::::::::::::{exercise-2} Underveisoppgave 3
:::{plot}
function: -2*x + 4, f
width: 350px
align: right
fontsize: 26
ticks: off
point: (0, 4)
text: 0, 4, "$(0, 4)$", center-left
point: (3, -2)
text: 3, -2, "$(3, -2)$", center-right
ymin: -5
ymax: 5
xmax: 5
xmin: -1
:::

Grafen til en lineær funksjon $f$ er vist i figuren til høyre. 

Bestem $f(x)$.




:::::{answer-2}
$$
f(x) = -2x + 4
$$

::::{solution-2}
Vi ser at grafen til $f$ skjærer $y$-aksen i $(0, 4)$ som betyr at $b = 4$. 

Vi ser grafen også går gjennom punktet $(3, -2)$. Vi bestemmer stigningstallet med topunktsformelen:

$$
a = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{-2 - 4}{3 - 0} = \dfrac{-6}{3} = -2
$$

Dermed er 

$$
f(x) = -2x + 4
$$
::::

:::::


:::::::::::::::


---


## Nullpunkter 
Punktet der en lineær funksjon skjærer $x$-aksen, kaller vi for **nullpunktet** til funksjonen. Dette vil være et punkt der funksjonsverdien er lik null, altså den $x$-verdien som gir at $f(x) = 0$.

En lineær funksjon kan bare ha ett nullpunkt siden den kun kan skjære $x$-aksen én gang. 



:::::::::::::::{summary} Nullpunktet til en lineær funksjon
:::{plot}
width: 320px
align: right
function: 2*x - 4, f
point: (2, 0)
ticks: off
fontsize: 26
xmin: -1
annotate: (3, -3), (2, 0), "Nullpunkt $(x, 0)$ \n \n der $f(x) = 0$", -0.3
:::


Nullpunktet til en lineær funksjon $f$ er den $x$-verdien der $f(x) = 0$.

:::::::::::::::



---



:::::::::::::::{example} Eksempel 4
En lineær funksjon $f$ er gitt ved 

$$
f(x) = 2x - 4
$$

Bestem nullpunktet til $f$.


::::{solution}
---
open:
---
Nullpunktet til $f$ vil være løsningen av likningen $f(x) = 0$. Vi har at

$$
f(x) = 0
$$

$$
2x - 4 = 0
$$

Vi plusser på $4$ på hver side av likningen som gir

$$
2x = 4
$$

Så deler vi med $2$ på begge sider av likningen som gir

$$
x = 2
$$

Dermed er nullpunktet til $f$ gitt ved 

$$
x = 2
$$

> Vi kan også oppgi nullpunktet som $(2, 0)$, men siden $y = 0$ i et nullpunkt så oppgir vi nesten alltid *kun* $x$-verdien til punktet. 
::::

:::::::::::::::











