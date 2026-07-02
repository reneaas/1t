# Oppgaver: Den deriverte

:::::::::::::::{exercise} Oppgave 1

Deriver polynomfunksjonene.


:::::::::::::{part} a
$$
f(x) = x^2 - 3x + 2
$$

:::::{answer}
$$
f'(x) = 2x - 3
$$
:::::
:::::::::::::


:::::::::::::{part} b
$$
g(x) = -x^3 + 4x + 1
$$

:::::{answer}
$$
g'(x) = -3x^2 + 4
$$
:::::

:::::::::::::


:::::::::::::{part} c
$$
h(x) = 2x^4 - 3x^2 + 1
$$

:::::{answer}
$$
h'(x) = 8x^3 - 6x
$$
:::::

:::::::::::::


:::::::::::::{part} d
$$
p(x) = 3x^5 - 2x^3 + 4x
$$

:::::{answer}
$$
p'(x) = 15x^4 - 6x^2 + 4
$$
:::::

:::::::::::::

:::::::::::::::


::::::::::::::{exercise} Oppgave 2

:::::::::::{part} a
En polynomfunksjon er gitt ved 

$$
f(x) = -x^2 + 3x + 1
$$

Bestem likningen til tangenten i $(2, f(2))$. 

:::::{answer}
$$
y = -x + 5
$$
:::::

:::::::::::


:::::::::::{part} b
En polynomfunksjon er gitt ved 

$$
g(x) = 2x^3 - 3x^2 - 5x + 6
$$

Bestem likningen til tangenten i $(1, g(1))$.

:::::{answer}
$$
y = -5x + 5
$$
:::::

:::::::::::

:::::::::::{part} c
En polynomfunksjon er gitt ved 

$$
h(x) = 3x^4 - 2x^2 + 1
$$

Bestem likningen til tangenten i $(0, h(0))$.

:::::{answer}
$$
y = 1
$$
:::::

:::::::::::


:::::::::::{part} d
En polynomfunksjon er gitt ved 

$$
p(x) = 4x^5 - 3x^3 + 2x
$$

Bestem likningen til tangenten i $(-1, p(-1))$.


:::::{answer}
$$
y = 13x + 10.
$$
:::::
:::::::::::


::::::::::::



::::::::::::::



---


:::::::::::::::{exercise} Oppgave 3

:::::::::::::{part} a
:::{plot}
width: 320px
align: right
fontsize: 26
function: -(x - 1) * (x - 3), f
:::



Grafen til en andregradsfunksjon $f$ vises til høyre.


Tegn en fortegnslinje for $f'(x)$.


:::::{answer}


:::{signchart-2}
width: 70%
function: -2 * (x - 2), f'(x)
factors: false
:::


::::{solution}
Grafen til $f$ har et toppunkt i $x = 2$. Dette svarer til nullpunktet til $f'$. 

Grafen til $f$ stiger før $x = 2$ som betyr at $f'(x) > 0$ for $x \lt 2$. Grafen til $f$ synker etter $x = 2$ som betyr at $f'(x) < 0$ for $x > 2$. En fortegnslinje for $f'(x)$ vil da være


:::{signchart-2}
width: 70%
function: 2 * (x - 2), f'(x)
factors: false
:::

::::
:::::


:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 320px
align: right
fontsize: 26
function: 1/3 * x**3 + 1/2 * x**2 - 6*x - 4, g
ymax: 12
ymin: -12
ystep: 2
:::


Grafen til en tredegradsfunksjon $g$ er vist i figuren til høyre.

Tegn en fortegnslinje for $g'(x)$.


:::::{answer}

:::{signchart-2}
width: 70%
function: (x + 3) * (x - 2), g'(x)
factors: false
:::


::::{solution}
Grafen til $g$ har et toppunkt når $x = -3$ og et bunnpunkt når $x = 2$. Dette svarer til nullpunktene til $g'$.

Grafen til $g$ stiger før $x = -3$ som betyr at $g'(x) > 0$ for $x \lt -3$. 

Grafen til $g$ synker mellom $x = -3$ og $x = 2$ som betyr at $g'(x) < 0$ for $-3 \lt x \lt 2$. 

Grafen til $g$ stiger etter $x = 2$ som betyr at $g'(x) > 0$ for $x > 2$. En fortegnslinje for $g'(x)$ vil da være

:::{signchart-2}
width: 70%
function: (x + 3) * (x - 2), g'(x)
factors: false
:::

::::
:::::


:::::::::::::



:::::::::::::{part} c
:::{plot}
width: 320px
align: right
fontsize: 26
function: -(1/3 * x**3 - 1/2 * x**2 - 6*x - 1), h
ymin: -10
ymax: 16
ystep: 2
:::


Grafen til en tredjegradsfunksjon $h$ er vist i figuren til høyre.


Tegn en fortegnslinje for $h'(x)$.



:::::{answer}
:::{signchart-2}
width: 70%
function: -(x + 2) * (x - 3), h'(x) 
factors: false
:::

::::{solution}
Grafen til $h$ har et bunnpunkt når $x = -2$ og et toppunkt når $x = 3$. Dette svarer til nullpunktene til $h'$.

Grafen til $h$ synker før $x = -2$ som betyr at $h'(x) < 0$ for $x \lt -2$. 

Grafen til $h$ stiger mellom $x = -2$ og $x = 3$ som betyr at $h'(x) > 0$ for $-2 \lt x \lt 3$.

Grafen til $h$ synker etter $x = 3$ som betyr at $h'(x) < 0$ for $x > 3$. En fortegnslinje for $h'(x)$ vil da være

:::{signchart-2}
width: 70%
function: -(x + 2) * (x - 3), h'(x) 
factors: false
:::
::::

:::::

:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a
Funksjonen $f$ er gitt ved

$$
f(x) = x^3 - 3x^2 - 9x
$$

Finn koordinatene til toppunktet og bunnpunktet til grafen til $f$.


:::::{answer}
Grafen har et toppunkt i $(-1, 5)$ og et bunnpunkt i $(3, -27)$.

::::{solution}
For å finne ekstremalpunktene til grafen til $f$, må vi løse $f'(x) = 0$. Vi deriverer først:

$$
f'(x) = (x^3 - 3x^2 - 9x)' = 3x^2 - 6x - 9
$$

Så løser vi likningen:

$$
f'(x) = 0 \liff 3x^2 - 6x - 9 = 0
$$

som når vi deler med $3$ på hver side gir 

$$
x^2 - 2x - 3 = 0
$$

Vi løser likningen med $abc$-formelen:

$$
x = \frac{2 \pm \sqrt{4 + 12}}{2} = \frac{2 \pm \sqrt{16}}{2} = \frac{2 \pm 4}{2}
$$

som gir

$$
x = -1 \or x = 3
$$

Så regner vi ut $f(x)$ for disse to verdiene:


$$
\begin{align*}
f(-1) &= (-1)^3 - 3(-1)^2 - 9(-1) = -1 - 3 + 9 = 5 \\
\\
f(3) &= 3^3 - 3(3)^2 - 9(3) = 27 - 27 - 27 = -27
\end{align*}
$$

Altså ser vi at grafen har et toppunkt i $(-1, 5)$ og et bunnpunkt i $(3, -27)$.


::::
:::::

:::::::::::::


:::::::::::::{part} b
En fjerdegradsfunksjon $g$ er gitt ved

$$
g(x) = 3x^4 - 8x^3 - 6x^2 + 24x + 12
$$

Finn koordinatene til eventuelle topp- og bunnpunkter på grafen til $g$.

:::::{answer}
Bunnpunkter i $(-1, -7)$ og $(2, 20)$, og et toppunkt i $(1, 25)$.

::::{solution}
Ekstremalpunktene til $g$ vil være punkter der $g'(x) = 0$. Vi deriverer først:

$$
g'(x) = (3x^4 - 8x^3 - 6x^2 + 24x + 12)' = 12x^3 - 24x^2 - 12x + 24
$$

Så løser vi likningen $g'(x) = 0$:

$$
12x^3 - 24x^2 - 12x + 24 = 0
$$

Vi deler med $12$ på hver side av likningen:

$$
x^3 - 2x^2 - x + 2 = 0
$$

De mulige heltallige løsningene her vil være

$$
x = \pm 1, \pm 2
$$

siden det er disse verdiene som deler konstantleddet i tredjegradsuttrykket. Vi prøver oss frem med Horner-skjema. Vi starter med $x = 1$:

:::{horner}
---
p: x^3 - 2x^2 - x + 2
x: 1
width: 40% 
---
:::

Vi får $0$ i rest som betyr at $x = 1$ er en løsning. Fra Horner-skjema kan vi se at kvotienten er $(x^2 - x - 2)$ som betyr at vi kan faktorisere tredjegradspolynomet som

$$
x^3 - 2x^2 - x + 2 = (x - 1)(x^2 - x - 2)
$$

Nå gjenstår det bare å finne røttene til andregradspolynomet som vi gjør med $abc$-formelen:

$$
x = \frac{1 \pm \sqrt{1^2 - 4\cdot 1 \cdot (-2)}}{2\cdot 1} = \frac{1 \pm \sqrt{9}}{2} = \frac{1 \pm 3}{2}
$$

som gir

$$
x = -1 \or x = 2
$$

Dermed kan vi nullpunktsfaktorisere $g'(x)$ som

$$
g'(x) = 12(x - 1)(x + 1)(x - 2)
$$

Vi tegner et fortegnsskjema for å avgjøre hvilke punkter som er toppunkter og hvilke som er bunnpunkter:


:::{signchart-2}
width: 70%
function: 12 * (x - 1) * (x + 1) * (x - 2), g'(x)
:::

Når $g'(x)$ er negativ før og positiv etter et punkt, betyr det at grafen til $g$ har et bunnpunkt der. Dette skjer i både $x = -1$ og $x = 2$. 

Når $g'(x)$ er positiv før og negativ etter et punkt, betyr det at grafen til $g$ har et toppunkt der. Dette skjer i $x = 1$.

Vi regner ut $y$-koordinatene til disse punktene:

$$
\begin{align*}
g(-1) &= 3(-1)^4 - 8(-1)^3 - 6(-1)^2 + 24(-1) + 12 = 3 + 8 - 6 - 24 + 12 = -7 \\
\\
g(1) &= 3(1)^4 - 8(1)^3 - 6(1)^2 + 24(1) + 12 = 3 - 8 - 6 + 24 + 12 = 25 \\
\\
g(2) &= 3(2)^4 - 8(2)^3 - 6(2)^2 + 24(2) + 12 = 48 - 64 - 24 + 48 + 12 = 20
\end{align*}
$$

Dermed har grafen til $g$ bunnpunkter i $(-1, -7)$ og $(2, 20)$, og et toppunkt i $(1, 25)$.



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
fontsize: 26
function: x * (x - 2), f
:::


Grafen til en polynomfunksjon $f$ er vist i figuren til høyre.

Tegn en skisse av grafen til $f'$.


:::::{answer}
:::{plot}
width: 60%
fontsize: 24
function: 2*x - 2, f'
ticks: off
point: (1, 0)
text: 1, 0, "$(1, 0)$", bottom-right
:::

:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 320px
align: right
fontsize: 26
function: 1/3 * x**3 - 1/2 * x**2 - 2*x + 4, g
:::


Grafen til en polynomfunksjon $g$ er vist til høyre.

Tegn en skisse av grafen til $g'$.



:::::{answer}
:::{plot}
width: 60%
fontsize: 24
function: (x + 1) * (x - 2), g'
ticks: off
point: (-1, 0)
text: -1, 0, "$(-1, 0)$", bottom-left
point: (2, 0)
text: 2, 0, "$(2, 0)$", bottom-right
:::

:::::


:::::::::::::



:::::::::::::{part} c
:::{plot}
width: 320px
align: right
fontsize: 26
function: -1/3 * x**3 + 4*x - 1, h
ymin: -8
ymax: 8
:::



Grafen til en polynomfunksjon $h$ er vist i figuren til høyre.

Tegn en skisse av grafen til $h'$.


:::::{answer}
:::{plot}
width: 70%
function: -(x + 2) * (x - 2), h'
ticks: off
point: (-2, 0)
text: -2, 0, "$(-2, 0)$", top-left
point: (2, 0)
text: 2, 0, "$(2, 0)$", top-right
:::

:::::

:::::::::::::




:::::::::::::::





---





:::::::::::::::{exercise} Oppgave 6
En funksjon $f$ er gitt ved 

$$
f(x) = x^3 - 3x^2 + 1.
$$

Avgjør hvilken av grafene nedenfor som viser grafen til $f$.


::::{multi-plot2}
---
rows: 2
cols: 2
ymin: -10
ymax: 10
ticks: off
fontsize: 30
---
:::{plot}
function: -x**3 + 3 * x**2 - 1
text: 5, 8, "A", center-center, bbox
:::

:::{plot}
function: x**3 + 3 * x**2 - 4
text: 5, 8, "B", center-center, bbox
:::


:::{plot}
function: x**3 - 3 * x**2 + 1
text: 5, 8, "C", center-center, bbox
:::


:::{plot}
function: x**3 - 6*x + 2
text: 5, 8, "D", center-center, bbox
:::

::::


::::{answer}
Graf C.
::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
For en funksjon $f$, er den deriverte $f'$ gitt ved

$$
f'(x) = x^3 - 2x^2 - x + 2.
$$

Avgjør hvilken av grafene nedenfor som viser grafen til $f$.

::::{multi-plot2}
---
rows: 2
cols: 2
ymin: -8
ymax: 8
ticks: off
grid: off
fontsize: 30
---
:::{plot}
function: 1/4 * x**4 + 2/3 * x**3 - 1/2 * x**2 - 2*x - 5
text: 5, 6, "A", center-center, bbox
:::

:::{plot}
function: -(1/4 * x**4 + 2/3 * x**3 - 1/2 * x**2 - 2*x - 5)
text: 5, 6, "B", center-center, bbox
:::

:::{plot}
function: 1/4 * x**4 - 2/3 * x**3 - 1/2 * x**2 + 2*x - 5
text: 5, 6, "C", center-center, bbox
:::

:::{plot}
function: -(1/4 * x**4 - 2/3 * x**3 - 1/2 * x**2 + 2*x - 5)
text: 5, 6, "D", center-center, bbox
:::

::::


::::{answer}
Graf C.
::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 8
Funksjonen $f$ er gitt ved

$$
f(x) = 2x^3 - 3x^2 - 12x + 6.
$$

Avgjør hvilken av grafene nedenfor som viser grafen til $f'$.


::::{multi-plot2}
---
rows: 2
cols: 2
ymax: 16
ymin: -16
ticks: off
fontsize: 30
---

:::{plot}
function: -6 * (x - 2) * (x + 1)
text: 5, 15, "A", center-center, bbox 
:::


:::{plot}
function: -6 * (x + 2) * (x - 1)
text: 5, 15, "B", center-center, bbox 
:::

:::{plot}
function: 6 * (x + 2) * (x - 1)
text: 5, 15, "C", center-center, bbox 
:::

:::{plot}
function: 6 * (x - 2) * (x + 1)
text: 5, 15, "D", center-center, bbox 
:::

::::


::::{answer}
Graf D.
::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9
:::{plot}
width: 320px
align: right
fontsize: 26
function: (x + 1) * (x - 2), f'
:::


Grafen til $f'$ vises til høyre.

Grafen til $f$ går gjennom punktet $(0, 2)$.

Finn $f(x)$.

:::::{answer}
$$
f(x) = \dfrac{1}{3}x^3 - \dfrac{1}{2}x^2 - 2x + 2
$$
:::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 10
:::{cas-popup}
---
layout: sidebar
---
:::


Om en tredjegradsfunksjon $f$ får du vite at

* Grafen til $f$ har et toppunkt i $(1, 4)$.
* Grafen til $f$ skjærer $x$-aksen i $(3, 0)$.
* Grafen til $f$ har en tangent i $(2, f(2))$ som stigningstall $-4$.

Bestem $f(x)$.


:::::{answer}
$$
f(x) = 2x^3 - 11x^2 + 16x - 3
$$
:::::

:::::::::::::::

