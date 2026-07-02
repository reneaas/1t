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
En andregradsfunksjon $f$ er gitt ved

$$
f(x) = 2x^2 + 4x - 4.
$$


:::::::::::::{part} a
Regn ut $f(-1)$


:::::{answer-2}

$$
f(-1) = -6
$$

::::{solution-2}
$$
\begin{align*}
f(\textcolor{red}{-1}) &= 2 \cdot (\textcolor{red}{-1})^2 + 4 \cdot (\textcolor{red}{-1}) - 4 \\
\\
&= 2 - 4 - 4 \\
\\
&= -6.
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Regn ut $f(0)$.

Hva forteller svaret om grafen til $f$?
:::::::::::::


:::::::::::::{part} c
Regn ut $f(1)$.

:::::::::::::


:::::::::::::{part} d
Hvilken graf nedenfor viser grafen til $f$?


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 32
ymin: -8
ymax: 8
ystep: 2
---
:::{plot}
width: 100%
function: 2*x**2 + 4*x - 4
text: 5, 5, "A", center-center, bbox
:::

:::{plot}
width: 100%
function: 2*x**2 + 4*x - 4
text: 5, 5, "B", center-center, bbox
:::


:::{plot}
width: 100%
function: -(2*x**2 - 4*x - 4)
text: 5, 5, "C", center-center, bbox
:::


:::{plot}
width: 100%
function: -(2*x**2 + 4*x - 4)
text: 5, 5, "D", center-center, bbox
:::

::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise-2} Oppgave 3
:::{plot}
width: 50%
function: (x - 1)**2 - 4, f
fontsize: 28
:::


Grafen til en andregradsfunksjon $f$ er vist i figuren ovenfor.


:::::::::::::{part} a
Bruk grafen til å finne $f(0)$.


:::::::::::::


:::::::::::::{part} b
Bruk grafen til å bestemme $f(3)$.


:::::::::::::



:::::::::::::{part} c
Bruk grafen til å finne $f(1)$.


:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise-2} Oppgave 4

:::{plot}
width: 50%
function: (x + 1)**2 - 9, f
fontsize: 28
ymin: -10
:::

Grafen til en andregradsfunksjon $f(x) = ax^2 + bx + c$ er vist i figuren ovenfor.


:::::::::::::{part} a
Finn symmetrilinja til $f$.


:::::::::::::



:::::::::::::{part} b
Bestem $a$.


:::::::::::::



:::::::::::::{part} c
Finn $c$.

:::::::::::::


:::::::::::::{part} d
Bestem $b$.

:::::::::::::


:::::::::::::{part} e
Finn $f(x)$. 


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise-2} Oppgave 5
En andregradsfunksjon $f$ er gitt ved

$$
f(x) = 2x^2 + 4x - 5.
$$


:::::::::::::{part} a
I hvilket punkt skjærer grafen til $f$ gjennom $y$-aksen?

:::::::::::::


:::::::::::::{part} b
Finn symmetrilinja til grafen til $f$.


:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til ekstremalpunktet til $f$.

Avgjør om det er et toppunkt eller et bunnpunkt.




:::::::::::::



:::::::::::::::



---


:::::::::::::::{exercise-2} Oppgave 6
En andregradsfunksjon $g$ er gitt ved

$$
g(x) = -x^2 + 8x + 6
$$

:::::::::::::{part} a
I hvilket punkt skjærer grafen til $g$ gjennom $y$-aksen?


:::::{answer-2}
$$
(0, 6)
$$
:::::
:::::::::::::


:::::::::::::{part} b
Bestem likningen til symmetrilinja til $g$.


:::::{answer-2}
$$
x = 4
$$
:::::

:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til ekstremalpunktet til $g$.

Avgjør om det er et toppunkt eller et bunnpunkt.

:::::{answer-2}
Toppunkt i $(4, 22)$.
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
:::{plot}
width: 100%
align: right
function: -(x - 2)**2 + 4, g
fontsize: 28 
:::

Grafen til en andregradsfunksjon $g$ er vist i figuren til høyre.

Bestem $g(x)$.

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

:::::::::::::



:::::::::::::{part} d
:::{plot}
width: 100%
align: right
function: (x + 2)**2 + 1, p
fontsize: 28 
:::

Grafen til en andregradsfunksjon $p$ er vist i figuren til høyre.


Bestem $p(x)$.

:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise-2} Oppgave 8

:::::::::::::{part} a
En andregradsfunksjon $f$ er gitt ved 


$$
f(x) = -x^2 + 4x + 3. 
$$

Lag en skisse av grafen til $f$ og marker følgende egenskaper:

* Skjæringspunktet med $y$-aksen
* Symmetrilinja
* Topp- eller bunnpunkt med koordinater



:::::{answer-2}

:::{plot}
width: 70%
ticks: off
function: -x**2 + 4*x + 3, f
fontsize: 22
vline: 2
point: (0, 3)
point: (2, 7)
text: 0, 3, "$(0, 3)$", top-left
text: 2, 7, "$(2, 7)$", top-right
text: 2, -2, "$x = 2$", center-right
ymax: 10
xmax: 8
:::


::::{solution-2}
Koeffisientene til $f(x)$ er 

$$
a = -1 \and b = 4 \and c = 3.
$$

Skjæringspunktet med $y$-aksen
: Konstantleddet er $c = 3$ som betyr at grafen skjærer $y$-aksen i $(0, 3)$.

Symmetrilinja
: Symmetrilinja er gitt ved 

    $$
    x = -\dfrac{b}{2a} = -\dfrac{4}{2 \cdot (-1)} = 2.
    $$

Topp- eller bunnpunkt
: Grafen til $f$ er konkav {poly-icon}`frown` siden $a < 0$. Dermed har grafen et toppunkt. Toppunktet har $x$-koordinaten lik symmetrilinja, altså $x = 2$. Vi setter $x = 2$ inn i $f(x)$ for å finne $y$-koordinaten til toppunktet:

    $$
    f(2) = -1 \cdot 2^2 + 4 \cdot 2 + 3 = 7.
    $$
    Dermed er toppunktet til $f$ gitt ved $(2, 7)$.
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
En andregradsfunksjon $h$ er gitt ved 


$$
h(x) = x^2 - 4
$$

Lag en skisse av grafen til $h$ og marker følgende egenskaper:

* Skjæringspunktet med $y$-aksen
* Symmetrilinja
* Topp- eller bunnpunkt med koordinater




:::::{answer-2}
Grafen har bunnpunkt i samme punkt som skjæringspunktet med $y$-aksen. Derfor markerer vi kun dette punktet i grafen. I tillegg er symmetrilinja $x = 0$ som samsvarer med $y$-aksen.

:::{plot}
width: 70%
function: x**2 - 4, h
ticks: off
fontsize: 22
point: (0, -4)
text: 0, -4, "$(0, -4)$", bottom-left
:::


::::{solution-2}
Koeffisientene til $h(x)$ er 

$$
a = 1 \and b = 0 \and c = -4.
$$

Skjæringspunktet med $y$-aksen
: Konstantleddet er $c = -4$ som betyr at grafen skjærer $y$-aksen i $(0, -4)$.

Symmetrilinja
: Symmetrilinja er gitt ved

$$
x = -\dfrac{b}{2a} = -\dfrac{0}{2 \cdot 1} = 0.
$$

Topp- eller bunnpunkt
: Grafen til $h$ er konveks {poly-icon}`smile` siden $a > 0$. Dermed har grafen et bunnpunkt. Bunnpunktet har $x$-koordinaten lik symmetrilinja, altså $x = 0$. Vi setter $x = 0$ inn i $h(x)$ for å finne $y$-koordinaten til bunnpunktet:

    $$
    h(0) = 0^2 - 4 = -4.
    $$

    Dermed er bunnpunktet til $h$ gitt ved $(0, -4)$.
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




:::::::::::::::{exercise-2} Oppgave 9
:::::::::::::{part} a

:::{plot}
width: 100%
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
width: 100%
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
width: 100%
align: right
ticks: off
fontsize: 26
function: x**2 - 6*x + 9, h
point: (3, 0)
point: (5, 4)
point: (1, 4)
text: 5, 4, "$(5, 4)$", bottom-right
text: 1, 4, "$(1, 4)$", top-right
xmin: -1
ymin: -1
:::


I figuren til høyre vises grafen til en andregradsfunksjon $h$.


Bestem $h(x)$.



:::::{answer-2}

$$
h(x) = x^2 - 6x + 9 = (x - 3)^2
$$

::::{solution-2}
Funksjonsuttrykket kan skrives på formen

$$
h(x) = ax^2 + bx + c.
$$

Siden punktene $(1, 4)$ og $(5, 4)$ har samme $y$-koordinat, vil symmetrilinja ligge midt mellom de punktene. Det kan vi regne ut ved å ta gjennomsnittet av $x$-koordinatene:

$$
x_0 = \dfrac{1 + 5}{2} = \dfrac{6}{2} = 3
$$

Da får vi at

$$
x_0 = -\dfrac{b}{2a} \liff 3 = -\dfrac{b}{2a}
$$

Altså må 

$$
b = -6a
$$

Så langt kan vi skrive $h(x)$ som

$$
h(x) = ax^2 - 6ax + c
$$

Bunnpunktet til grafen ligger på $x$-aksen, med koordinatene $(3, 0)$ som betyr at 

$$
h(3) = 0
$$

$$
a\cdot 3^2 - 6a \cdot 3 + c = 0
$$

$$
9a - 18a + c = 0
$$

$$
c = 9a
$$

Altså er funksjonsuttrykket 

$$
h(x) = ax^2 - 6ax + 9a = a(x^2 - 6x + 9) = a(x - 3)^2 
$$

Til slutt bruker vi ett av de andre punktene til å finne $a$. Vi velger $(1, 4)$: 

$$
h(1) = 4
$$

$$
a(1 - 3)^2 = 4
$$

$$
4a = 4
$$

$$
a = 1
$$

Dermed er funksjonsuttrykket

$$
h(x) = x^2 - 6x + 9 = (x - 3)^2
$$
::::
:::::

:::::::::::::



:::::::::::::{part} d
:::{plot}
width: 100%
align: right
fontsize: 26
ticks: off
function: -2*x**2 + 2*x + 12, p
point: (-2, 0)
point: (3, 0)
point: (0, 12)
text: -2, 0, "$(-2, 0)$", top-left
text: 3, 0, "$(3, 0)$", top-right
text: 0, 12, "$(0, 12)$", top-left
ymax: 14
:::


I figuren til høyre vises en andregradsfunksjon $p$.

Bestem $p(x)$.



:::::{answer-2}
$$
p(x) = -2x^2 + 2x + 12
$$


::::{solution-2}
Funksjonsuttrykket kan skrives som

$$
p(x) = ax^2 + bx + c
$$


Siden grafen til $p$ går skjærer gjennom $y$-aksen i $(0, 12)$ er $c = 12$.

Vi kan merke oss at grafen til $p$ skjærer $x$-aksen i $(-2, 0)$ og $(3, 0)$. Symmetrilinja vil ligge midt mellom disse to punktene som vi kan finne ved å ta gjennomsnittet av $x$-koordinatene:

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
p(x) = ax^2 - ax + 12
$$

Vi bruker ett av de nullpunktene til å finne $a$. Vi velger $(3, 0)$:

$$
p(3) = 0
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
p(x) = -2x^2 + 2x + 12
$$
::::
:::::


:::::::::::::



:::::::::::::::



