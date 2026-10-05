# Oppgaver: Funksjonsbegrepet




:::::::::::::::{exercise} Oppgave 1
Ta quizen!



::::::::{quiz-2}
:::::::{quiz-question}
Hvilket punkt er vist i koordinatsystemet nedenfor?

:::{plot}
width: 60%
point: (2, 3)
fontsize: 24
:::


::::::{quiz-answer}
---
correct:
---
$$
(2, 3)
$$
::::::


::::::{quiz-answer}
$$
(3, 2)
$$
::::::


::::::{quiz-answer}
$$
(-2, 3)
$$
::::::


::::::{quiz-answer}
$$
(3, -2)
$$
::::::

:::::::




:::::::{quiz-question}
Hvilket punkt er vist i koordinatsystemet nedenfor?

:::{plot}
width: 60%
point: (-1, 2)
fontsize: 24
:::



::::::{quiz-answer}
---
correct:
---
$$
(-1, 2)
$$
::::::


::::::{quiz-answer}
$$
(-2, 1)
$$
::::::


::::::{quiz-answer}
$$
(2, -1)
$$
::::::


::::::{quiz-answer}
$$
(1, -2)
$$
::::::



:::::::


:::::::{quiz-question}
Hvilket punkt er vist i koordinatsystemet nedenfor?


::::::{quiz-answer}
---
correct:
---
$$
(-3, -2)
$$
::::::


::::::{quiz-answer}
$$
(2, 3)
$$
::::::


::::::{quiz-answer}
$$
(-2, -3)
$$
::::::


::::::{quiz-answer}
$$
(3, 2)
$$
::::::


:::::::



:::::::{quiz-question}
Hvilket punkt er vist i koordinatsystemet nedenfor?


:::{plot}
width: 60%
point: (-3, 0)
fontsize: 24 
:::


::::::{quiz-answer}
---
correct:
---
$$
(-3, 0)
$$
::::::


::::::{quiz-answer}
$$
(0, -3)
$$
::::::


::::::{quiz-answer}
$$
(3, 0)
$$
::::::


::::::{quiz-answer}
$$
(0, 3)
$$
::::::




:::::::


:::::::{quiz-question}
Hvilket punkt er vist i koordinatsystemet nedenfor?


:::{plot}
width: 60%
point: (0, 4)
fontsize: 24
:::

::::::{quiz-answer}
---
correct:
---
$$
(0, 4)
$$
::::::


::::::{quiz-answer}
$$
(4, 0)
$$
::::::


::::::{quiz-answer}
$$
(-4, 0)
$$
::::::


::::::{quiz-answer}
$$
(0, -4)
$$
::::::



:::::::


:::::::{quiz-question}
Hvilket punkt er vist i koordinatsystemet nedenfor?

:::{plot}
width: 60%
point: (4, -3)
fontsize: 24
:::


::::::{quiz-answer}
---
correct:
---
$$
(4, -3)
$$
::::::


::::::{quiz-answer}
$$
(-3, 4)
$$
::::::


::::::{quiz-answer}
$$
(-4, 3)
$$
::::::


::::::{quiz-answer}
$$
(3, -4)
$$
::::::



:::::::


::::::::


:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 2

I figuren nedenfor vises seks punkter $A$, $B$, $C$, $D$, $E$ og $F$.


:::{plot}
point: (-1, 3)
text: -1, 3, "$A$", center-left
point: (-2, 0)
text: -2, 0, "$B$", top-center
point: (1, 3)
text: 1, 3, "$C$", center-right
point: (0, -2)
text: 0, -2, "$D$", center-right
point: (3, 1)
text: 3, 1, "$E$", center-right
point: (3, -1)
text: 3, -1, "$F$", bottom-right
width: 70%
:::




Sett sammen riktig koordinater $(x, y)$ med riktig punktnavn.


:::{pair-puzzle}
$A$ : $(-1, 3)$
$B$ : $(-2, 0)$
$C$ : $(1, 3)$
$D$ : $(0, -2)$
$E$ : $(3, 1)$
$F$ : $(3, -1)$
:::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
Funksjonen $f$ er gitt ved 

$$
f(x) = 2x + 3
$$


:::::::::::::{part} a
Lag ferdig verditabellen nedenfor.

:::{table}
---
transpose:
width: 80%
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
transpose:
width: 80%
---
labels: $x$, $f(x)$
$-2$, $-1$,
$-1$, $1$,
$0$, $3$,
$1$, $5$,
$2$, $7$,
:::
:::::

:::::::::::::


:::::::::::::{part} b
Tegn grafen til funksjonen i et koordinatsystem.

Marker punktene fra verditabellen på grafen.

:::::{answer}

:::{plot}
width: 70%
function: 2*x + 3, f, (-2, 2)
xmin: -3
xmax: 3
ymax: 8
ymin: -2
repeat: n=-2..2; point: (n, f(n))
:::

:::::




:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = 2^x + 3x
$$


Bestem $f(2)$.

:::::{answer}
$$
f(2) = 10
$$
:::::
:::::::::::::



:::::::::::::{part} b

:::{plot}
width: 100%
align: right
function: 7/12 * x**4 + 1/6 * x**3 - 43/12 * x**2 - 13/6 * x + 4, g
xmin: -4
xmax: 4
fontsize: 24
:::


Grafen til funksjonen $g$ er vist til høyre.

Bruk grafen til å bestemme $g(-1)$.


:::::{answer}
$$
g(-1) = 3
$$
:::::
:::::::::::::



:::::::::::::{part} c
Funksjonen $h$ er gitt ved 

$$
h(x) = (x - 2)^2 - 2
$$


Bestem $h(4)$.

:::::{answer}
$$
h(4) = 2
$$
:::::


:::::::::::::



:::::::::::::{part} d

:::{plot}
nocache:
align: right
width: 100%
function: 4 * 2**-abs(x), (-3, 3], p, blue
function-endpoints: true
xmin: -4
xmax: 4
ymin: 0
ymax: 6
:::



Grafen til funksjonen $p$ er vist til høyre.


Bestem $p(-2)$ og $p(1)$.


:::::{answer}
$$
\begin{align*}
p(-2) &= 1 \\
\\
p(1) &= 2
\end{align*}
$$
:::::


:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5
Grafen til en funksjon $f$ er vist nedenfor.

:::{plot}
width: 60%
function: (x + 2) * (x - 1)**2, f
xmax: 4
xmin: -4
:::


Bruk grafen til å løse oppgavene nedenfor.

:::::::::::::{part} a
Lag ferdig verditabellen nedenfor.

:::{table}
---
transpose:
width: 80%
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
transpose:
width: 80%
---
labels: $x$, $f(x)$
$-2$, $0$
$-1$, $4$
$0$, $2$
$1$, $0$
$2$, $4$
:::
:::::


:::::::::::::



:::::::::::::{part} b
Bestem koordinatene til $f$ sine nullpunkter.


:::::{answer}
$(-2, 0)$ og $(1, 0)$.
:::::

:::::::::::::



:::::::::::::{part} c
Bestem koordinatene til $f$ sine topp- og bunnpunkter.

:::::{answer}
* Toppunkt $(-1, 4)$
* Bunnpunkt $(1, 0)$.
:::::

:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6
::::::::{quiz-2}
:::::::{quiz-question}
Grafen til $f$ er vist nedenfor.

:::{plot}
width: 60%
function: (x + 1) * (x - 1)**2, f, [-1, 2), blue
function-endpoints: true
xmin: -3
xmax: 4
ymin: -2
ymax: 5
:::

Hvilket alternativ viser **definisjonsmengden** til $f$?


::::::{quiz-answer}
---
correct:
---
$$
D_f = [-1, 2\rangle
$$
::::::


::::::{quiz-answer}
$$
D_f = [-1, 2]
$$
::::::


::::::{quiz-answer}
$$
D_f = [0, 3\rangle
$$
::::::


::::::{quiz-answer}
$$
D_f = [1, 3]
$$
::::::




:::::::



:::::::{quiz-question}
Grafen til $g$ er vist nedenfor.


:::{plot}
width: 60%
function: (x + 1)**2 - 5, g, (-4, 1], blue
function-endpoints: true
xmin: -6
xmax: 5
ymin: -7
ymax: 6
:::

Hvilket alternativ viser **definisjonsmengden** til $g$?


::::::{quiz-answer}
---
correct:
---
$$
D_g = \langle -4, 1]
$$
::::::


::::::{quiz-answer}
$$
D_g = [-5, 4\rangle
$$
::::::


::::::{quiz-answer}
$$
D_g = \langle -1, 4]
$$
::::::


::::::{quiz-answer}
$$
D_g = [-4, 1\rangle 
$$
::::::


:::::::



:::::::{quiz-question}
Grafen til funksjonen $h$ er vist nedenfor.

:::{plot}
width: 60%
function: -(x - 2)**2 + 6, h, (-1, 4], blue
function-endpoints: true
ymax: 8
:::


Hvilket alternativ viser **verdimengden** til $h$?


::::::{quiz-answer}
---
correct:
---
$$
V_h = \langle -3, 6]
$$
::::::



::::::{quiz-answer}
$$
V_h = \langle -3, 2]
$$
::::::



::::::{quiz-answer}
$$
V_h = \langle -1, 4]
$$
::::::



::::::{quiz-answer}
$$
V_h = \langle -1, 2]
$$
::::::


:::::::




:::::::{quiz-question}
Grafen til funksjonen $p$ er vist nedenfor.


:::{plot}
width: 60%
function: 1/2 * (x - 2)**2 * (x + 1) + 3, p, (-2, 2), blue
function-endpoints: true
xmax: 4
xmin: -4
:::


Hvilket alternativ viser **verdimengden** til $p$?


::::::{quiz-answer}
---
correct:
---
$$
V_p = \langle -5, 5]
$$
::::::


::::::{quiz-answer}
$$
V_p = \langle -5, 3 \rangle
$$
::::::


::::::{quiz-answer}
$$
V_p = \langle -2, 2\rangle
$$
::::::


::::::{quiz-answer}
$$
V_p = \langle 2, 5\rangle
$$
::::::

:::::::


:::::::{quiz-question}
Grafen til en funksjon $k$ er vist nedenfor.


:::{plot}
width: 60%
function: (x + 2) ** 2 * (x - 2) ** 2 - 4, k, [-2, 2), blue
function-endpoints: true
ymax: 16
ymin: -8
xmin: -4
xmax: 4
ystep: 2
:::

Hvilket alternativ viser **verdimengden** til $k$?


::::::{quiz-answer}
---
correct:
---
$$
V_k = [-4, 12]
$$
::::::


::::::{quiz-answer}
$$
V_k = \langle -4, -4\rangle
$$
::::::

::::::{quiz-answer}
$$
V_k = \langle -4, 12]
$$
::::::

::::::{quiz-answer}
$$
V_k = \langle -2, 2\rangle
$$
::::::

:::::::


::::::::
:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7
:::::::::::::{part} a
Funksjonen $f$ er representert i programmet nedenfor.

Regn ut hvilken verdi programmet skriver ut. Sjekk svaret ditt.

:::{interactive-code}
---
predict:
---
def f(x):
    return x**2 - 3*x + 2

x = 3
y = f(x)

print(y)
:::
:::::::::::::



:::::::::::::{part} b
Funksjonen $g$ er representert i programmet nedenfor.

Regn ut hvilken verdi programmet skriver ut. Sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
def g(x):
    return 3**x - 2*x + 5


x = 2
y = g(x)

print(y)
:::


:::::::::::::



:::::::::::::{part} c
Funksjonen $h$ er representert i programmet nedenfor. 

Bestem hvilke verdier som skrives ut av programmet. Sjekk svaret ditt. 


:::{interactive-code}
---
predict:
---
def h(x):
    return x**2 - 2*x


for x in range(-2, 3):
    y = h(x)

    print(y)
:::


:::::::::::::


:::::::::::::{part} d
Funksjonen $p$ er representert i programmet nedenfor.

Bestem hvilke verdier som skrives ut av programmet. Sjekk svaret ditt. 


:::{interactive-code}
---
predict:
---
def p(x):
    return (x - 2) * (x + 1)


for x in range(-1, 4):
    print(p(x))



:::

:::::::::::::




:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 8

:::{plot}
width: 350px
align: right
function: -(x + 2) ** 2 * (x - 1) + 2, f, [-3, 1), blue
function-endpoints: true
ymin: 0 
ymax: 8
xmax: 3
xmin: -5
fontsize: 24
:::



Grafen til en funksjon $f$ er vist til høyre.

Bruk grafen til å løse oppgavene nedenfor.



:::::::::::::{part} a
Lag ferdig verditabellen nedenfor.


:::{table}
---
transpose:
width: 70%
---
labels: $x$, $f(x)$
$-3$,
$-2$,
$-1$,
$0$,
:::


:::::{answer}
:::{table}
---
transpose:
width: 70%
---
labels: $x$, $f(x)$
$-3$, $6$
$-2$, $2$
$-1$, $4$
$0$, $6$
:::
:::::



:::::::::::::



:::::::::::::{part} b
Bestem koordinatene til $f$ sine topp- og bunnpunkter. 


:::::{answer}
* Toppunkt i $(0, 6)$
* Bunnpunkt i $(-2, 2)$
:::::


:::::::::::::


:::::::::::::{part} c
Bestem definisjonsmengden og verdimengden til $f$.

:::::{answer}
* Definisjonsmengde $D_f = [-3, 1\rangle$
* Verdimengde $V_f = [2, 6]$
:::::


:::::::::::::


:::::::::::::::