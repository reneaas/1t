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


::::{solution}
Grafen til $f$ skjærer $x$-aksen i $(-3, 0)$ og $(2, 0)$ som betyr at vi kan skrive 

$$
f(x) = a(x + 3)(x - 2)
$$

Grafen til $f$ går gjennom punktet $(0, -12)$ som gir at 

$$
f(0) = -12
$$

$$
a(0 + 3)(0 - 2) = -12
$$

$$
-6a = -12 \liff a = 2
$$

Dermed er 

$$
f(x) = 2(x + 3)(x - 2)
$$

::::


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


::::{solution}
Grafen til $g$ har et bunnpunkt i $(-2, -3)$  som betyr at 

$$
g(x) = a(x + 2)^2 - 3
$$

Vi kan også merke oss at grafen til $g$ går gjennom punktet $(0, 1)$ som betyr at 

$$
g(0) = 1
$$

$$
a(0 + 2)^2 - 3 = 1
$$

$$
4a - 3 = 1
$$

$$
4a = 4 \liff a = 1
$$

Dermed er 

$$
g(x) = (x + 2)^2 - 3
$$

::::


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


::::{solution}
Grafen til $h$ er nullpunkter i $x = -2$ og $x = 4$ som betyr at 

$$
h(x) = a(x + 2)(x - 4)
$$

Grafen til $h$ går gjennom punktet $(0, 4)$ som gir at 

$$
h(0) = 4 
$$

$$
a(0 + 2)(0 - 4) = 4
$$

$$
-8a = 4 \liff a = -\dfrac{1}{2}
$$

Dermed er 

$$
h(x) = -\dfrac{1}{2}(x + 2)(x - 4)
$$

::::


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


::::{solution}
Grafen til $p$ har et bunnpunkt i $(1, 1)$ som betyr at 

$$
p(x) = a(x - 1)^2 + 1
$$

Videre går grafen gjennom punktet $(0, 4)$ som gir at 

$$
p(0) = 4
$$

$$
a(0 - 1)^2 + 1 = 4
$$

$$
a + 1 = 4 \liff a = 3
$$

Dermed er 

$$
p(x) = 3(x - 1)^2 + 1
$$
::::


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

::::{solution}
Vi løser likningen $f(x) = 0$:

$$
(x + 2)^2 - 36 = 0
$$

$$
(x + 2)^2 = 36
$$

$$
x + 2 \pm 6
$$

$$
x = -2 \pm 6 = \begin{cases} 4 \\ \\ -8 \end{cases}
$$

Dermed er nullpunktene til $f$ gitt ved 

$$
x = -8 \qog x = 4
$$
::::

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


::::{solution}
Vi har at $x$-koordinaten til grafen til $g$ er lik gjennomsnittet av nullpunktene $x = -3$ og $x = 5$:

$$
x_0 = \dfrac{-3 + 5}{2} = 1
$$

Vi regner så ut $y$-koordinaten:

$$
y_0 = f(1) = -2(1 + 3)(1 - 5) = -2 \cdot 4 \cdot (-4) = 32
$$

Grafen har et toppunkt siden $a$ er negativ som betyr at grafen har et toppunkt i $(1, 32)$
::::
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


::::{solution}
Vi løser $h(x) = 0$:

$$
x^2 - 4x = 21
$$

$$
x^2 - 4x + 2^2 = 21 + 2^2
$$

$$
(x - 2)^2 = 25
$$

$$
x - 2 = \pm 5
$$

$$
x = 2 \pm 5 = \begin{cases} 7 \\ \\ -3 \end{cases}
$$

Dermed skjærer grafen til $h$ gjennom $x$-aksen i punktene $(-3, 0)$ og $(7, 0)$.
::::

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
x = -1 \qog x = 7
$$

::::{solution}
Vi løser likningen $f(x) = 0$ som gir 

$$
x^2 - 6x = 7
$$

$$
x^2 - 6x + 3^2 = 7 + 3^2
$$

$$
(x - 3)^2 = 16
$$

$$
x - 3 = \pm 4 
$$

$$
x = 3 \pm 4 = \begin{cases} 7 \\ \\ -1 \end{cases}
$$

som betyr at nullpunktene til $f$ er 

$$
x = -1 \qog x = 7
$$
::::

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


::::{solution}
Siden nullpunktene til $f$ er $x = -1$ og $x = 7$, så kan vi skrive 

$$
f(x) = (x + 1)(x - 7)
$$

Vi tegner et fortegnsskjema for funksjonen for å løse ulikheten:

:::{signchart-2}
width: 70%
function: (x + 1) * (x - 7), f(x)
:::

Fra fortegnslinja til $f(x)$ kan vi lese av at $f(x) \geq 0$ når 

$$
x \in \real \setminus \langle -1, 7\rangle
$$

::::
:::::

:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til ekstremalpunktet til $f$.

Avgjør om det er et toppunkt eller bunnpunkt.


:::::{answer}
Bunnpunkt i $(3, -16)$

::::{solution}
Siden nullpunktene er $x = -1$ og $x = 7$, er $x$-koordinatene til ekstremalpunktet 

$$
x_0 = \dfrac{-1 + 7}{2} = 3
$$

Vi regner så ut $y$-koordinaten til punktet:

$$
y_0 = f(3) = (3 + 1)\cdot(3 - 7) = -4^2 = -16
$$

Dermed er ekstremalpunktet $(3, -16)$. Dette er et bunnpunkt siden $a \gt 0$. 
::::

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


::::{solution}
Vi tegner et fortegnsskjema for funksjonen:

:::{signchart-2}
width: 70%
function: -2 * (x - 2) * (x + 6), g(x)
:::

Fra fortegnslinja til $g(x)$ kan vi lese av at $g(x) > 0$ når 

$$
x \in \langle -6, 2 \rangle
$$

::::


:::::

:::::::::::::

:::::::::::::{part} b
Bestem koordinatene til grafens ekstremalpunkt.

Avgjør om det er et toppunkt eller bunnpunkt.

:::::{answer}
Toppunkt i $(-2, 32)$


::::{solution}
Vi har at $x$-koordinaten til ekstremalpunktet er gjennomsnittet av nullpunktene:

$$
x_0 = \dfrac{-6 + 2}{2} = -2
$$

Så regner vi ut $y$-koordinaten:

$$
y_0 = f(-2) = -2 \cdot (-2 - 2) \cdot (-2 + 6) = -2 \cdot (-4) \cdot 4 = 32
$$

Grafen vil ha et toppunkt siden $a \lt 0$. Dermed har grafen et toppunkt i $(-2, 32)$.
::::
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


::::{solution}
Uttrykket på venstre side er skrevet på standardform og uttrykket på høyre side er skrevet på nullpunktsform. 

Da vil $a$ være ledende koeffisient som er lik uansett hvilken form vi skriver uttrykket på. Så derfor er $a = 1$.

Kontantene $b$ og $c$ representerer nullpunktene til uttrykket på venstre side. Vi løser derfor likningen

$$
x^2 + 4x - 12 = 0
$$

$$
x^2 + 4x = 12
$$

$$
x^2 + 4x + 2^2 = 12 + 2^2
$$

$$
(x + 2)^2 = 16 
$$

$$
x + 2 = \pm 4 \liff x = -2 \pm 4 = \begin{cases} 2 \\ \\ -6 \end{cases}
$$

Altså er nullpunktene $x = -6$ og $x = 2$. Da har vi at én mulighet for konstantene $a$, $b$ og $c$ som gjør at likningen er en identitet er 

$$
a = 1 \and b = -6 \and c = 2
$$


::::


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


::::{solution}
Uttrykket på venstre side er skrevet på ekstremalpunktsform med ekstremalpunkt $(4, r)$. Uttrykket på høyre side er skrevet på nullpunktsform med nullpunktene $x = -6$ og $x = t$. Vi har at $s = 3$ siden den ledende koeffisienten må være den samme i begge uttrykk.

Siden gjennomsnittet av nullpunktene er lik symmetrilinja, så får vi at 

$$
4 = \dfrac{t + 6}{2} \liff t + 6 = 8 \liff t = 2
$$

Vi kan så regne ut verdien til $r$ ved å sette inn $x = 4$ for symmetrilinja på hver side av likningen som gir:

$$
3(4 - 4)^2 + r = 3(4 - 6)(4 - 2)
$$

$$
r = 3\cdot (-2) \cdot 2 = -12
$$

Dermed er likningen en identitet hvis

$$
r = -12 \and s = 3 \and t = 2
$$

::::


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

::::{solution}
Uttrykket på venstre side er skrevet på nullpunktsform med nullpunkter $x = a$ og $x = -5$. Uttrykket på høyre side er skrevet på ekstremalpunktsform med ekstremalpunktet $(c, 16)$.

Vi kan først merke oss at $b = 4$ siden $b$ representerer den ledende koeffisienten på høyre side. Da kan vi forenkle likningen ved å dele med $4$ på hver side av likningen: 

$$
4(x - a)(x + 5) = 4(x - c)^2 - 16
$$

$$
(x - a)(x + 5) = (x - c)^2 - 4
$$

$$
(x - a)(x + 5)= (x - c)^2 - 2^2
$$

Da får vi at 

$$
(x - a)(x + 5) = (x - c - 2)(x - c + 2) = (x - (c + 2))(x - (c - 2))
$$

Dermed er 

$$
c + 2 = -5 \or c - 2 = -5
$$

som gir at 

$$
c = -7 \or c = -3
$$

Når $c = -7$ får vi at 

$$
-7 = \dfrac{a - 5}{2} \liff a - 5 = -14 \liff a = -9
$$

som betyr at likningen er en identitet hvis

$$
a = -9 \and b = 4 \and c = -7
$$

Men vhsi $c = -3$ får vi at 

$$
-3 = \dfrac{a - 5}{2} \liff a - 5 = -6 \liff a = -1
$$

som betyr at likningen er en identitet hvis

$$
a = -1 \and b = 4 \and c = -3
$$

Altså er likningen en identitet hvis

$$
a = -1 \and b = 4 \and c = -3 \or a = -9 \and b = 4 \and c = -7
$$







::::

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



::::{solution}
Programmet sjekker hvilke av heltallene $x \in \{-10, -9, \ldots, 9, 10\}$ som gjør at $f(x) = 0$. For å finne hva programmet skriver ut løser vi derfor $f(x) = 0$ med $abc$-formelen:

$$
x = -\dfrac{5 \pm \sqrt{5^2 + 4\cdot 14}}{2} = \dfrac{5 \pm \sqrt{81}}{2} = \dfrac{5 \pm 9}{2}
$$

som gir at 

$$
x = -2 \or x = 7
$$

Programmet skriver derfor ut $x = -2$ og $x = 7$.
::::


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


::::{solution}
Programmet kjører så lenge $f(x) \gt f(x + 1)$. Dette betyr at programmet kjører så lenge den forrige funksjonsverdien er høyere enn det neste. Så lenge bunnpunktet har en heltallig verdi, så vil programmet derfor finne koordinatene til bunnpunktet. Vi sjekker om symmetrilinja er et heltall:

$$
x_0 = -\dfrac{b}{2a} = -\dfrac{-6}{2} = 3
$$

Siden det ble et heltall, vil dette være $x$-koordinaten programmet skriver ut. Vi trenger også $y$-koordinaten:

$$
y_0 = f(3) = 3^2 - 6 \cdot 3 + 5 = 9 - 18 + 5 = -4
$$

Altså skriver programmet ut $(3, -4)$.
::::

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


::::{solution}
Vi kan skrive om ulikheten

$$
x(x - 7) \lt 0
$$

så tegner vi et fortegnsskjema:

:::{signchart-2}
width: 70%
function: x * (x - 7), x(x - 7)
:::

Det betyr at løsningen er 

$$
x \in \langle 0, 7\rangle.
$$

::::


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


::::{solution}
Vi har at 

$$
2x^2 - 32 = 0
$$

$$
2x^2 = 32
$$

$$
x^2 = 16 \liff x = \pm 4
$$

Det betyr at ulikheten kan skrives som 

$$
2(x + 4)(x - 4) \geq 0
$$

Vi tegner et fortegnsskjema:

:::{signchart-2}
width: 70%
function: 2 * (x + 4) * (x - 4), 2(x + 4)(x - 4)
:::

Fra fortegnslinja til uttrykket får vi at løsningen er 

$$
x \in \langle \gets, -4] \cup [4, \to \rangle
$$


::::


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


::::{solution}
Vi starter med å finne nullpunktene til uttrykket:

$$
-x^2 + 3x + 10 = 0
$$

$$
x^2 - 3x - 10 = 0
$$

$$
x = \dfrac{3 \pm \sqrt{9 + 4\cdot 10}}{2} = \dfrac{3 \pm 7}{2} = \begin{cases} 5 \\ \\ -2 \end{cases}
$$

Dermed er 

$$
-x^2 + 3x + 10 = -(x + 2)(x - 5) \gt 0
$$

Vi tegner et fortegnsskjema for uttrykket så vi kan finne løsningen.


:::{signchart-2}
width: 70%
function: -(x + 2) * (x - 5), -(x + 2)(x - 5)
:::

Dermed er løsningen

$$
x \in \langle -2, 5\rangle
$$

::::
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