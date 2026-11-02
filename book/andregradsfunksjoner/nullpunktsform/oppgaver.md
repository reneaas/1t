# Oppgaver: Nullpunktsform



:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
En andregradsfunksjon $f$ er gitt ved

$$
f(x) = 3(x + 1)(x - 2)
$$

Bestem nullpunktene til $f$.


:::::{answer}
$$
x = -1 \or x = 2
$$
:::::

:::::::::::::



:::::::::::::{part} b
En andregradsfunksjon $g$ er gitt ved

$$
g(x) = -2(x - 1)^2
$$

Bestem nullpunktene til $g$.


:::::{answer}
$$
x = 1
$$
:::::
:::::::::::::



:::::::::::::{part} c
En andregradsfunksjon $h$ er gitt ved 

$$
h(x) = 4x(x - 2)
$$

Bestem nullpunktene til $h$.


:::::{answer}
$$
x = 0 \or x = 2
$$
:::::

:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a

:::{plot}
width: 350px
align: right
function: (x + 2) * (x - 1), f
fontsize: 24
:::


Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$ på nullpunktsform.



:::::{answer}
$$
f(x) = (x + 2)(x - 1)
$$

::::{solution}
Nullpunktene til $f$ er $x = -2$ og $x = 1$. Dermed er 

$$
f(x) = a(x + 2)(x - 1)
$$

For å bestemme $a$, velger vi et annet punkt på grafen enn nullpunktene. Grafen skjærer $y$-aksen i $(0, -2)$ som gir

$$
f(0) = -2
$$

$$
a(0 + 2)\cdot(0 - 1) = -2
$$

$$
-2a = -2 \liff a = 1
$$

Dermed er 

$$
f(x) = (x + 2)(x - 1)
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b

:::{plot}
width: 350px
align: right
function: -2 * (x + 1) * (x - 4), g
ymax: 16
ymin: -4
ystep: 2
fontsize: 24
:::


Grafen til en andregradsfunksjon $g$ er vist i figuren til høyre.



Bestem $g(x)$ på nullpunktsform.


:::::{answer}
$$
g(x) = -2(x + 1)(x - 4)
$$

::::{solution}
Nullpunktene til $g$ er $x = -1$ og $x = 4$. Dermed er 

$$
g(x) = a(x + 1)(x - 4)
$$

Grafen til $g$ skjærer $y$-aksen i $(0, 8)$ som gir at 

$$
g(0) = 8
$$

$$
a(0 + 1)(0 - 4) = 8
$$

$$
-4a = 8 \liff a = -2
$$

Dermed er 

$$
g(x) = -2(x + 1)(x - 4)
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c

:::{plot}
width: 350px
align: right
function: 1/3 * (x + 5) * (x - 3), h
fontsize: 24
xmin: -7
:::


Grafen til en andregradsfunksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$ på nullpunktsform.


:::::{answer}
$$
h(x) = \dfrac{1}{3}(x + 5)(x - 3)
$$

::::{solution}
Nullpunktene til $h$ er $x = -5$ og $x = 3$. Da har vi at 

$$
h(x) = a(x + 5)(x - 3)
$$

Grafen til $h$ går gjennom punktet $(1, -4)$ som gir

$$
h(1) = -4
$$

$$
a(1 + 5)(1 - 3) = -4
$$

$$
a \cdot 6 \cdot (-2) = -4
$$

$$
-12a = -4 \liff a = \dfrac{1}{3}
$$

Dermed er 

$$
h(x) = \dfrac{1}{3}(x + 5)(x - 3)
$$

::::
:::::
:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3

:::::::::::::{part} a
En andregradsfunksjon $f$ er gitt ved

$$
f(x) = (x + 1)(x - 2)
$$

Bestem hvilken graf nedenfor som viser grafen til $f$.

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 28
---
:::{plot}
width: 100%
function: (x + 2) * (x - 1)
ticks: off
text: 5, 5, "A", center-center, bbox
:::

:::{plot}
width: 100%
function: (x - 2) * (x + 1)
ticks: off
text: 5, 5, "B", center-center, bbox
:::

:::{plot}
width: 100%
function: -(x - 2) * (x + 1)
ticks: off
text: 5, 5, "C", center-center, bbox
:::

:::{plot}
width: 100%
function: -(x + 2) * (x - 1)
ticks: off
text: 5, 5, "D", center-center, bbox
:::

::::


:::::{answer}
Graf B.

::::{solution}
Vi ser fra $f(x)$ at nullpunktene er gitt ved 

$$
x = -1 \qog x = 2.
$$

Det betyr at det negative nullpunktet må ligge nærmere $y$-aksen enn det positive, noe som bare passer med graf B og C.

Vi ser også at $a = 1 > 0$ som betyr at grafen til $f$ er konveks {poly-icon}`smile`. Da passer bare graf B. Dermed er graf B grafen til $f$. 

::::

:::::


:::::::::::::


:::::::::::::{part} b
En andregradsfunksjon $g$ er gitt ved

$$
g(x) = -2(x - 1)(x - 2)
$$

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 28
---
:::{plot}
width: 100%
function: -2 * (x - 1) * (x - 2)
ticks: off
text: 5, 5, "A", center-center, bbox
:::

:::{plot}
width: 100%
function: 2 * (x - 1) * (x - 2)
ticks: off
text: 5, 5, "B", center-center, bbox
:::

:::{plot}
width: 100%
function: -2 * (x + 1) * (x - 2)
ticks: off
text: 5, 5, "C", center-center, bbox
:::

:::{plot}
width: 100%
function: -2 * (x + 1) * (x + 2)
ticks: off
text: 5, 5, "D", center-center, bbox
:::

::::



:::::{answer}
Graf A. 

::::{solution}
Vi ser fra $g(x)$ at nullpunktene er gitt ved

$$
x = 1 \qog x = 2.
$$

Det betyr at begge nullpunktene har positiv $x$-verdi som passer med graf A og B. 

Vi ser at $a < 0$ som betyr at grafen til $g$ er konkav {poly-icon}`frown`. Dermed passer bare graf A. Dermed er graf A grafen til $g$.

::::

:::::



:::::::::::::


:::::::::::::{part} c
En andregradsfunksjon $h$ er gitt ved 

$$
h(x) = (x + 2)^2
$$

Bestem hvilken graf nedenfor som viser grafen til $h$. 


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 28
---
:::{plot}
width: 100%
function: (x - 2)**2
ticks: off
text: 5, 5, "A", center-center, bbox
:::

:::{plot}
width: 100%
function: -(x - 2)**2
ticks: off
text: 5, 5, "B", center-center, bbox
:::

:::{plot}
width: 100%
function: (x + 2)**2
ticks: off
text: 5, 5, "C", center-center, bbox
:::

:::{plot}
width: 100%
function: -(x + 2)**2
ticks: off
text: 5, 5, "D", center-center, bbox
:::

::::


:::::{answer}
Graf C.

::::{solution}
Vi ser fra $h(x)$ at nullpunktet er gitt ved

$$
x = -2. 
$$

Det betyr at grafen må treffe $x$-aksen ved en negativ $x$-verdi som passer med graf C og D. 

Vi ser at $a = 1 > 0$ som betyr at grafen er konveks {poly-icon}`smile`. Dermed passer bare graf C. Dermed er graf C grafen til $h$.
::::

:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 4


:::{hint} Hint
Bruk konjugatsetningen til å skrive om funksjonsuttrykkene til nullpunktsform og les av nullpunktene. For eksempel har vi at hvis $f(x) = (x + 5)^2 - 16$, så er:

$$
(x + 5)^2 - 16 = (x + 5)^2 - 4^2 = (x + 5 + 4)(x + 5 - 4) = (x + 9)(x + 1)
$$

som vil gi nullpunktene $x = -9$ og $x = -1$ for $f$.
:::

:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = (x - 1)^2 - 9
$$

Bestem nullpunktene til $f$.


:::::{answer}

$$
x = -2 \qog x = 4
$$

::::{solution}
Vi har at 

$$
\begin{align*}
f(x) &= (x - 1)^2 - 9 \\
\\
&= (x - 1)^2 - 3^2 \\
\\
&= (x - 1 + 3)(x - 1 - 3) \\
\\
&= (x + 2)(x - 4)
\end{align*}
$$

som betyr at nullpunktene til $f$ er 

$$
x = -2 \qog x = 4
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = -(x + 2)^2 + 4
$$

Bestem nullpunktene til $g$.


:::::{answer}
$$
x = 0 \qog x = -4
$$

::::{solution}
Vi har at 

$$
\begin{align*}
g(x) &= -(x + 2)^2 + 4 \\
\\
&= -\left((x + 2)^2 - 4\right) \\
\\
&= -\left((x + 2)^2 - 2^2\right) \\
\\
&= -\left((x + 2 + 2)(x + 2 - 2)\right) \\
\\
&= -(x + 4)x \\
\\
&= -x(x + 4)
\end{align*}
$$

som betyr at nullpunktene til $g$ er 

$$
x = 0 \qog x = -4
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Funksjonen $h$ er gitt ved 

$$
h(x) = (x + 3)^2 - 1
$$

Bestem koordinatene til skjæringspunktene mellom grafen til $h$ og $x$-aksen.


:::::{answer}
$$
(-4, 0) \qog (-2, 0)
$$

::::{solution}
Vi har at 

$$
\begin{align*}
h(x) &= (x + 3)^2 - 1^2 \\
\\
&= (x + 3 + 1)(x + 3 - 1) \\
\\
&= (x + 4)(x + 2)
\end{align*}
$$

som betyr at nullpunktene til $h$ er 

$$
x = -4 \qog x = -2
$$

Derfor er skjæringspunktene mellom grafen til $h$ og $x$-aksen 

$$
(-4, 0) \qog (-2, 0)
$$
::::
:::::

:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5

:::{hint} Hint
Her er strategien som følger:
1. Skriv om $f(x)$ til ekstremalpunktsform først.
2. Bruk konjugatsetningen til å skrive om fra ekstremalpunktsform til nullpunktsform for å lese av nullpunktene.
:::

:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = x^2 - 4x - 5
$$


Bestem nullpunktene til $f$.


:::::{answer}
$$
x = -1 \qog x = 5
$$

::::{solution}
Symmetrilinja til $f$ er gitt ved 

$$
x_0 = -\dfrac{b}{2a} = -\dfrac{-4}{2 \cdot 1} = 2
$$

Da er $y$-koordinaten til ekstremalpunktet

$$
y_0 = f(2) = 2^2 - 4 \cdot 2 - 5 = 4 - 8 - 5 = -9
$$

Dermed er 

$$
f(x) = (x - 2)^2 - 9
$$

Så bruker vi konjugatsetningen til å skrive om til nullpunktsform:

$$
\begin{align*}
f(x) &= (x - 2)^2 - 3^2 \\
\\
&= (x - 2 + 3)(x - 2 - 3) \\
\\
&= (x + 1)(x - 5)
\end{align*}
$$

som betyr at nullpunktene til $f$ er 

$$
x = -1 \qog x = 5
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = x^2 + 6x + 8
$$

Bestem koordinatene til skjæringspunktene mellom grafen til $g$ og $x$-aksen.


:::::{answer}
$$
(-4, 0) \qog (-2, 0)
$$

::::{solution}
Symmetrilinja til $g$ er gitt ved 

$$
x_0 = -\dfrac{b}{2a} = -\dfrac{6}{2 \cdot 1} = -3
$$

Da er $y$-koordinaten til ekstremalpunktet gitt ved 

$$
y_0 = g(-3) = (-3)^2 + 6 \cdot (-3) + 8 = 9 - 18 + 8 = -1
$$

Altså kan vi skrive om $g(x)$ til ekstremalpunktsform:

$$
g(x) = (x + 3)^2 - 1
$$

Deretter bruker vi konjugatsetningen til å skrive om til nullpunktsform:

$$
\begin{align*}
g(x) &= (x + 3)^2 - 1^2 \\
\\
&= (x + 3 + 1)(x + 3 - 1) \\
\\
&= (x + 4)(x + 2)
\end{align*}
$$

som betyr at nullpunktene til $g$ er

$$
x = -4 \qog x = -2
$$

Det betyr at grafen til $g$ skjærer $x$-aksen i punktene $(-4, 0)$ og $(-2, 0)$.
::::
:::::

:::::::::::::


:::::::::::::{part} c
Funksjonen $h$ er gitt ved 

$$
h(x) = -x^2 + 4x - 3
$$

Bestem nullpunktene til $h$.



:::::{answer}
$$
x = 1 \qog x = 3
$$

::::{solution}
Symmetrilinja til $h$ er gitt ved 

$$
x_0 = -\dfrac{b}{2a} = -\dfrac{4}{2\cdot (-1)} = 2
$$

Da er $y$-koordinaten til ekstremalpunktet

$$
y_0 = h(2) = -(2)^2 + 4 \cdot 2 - 3 = -4 + 8 - 3 = 1
$$

Altså kan vi skrive om $h(x)$ til ekstremalpunktsform:

$$
h(x) = -(x - 2)^2 + 1
$$

Deretter bruker vi konjugatsetningen til å skrive om til nullpunktsform:

$$
\begin{align*}
h(x) &= -(x - 2)^2 + 1 \\
\\
&= -(x - 2)^2 + 1^2 \\
\\
&= -(x - 2 + 1)(x - 2 - 1) \\
\\
&= -(x - 1)(x - 3)
\end{align*}
$$

som betyr at nullpunktene til $h$ er 

$$
x = 1 \qog x = 3
$$
::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6


:::{hint} Hint
Hvis en andregradsfunksjon $f$ har nullpunktene $x = x_1$ og $x = x_2$, så vil symmetrilinja være gjennomsnittet av de to nullpunktene:

$$
x_0 = \dfrac{x_1 + x_2}{2}
$$

For å finne $y$-koordinaten trenger vi da bare regne ut $f(x_0)$. 
:::


:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = (x - 4)(x + 6)
$$

Bestem koordinatene til $f$ sitt ekstremalpunkt.

Avgjør om det er et toppunkt eller bunnpunkt.



:::::{answer}
Bunnpunkt i $(-1, -25)$

::::{solution}
Vi har at nullpunktene til $f$ er $x = -6$ og $x = 4$. Da er symmetrilinja gitt ved 

$$
x_0 = \dfrac{-6 + 4}{2} = -1
$$

Så trenger vi $y$-koordinaten som vi får ved regne ut $f(x_0)$:

$$
f(-1) = (-1 - 4)(-1 + 6) = -5^2 = -25
$$

Dermed er ekstremalpunktet $(-1, -25)$. Dette er et bunnpunkt siden $a > 0$ slik at grafen til $f$ er konveks.
::::
:::::


:::::::::::::



:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = -2(x + 1)(x - 3)
$$

Bestem koordinatene til $g$ sitt ekstremalpunkt.

Avgjør om det er et toppunkt eller bunnpunkt.

:::::{answer}
Toppunkt i $(1, 8)$

::::{solution}
Vi har at nullpunktene til $g$ er $x = -1$ og $x = 3$. Da er symmetrilinja gitt ved 

$$
x_0 = \dfrac{-1 + 3}{2} = 1
$$

Så trenger vi $y$-koordinaten som vi får ved regne ut $g(x_0)$:

$$
g(1) = -2(1 + 1)(1 - 3) = -2 \cdot 2 \cdot (-2) = 8
$$

Dermed er ekstremalpunktet $(1, 8)$. Dette er et toppunkt siden $a < 0$ slik at grafen til $g$ er konkav.
::::
:::::
:::::::::::::


:::::::::::::{part} c
Funksjonen $h$ er gitt ved 

$$
h(x) = \dfrac{1}{2}(x + 4)(x - 8)
$$

Bestem koordinatene til $h$ sitt ekstremalpunkt.

Avgjør om det er et toppunkt eller bunnpunkt.


:::::{answer}
Bunnpunkt i $(2, -18)$.

::::{solution}
Nullpunktene til $h$ er gitt ved $x = -4$ og $x = 8$. Da er symmetrilinja gitt ved 

$$
x_0 = \dfrac{-4 + 8}{2} = 2
$$

Da er $y$-koordinaten til ekstremalpunktet gitt ved 

$$
h(2) = \dfrac{1}{2}(2 + 4)(2 - 8) = \dfrac{1}{2} \cdot 6 \cdot (-6) = -18
$$

Altså har grafen et ekstremalpunkt i $(2, -18)$. Dette er et bunnpunkt siden $a > 0$ slik at grafen til $h$ er konveks.
::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7


:::{hint} Hint
Her er det lurt å tolke uttrykkene på hver side som andregradsfunksjoner skrevet på enten standardform, ekstremalpunktsform eller nullpunktsform. Ved å bruke de grafiske egenskapene til disse formene kan du enklere bestemme de ukjente konstantene i likningene.

Her vil ikke $a$, $b$ og $c$ typisk bety det du er vant til at de betyr for en andregradsfunksjon. Her må du selv tolke hva de betyr for noe konkret i hver oppgave.
:::


:::::::::::::{part} a
Bestem $a$ og $b$ slik at likningen nedenfor er en identitet.

$$
(x - 2)(x + 8) = (x - a)^2 + b
$$


:::::{answer}
$$
a = -3 \and b = -25
$$

::::{solution}
Vi tolker venstresiden som en andregradsfunksjon skrevet på nullpunktsform og høyresiden som skrevet på ekstremalpunktsform.

Konstanten $a$ representerer $x$-koordinaten til symmetrilinja som vi kan finne som gjennomsnittet av nullpunktene 

$$
a = \dfrac{2 - 8}{2} = -3
$$

Deretter finner vi verdien til $b$ ved å regne ut $y$-koordinatene til ekstremalpunktet ved å bruke venstresiden:

$$
b = (-3 - 2)(-3 + 8) = -5^2 = -25
$$

Altså er likningen en identitet når

$$
a = -3 \and b = -25
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem $a$, $b$ og $c$ slik at likningen nedenfor er en identitet.

$$
2(x + 3)(x - 5) = a(x - b)^2 + c
$$


:::::{answer}
$$
a = 2 \and b = 1 \and c = -32
$$

::::{solution}
Konstanten $a$ representerer den ledende koeffisienten som på venstresiden er lik $2$. Dermed er $a = 2$.

Venstresiden er skrevet på nullpunktsform med nullpunktene $x = -3$ og $x = 5$. På høyresiden er uttrykket på ekstremalpunktsform der $b$ er verdien til symmetrilinja. Dermed er 

$$
b = \dfrac{-3 + 5}{2} = 1
$$

Verdien til $c$ er det samme som $y$-koordinaten til ekstremalpunktet så

$$
c = 2(1 + 3)(1 - 5) = 2\cdot 4\cdot (-4) = -32
$$

Altså er likningen en identitet dersom

$$
a = 2 \and b = 1 \and c = -32
$$
::::
:::::

:::::::::::::

:::::::::::::{part} c
Bestem $a$ og $b$ slik at likningen nedenfor er en identitet.

$$
(x - 1)(x - a) = (x + 3)^2 + b
$$


:::::{answer}

$$
a = -7 \and b = -16
$$

::::{solution}
Venstresiden kan tolkes som nullpunktsform og høyresiden som ekstremalpunktsform. På høyre side får vi at symmetrilinja er $x = -3$. Gjennomsnittet av nullpunktene vil være lik dette som betyr at 

$$
-3 = \dfrac{1 + a}{2} \liff 1 + a = -6 \liff a = -7
$$

Verdien til $b$ er $y$-koordinaten til ekstremalpunktet som vi kan finne ved å sette inn $x = -3$ i uttrykket på venstre side:

$$
b = (-3 - 1)(-3 + 7) = (-4) \cdot 4 = -16
$$

Altså er likningen en identitet dersom

$$
a = -7 \and b = -16
$$

::::
:::::

:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 8
> Her kan du selv velge hvilken form du vil skrive funksjonsuttrykkene på. Velg den du mener er enklest for å løse oppgaven.



:::::::::::::{part} a

:::{plot}
width: 350px
align: right
function: -(x + 2)^2 + 6, f
fontsize: 24
ymax: 8
:::


Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = -(x + 2)^2 + 6
$$

::::{solution}
Ekstremalpunktet til $f$ er gitt ved $(-2, 6)$. Øker vi $x$ med én enhet, så synker $f(x)$ med én enhet som betyr at $a = -1$. Dermed har vi at 

$$
f(x) = -(x + 2)^2 + 6
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 350px
align: right
function: (x - 5) * (x + 2), g
ymin: -16
ystep: 2
fontsize: 24
:::

Grafen til en andregradsfunksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.


:::::{answer}

$$
g(x) = (x + 2)(x - 5)
$$

::::{solution}
Nullpunktene til $g$ er $x = -2$ og $x = 5$ som gir at 

$$
g(x) = a(x + 2)(x - 5)
$$

For å bestemme $a$ så kan vi bruke punktet $(0, -10)$ som gir

$$
g(0) = -10
$$

$$
a(0 + 2)(0 - 5) = -10
$$

$$
a \cdot 2 \cdot (-5) = -10
$$

$$
-10a = -10 \liff a = 1
$$

Dermed er 

$$
g(x) = (x + 2)(x - 5)
$$

::::
:::::



:::::::::::::



:::::::::::::{part} c
:::{plot}
width: 350px
align: right
function: -2 * (x - 3) * (x + 1), h
fontsize: 24
ymax: 10
ymin: -4
:::

Grafen til en andregradsfunksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$.


:::::{answer}
$$
h(x) = -2(x - 1)^2 + 8
$$

::::{solution}
Ekstremalpunktet til $h$ er gitt ved $(1, 8)$. Øker vi $x$ med én enhet, så synker $h(x)$ med $2$. Dermed er $a = -2$. Da får vi at 

$$
h(x) = -2(x - 1)^2 + 8
$$
::::
:::::

:::::::::::::



:::::::::::::{part} d

:::{plot}
width: 350px
align: right
function: -1/2 * (x + 1)**2, p
fontsize: 24
:::


Grafen til en andregradsfunksjon $p$ er vist i figuren til høyre.

Bestem $p(x)$.



:::::{answer}

$$
p(x) = -\dfrac{1}{2}(x + 1)^2
$$

::::{solution}
Ekstremalpunktet til $p$ er $(-1, 0)$. Øker vi $x$ med to enheter, så endres $p(x)$ med $-2$. Dermed er 

$$
2^2 a = -2 \liff 4a = -2 \liff a = -\dfrac{1}{2}
$$

Dermed kan vi skrive $p(x)$ på ekstremalpunktsform som:

$$
p(x) = -\dfrac{1}{2}(x + 1)^2 + 0 = -\dfrac{1}{2}(x + 1)^2
$$

> Denne skrivemåten samsvarer også med nullpunktsform siden $y_0 = 0$.
::::
:::::


:::::::::::::



:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 9


:::::::::::::{part} a
:::{plot}
width: 350px
align: right
function: (x - 3)**2 - 4, f
ticks: off
fontsize: 24
point: (5, 0)
text: 5, 0, "$(5, 0)$", bottom-right
point: (3, -4)
text: 3, -4, "$(3, -4)$", bottom-center
xmin: -2
xmax: 8
:::


Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = (x - 3)^2 - 4
$$

::::{solution}
Ekstremalpunktet er gitt ved $(3, -4)$. Grafen går også gjennom $(5, 0)$ som betyr at 

$$
2^2 a = 4 \limplies 4a = 4 \limplies a = 1
$$

Dermed er 

$$
f(x) = (x - 3)^2 - 4
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
:::{plot}
fontsize: 24
width: 350px
align: right
function: -1/2 * (x + 2) * (x - 4), g
ticks: off
point: (4, 0)
text: 4, 0, "$(4, 0)$", top-right
point: (-2, 0)
text: -2, 0, "$(-2, 0)$", top-left
point: (0, g(0))
text: 0, g(0), "$(0, {g(0)})$", top-left
:::

Grafen til en andregradsfunksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.


:::::{answer}
$$
g(x) = -\dfrac{1}{2}(x + 2)(x - 4)
$$

::::{solution}
Vi ser at nullpunktene til $g$ er $x = -2$ og $x = 4$. Dermed kan vi skrive $g$ på nullpunktsform som

$$
g(x) = a(x + 2)(x - 4)
$$

Siden grafen til $g$ går gjennom $(0, 4)$ så er 

$$
g(0) = 4
$$

$$
a(0 + 2)(0 - 4) = 4
$$

$$
a(2)(-4) = 4
$$

$$
-8a = 4 \limplies a = -\dfrac{1}{2}
$$

Altså er 

$$
g(x) = -\dfrac{1}{2}(x + 2)(x - 4)
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
:::{plot}
width: 350px
align: right
function: -3 * (x - 2)**2, h
ticks: off
ymin: -14
ymax: 3
xmax: 5
xmin: -2
point: (2, 0)
text: 2, 0, "$(2, 0)$", top-center
point: (0, h(0))
text: 0, h(0), "$(0, {h(0)})$", top-left
fontsize: 24
:::

Grafen til en andregradsfunksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$.


:::::{answer}
$$
h(x) = -3(x - 2)^2
$$

::::{solution}
Grafen til $h$ har et ekstremalpunkt i $(2, 0)$. Det betyr at vi kan skrive 

$$
h(x) = a(x - 2)^2 + 0 = a(x - 2)^2
$$

Samtidig skjærer grafen $y$-aksen i $(0, -12)$ som betyr at 

$$
h(0) = -12
$$

$$
a(0 - 2)^2 = -12
$$

$$
4a = -12 \liff a= -3
$$

Dermed er 

$$
h(x) = -3(x - 2)^2
$$
::::
:::::

:::::::::::::



:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 10


:::{hint} Hint
Dersom man skal kunne skrive om fra ekstremalpunktsform til nullpunktsform, så må det være mulig å bruke konjugatsetningen. Det forutsetter at fortegnet på leddene i funksjonsuttrykket er ulike.
:::


:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = (x - 2)^2 + 3
$$

Bestem nullpunktene til $f$ dersom de finnes.


:::::{answer}
Nullpunktene finnes ikke.

::::{solution}
Funksjonen $f$ er konveks {poly-icon}`smile` og har ekstremalpunkt i $(2, 3)$ som ligger på oversiden av $x$-aksen. Dermed vil funksjonen aldri skjære $x$-aksen og vil derfor ikke ha noen nullpunkter.

::::
:::::

:::::::::::::



:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = 2(x - 1)^2 - 8
$$

Bestem skjæringspunktene mellom grafen til $g$ og $x$-aksen dersom de finnes.


:::::{answer}
$(-1, 0)$ og $(3, 0)$

::::{solution}
Fortegnene til de to leddene i funksjonsuttrykket er forskjellig som lar oss faktorisere uttrykket med konjugatsetningen:

$$
\begin{align*}
g(x) &= 2(x - 1)^2 - 8 \\
\\
&= 2\left((x - 1)^2 - 4\right) \\
\\
&= 2(x - 1 + 2)(x - 1 - 2) \\
\\
&= 2(x + 1)(x - 3)
\end{align*}
$$

Altså skjærer grafen til $g$ gjennom $x$-aksen i $(-1, 0)$ og $(3, 0)$

::::
:::::


:::::::::::::


:::::::::::::{part} c 
Funksjonen $h$ er gitt ved 

$$
h(x) = x^2 + 2x + 6
$$

Bestem nullpunktene til $h$ dersom de finnes.



:::::{answer}
Nullpunktene finnes ikke.

::::{solution}
Vi skriver om $h(x)$ til ekstremalpunktsform først. Symmetrilinja er gitt ved 

$$
x_0 = -\dfrac{b}{2a} = -\dfrac{2}{2 \cdot 1} = -1
$$

Da er $y$-koordinaten til ekstremalpunktet gitt ved 

$$
y_0 = h(-1) = (-1)^2 + 2(-1) + 6 = 1 - 2 + 6 = 5
$$

Altså er 

$$
h(x) = (x + 1)^2 + 5
$$

Dette er en andregradsfunksjon med ekstremalpunkt i $(-1, 5)$ som er konveks {poly-icon}`smile` siden $a > 0$. Dermed har grafen et bunnpunkt i $(-1, 5)$ og vil derfor aldri skjære $x$-aksen. Da kan den ikke ha noen nullpunkter.
::::
:::::

:::::::::::::



:::::::::::::{part} d
Funksjonen $p$ er gitt ved 

$$
p(x) = -x^2 + 8x - 16
$$

Bestem koordinatene til skjæringspunktene mellom grafen til $p$ og $x$-aksen dersom de finnes.


:::::{answer}
$$
(4, 0)
$$

::::{solution}
Vi kan skrive om $p(x)$ til

$$
p(x) = -(x^2 - 8x + 16) = -(x - 4)^2
$$

der vi har brukt 2. kvadratsetning for å faktorisere. Dermed ser vi at grafen til $p$ har et nullpunkt i $x = 4$. Dermed har grafen ett skjæringspunkt med $x$-aksen

$$
(4, 0)
$$
::::
:::::

:::::::::::::

:::::::::::::::