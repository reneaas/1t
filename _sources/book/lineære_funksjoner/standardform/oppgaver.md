
# Oppgaver: Standardform



:::::::::::::::{exercise-2} Oppgave 1
:::{quiz}

Q: Hvilket funksjonsuttrykk stemmer med grafen vist i figuren nedenfor? ![{width: 60%}](figurer/oppgaver/quiz_2/oppgave_1.svg)
+ $f(x) = x - 2$
- $f(x) = 2x + 1$
- $f(x) = -x + 2$
- $f(x) = -2x + 1$

Q: Hvilket funksjonsuttrykk stemmer med grafen vist i figuren nedenfor? ![{width: 60%}](figurer/oppgaver/quiz_2/oppgave_2.svg)
+ $f(x) = -x + 3$
- $f(x) = x + 3$
- $f(x) = x - 3$
- $f(x) = -x - 3$

Q: Hvilket funksjonsuttrykk stemmer med grafen vist i figuren nedenfor? ![{width: 60%}](figurer/oppgaver/quiz_2/oppgave_3.svg)
+ $f(x) = 2x + 1$
- $f(x) = -2x + 1$
- $f(x) = -x + 2$
- $f(x) = x + 1$

Q: Hvilket funksjonsuttrykk stemmer med grafen vist i figuren nedenfor? ![{width: 60%}](figurer/oppgaver/quiz_2/oppgave_4.svg)
+ $f(x) = 3x - 4$
- $f(x) = x - 4$
- $f(x) = 3x + 4$
- $f(x) = x + 4$

Q: Hvilket funksjonsuttrykk stemmer med grafen vist i figuren nedenfor? ![{width: 60%}](figurer/oppgaver/quiz_2/oppgave_5.svg)
+ $f(x) = -x + 2$
- $f(x) = x + 2$
- $f(x) = -2x + 1$
- $f(x) = 2x - 1$

Q: Hvilket funksjonsuttrykk stemmer med grafen vist i figuren nedenfor? ![{width: 60%}](figurer/oppgaver/quiz_2/oppgave_6.svg)
+ $f(x) = x + 1$
- $f(x) = -x + 1$
- $f(x) = 2x + 1$
- $f(x) = -2x + 1$

:::

:::::::::::::::





---


:::::::::::::::{exercise-2} Oppgave 2
Grafen til en lineær funksjon $f$ er vist i figuren nedenfor.


:::{plot}
function: -2*x + 3, f
width: 60%
:::


:::::::::::::{part} a
Bruk grafen til å bestemme $f(0)$.

:::::{answer-2}
$$
f(0) = 3
$$


::::{solution-2}
Å bestemme $f(0)$ betyr å finne ut hvilken $y$-verdi grafen har når $x = 0$. Vi kan se at grafen går gjennom punktet $(0, 3)$ som betyr at $f(0) = 3$.
::::
:::::
:::::::::::::


:::::::::::::{part} b
Bruk grafen til å finne $f(1)$.



:::::{answer-2}
$$
f(1) = 1
$$


::::{solution-2}
Å bestemme $f(1)$ betyr å finne ut hvilken $y$-verdi grafen har når $x = 1$. Vi kan se at grafen går gjennom punktet $(1, 1)$ som betyr at $f(1) = 1$.
::::
:::::

:::::::::::::


:::::::::::::{part} c
Finn stigningstallet til grafen til $f$.



:::::{answer-2}
$$
a = -2
$$


::::{solution-2}
Når vi øker $x$ med $1$, så synker $f(x)$ med $-2$. Dermed er stigningstallet $a = -2$. 
::::
:::::

:::::::::::::


:::::::::::::{part} d
Bestem konstantleddet til $f(x)$.


:::::{answer-2}
$$
b = 3
$$


::::{solution-2}
Grafen til $f$ skjærer $y$-aksen i $(0, 3)$ som betyr at konstantleddet er $b = 3$.
::::

:::::


:::::::::::::


:::::::::::::{part} e
Bestem $f(x)$.


:::::{answer-2}
$$
f(x) = -2x + 3
$$


::::{solution-2}
Stigningstallet er $a = -2$ og konstantleddet er $b = 3$. Dermed er $f(x)$ gitt ved 

$$
f(x) = ax + b = -2x + 3
$$
::::
:::::


:::::::::::::

:::::::::::::::

---


:::::::::::::::{exercise-2} Oppgave 3
En lineær funksjon $f$ er gitt ved

$$
f(x) = 2x - 1. 
$$


:::::::::::::{part} a
Bestem stigningstallet til grafen til $f$.

:::::{answer-2}
$$
a = 2
$$


::::{solution}
Vi har at

$$
f(x) = ax + b = 2x - 1
$$

Sammenligner vi det generelle uttrykket med det spesielle uttrykket, så ser vi at stigningstallet er

$$
a = 2
$$
::::


:::::
:::::::::::::



:::::::::::::{part} b
Finn koordinatene til skjæringspunktet mellom grafen til $f$ og $y$-aksen.


:::::{answer-2}
$$
(0, -1)
$$

::::{solution}
Vi har at 

$$
f(x) = ax + b = 2x - 1
$$

Konstantleddet er $b = -1$ som betyr at grafen til $f$ skjærer $y$-aksen i $(0, -1)$.
::::


:::::

:::::::::::::


:::::::::::::{part} c
Lag ferdig verditabellen nedenfor.


:::{table}
---
width: 70%
transpose:
---
labels: $x$, $f(x)$
$-2$,
$-1$,
$0$,
$1$,
$2$,
:::



:::::{answer}
:::{table}
---
width: 70%
transpose:
---
labels: $x$, $f(x)$
$-2$, $-5$
$-1$, $-3$
$0$, $-1$
$1$, $1$
$2$, $3$
$3$, $5$
:::
:::::



:::::::::::::



:::::::::::::{part} d
Tegn grafen til $f$ i et koordinatsystem og marker punktene fra oppgave **c)**.


:::::{answer}
:::{plot}
width: 70%
function: 2*x - 1, f
repeat: n=-2..3; point: (n, f(n))
xmin: -4
xmax: 5
:::

:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise-2} Oppgave 4


:::::::::::::{part} a
:::{plot}
function: x - 3, f
align: right
width: 320px
fontsize: 26
:::

Grafen til en lineær funksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer-2}
$$
f(x) = x - 3 
$$


::::{solution-2}
Vi ser at grafen til $f$ skjærer $y$-aksen i $(0, -3)$ som betyr at konstantleddet er $b = -3$. Flytter vi oss én enhet langs $x$-aksen, øker funksjonsverdien med $1$. Dermed er stigningstallet $a = 1$. Altså er

$$
f(x) = ax + b = x - 3
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
:::{plot}
function: -x + 2, g
width: 320px
align: right
fontsize: 26
:::

Grafen til en lineær funksjon $g$ er vist i figuren til høyre.

Finn $g(x)$.


:::::{answer-2}
$$
g(x) = -x + 2
$$



::::{solution-2}
Grafen til $g$ skjærer $y$-aksen i $(0, 2)$ som betyr at konstantleddet er $b = 2$.

Øker vi $x$ med 1, så synker funksjonsverdien med $-1$ som betyr at stigningstallet er $a = -1$. 

Dermed er 

$$
g(x) = ax + b = -x + 2
$$
::::

:::::
:::::::::::::



:::::::::::::{part} c
:::{plot}
function: 2*x - 2, h
width: 320px
align: right
fontsize: 26
:::

Grafen til en lineær funksjon $h$ er vist i figuren til høyre.


Bestem $h(x)$.


:::::{answer-2}
$$
h(x) = 2x - 2
$$



::::{solution-2}
Grafen til $h$ skjærer $y$-aksen i $(0, -2)$. Ergo er konstantleddet $b = -2$.

Øker vi $x$ med $1$, så øker funksjonsverdien med $2$, som betyr at stigningstallet er $a = 2$.

Dermed er

$$
h(x) = ax + b = 2x - 2
$$
::::


:::::

:::::::::::::



:::::::::::::{part} d
:::{plot}
function: -3*x + 1, p
width: 320px
align: right
fontsize: 26
:::

Grafen til en lineær funksjon $p$ er vist i figuren til høyre.


Finn $p(x)$.


:::::{answer-2}
$$
p(x) = -3x + 1
$$



::::{solution-2}
Grafen til $p$ skjærer $y$-aksen i $(0, 1)$. Altså er konstantleddet $b = 1$.

Øker vi $x$ med $1$, synker funksjonsverdien med $-3$. Ergo er stigningstallet $a = -3$. 

Det betyr at

$$
p(x) = ax + b = -3x + 1
$$
::::


:::::
:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5
:::::::::::::{part} a

:::{plot}
width: 320px
align: right
function: 2*x - 4, f
point: (0, f(0))
text: 0, f(0), "$(0, {f(0)})$", top-left
point: (2, f(2))
text: 2, f(2), "$(2, {f(2)})$", top-left
ticks: off
fontsize: 26
:::


Grafen til en lineær funksjon $f$ er vist i figuren til høyre.


Bestem $f(x)$.


:::::{answer}
$$
f(x) = 2x - 4
$$

::::{solution}
Siden grafen til $f$ skjærer $y$-aksen i $(0, -4)$ er $b = -4$.

Stigningstallet til grafen kan vi finne med topunktsformelen. Grafen går gjennom $(0, -4)$ og $(2, 0)$ som gir at 

$$
\Delta y = 0 - (-4) = 4 \qog \Delta x = 2 - 0 = 2
$$

som gir stigningstallet 

$$
a = \dfrac{\Delta y}{\Delta x} = \dfrac{4}{2} = 2
$$

Dermed er 

$$
f(x) = ax + b = 2x - 4
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b

:::{plot}
width: 320px
align: right
function: -3*x + 1, g
point: (0, g(0))
text: 0, g(0), "$(0, {g(0)})$", top-right
point: (3, g(3))
text: 3, g(3), "$(3, {g(3)})$", top-right
ticks: off
fontsize: 26
ymin: -10
:::


Grafen til en lineær funksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.


:::::{answer}
$$
g(x) = -3x + 1
$$

::::{solution}
Grafen til $g$ skjærer $y$-aksen i $(0, 1)$ som betyr at $b = 1$.

Stigningstallet til grafen kan vi finne med topunktsformelen. Grafen til $g$ går gjennom $(0, 1)$ og $(3, -8)$ som betyr at 

$$
\Delta y = -8 - 1 = -9 \qog \Delta x = 3 - 0 = 3
$$

Da blir stigningstallet

$$
a = \dfrac{\Delta y}{\Delta x} = \dfrac{-9}{3} = -3
$$

Dermed er 

$$
g(x) = ax + b = -3x + 1
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c

:::{plot}
width: 320px
align: right
function: 2*x - 3, h
point: (0, h(0))
text: 0, h(0), "$(0, {h(0)})$", top-left
point: (2, h(2))
text: 2, h(2), "$(2, {h(2)})$", top-left
ticks: off
fontsize: 26
:::



Grafen til en lineær funksjon $h$ er vist i figuren til høyre.


Bestem $h(x)$.


:::::{answer}
$$
h(x) = 2x - 3
$$


::::{solution}
Grafen til $h$ skjærer $y$-aksen i $(0, -3)$ som betyr at $b = -3$.

Vi bruker topunktsformelen til å finne stigningstallet. Grafen går gjennom $(0, -3)$ og $(2, 1)$ som betyr at 

$$
\Delta y = 1 - (-3) = 4 \qog \Delta x = 2 - 0 = 2
$$

Dermed er stigningstallet

$$
a = \dfrac{\Delta y}{\Delta x} = \dfrac{4}{2} = 2
$$

Altså er 

$$
h(x) = ax + b = 2x - 3
$$
::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6

:::{plot}
width: 320px
function: 2*x - 1, f
point: (-2, f(-2))
text: -2, f(-2), "$(-2, {f(-2)})$", top-left
point: (3, f(3))
text: 3, f(3), "$(3, {f(3)})$", top-left
align: right
ticks: off
fontsize: 26
:::


Grafen til en lineær funksjon $f$ er vist til høyre.



:::::::::::::{part} a
Bestem stigningstallet til grafen til $f$.


:::::{answer}
$$
a = 2
$$

::::{solution}
Vi bruker topunktsformelen til å finne stigningstallet. Grafen går gjennom punktene $(-2, -5)$ og $(3, 5)$ som betyr at 

$$
\Delta y = 5 - (-5) = 10 \qog \Delta x = 3 - (-2) = 5
$$

Stigningstallet blir dermed

$$
a = \dfrac{\Delta y}{\Delta x} = \dfrac{10}{5} = 2
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
Bestem koordinatene til skjæringspunktet mellom grafen til $f$ og $y$-aksen.


:::::{answer}
$$
(0, -1)
$$

::::{solution}
Vi vet at stigningstallet er $a = 2$. For hver gang vi øker $x$ med $1$, så øker $f(x)$ med $2$. 

For å komme til $y$-aksen, kan vi gå fra $x = -2$ til $x = 0$ som er to enheter langs $x$-aksen. Da må $f(x)$ øke med $2a = 2 \cdot 2 = 4$. Det betyr at 

$$
f(0) = -5 + 4 = -1
$$

Dermed blir koordinatene til skjæringspunktet mellom $f$ og $y$-aksen $(0, -1)$.
::::
:::::


:::::::::::::



:::::::::::::{part} c
Bestem $f(x)$.


:::::{answer}
$$
f(x) = 2x - 1
$$


::::{solution}
* Fra oppgave **a)** har vi at stigningstallet er $a = 2$
* Fra oppgave **b)** har vi at konstantleddet er $b = -1$ siden grafen skjærer $y$-aksen i $(0, -1)$.

Dermed blir funksjonsuttrykket

$$
f(x) = ax + b = 2x - 1
$$
::::
:::::


:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
:::::::::::::{part} a

:::{plot}
width: 320px
function: -x + 3, f
point: (-3, f(-3))
text: -3, f(-3), "$(-3, {f(-3)})$", top-right
point: (2, f(2))
text: 2, f(2), "$(2, {f(2)})$", top-right
align: right
ticks: off
fontsize: 26
ymax: 9
:::


Grafen til en lineær funksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = -x + 3
$$

::::{solution}
Vi bruker topunktsformelen til å finne stigningstallet til grafen til $f$. Grafen går gjennom $(-3, 6)$ og $(2, 1)$ som betyr at

$$
\Delta y = 1 - 6 = -5 \qog \Delta x = 2 - (-3) = 5
$$

Dermed blir stigningstallet

$$
a = \frac{\Delta y}{\Delta x} = \frac{-5}{5} = -1
$$

Funksjonsverdien synker altså med $-1$ hver gang vi øker $x$ med $1$. Det betyr at grafen vil synke med $-3$ enheter fra $x = -3$ til $x = 0$. Derfor får vi at 

$$
f(0) = 6 - 3 = 3
$$

Dermed blir konstantleddet $b = 3$ og 

$$
f(x) = ax + b = -1\cdot x + 3 = -x + 3
$$

::::
:::::

:::::::::::::



:::::::::::::{part} b

:::{plot}
width: 320px
align: right
function: 1/2 * x + 1, g
point: (-2, g(-2))
text: -2, g(-2), "$(-2, {g(-2)})$", top-left
point: (4, g(4))
text: 4, g(4), "$(4, {g(4)})$", top-left
ticks: off
fontsize: 26
:::



Grafen til en lineær funksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.


:::::{answer}
$$
g(x) = \dfrac{1}{2}x + 1
$$

::::{solution}
Vi bruker topunktsformelen med $(-2, 0)$ og $(4, 3)$. Da får vi at 

$$
\Delta y = 3 - 0 = 3 \qog \Delta x = 4 - (-2) = 6
$$

Stigningstallet er da 

$$
a = \dfrac{\Delta y}{\Delta x} = \dfrac{3}{6} = \dfrac{1}{2}
$$

Hvis vi flytter oss $2$ enheter fra $x = -2$ til $x = 0$, må funksjonsverdien øke med $\dfrac{1}{2} \cdot 2 = 1$. Det betyr at 

$$
g(0) = g(-2) + 1 = 0 + 1 = 1
$$

Dermed blir konstantleddet $b = 1$ og 

$$
g(x) = ax + b = \dfrac{1}{2}x + 1
$$

::::
:::::

:::::::::::::



:::::::::::::{part} c

:::{plot}
width: 320px
align: right
function: -x - 1, h
point: (-3, h(-3))
text: -3, h(-3), "$(-3, {h(-3)})$", top-right
point: (1, h(1))
text: 1, h(1), "$(1, {h(1)})$", top-right
ticks: off
fontsize: 26
:::



Grafen til en lineær funksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$.


:::::{answer}
$$
h(x) = -x - 1
$$


::::{solution}
Vi bruker topunktsformelen til å beregne stigningstallet. Grafen går gjennom $(-3, 2)$ og $(1, -2)$ som betyr at 

$$
\Delta y = -2 - 2 = -4 \qog \Delta x = 1 - (-3) = 4
$$

Altså blir stigningstallet 

$$
a = \dfrac{\Delta y}{\Delta x} = \dfrac{-4}{4} = -1
$$

Hvis vi flytter oss én enhet $x = 1$ tilbake til $x = 0$, må funksjonsverdien øke med $1$ siden stigningstallet er $a = -1$. Da vil grafen skjærer $y$-aksen i $(0, -1)$. Ergo er $b = -1$ og funksjonsuttrykket blir

$$
h(x) = ax + b = -x - 1
$$

::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8


:::{Hint} Hvordan finner man nullpunktet til en lineær funksjon?
Tenk deg en lineær funksjon $f$ er gitt ved $f(x) = 2x + 4$. 

Nullpunktet til $f$ vil være den verdien av $x$ der $f(x) = 0$. Vi setter opp likningen:

$$
f(x) = 0 
$$

$$
2x + 4 = 0
$$

så trekker vi fra $-4$ på begge sider og får

$$
2x = -4
$$

Så deler vi med $2$ på hver side av likningen som gir

$$
\dfrac{2x}{2} = \dfrac{-4}{2}
$$

$$
x = -2
$$

Da er nullpunktet til $f$ gitt ved $x = -2$, eller $(-2, 0)$, men vi skriver gjerne bare $x = -2$ siden $y$-koordinaten uansett er lik $0$.
:::


:::::::::::::{part} a
En lineær funksjon $f$ er gitt ved 

$$
f(x) = 2x - 6
$$

Bestem nullpunktet til $f$.


:::::{answer}
$$
x = 3
$$

::::{solution}
Vi løser likningen $f(x) = 0$:

$$
f(x) = 0
$$

$$
2x - 6 = 0
$$

$$
2x = 6
$$

$$
x = \frac{6}{2}
$$

$$
x = 3
$$

Altså er nullpunktet til $f$ gitt ved $x = 3$.
::::
:::::

:::::::::::::


:::::::::::::{part} b
En lineær funksjon $g$ er gitt ved 

$$
g(x) = -x + 4
$$

Bestem nullpunktet til $g$.


:::::{answer}
$$
x = 4
$$


::::{solution}
Vi løser likningen $g(x) = 0$:

$$
g(x) = 0
$$

$$
-x + 4 = 0
$$

$$
-x = -4 
$$

$$
x = 4
$$

Altså er nullpunktet $x = 4$
::::
:::::


:::::::::::::



:::::::::::::{part} c
En lineær funksjon $h$ er gitt ved 

$$
h(x) = 3x - 2
$$

Bestem nullpunktet til $h$.


:::::{answer}
$$
x = \dfrac{2}{3}
$$

::::{solution}
Vi løser likningen $h(x) = 0$:

$$
h(x) = 0
$$

$$
3x - 2 = 0
$$

$$
3x = 2
$$

$$
x = \dfrac{2}{3}
$$

Altså er nullpunktet $x = \dfrac{2}{3}$
::::
:::::


:::::::::::::

:::::::::::::::


---




:::::::::::::::{exercise} Oppgave 9

I figuren nedenfor vises grafene til to lineære funksjoner $f$ og $g$.

Bestem arealet av det fargelagte området i figuren.


:::{plot}
width: 60%
function: -x + 1, f
function: 0.5*x - 2, g
xmin: -1
xmax: 5
ymin: -3
ymax: 2
ticks: off
point: (0, 1)
text: 0, 1, "$(0, 1)$", top-right
point: (0, -2)
text: 0, -2, "$(0, -2)$", bottom-right
point: (2, -1)
text: 2 + 0.2, -1, "$(2, -1)$", center-right
fill-polygon: (2, -1), (1, 0), (4, 0), blue, 0.2
:::


:::{hint} Hint: Arealet av en trekant
Arealet $A$ av en trekant med grunnlinje $g$ og høyde $h$ er gitt ved

$$
A = \dfrac{g \cdot h}{2}
$$
:::


::::{answer}
Arealet er $\dfrac{3}{2}$


::::{solution}
Vi finner først funksjonsuttrykket til $f$. Vi har at $(0, 1)$ ligger på grafen til $f$ som betyr at konstantleddet er $b = 1$. Et annet punkt på grafen er $(2, -1)$. Med topunktsformelen får vi da

$$
\Delta y = -1 - 1 = -2 \qog \Delta x = 2 - 0 = 2
$$

som gir stigningstallet

$$
a = \frac{\Delta y}{\Delta x} = \frac{-2}{2} = -1
$$

Altså er 

$$
f(x) = -x + 1
$$


Vi gjentar prosedyren med funksjonen $g$. Denne skjærer $y$-aksen i $(0, -2)$ som betyr at konstantleddet er $b = -2$. Et annet punkt på grafen er $(4, 0)$. Med topunktsformelen får vi da

$$
\Delta y = 0 - (-2) = 2 \qog \Delta x = 4 - 0 = 4
$$

som gir stigningstallet

$$
a = \frac{\Delta y}{\Delta x} = \frac{2}{4} = \frac{1}{2}
$$

Altså er 

$$
g(x) = \frac{1}{2}x - 2
$$

Høyden i trekanten blir $1$ siden grafene møtes i $(2, -1)$. 

Vi mangler å regne ut grunnlinja, og for å gjøre det må vi se på avstanden mellom nullpunktene til $f$ og $g$. For å gjøre det, må vi først finne nullpunktene til begge funksjoner.

Nullpunktet til $f$ finner vi ved:

$$
f(x) = 0
$$

$$
-x + 1 = 0
$$

$$
x = 1
$$

Nullpunktet til $g$ finner vi ved

$$
g(x) = 0
$$

$$
\frac{1}{2}x - 2 = 0
$$

$$
\dfrac{1}{2}x = 2
$$

$$
x = 4
$$

Altså blir grunnlinja 

$$
g = 4 - 1 = 3
$$

Derfor er arealet av trekanten gitt ved 

$$
A = \dfrac{g \cdot h}{2} = \dfrac{3 \cdot 1}{2} = \dfrac{3}{2}
$$
::::
::::




:::::::::::::::



<!-- 

:::::::::::::::{exercise} Oppgave 10
::::::::{escape-room-2}
:::::::{room}
---
code: 20
---

:::{plot}
width: 350px
align: right
function: 4*x - 2, f, red
fontsize: 26
:::


Grafen til en lineær funksjon $f$ er vist til høyre.

Koden til neste rom er $a^2 + b^2$.
:::::::


:::::::{room}
---
code: 
---
Grafen til en lineær funksjon $f$ er vist til høyre.
:::::::
::::::::
::::::::::::::: -->