# Oppgavesamling: Andregradsfunksjoner 1


:::::::::::::::{exercise} Oppgave 1 

:::::::::::::{part} a

:::{plot}
width: 350px
align: right
function: 2*(x - 2) * (x + 3), f
ymin: -14
ystep: 2
fontsize: 26
:::

Grafen til en andregradsfunksjon $f$ er vist til høyre.

Bestem $f(x)$.


:::::{answer}

$$
f(x) = 2(x + 3)(x - 2)
$$
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 350px
align: right
function: (x + 2) ** 2 - 3, g
fontsize: 26
:::

Grafen til en andregradsfunksjon $g$ er vist til høyre.

Bestem $g(x)$.


:::::{answer}

$$
g(x) = (x + 2)^2 - 3
$$
:::::

:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 350px
function: -1/2 * (x + 2) * (x - 4), h
align: right
fontsize: 26
:::


Grafen til en andregradsfunksjon $h$ er vist til høyre.

Bestem $h(x)$.

:::::{answer}

$$
h(x) = -\frac{1}{2} (x + 2) (x - 4)
$$
:::::

:::::::::::::


:::::::::::::{part} d

:::{plot}
width: 350px
function: 3 * (x - 1)**2 + 1, p
align: right
fontsize: 26
ymin: -1
xmin: -2
:::

Grafen til en andregradsfunksjon $p$ er vist til høyre.

Bestem $p(x)$.

:::::{answer}

$$
p(x) = 3(x - 1)^2 + 1
$$
:::::


:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = (x + 2)^2 - 36
$$

Bestem nullpunktene til $f$. 


:::::{answer}
$$
x = -8 \qog x = 4
$$
:::::

:::::::::::::



:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = -2(x + 3)(x - 5)
$$

Bestem koordinatene til grafens ekstremalpunkt.

Avgjør om det er et toppunkt eller bunnpunkt.

:::::{answer}
Toppunkt i $(1, 32)$

:::::
:::::::::::::


:::::::::::::{part} c
Funksjonen $h$ er gitt ved 

$$
h(x) = x^2 - 4x - 21
$$

Bestem koordinatene til skjæringspunktene mellom grafen til $h$ og $x$-aksen.


:::::{answer}
$$
(-3, 0) \qog (7, 0)
$$
:::::
:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 3

Funksjonen $f$ er gitt ved 

$$
f(x) = x^2 - 6x - 7
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$.

:::::{answer}

$$
x = -1 \or x = 7
$$
:::::
:::::::::::::


:::::::::::::{part} b
Løs ulikheten

$$
f(x) \geq 0
$$

:::::{answer}
$$
x \in \real \setminus \langle -1, 7\rangle
$$
:::::

:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til ekstremalpunktet til $f$.

Avgjør om det er et toppunkt eller bunnpunkt.


:::::{answer}
Bunnpunkt i $(3, -16)$
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
Funksjonen $g$ er gitt ved 

$$
g(x) = -2(x - 2)(x + 6)
$$


:::::::::::::{part} a
Løs ulikheten

$$
g(x) \gt 0
$$

:::::{answer}
$$
x \in \langle -6, 2 \rangle
$$

:::::

:::::::::::::

:::::::::::::{part} b
Bestem koordinatene til grafens ekstremalpunkt.

Avgjør om det er et toppunkt eller bunnpunkt.

:::::{answer}
Toppunkt i $(-2, 32)$
:::::

:::::::::::::




:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5

:::::::::::::{part} a
Bestem $a$, $b$ og $c$ slik at likningen er en identitet.

$$
x^2 + 4x - 12 = a(x - b)(x - c)
$$

:::::{answer}
$$
a = 1 \and b = -6 \and c = 2
$$
:::::

:::::::::::::



:::::::::::::{part} b
Bestem $r$, $s$ og $t$ slik at likningen er en identitet.

$$
3(x - 4)^2 + r = s(x - 6)(x - t)
$$


:::::{answer}
$$
r = -12 \and s = 3 \and t = 2
$$
:::::



:::::::::::::



:::::::::::::{part} c
Bestem $a$, $b$ og $c$ slik at likningen er en identitet.

$$
4(x - a)(x + 5) = b(x - c)^2 - 16 
$$

:::::{answer}
$$
a = -1 \and b = 4 \and c = -3 \or a = -9 \and b = 4 \and c = -7
$$
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
Programmet nedenfor regner ut noe.

Bestem verdiene programmet skriver ut når det kjøres.

Sjekk svaret ditt. 

:::{interactive-code}
---
predict:
---
def f(x):
    return x**2 - 5*x - 14

for x in range(-10, 11):
    if f(x) == 0:
        print(x)


:::


:::::::::::::



:::::::::::::{part} b
Programmet nedenfor regner ut noe.

Bestem verdiene som skrives ut av programmet når det kjøres.

Sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
def f(x):
    return x**2 - 6*x + 5

x = -5
while f(x) > f(x + 1):
    x = x + 1

print((x, f(x)))


:::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7
:::::::::::::{part} a
Om en andregradsfunksjon $f$ får du vite at

* Grafen til $f$ har et toppunkt i punktet $(3, 2)$
* Grafen til $f$ skjærer $x$-aksen i punktet $(5, 0)$


Bestem $f(x)$.


:::::{answer}
$$
f(x) = -\dfrac{1}{2}(x - 3)^2 + 2
$$
:::::


:::::::::::::


:::::::::::::{part} b
Om en andregradsfunksjon $g$ får du vite at

* Symmetrilinja til grafen til $g$ er $x = -2$
* Én av løsningene til $g(x) = 0$ er $x = 1$
* Grafen til $g$ skjærer $y$-aksen i $(0, -10)$

Bestem $g(x)$.


:::::{answer}
$$
g(x) = 2(x + 5)(x - 1)
$$
:::::

:::::::::::::


:::::::::::::{part} c
Om en andregradsfunksjon $h$ får du vite at 

* Grafen til $h$ går gjennom punktene $(-2, 5)$ og $(4, 5)$
* Verdimengden til $h$ er $V_h = [-4, \to\rangle$

Bestem $h(x)$.


:::::{answer}
$$
h(x) = (x - 1)^2 - 4
$$
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8

:::::::::::::{part} a
Løs ulikheten

$$
x^2 - 7x \lt 0
$$

:::::{answer}
$$
x \in \langle 0, 7\rangle
$$
:::::

:::::::::::::


:::::::::::::{part} b
Løs ulikheten 

$$
2x^2 - 32 \geq 0
$$

:::::{answer}
$$
x \in \langle \gets, -4] \cup [4, \to \rangle
$$
:::::

:::::::::::::


:::::::::::::{part} c
Løs ulikheten

$$
-x^2 + 3x + 10 \gt 0
$$

:::::{answer}
$$
x \in \langle -2, 5\rangle
$$
:::::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 9
:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = kx^2 - 4x + k \qder k \neq 0
$$

Bestem $k$ slik at grafen til $f$ har nøyaktig ett nullpunkt.


:::::{answer}
$$
k = \pm 2
$$
:::::
:::::::::::::


:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = 4x^2 + 2kx + k
$$

Bestem alle $k$ som gir at $g$ har to nullpunkter.

:::::{answer}
$$
k \in \langle \gets, 0 \rangle \cup \langle 4, \to \rangle
$$
:::::
:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 10


:::::::::::::{part} a
Gitt likningen

$$
a(x + b)^2 = x^2 + 8x + c
$$

Bestem $a$, $b$ og$ c$ slik at likningen blir en identitet.

:::::{answer}
$$
a = 1 \and b = 4 \and c = 16
$$
:::::


:::::::::::::


:::::::::::::{part} b
En andregradsfunksjon $g$ skjærer $x$-aksen én gang og skjærer $y$-aksen i punktet $(0, 16)$.

Bestem et mulig uttrykk for $g(x)$.


:::::{answer}
$$
g(x) = (x - 4)^2
$$
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 11
:::{plot}
width: 100%
align: right
let: s = 4
let: Ax = 0
let: Ay = 0
let: Bx = 3 * s
let: By = 0
let: Cx = Bx
let: Cy = By + 12
let: Dx = Cx - s
let: Dy = Cy
let: Ex = Dx
let: Ey = Dy - s
let: Fx = 0
let: Fy = 12 - s
polygon: (Ax, Ay), (Bx, By), (Cx, Cy), (Dx, Dy), (Ex, Ey), (Fx, Fy), blue, 0.1
ticks: off
axis: off
axis: equal
text: Bx, 5, "$12$", center-right
text: 0.5 * (Cx + Dx), Cy, "$x$", top-center
text: Dx, 0.5 * (Dy + Ey), "$x$", center-left
text: 0.5 * (Fx + Ex), Fy, "$2x$", top-center
fontsize: 28
let: ds = 1
line-segment: (Ax + ds, Ay), (Ax + ds, Ay + ds), solid, gray
line-segment: (Ax + ds, Ay + ds), (Ax, Ay + ds), solid, gray
line-segment: (Bx - ds, By), (Bx - ds, By + ds), solid, gray
line-segment: (Bx - ds, By + ds), (Bx, By + ds), solid, gray
line-segment: (Cx - ds, Cy), (Cx - ds, Cy - ds), solid, gray
line-segment: (Cx - ds, Cy - ds), (Cx, Cy - ds), solid, gray
line-segment: (Dx + ds, Dy), (Dx + ds, Dy - ds), solid, gray
line-segment: (Dx + ds, Dy - ds), (Dx, Dy - ds), solid, gray
line-segment: (Fx + ds, Fy), (Fx + ds, Fy - ds), solid, gray
line-segment: (Fx + ds, Fy - ds), (Fx, Fy - ds), solid, gray
:::

Et hus skal ha form som vist i figuren til høyre.

Alle sidelengder er målt i meter, $\mathrm{m}$.




:::::::::::::{part} a
Bestem et uttrykk $A(x)$ for arealet av huset.


:::::{answer}
$$
A(x) = -2x^2 + 36x
$$
:::::

:::::::::::::


:::::::::::::{part} b
Bestem det største mulige arealet huset kan ha. 

:::::{answer}
$$
A_\mathrm{maks} = 162 \, \mathrm{m}^2
$$
:::::

:::::::::::::



:::::::::::::::