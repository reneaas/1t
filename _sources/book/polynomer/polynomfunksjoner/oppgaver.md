# Oppgaver: Polynomfunksjoner

:::::::::::::::{exercise} Oppgave 1

:::::::::::::{part} a

:::{plot}
width: 100%
align: right
fontsize: 26
function: 1/2 * (x + 2) * (x - 1) * (x - 3), f
:::


Grafen til en tredjegradsfunksjon $f$ er vist i figuren til høyre.


Finn $f(x)$.

::::{answer}
$$
f(x) = \dfrac{1}{2}(x + 2)(x - 1)(x - 3)
$$
::::

:::::::::::::

:::::::::::::{part} b
:::{plot}
width: 100%
align: right
fontsize: 26
function: -1/4 * (x + 2) * (x - 3)**2, g
:::


Grafen til en tredjegradsfunksjon $g$ er vist til høyre.

Bestem $g(x)$.




::::{answer}
$$
g(x) = -\dfrac{1}{4}(x - 3)^2(x + 2)
$$
::::

:::::::::::::

:::::::::::::{part} c
:::{plot}
width: 100%
align: right
fontsize: 26
function: -1/2 * (x + 3) * (x + 2) * (x - 1), h
:::


Grafen til en tredjegradsfunksjon $h$ er vist til høyre.

Finn $h(x)$.



::::{answer}
$$
h(x) = -\dfrac{1}{2}(x + 2)(x + 3)(x - 1)
$$
::::

:::::::::::::


:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 2
:::{plot}
width: 350px
align: right
fontsize: 26
function: x**3 + 3 * x**2 + x + 1, f
:::



Grafen til en tredjegradsfunksjon $f$ gitt ved

$$
f(x) = ax^3 + bx^2 + cx + d, 
$$

er vist i figuren til høyre.


:::{clear}
:::

:::::::::::::{part} a
Sett opp en likningssystem for koeffisientene uttrykt ved $f(x)$. 

::::{hint}
* Du trenger fire likninger siden det er fire ukjente koeffisienter $a$, $b$, $c$ og $d$.
* Én av likningene kan være $f(-3) = -2$ siden grafen går gjennom punktet $(-3, -2)$.
::::

::::{answer}
$$
f(-3) = -2 \and f(-2) = 3 \and f(-1) = 2 \and f(0) = 1. 
$$
::::

:::::::::::::


:::::::::::::{part} b
:::{cas-popup}
---
layout: sidebar
---
:::


Bruk CAS til å finne $f(x)$.


:::::{answer}
$$
f(x) = x^3 + 3x^2 + x + 1. 
$$

::::{solution}
Vi skriver inn et generelt funksjonsuttrykk og likningene i CAS, og løser deretter likningssystemet:

:::{figure} ./figurer/oppgaver/oppgave_2/sol.png
---
width: 60%
class: no-click, adaptive-figure
---
:::

som betyr at 

$$
a = 1 \and b = 3 \and c = 1 \and d = 1.
$$

Dermed er 

$$
f(x) = x^3 + 3x^2 + x + 1. 
$$
::::

:::::



:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3


:::::::::::::{part} a

:::{cas-popup}
---
layout: sidebar
---
:::

:::{plot}
width: 350px
align: right
fontsize: 26
function: x**3 - 5 * x**2 + 7 * x - 2, f
xmin: -4
:::



Grafen til en tredjegradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = x^3 - 5x^2 + 7x - 2
$$

::::{solution}
Vi finner fire punkter på grafen til $f$ og setter opp et likningssystem for koeffisientene som vi løser med CAS:

:::{figure} ./figurer/oppgaver/oppgave_3/a_sol.png
---
class: no-click, adaptive-figure
width: 60%
---
:::

Altså er 

$$
a = 1 \and b = -5 \and c = 7 \and d = -2.
$$

som gir at 

$$
f(x) = ax^3 + bx^2 + cx + d = x^3 - 5x^2 + 7x - 2.
$$

::::

:::::




:::::::::::::

:::::::::::::{part} b
:::{cas-popup}
---
layout: sidebar
---
:::


:::{plot}
width: 350px
align: right
fontsize: 26
function: -x**3 - x**2 + 5 * x + 6, g
ymin: -2
ymax: 12
:::


Grafen til en tredjegradsfunksjon $g$ er vist i figuren nedenfor.

Finn $g(x)$.

:::::{answer}
$$
g(x) = -x^3 - x^2 + 5x + 6
$$

::::{solution}
Vi finner fire punkter på grafen til $g$ og setter opp et likningssystem for koeffisientene som vi løser med CAS:

:::{figure} ./figurer/oppgaver/oppgave_3/b_sol.png
---
class: no-click, adaptive-figure
width: 60%
---
::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{cas-popup}
---
layout: sidebar
---
:::

:::{plot}
width: 350px
align: right
fontsize: 26
function: x**3 + 2*x**2 - 5*x - 2, h
ymin: -6
ymax: 11
:::


Grafen til en tredjegradsfunksjon $h$ er vist i figuren til høyre.

Bestem $h(x)$.


:::::{answer}
$$
h(x) = x^3 + 2x^2 - 5x - 2
$$

::::{solution}
Vi finner fire punkter på grafen til $h$ og setter opp et likningssystem for koeffisientene som vi løser med CAS:

:::{figure} ./figurer/oppgaver/oppgave_3/c_sol.png
---
class: no-click, adaptive-figure
width: 60%
---
::::
::::

:::::

:::::::::::::


:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 4

En tredjegradsfunksjon $f$ er gitt ved 

$$
f(x) = -(x + 1)(x - 1)(x - 2).
$$



:::::::::::::{part} a
Bestem nullpunktene til $f$.

::::{answer}
$$
f(x) = 0 \liff x = -1 \or x = 1 \or x = 2.
$$
::::

:::::::::::::


:::::::::::::{part} b
Tegn en fortegnslinje for $f(x)$ inkludert faktorene til $f$.

::::{answer}

:::{signchart-2}
width: 70%
function: -(x + 1) * (x - 1) * (x - 2)
:::

::::

:::::::::::::

:::::::::::::{part} c
Lag en **skisse** av grafen til $f$. 


::::{answer}

:::{plot}
width: 60%
function: -(x + 1) * (x - 1) * (x - 2) 
point: (-1, 0)
text: -1, 0, "$(-1, 0)$", bottom-left
point: (1, 0)
text: 1, 0, "$(1, 0)$", top-left
point: (2, 0)
text: 2, 0, "$(2, 0)$", top-right
ticks: off
fontsize: 24
xmin: -3
xmax: 4
:::

::::

:::::::::::::

:::::::::::::{part} d
Løs ulikheten 

$$
f(x) > 0. 
$$

::::{answer}
$$
x \in \langle \gets, -1 \rangle \cup \langle 1, 2 \rangle.
$$
::::

:::::::::::::

:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 5

En tredjegradsfunksjon $f$ er gitt ved 

$$
f(x) = (x - 1)^2 (x + 3)
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$. 

::::{answer}
$$
f(x) = 0 \liff x = 1 \or x = -3.
$$
::::

:::::::::::::


:::::::::::::{part} b
Tegn et fortegnsskjema for $f(x)$. 

::::{answer}

:::{signchart-2}
width: 70%
function: (x - 1)**2 * (x + 3), f(x) 
:::


::::


:::::::::::::


:::::::::::::{part} c
Tegn en **skisse** av grafen til $f$.

::::{answer}

:::{plot}
width: 60%
function: (x - 1)**2 * (x + 3), f
ticks: off
point: (-3, 0)
text: -3, 0, "$(-3, 0)$", top-left
point: (1, 0)
text: 1, 0, "$(1, 0)$", bottom-right
xmin: -5
xmax: 4
ymax: 12
:::
::::

:::::::::::::


:::::::::::::{part} d
Løs ulikheten

$$
f(x) > 0. 
$$

::::{answer}
$$
x \in \langle -3, \to \rangle \setminus \{1\}
$$
::::

:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 6

En fjerdegradsfunksjon $f$ er gitt ved

$$
f(x) = (x + 1)^2(x - 2)(x - 3). 
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$.

:::{answer}
$$
f(x) = 0 \liff x = -1 \or x = 2 \or x = 3.
$$
:::

:::::::::::::


:::::::::::::{part} b
Tegn et fortegnsskjema for $f(x)$, inkludert faktorene i $f(x)$.

::::{answer}

:::{signchart-2}
width: 70%
function: (x + 1)**2 * (x - 2) * (x - 3), f(x) 
:::

::::

:::::::::::::

:::::::::::::{part} c
Tegn en **skisse** av grafen til $f$.



::::{answer}

:::{plot}
width: 70%
function: (x + 1)**2 * (x - 2) * (x - 3), f
ticks: off
point: (-1, 0)
text: -1, 0, "$(-1, 0)$", bottom-left
point: (2, 0)
text: 2, 0, "$(2, 0)$", bottom-left
point: (3, 0)
text: 3, 0, "$(3, 0)$", bottom-right
xmin: -3
xmax: 5
ymax: 12
:::

::::


:::::::::::::

:::::::::::::{part} d
Løs ulikheten 

$$
f(x) \leq 0. 
$$

:::{answer}

$$
x \in [2, 3] \cup \{-1\}
$$
:::

:::::::::::::


:::::::::::::::
