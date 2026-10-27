# Oppgaver: Standardform



:::::::::::::::{exercise-2} Oppgave 1
Finn koeffisientene til funksjonsuttrykkene.



:::::::::::::{part} a
$$
f(x) = -x^2 - 2x + 12.
$$


:::::{answer-2}
$$
a = -1 \and b = -2 \and c = 12
$$
:::::


:::::::::::::



:::::::::::::{part} b
$$
g(x) = -x^2 + x + 2
$$


:::::{answer-2}
$$
a = -1 \and b = 1 \and c = 2
$$
:::::


:::::::::::::




:::::::::::::{part} c
$$
h(x) = x^2 + 5
$$


:::::{answer-2}
$$
a = 1 \and b = 0 \and c = 5
$$
:::::


:::::::::::::



:::::::::::::{part} d
$$
p(x) = 3x^2 + 4x
$$


:::::{answer-2}
$$
a = 3 \and b = 4 \and c = 0
$$
:::::


:::::::::::::


:::::::::::::::




---



:::::::::::::::{exercise-2} Oppgave 2

Grafen til en andregradsfunksjon $f(x) = ax^2 + bx + c$ er vist i figuren nedenfor.

:::{plot}
width: 50%
function: (x + 1)**2 - 4, f
fontsize: 28
ymin: -6
:::




:::::::::::::{part} a
Bestem $a$.


:::::{answer}
$$
a = 1
$$

::::{solution}
Ekstremalpunktet til $f$ ligger i $(-1, -4)$. Øker vi $x$ med én enhet, så øker $f(x)$ med én enhet også som betyr at 

$$
a = 1
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
Bestem $c$.


:::::{answer}
$$
c = -3
$$

::::{solution}
Grafen til $f$ skjærer $y$-aksen i $(0, -3)$ som betyr at $c = -3$.

::::

:::::

:::::::::::::


:::::::::::::{part} c
Bestem $b$.


:::::{answer}
$$
b = 2
$$

::::{solution}
Symmetrilinja til $f$ er gitt ved 

$$
x = -1
$$

Vi bruker formelen for symmetrilinja med $x = -1$ og $a = 1$ til å bestemme verdien til $b$:

$$
x = -\dfrac{b}{2a} \liff -1 = -\dfrac{b}{2} \liff b = 2
$$

::::
:::::
:::::::::::::


:::::::::::::{part} d
Bestem $f(x)$.

:::::{answer}
$$
f(x) = x^2 + 2x - 3
$$

::::{solution}
Vi har at 

$$
a = 1 \and b = 2 \and c = -3
$$

som gir 

$$
f(x) = ax^2 + bx + c = x^2 + 2x - 3
$$
::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a

:::{plot}
width: 350px
align: right
function: (x - 2)**2 - 1, f
fontsize: 26
:::


Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = x^2 - 4x + 3
$$

::::{solution}
Bunnpunktet til grafen ligger i $(2, -1)$. Går vi én enhet til høyre, så øker $f(x)$ med $1$ som betyr at $a = 1$.

Symmetrilinja til grafen er $x = 2$ som betyr at 

$$
x = -\dfrac{b}{2a} \liff 2 = -\dfrac{b}{2} \liff b = -4
$$

Grafen skjærer $y$-aksen i $(0, 3)$ som gir at $c = 3$. Dermed er 

$$
f(x) = x^2 - 4x + 3
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 350px
align: right
function: -2*(x - 3)**2 + 8, g
fontsize: 26
ymax: 9
ymin: -3
:::

Grafen til en andregradsfunksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.


:::::{answer}
$$
g(x) = -2x^2 + 12x - 10
$$

::::{solution}
Grafen til $g$ har et toppunkt i $(3, 8)$. Går vi én enhet til høyre langs $x$-aksen, så synker $g(x)$ med $-2$. Dermed er $a = -2$.

Symmetrilinja til $g$ er gitt ved $x = 3$ som gir

$$
x = -\dfrac{b}{2a} \liff 3 = -\dfrac{b}{2\cdot (-2)} \liff b = 12
$$

Vi kan ikke lese av skjæringspunktet med $y$-aksen fra grafen, men vi vet til nå at 

$$
g(x) = -2x^2 + 12x + c
$$

Vi velger ett annet punkt på grafen til $g$ for å sette opp en likning for $c$. Velger $(1, 0)$ som gir

$$
g(1) = 0 \liff -2 \cdot 1^2 + 12 \cdot 1 + c = 0
$$

$$
10 + c = 0 \liff c = -10
$$


Dermed er 

$$
g(x) = -2x^2 + 12x - 10
$$

::::
:::::

:::::::::::::



:::::::::::::{part} c
:::{plot}
width: 350px
align: right
function: 2*x**2 - 8*x, h
fontsize: 26
ymin: -9
ymax: 5
:::

Grafen til en andregradsfunksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$.


:::::{answer}
$$
h(x) = 2x^2 - 8x
$$

::::{solution}
Grafen til $h$ har et bunnpunkt i $(2, -8)$. Øker vi $x$ med én enhet, så øker $h(x)$ med $2$. Dermed er $a = 2$.

Symmetrilinja til grafen er $x = 2$ som gir

$$
x = -\dfrac{b}{2a} \liff 2 = -\dfrac{b}{2 \cdot 2} \liff b = -8
$$

Grafen skjærer $y$-aksen i $(0, 0)$ som gir at $c = 0$. Dermed er 

$$
h(x) = 2x^2 - 8x
$$
::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4


:::::::::::::{part} a
:::{plot}
width: 350px
align: right
function: 1/2 * x**2 + 2*x - 1, f
fontsize: 26
xmin: -7
xmax: 5
:::

Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = \frac{1}{2}x^2 + 2x - 1
$$

::::{solution}
Grafen har et bunnpunkt i $(-2, -3)$. Dersom vi øker $x$ med $2$ enheter, så ender vi opp i $(0, -1)$ på grafen. Da har $f(x)$ økt med $2$ som gir

$$
2^2 \cdota = 2 \liff 4a = 2 \liff a = \dfrac{1}{2}
$$

Symmetrilinja er gitt ved $x = -2$ som gir

$$
-2 = -\dfrac{b}{2a} \liff b = 4a = 4 \cdot \dfrac{1}{2} = 2
$$

Grafen skjærer $y$-aksen i $(0, -1)$ som gir at $c = -1$. Dermed er 

$$
f(x) = \frac{1}{2}x^2 + 2x - 1
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 350px
align: right
function: -1/3 * x**2 + 4*x, g
fontsize: 26
xmin: -2
xmax: 16
xstep: 2
ymin: -2
ymax: 14
ystep: 2
:::


Grafen til en andregradsfunksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.


:::::{answer}
$$
g(x) = -\frac{1}{3}x^2 + 4x
$$

::::{solution}
Grafen har et toppunkt i $(6, 12)$. Øker vi $x$ med $6$ enheter, så ender vi opp i $(12, 0)$ på grafen som betyr at 

$$
6^2 a = -12 \liff 36a = -12 \liff a = -\dfrac{1}{3}
$$

Symmetrilinja til grafen er gitt ved $x = 6$ som gir

$$
6 = -\dfrac{b}{2a} \liff b = -12a = -12 \cdot \left(-\dfrac{1}{3}\right) = 4
$$

Grafen skjærer $y$-aksen i $(0, 0)$ som gir at $c = 0$. Dermed er 

$$
g(x) = -\frac{1}{3}x^2 + 4x
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 350px
align: right
function: -1/2 * x**2 + 2, h
fontsize: 26
:::

Grafen til en andregradsfunksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$.


:::::{answer}
$$
h(x) = -\dfrac{1}{2}x^2 + 2
$$

::::{solution}
Toppunkt til grafen er i $(0, 2)$. Øker vi $x$ med to enheter, så synker $h(x)$ med $-2$ som betyr at 

$$
2^2 a = -2 \liff 4a = -2 \liff a = -\dfrac{1}{2}
$$

Symmetrilinja er $x = 0$ som gir

$$
0 = -\dfrac{b}{2a} \liff b = 0
$$

Grafen skjærer også $y$-aksen i $(0, 2)$ som betyr at $c = 2$. Dermed er 

$$
h(x) = -\dfrac{1}{2}x^2 + 2
$$
::::
:::::

:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 5
:::::::::::::{part} a
En andregradsfunksjon $f$ er gitt ved 

$$
f(x) = x^2 + 2x - 2.
$$

Bestem hvilken av grafene nedenfor som viser grafen til $f$.


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 28
---
:::{plot}
width: 100%
function: x**2 - 2*x - 2
ticks: off
text: 5, 5, "A", bbox
:::


:::{plot}
width: 100%
function: x**2 + 2*x - 2
ticks: off
text: 5, 5, "B", bbox
:::


:::{plot}
width: 100%
function: -x**2 - 2*x + 2
ticks: off
text: 5, 5, "C", bbox
:::


:::{plot}
width: 100%
function: -x**2 + 2*x + 2
ticks: off
text: 5, 5, "D", bbox
:::



::::


:::::{answer}
Graf B. 


::::{solution}
Grafen til $f$ skjærer $y$-aksen i $(0, -2)$ fordi $c = -2$. Dermed kan vi eliminere graf C og D.

Symmetrilinja til $f$ er gitt ved 

$$
x = -\dfrac{b}{2a} = -\dfrac{2}{2 \cdot 1} = -1
$$

Dermed må ekstremalpunktet til grafen ligge på venstre side av $y$-aksen. Det betyr at riktig graf er graf B.
::::


:::::


:::::::::::::



:::::::::::::{part} b
En andregradsfunksjon er gitt ved 

$$
g(x) = -x^2 + 4x
$$

Bestem hvilken av grafene nedenfor som viser grafen til $g$.


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 28
---
:::{plot}
width: 100%
function: x**2 - 4*x
ticks: off
text: 5, 5, "A", bbox
:::


:::{plot}
width: 100%
function: -x**2 - 4*x
ticks: off
text: 5, 5, "B", bbox
:::


:::{plot}
width: 100%
function: -x**2 + 4*x
ticks: off
text: 5, 5, "C", bbox
:::


:::{plot}
width: 100%
function: x**2 + 4*x
ticks: off
text: 5, 5, "D", bbox
:::

::::


:::::{answer}
Graf C.


::::{solution}
Vi har at $a \lt 0$ som eliminerer graf A og D.

Symmetrilinja til $g$ er gitt ved 

$$
x = -\dfrac{b}{2a} = -\dfrac{4}{2 \cdot (-1)} = 2
$$

Altså må ekstremalpunktet til grafen ligger til høyre for $y$-aksen. Derfor er grafen til $g$ gitt ved graf C.
::::


:::::



:::::::::::::


:::::::::::::{part} c
En andregradsfunksjon er gitt ved 

$$
h(x) = x^2 - 1
$$

Bestem hvilken av grafene nedenfor som viser grafen til $h$.


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 28
ticks: off
---

:::{plot}
width: 100%
function: x**2 - 1
text: 5, 5, "A", bbox
:::


:::{plot}
width: 100%
function: x**2 + 1
text: 5, 5, "B", bbox
:::


:::{plot}
width: 100%
function: -x**2 - 1
text: 5, 5, "C", bbox
:::


:::{plot}
width: 100%
function: -x**2 + 1
text: 5, 5, "D", bbox
:::


::::


:::::{answer}
Graf A.


::::{solution}
Vi har at $a \gt 0$ som eliminerer graf C og D. Vi kan se at konstantleddet er negativt som betyr at grafen må skjære $y$-aksen på undersiden av $x$-aksen. Dermed er graf A riktig.
::::
:::::

:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
En andregradsfunksjon $f$ er gitt ved 

$$
f(x) = x^2 - 4x + 3
$$


:::::::::::::{part} a
Bestem koordinatene til skjæringspunktet mellom grafen til $f$ og $y$-aksen.


:::::{answer}
$$
(0, 3)
$$


::::{solution}
Grafen til $f$ skjærer $y$-aksen når $x = 0$. Da er funksjonsverdien: 

$$
f(0) = 3
$$

Altså skjærer grafen til $f$ gjennom $y$-aksen i $(0, 3)$. 
::::


:::::

:::::::::::::


:::::::::::::{part} b
Bestem symmetrilinja til grafen til $f$.


:::::{answer}
$$
x = 2
$$


::::{solution}
Vi har at $a = 1$ og $b = -4$. Da er symmetrilinja gitt ved 

$$
x = -\dfrac{b}{2a} = -\dfrac{(-4)}{2\cdot 1} = 2
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c 
Bestem koordinatene til ekstremalpunktet til $f$.

Avgjør om det er et toppunkt eller et bunnpunkt.


:::::{answer}
Bunnpunkt i $(2, -1)$.


::::{solution}
Ekstremalpunktet til $f$ ligger på symmetrilinja til grafen. Vi vet at $x$-koordinaten da er $x = 2$. Da er $y$-koordinaten gitt ved 

$$
f(2) = 2^2 - 4 \cdot 2 + 3 = 4 - 8 + 3 = -1
$$

Altså har grafen et ekstremalpunkt i $(2, -1)$. Siden $a > 0$ så er grafen konveks og ekstremalpunktet er et bunnpunkt.
::::
:::::

:::::::::::::


:::::::::::::{part} d
Tegn en skisse av grafen til $f$. 

Skissen av grafen bør ha med:
* Skjæringspunktet med $y$-aksen
* Symmetrilinja
* Ekstremalpunktet


:::::{answer}
:::{plot}
width: 60%
function: x**2 - 4*x + 3, f
ticks: off
fontsize: 28
point: (2, f(2))
point: (0, f(0))
text: 0, f(0), "$(0, {f(0)})$", bottom-left
text: 2, f(2), "$(2, {f(2)})$", bottom-right
vline: 2, dashed, red
text: 2, 4, "$x = 2$", center-right
:::

:::::


:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise-2} Oppgave 7
:::::::::::::{part} a
:::{plot}
width: 100%
align: right
function: x**2 + 2*x - 1, f
fontsize: 28 
:::

Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.


Finn $f(x)$.



:::{clear}
:::

:::::{answer-2}
$$
f(x) = x^2 + 2x - 1.
$$

::::{solution-2}
Ekstremalpunktet til grafen er i $(-1, -2)$. Går vi én enhet langs $x$-aksen, vil grafen være i $(0, -1)$ som betyr at $y$-verdien øker med $1$. Derfor er $a = 1$.

Vi ser at grafen til $f$ skjærer $y$-aksen i $y = -1$ som betyr at $c = -1$.

Symmetrilinja til grafen er $x = -1$. Med formelen for symmetrilinja får vi:

$$
x = -\dfrac{b}{2a} \liff -1 = -\dfrac{b}{2 \cdot 1}
$$

Altså har vi 

$$
-\dfrac{b}{2} = -1  \liff b = 2. 
$$

Dermed er

$$
f(x) = x^2 + 2x - 1.
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
En andregradsfunksjon $g$ er gitt ved 


$$
g(x) = 2x^2 + 4x - 1
$$

Lag en skisse av grafen til $g$ og marker følgende egenskaper:

* Skjæringspunktet med $y$-aksen
* Symmetrilinja
* Topp- eller bunnpunkt med koordinater



:::::{answer-2}

:::{plot}
width: 70%
function: 2 * x**2 + 4 * x - 1, g
fontsize: 22
ticks: off
point: (-1, -3)
text: -1, -3, "$(-1, -3)$", bottom-left
point: (0, -1)
text: 0, -1, "$(0, -1)$", bottom-right
vline: -1
text: -1, 4, "$x = -1$", center-left
xmin: -5
xmax: 3
:::


::::{solution-2}
Koeffisientene til $g(x)$ er

$$
a = 2 \and b = 4 \and c = -1.
$$

Skjæringspunktet med $y$-aksen
: Konstantleddet er $c = -1$ som betyr at grafen skjærer $y$-aksen i $(0, -1)$.


Symmetrilinja
: Symmetrilinja er gitt ved

    $$
    x = -\dfrac{b}{2a} = -\dfrac{4}{2 \cdot 2} = -1.
    $$

Topp- eller bunnpunkt
: Grafen til $g$ er konveks siden $a > 0$ {poly-icon}`smile`. Dermed har grafen et bunnpunkt. Bunnpunktet har $x$-koordinaten lik symmetrilinja, altså $x = -1$. Vi setter $x = -1$ inn i $g(x)$ for å finne $y$-koordinaten til bunnpunktet:

    $$
    g(-1) = 2 \cdot (-1)^2 + 4 \cdot (-1) - 1 = -3.
    $$

    Dermed er bunnpunktet til $g$ gitt ved $(-1, -3)$.
::::
:::::


:::::::::::::




:::::::::::::{part} c
:::{plot}
width: 100%
align: right
function: 2 * x**2 - 4, h
fontsize: 28 
:::

Grafen til en andregradsfunksjon $h$ er vist i figuren til høyre.

Finn $h(x)$.


:::::{answer}
$$
h(x) = 2x^2 - 4
$$

::::{solution}
Grafen til $h$ har et bunnpunkt i $(0, -4)$. Det betyr at $c = -4$ og at $b = 0$. 

Øker vi $x$ med én enhet fra bunnpunktet, så øker $h(x)$ med $2$ som betyr at $a = 2$. Dermed er 

$$
h(x) = 2x^2 - 4
$$
::::
:::::

:::::::::::::


:::::::::::::{part} d
En andregradsfunksjon $p$ er gitt ved 


$$
p(x) = -x^2 + 2x
$$

Lag en skisse av grafen til $p$ og marker følgende egenskaper:

* Skjæringspunktet med $y$-aksen
* Symmetrilinja
* Topp- eller bunnpunkt med koordinater



:::::{answer-2}
:::{plot}
width: 70%
function: -x**2 + 2*x, p
ticks: off
fontsize: 22
point: (0, 0)
text: 0, 0, "$(0, 0)$", top-left
point: (1, 1)
text: 1, 1, "$(1, 1)$", top-right
vline: 1
text: 1, 4, "$x = 1$", center-right
:::


::::{solution-2}
Koeffisientene til $p(x)$ er 

$$
a = -1 \and b = 2 \and c = 0.
$$

Skjæringspunktet med $y$-aksen
: Konstantleddet er $c = 0$ som betyr at grafen skjærer $y$-aksen i $(0, 0)$.

Symmetrilinja
: Symmetrilinja er gitt ved 

$$
x = -\dfrac{b}{2a} = -\dfrac{2}{2 \cdot (-1)} = 1.
$$

Topp- eller bunnpunkt
: Grafen til $p$ er konkav {poly-icon}`frown` siden $a < 0$. Dermed har grafen et toppunkt. Toppunktet har $x$-koordinaten lik symmetrilinja, altså $x = 1$. Vi setter $x = 1$ inn i $p(x)$ for å finne $y$-koordinaten til toppunktet:

    $$
    p(1) = -1 \cdot 1^2 + 2 \cdot 1 = 1.
    $$

    Dermed er toppunktet til $p$ gitt ved $(1, 1)$.
::::
:::::


:::::::::::::




:::::::::::::::




---




:::::::::::::::{exercise-2} Oppgave 8
:::::::::::::{part} a

:::{plot}
width: 350px
align: right
fontsize: 26
function: -1/2 * x**2 + 2*x + 1, f
ticks: off
point: (0, 1)
point: (2, 3)
text: 0, 1, "$(0, 1)$", top-left
text: 2, 3, "$(2, 3)$", top-center
:::


I figuren til høyre vises grafen til en andregradsfunksjon $f$.

Bestem $f(x)$.


:::::{answer-2}
$$
f(x) = -\dfrac{1}{2}x^2 + 2x + 1.
$$

::::{solution-2}
På standardform kan vi skrive funksjonsuttrykket som

$$
f(x) = ax^2 + bx + c
$$

Grafen til $f$ skjærer $y$-aksen i $(0, 1)$ som betyr at $c = 1$.

Symmetrilinja til grafen er gitt ved $x = 2$. Da får vi at

$$
x = -\dfrac{b}{2a} \liff 2 = -\dfrac{b}{2a} \liff b = -4a.
$$

Det betyr at vi nå kan skrive $f(x)$ som:

$$
f(x) = ax^2 - 4ax + 1.
$$

Grafen til $f$ går gjennom $(2, 3)$ som betyr at

$$
f(2) = 3 
$$

$$
a \cdot 2^2 - 4a \cdot 2 + 1 = 3
$$

$$
4a - 8a + 1 = 3
$$

$$
-4a = 2 \liff a = -\dfrac{1}{2}.
$$

Altså er 

$$
f(x) = -\dfrac{1}{2}x^2 + 2x + 1.
$$




::::
:::::


:::::::::::::



:::::::::::::{part} b

:::{plot}
width: 350px
align: right
fontsize: 26
ticks: off
function: 2 * x**2 + 4 * x + 4, g
point: (-1, 2)
point: (-2, 4)
text: -1, 2, "$(-1, 2)$", bottom-center
text: -2, 4, "$(-2, 4)$", bottom-left
ymin: -1
xmax: 3
:::


I figuren til høyre vises grafen til en andregradsfunksjon $g$.

Bestem $g(x)$.



:::::{answer-2}

$$
g(x) = 2x^2 + 4x + 4
$$


::::{solution-2}
Funksjonsuttrykket til $g$ kan skrives som

$$
g(x) = ax^2 + bx + c.
$$

Vi har at grafen til $g$ har symmetrilinje i $x = -1$ som betyr at

$$
x = -\dfrac{b}{2a} \liff -1 = -\dfrac{b}{2a} \liff b = 2a
$$

Siden punktet $(-2, 4)$ ligger på grafen til $g$ vil også punktet $(0, 4)$ ligge på grafen til $g$ siden begge punkter ligger symmetrisk om symmetrilinja (altså samme avstand fra symmetrilinja). Ergo er $c = 4$. 

Flytter vi oss én enhet langs $x$-aksen fra ekstremalpunktet $(-1, 2)$, havner grafen i $(0, 4)$ som betyr at $g(x)$ øker med $2$. Da er $a = 2$. Siden $b = 2a$ får vi da at 

$$
b = 2 \cdot 2 = 4
$$

Altså er

$$
a = 2 \and b = 4 \and c = 4
$$

så da følger det at

$$
g(x) = 2x^2 + 4x + 4
$$

::::
:::::


:::::::::::::




:::::::::::::{part} c
:::{plot}
width: 350px
align: right
fontsize: 26
ticks: off
function: -2*x**2 + 2*x + 12, h
point: (-2, 0)
point: (3, 0)
point: (0, 12)
text: -2, 0, "$(-2, 0)$", top-left
text: 3, 0, "$(3, 0)$", top-right
text: 0, 12, "$(0, 12)$", top-left
ymax: 14
:::


I figuren til høyre vises en andregradsfunksjon $h$.

Bestem $h(x)$.



:::::{answer-2}

$$
h(x) = -2x^2 + 2x + 12
$$

::::{solution-2}
Funksjonsuttrykket kan skrives som

$$
h(x) = ax^2 + bx + c
$$


Siden grafen til $h$ går skjærer gjennom $y$-aksen i $(0, 12)$ er $c = 12$.

Vi kan merke oss at grafen til $h$ skjærer $x$-aksen i $(-2, 0)$ og $(3, 0)$. Symmetrilinja vil ligge midt mellom disse to punktene som vi kan finne ved å ta gjennomsnittet av $x$-koordinatene:

$$
x_0 = \dfrac{-2 + 3}{2} = \dfrac{1}{2}
$$

Altså har vi at 

$$
x_0 = -\dfrac{b}{2a} \liff \dfrac{1}{2} = -\dfrac{b}{2a}
$$

som gir

$$
b = -a
$$

Funksjonsuttrykket kan derfor skrives som

$$
h(x) = ax^2 - ax + 12
$$

Vi bruker ett av de nullpunktene til å finne $a$. Vi velger $(3, 0)$:

$$
h(3) = 0
$$

$$
a \cdot 3^2 - a \cdot 3 + 12 = 0
$$

$$
9a - 3a + 12 = 0
$$

$$
6a = -12
$$

$$
a = -2
$$

Dermed er funksjonsuttrykket

$$
h(x) = -2x^2 + 2x + 12
$$
::::
:::::


:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9

:::::::::::::{part} a
Programmet nedenfor mangler funksjonsuttrykket $f(x)$ til en andregradsfunksjon $f$ for å kunne kjøres.


:::{interactive-code}
def f(x):
    return ????
    
for x in range(0, 7):
    print(f(x))


:::



Når programmet ble kjørt med det riktige funksjonsuttrykket, skrev det ut følgende verdier:

:::{code-block} console
4
-1
-4
-5
-4
-1
4
:::


Bestem $f(x)$ og fiks programmet. 

Sjekk at du får samme utskrift når du kjører programmet.




:::::{answer}
$$
f(x) = x^2 - 6x +4
$$


::::{solution}
Når vi kjører programmet, så får vi $f(x)$ for $x = 0, 1, \ldots, 6$. I praksis får vi funksjonsverdiene til verditabellen

:::{table}
---
width: 70%
transpose: true
---
labels: $x$, $f(x)$
$0$, $4$
$1$, $-1$
$2$, $-4$
$3$, $-5$
$4$, $-4$
$5$, $-1$
$6$, $4$
:::

Vi kan observere at $x = 3$ må være symmetrilinja siden $f(2) = f(4)$ og tilsvarende jo lenger vekk fra symmetrilinja vi beveger oss. 

Fra $x = 3$ til $x = 4$ øker $f(x)$ med $1$ som betyr at $a = 1$

Fra symmetrilinja får vi at 

$$
3 = -\dfrac{b}{2a} \liff b = -6a = -6
$$

Og for $x = 0$ er $f(x) = 4$ som betyr at $c = 4$. Dermed er 

$$
f(x) = x^2 - 6x + 4
$$


::::


:::::



:::::::::::::



:::::::::::::{part} b
Siri har laget programmet nedenfor.

Avgjør hvilken verdi programmet skriver ut. Sjekk deretter svaret ditt.

:::{interactive-code}
---
predict:
---
def f(x):
    return x ** 2 + 2 * x - 15

x = -5

while f(x) > f(x + 1):
    x = x + 1

print((x, f(x)))
:::



:::::{answer}
$$
(1, -16)
$$


::::{solution}
Programmet leter etter bunnpunktet på grafen til $f$. Først finner vi symmetrilinja:

$$
x = -\dfrac{b}{2a} = -\dfrac{2}{2 \cdot 1} = -1
$$

Deretter regner vi ut $y$-koordinaten til bunnpunktet:

$$
f(-1) = (-1)^2 + 2 \cdot (-1) - 15 = 1 - 2 - 15 = -16
$$

Altså skriver programmet ut $(-1, -16)$. 
::::

:::::
:::::::::::::




:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 10


::::{hint} Hvordan bestemmer jeg funksjonsuttrykket med CAS?
Vi trenger tre punkter på grafen. Da kan vi sette opp et likningssystem for $a$, $b$ og $c$ og løse det med CAS slik som vist i *gif*-en nedenfor.

Funksjonen i *gif*-en nedenfor går gjennom punktene $(-3, 0)$, $(0, 12)$ og $(2, 0)$. 

Legg spesielt merke til at 
* Når funksjonen defineres, så brukes `:=`, mens når man setter opp likninger, så brukes `=`.
* For å få skrevet $x^2$, så skriver man `x^2`. 

:::{figure} ./videoer/cas_standardform.gif
---
class: no-click, adaptive-figure
width: 80%
---
:::

::::


:::::::::::::{part} a
:::{plot}
width: 350px
align: right
function: (x - 2)**2 - 9, f
ymax: 5
ymin: -10
fontsize: 26
:::


Grafen til en andregradsfunksjon $f$ er vist til høyre. 

Bestem $f(x)$ med CAS.

:::{cas-popup}
:::


:::::{answer}
$$
f(x) = x^2 - 4x - 5
$$


::::{solution}
:::{figure} ./figurer/cas/a.png
---
class: no-click, adaptive-figure
width: 50%
---
:::

som gir at 

$$
f(x) = x^2 - 4x - 5
$$
::::


:::::


:::::::::::::



:::::::::::::{part} b

:::{plot}
width: 350px
function: -(x - 3)**2 + 4, g
xmax: 9
xmin: -2
fontsize: 26
align: right
:::



Grafen til en andregradsfunksjon $g$ er vist til høyre.

Bestem $g(x)$ med CAS.


:::{cas-popup}
:::


:::::{answer}
$$
g(x) = -x^2 + 6x - 5
$$

::::{solution}
:::{figure} ./figurer/cas/b.png
---
class: no-click, adaptive-figure
width: 50%
---
:::

som gir at 

$$
g(x) = -x^2 + 6x - 5
$$
::::
:::::


:::::::::::::



:::::::::::::{part} c

:::{plot}
width: 350px
function: -2 * (x - 1) * (x + 2), h
fontsize: 26
align: right
:::


Grafen til en andregradsfunksjon $h$ er vist til høyre.


Bestem $h(x)$ med CAS.


:::{cas-popup}
:::


:::::{answer}
$$
h(x) = -2x^2 - 2x + 4
$$

::::{solution}
:::{figure} ./figurer/cas/b.png
---
class: no-click, adaptive-figure
width: 50%
---
:::

som gir at 

$$
h(x) = -2x^2 - 2x + 4
$$
::::
:::::

:::::::::::::


:::::::::::::::


