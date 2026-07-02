# Oppgaver: Generelle rasjonale funksjoner 



:::::::::::::::{exercise} Oppgave 1

Bestem nullpunktene til funksjonene.

:::::::::::::{part} a
$$
f(x) = \dfrac{x^2 - 4}{x + 1}
$$

:::::{answer}
$$
x = -2 \or x = 2
$$

::::{solution}
Vi leter først etter nullpunktene til tellerpolynomet:

$$
x^2 - 4 = 0 \liff (x + 2)(x - 2) = 0 \liff x = -2 \or x = 2.
$$

Til slutt vi må sjekke nullpunktene til nevnerpolynomet og ekskludere nullpunkter de har til felles:

$$
x + 1 = 0 \liff x = -1.
$$

Teller- og nevnerpolynomet har ingen felles nullpunkter som betyr at $f$ har samme nullpunkter som tellerpolynomet. Dermed har vi at nullpunktene til $f$ er 

$$
x = -2 \or x = 2.
$$

::::


:::::

:::::::::::::


:::::::::::::{part} b
$$
g(x) = \dfrac{x - 1}{(x + 3)^2}
$$

:::::{answer}
$$
x = 1
$$

::::{solution}
Tellerpolynomet og nevnerpolynomet er allerede nullpunktsfaktorisert, og vi kan se at de ikke har noen felles faktorer. Derfor holder det å bestemme nullpunktene til tellerpolynomet:

$$
x - 1 = 0 \liff x = 1.
$$

Dermed er nullpunktet til $g$

$$
x = 1.
$$
::::

:::::


:::::::::::::


:::::::::::::{part} c
$$
h(x) = \dfrac{(x - 2)(x + 3)}{x^2 - 4}
$$

:::::{answer}
$$
x = -3 
$$

::::{solution}
Tellerpolynomet er nullpunktsfaktorisert allerede, men vi må nullpunktsfaktorisere nevnerpolynomet for å sjekke om de to polynomeme har noen lineære faktorer til felles. Vi bruker konjugatsetningen på nevnerpolynomet:

$$
x^2 - 4 = x^2 - 2^2 = (x + 2)(x - 2).
$$

Dermed kan vi skrive

$$
h(x) = \dfrac{(x - 2)(x + 3)}{(x + 2)(x - 2)} = \dfrac{x + 3}{x + 2}, \quad x \neq 2.
$$

Vi ser altså at $x = 2$ er et bruddpunkt for $h$ siden det er nullpunkt for både teller og nevner. Nå kan vi lete etter nullpunktene til $h$ ved å undersøke når tellerpolynomet er null:

$$
x + 3 = 0 \liff x = -3.
$$

Dermed er nullpunktet til $h$ gitt ved 

$$
x = -3.
$$
::::

:::::



:::::::::::::


:::::::::::::{part} d
$$
p(x) = \dfrac{x^2 - x - 2}{x^2 - 9}
$$

:::::{answer}
$$
x = -1 \or x = 2.
$$

::::{solution}
Vi starter med å nullpunktsfaktorisere teller- og nevnerpolynomet for å sjekke om de har noen felles lineære faktorer. Vi bruker $abc$-formelen på tellerpolynomet:

$$
x = \dfrac{1 \pm \sqrt{1 + 8}}{2} = \dfrac{1 \pm 3}{2} = \begin{cases} 2 \\ -1 \end{cases}
$$

Dermed kan vi nullpunktsfaktorisere tellerpolynomet som

$$
x^2 - x - 2 = (x + 1)(x - 2). 
$$

Så nullpunktsfaktoriserer vi nevnerpolynomet med konjugatsetningen:

$$
x^2 - 9 = (x + 3)(x - 3). 
$$

De har ingen lineær faktor til felles, så da holder det å bestemme nullpunktene til tellerpolynomet for å finne nullpunktene til $p$. Disse fant vi med $abc$-formelen som ga oss

$$
x = -1 \or x = 2.
$$
::::

:::::

:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2

Bestem likningene til de horisontale eller skrå asymptotene til funksjonene.


:::::::::::::{part} a
$$
f(x) = \dfrac{4x - 6}{2x + 1}
$$

:::::{answer}
$$
y = 2
$$

::::{solution}
Vi utfører polynomdivisjon for å lese av kvotienten $K(x)$ i divisjonen:


:::{polydiv}
---
p: 4x - 6
q: 2x + 1
width: 60%
---
:::


Vi kan se at kvotienten er $K(x) = 2$ som betyr at likningen for den horisontale asymptoten er $y = 2$.
::::

:::::

:::::::::::::

:::::::::::::{part} b
$$
g(x) = \dfrac{4x^2 + x - 8}{x^2 + 1}
$$

:::::{answer}
$$
y = 4
$$

::::{solution}
Vi utfører polynomdivisjon for å bestemme kvotienten $K(x)$ i divisjonen:


:::{polydiv}
---
p: 4x^2 + x - 8
q: x^2 + 1
width: 60%
---
:::


Fra divisjonen får vi at $K(x) = 4$ som betyr at likningen for den horisontale asymptoten er $y = 4$.

::::

:::::


:::::::::::::

:::::::::::::{part} c
$$
h(x) = \dfrac{x^2 + x - 2}{x + 5}
$$


:::::{answer}
$$
y = x - 4.
$$

::::{solution}
Vi utfører polynomdivisjon for å bestemme kvotienten $K(x)$ i divisjonen:

:::{polydiv}
---
p: x^2 + x - 2
q: x + 5
width: 60%
---
:::

Fra divisjonen får vi at $K(x) = x - 4$ som betyr at likningen for den skrå asymptoten er $y = x - 4$.

::::

:::::

:::::::::::::

:::::::::::::{part} d
$$
p(x) = \dfrac{x + 3}{x^2 + 2x + 1}
$$


:::::{answer}
$$
y = 0
$$

::::{solution}
Tellergraden er lavere enn nevnergraden som betyr at telleren allerede *er* et restpolynom i divisjonen. Derfor vil kvotienten være $K(x) = 0$ og vi får at likningen til den horisontale asymptoten er $y = 0$.
::::

:::::



:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3

Bestem likningene til de vertikale asymptotene til hver av funksjonene (dersom de eksisterer).

:::::::::::::{part} a
$$
f(x) = \dfrac{x^2 - 4}{x^2 - 9}
$$

:::::{answer}
$$
x = -3 \or x = 3.
$$

::::{solution}
Vi må starte med å nullpunktsfaktorisere teller- og nevnerpolynomet for å sjekke om de har noen felles faktorer. Med konjugatsetningen kan vi skrive: 

$$
x^2 - 4 = x^2 - 2^2 = (x + 2)(x - 2)
$$

og

$$
x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3).
$$

Dermed har vi at 

$$
f(x) = \dfrac{(x + 2)(x - 2)}{(x + 3)(x - 3)}
$$

Vi kan se at telleren og nevner ikke har noen felles faktorer, som betyr at vi nå trygt kan finne de vertikale asymptotene ved å se på nullpunktene til nevneren: 

$$
(x + 3)(x - 3) = 0 \liff x = -3 \or x = 3.
$$

som er likningene til de vertikale asymptotene til $f$.
::::

:::::


:::::::::::::


:::::::::::::{part} b
$$
g(x) = \dfrac{x^2 - x - 6}{(x + 3)(x - 4)}
$$


:::::{answer}
$x = -3$ og $x = 4$. 

::::{solution}
Vi starter med å nullpunktsfaktorisere tellerpolynomet for å se etter lineære faktorer som er felles:

$$
x^2 - x - 6 = (x - 3)(x + 2)
$$

Dermed får vi 

$$
g(x) = \dfrac{(x - 3)(x + 2)}{(x + 3)(x - 4)}
$$

Vi ser at tellerpolynomet og nevnerpolynomet ikke deler noen lineære faktorer, så vi kan bestemme de vertikale asymptotene ved å se på nullpunktene til nevnerpolynomet:

$$
(x + 3)(x - 4) = 0  \liff x = -3 \or x = 4.
$$

Dermed likningene til de vertikale asymptotene $x = -3$ og $x = 4$.
::::
:::::



:::::::::::::


:::::::::::::{part} c
$$
h(x) = \dfrac{x + 3}{x^2 + 6x + 9}
$$

:::::{answer}
$$
x = -3.
$$

::::{solution}
Vi starter med å se de lineære faktorene i teller- og nevnerpolynomet. Vi kan skrive om nevnerpolynomet med 1.kvadratsetning:

$$
x^2 + 6x + 9 = (x + 3)^2
$$

som betyr at $f(x)$ kan skrives om til

$$
f(x) = \dfrac{x + 3}{(x + 3)^2} = \dfrac{1}{x + 3}
$$

Vi har eliminert alle felles lineære faktorer, og kan gå videre på se etter vertikale asymptoter ved å bestemme nullpunktene til nevnerpolynomet: 

$$
x + 3 = 0  \liff x = -3.
$$

Dermed har $f$ er en vertikal asymptote i $x = -3$. 
::::

:::::


:::::::::::::


:::::::::::::{part} d
$$
p(x) = \dfrac{x^2 + 4x + 3}{x + 1}
$$

:::::{answer}
Ingen vertikale asymptoter.

::::{solution}
Vi starter med å se om teller- og nevnerpolynomet har felles lineære faktorer og kvitter oss med dem. Vi skriver om tellerpolynomet med fullstendig kvadraters metode:

$$
x^2 + 4x + 3 = x^2 + 4x + 2^2 - 2^2 + 3 = (x + 2)^2 - 1 = (x + 1)(x + 3)
$$

Dermed kan vi skrive $p(x)$ som 

$$
p(x) = \dfrac{(x + 1)(x + 3)}{x + 1} = x + 3, \quad x \neq -1.
$$

Vi ser at selv om $x = -1$ er et bruddpunkt for $p$ siden det er nullpunktet til nevnerpolynomet, så vil det ikke være en vertikal asymptote fordi tellerpolynomet hadde én av den samme lineære faktoren. Dermed har $p$ ingen vertikale asymptoter.
::::

:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{x^2 + 4x + 4}{x - 2}
$$

Nedenfor vises 4 figurer der én av dem viser grafen til $f$.

Bestem hvilken graf som hører til $f$. 



<!-- ::::{clickable-figure} ./figurer/oppgaver/oppgave_4/merged_figure.svg
---
width: 100%
---
:::: -->


:::{multi-plot}
width: 100%
functions: (x - 2)**2 / (x + 2), -(x - 2)**2 / (x + 2), (x + 2)**2 / (x - 2), -(x + 2)**2 / (x - 2)
function-names: A, B, C, D
rows: 2
cols: 2
ticks: off
xmin: -16
xmax: 16
ymin: -40
ymax: 40
vlines: -2, -2, 2, 2
lines: [(1,-6), (-1, 6), (1, 6), (-1,-6)]
points: [(2, 0), (2, 0), (-2, 0), (-2, 0)]
:::



::::{answer}
Graf **C**. 
::::



:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 5

To rasjonale funksjoner $f$ og $g$ er gitt ved 

$$
f(x) = \dfrac{x^2 - 2x - 3}{x^2 + 2x + 1} \quad \text{og} \quad g(x) = \dfrac{x^2 - 2x + 1}{x^2 - 2x - 3}
$$

Nedenfor viser 4 figurer der én av dem viser grafen til $f$ og én av dem viser grafen til $g$.



:::{multi-plot}
width: 100%
functions: (x - 3) * (x + 1) / (x - 1)**2, (x**2 - 2*x - 3) / (x**2 + 2*x + 1), (x - 1)**2 / ((x + 1) * (x - 3)), -(x - 3) * (x + 1) / (x - 1)**2
function-names: A, B, C, D
rows: 2
cols: 2
ticks: off
xmin: -10
xmax: 10
ymin: -10
ymax: 10
vlines: 1, -1, (-1, 3), 1
hlines: 1, 1, 1, -1
points: [((-1, 0), (3, 0)), (3, 0), (1, 0), ((-1, 0), (3, 0))]
:::




:::::::::::::{part} a
Bestem hvilken graf som tilhører $f$.

::::{answer}
Graf **B**.
::::

:::::::::::::

:::::::::::::{part} b
Bestem hvilken graf som tilhører $g$.


::::{answer}
Graf **C**.
::::

:::::::::::::

:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 6

To rasjonale funksjoner $f$ og $g$ er gitt ved 

$$
f(x) = \dfrac{x - 2}{x^2 + 4x +4} \quad \text{og} \quad g(x) = \dfrac{x^2 + 2x + 1}{x - 1}
$$

Nedenfor vises 4 figurer. Én av dem viser grafen til $f$ og én av dem viser grafen til $g$.



:::{multi-plot}
width: 100%
functions: (x - 2) / (x + 2)**2, (x + 2) / (x - 2)**2, (x + 1)**2 / (x - 1), -(x + 1)**2 / (x - 1)
function-names: A, B, C, D
rows: 2
cols: 2
ticks: off
xmin: -10
xmax: 10
ymin: -20
ymax: 20
vlines: -2, 2, 1, 1
lines: [None, None, (1, 3), (-1, -3)]
points: [(2, 0), (-2, 0), (-1, 0), (-1, 0)]
:::


:::::::::::::{part} a
Bestem hvilken graf som tilhører $f$.

::::{answer}
Graf **A**.
::::

:::::::::::::

:::::::::::::{part} b
Bestem hvilken graf som tilhører $g$.


::::{answer}
Graf **C**.
::::

:::::::::::::


:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 7

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{x^2 - 16}{(x + 2)(x - 2)}
$$

:::::::::::::{part} a
Bestem nullpunktene til $f$.

:::::{answer}
$$
x = \pm 4.
$$

::::{solution} 
Vi starter med å se etter nullpunktene til tellerpolynomet:

$$
x^2 - 16 = 0 \liff x^2 = 16 \liff x = \pm 4.
$$

Ingen av disse er også nullpunkter for nevnerpolynomet, så som betyr at nullpunktene til $f$ er 

$$
x = \pm 4.
$$
:::: 

:::::

:::::::::::::


:::::::::::::{part} b
Bestem likningen til den horisontale asymptoten til $f$. 

:::::{answer}
$$
y = 1.
$$

::::{solution}
Vi utfører polynomdivisjon for å bestemme kvotienten $K(x)$: 

:::{polydiv}
---
p: x^2 - 16
q: x^2 - 4
width: 60%
---
:::

Dermed er $K(x) = 1$ som betyr at likningen til den horisontale asymptoten er 

$$
y = 1.
$$

:::: 

::::: 




:::::::::::::



:::::::::::::{part} c
Bestem likningene til $f$ sine vertikale asymptoter, dersom de eksisterer.

:::::{answer}
$$
x = \pm 2.
$$

::::{solution}
Vi starter med å nullpunktsfaktorisere teller- og nevnerpolynomet for å eliminere felles faktorer. Fra **a** har vi at nullpunktene til tellerpolynomet er $x = \pm 4$. Det betyr at vi kan skrive $f(x)$ som 

$$
f(x) = \dfrac{(x + 4)(x - 4)}{(x + 2)(x - 2)}
$$

siden den ledende koeffisientene til tellerpolynomet var $1$. Vi kan ikke eliminere noen lineære faktorer som betyr at vi kan gå rett på å bestemme nullpunktene til nevnerpolynomet for å bestemme likningene til $f$ sine vertikale asymptoter:

$$
(x + 2)(x - 2) = 0 \liff x = -2 \or x = 2. 
$$

som er likningene til de vertikale asymptotene til $f$.
::::

:::::

:::::::::::::


:::::::::::::{part} d
Tegn et fortegnsskjema for $f(x)$. 


:::::{answer}
:::{signchart-2}
width: 70%
function: (x**2 - 16) / ((x + 2) * (x - 2)), f(x)
:::
:::::

:::::::::::::


:::::::::::::{part} e
Lag en skisse av grafen til $f$. Skissen skal inneholde:

* Nullpunktene til $f$.
* Horisontale asymptoter.
* Vertikale asymptoter.


::::{answer}


:::{plot}
width: 70%
function: (x**2 - 16) / ((x + 2) * (x - 2)), f
ticks: off
xmin: -10
xmax: 10
ymax: 10
vline: -2
vline: 2
hline: 1
text: 2, 6, "$x = 2$", center-right
text: -2, 6, "$x = -2$", center-left
text: 4, 1, "$y = 1$", top-center
point: (4, 0)
point: (-4, 0)
text: 4, 0, "$(4,0)$", bottom-right
text: -4, 0, "$(-4,0)$", bottom-left
:::
::::


:::::::::::::


:::::::::::::{part} f
Løs ulikheten $f(x) \geq 0$.


:::::{answer}
$$
x \in \langle \gets, -4] \cup \langle -2, 2 \rangle \cup [4, \to \rangle.
$$

::::{solution}
Vi bruker fortegnslinja til $f(x)$ som vi tegnet i **d** til å bestemme hvor $f(x) \geq 0$:

:::{signchart-2}
width: 70%
function: (x**2 - 16) / ((x + 2) * (x - 2)), f(x)
factors: false
:::

Fra fortegnslinja til $f(x)$ kan vi se at $f(x) \geq 0$ når 

$$
x \in \langle \gets, -4] \cup \langle -2, 2 \rangle \cup [4, \to \rangle.
$$
::::

:::::

:::::::::::::

:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 8

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{x^2 - 8x + 12}{(x - 2)(x + 3)}
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$. 


:::::{answer}
$$
x = 6.
$$

::::{solution}
Nullpunktene til $f$ er gitt ved nullpunktene til tellerpolynomet så lenge nevnerpolynomet ikke også har samme nullpunkter. Nullpunktene til tellerpolynomet kan vi bestemme med $abc$-formelen som gir

\begin{align*}
x &= \dfrac{-(-8) \pm \sqrt{(-8)^2 - 4\cdot 1 \cdot 12}}{2\cdot 1} \\
\\
&= \dfrac{8 \pm \sqrt{64 - 48}}{2} \\
\\
&= \dfrac{8 \pm \sqrt{16}}{2} \\
\\
&= \dfrac{8 \pm 4}{2} \\
\\
&= 4 \pm 2. 
\end{align*}

Dermed er nullpunktene til tellerpolynomet

$$
x = 2 \or x = 6.
$$

Nullpunktene til nevnerpolynomet er 

$$
(x - 2)(x + 3) = 0 \liff x = 2 \or x = -3.
$$

Dermed er $x = 2$ et felles nullpunkt for både teller- og nevnerpolynomet og dette kan derfor ikke være et nullpunkt for $f$. Dermed har $f$ kun ett nullpunkt i

$$
x = 6.
$$
::::

:::::

:::::::::::::

:::::::::::::{part} b
Bestem likningene til asymptotene til $f$ dersom de eksisterer.


:::::{answer}
* Horisontal asymptote: $y = 1$
* Vertikal asymptote: $x = -3$

::::{solution}
For å bestemme eventuelle horisontale eller skrå asymptoter, utfører polynomdivisjon for å bestemme kvotienten $K(x)$: 

:::{polydiv}
---
p: x^2 - 8x + 12
q: (x - 2)(x + 3)
width: 70%
---
:::


Fra polynomdivisjonen finner vi at $K(x) = 1$ som betyr at likningen til den horisontale asymptoten til $f$ er 

$$
y = 1.
$$ 


For å bestemme likningene til eventuelle vertikale asymptoter, faktoriserer vi teller- og nevnerpolynomet og eliminerer alle lineære faktorer som er felles. Vi har at 

$$
f(x) = \dfrac{x^2 - 8x + 12}{(x - 2)(x + 3)} = \dfrac{(x - 2)(x - 6)}{(x - 2)(x + 3)} = \dfrac{x - 6}{x + 3}
$$

der vi forutsetter at $x \neq 2$. For å bestemme de vertikale asymptotene til $f$ ser vi på nullpunktene til nevnerpolynomet som gjenstår som gir:

$$
x + 3 = 0 \liff x = -3. 
$$

Likningen til den vertikale asymptoten til $f$ er derfor 

$$
x = -3.
$$ 

::::


:::::


:::::::::::::

:::::::::::::{part} c
Lag en skisse av grafen til $f$. Skissen skal inneholde:

* Nullpunkter
* Horisontale/skrå asymptoter
* Vertikale asymptoter
* "Hull" i grafen til $f$ (bruddpunkter). 

> Hint: Det kan være lurt å tegne et fortegnsskjema for $f(x)$ først.


:::::{answer}

:::{plot}
width: 60%
ticks: off
function: (x**2 - 8*x + 12) / ((x - 2) * (x + 3)), f
vline: -3, dashed
text: -3, -4, "$x = -3$", center-left
hline: 1, dashed
text: 3, 1, "$y = 1$", top-center
point: (6, 0)
text: 6, 0, "$(6,0)$", bottom-right
text: 2, -4/5, "$\times$", center-center
xmin: -10
xmax: 10
ymin: -10
ymax: 10
:::


::::{solution}
Vi har allerede sett at vi kan skrive $f(x)$ som

$$
f(x) = \dfrac{x - 6}{x + 3}
$$

så lenge $x \neq 2$. I $x = 2$ vil grafen til $f$ ha et hull, men vil ellers oppføre som en lineær-over-lineær rasjonal funksjon slik som vi har uttrykt over. Vi kan tegne et fortegnsskjema for det forenklede uttrykket for $f(x)$ og så må vi huske på at $x = 2$ representerer et bruddpunkt.


:::{signchart-2}
width: 70%
function: (x**2 - 8*x + 12) / ((x - 2) * (x + 3)), f(x)
:::


Denne informasjonen om fortegnet til $f(x)$ sammen med asymptotene $y = 1$ og $x = -3$ kan vi skissere grafen til $f$ som følger:

:::{plot}
width: 60%
ticks: off
function: (x**2 - 8*x + 12) / ((x - 2) * (x + 3)), f
vline: -3, dashed
text: -3, -4, "$x = -3$", center-left
hline: 1, dashed
text: 3, 1, "$y = 1$", top-center
point: (6, 0)
text: 6, 0, "$(6,0)$", bottom-right
text: 2, -4/5, "$\times$", center-center
xmin: -10
xmax: 10
ymin: -10
ymax: 10
:::

::::

:::::

:::::::::::::

:::::::::::::{part} d
Løs ulikheten $f(x) \leq 0$. 


:::::{answer}
$$
x \in \langle -3, 6] \setminus \{2\}.
$$

::::{solution}
For å løse ulikheten $f(x) \leq 0$ bruker vi fortegnslinja til $f(x)$ som vi tegnet i **c**: 

:::{signchart-2}
width: 70%
function: (x**2 - 8*x + 12) / ((x - 2) * (x + 3)), f(x)
:::

Fra fortegnslinja til $f(x)$ kan vi lese av at for det *forenklede* uttrykket er $f(x) \leq 0$ når 

$$
x \in \langle -3, 6].
$$

Men så var $x = 2$ et bruddpunkt for $f$ og siden $2 \in \langle -3, 6]$ så må vi ekskludere $2$ fra løsningsmengden. Dermed er løsningen til ulikheten

$$
x \in \langle -3, 6] \setminus \{2\}.
$$

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
fontsize: 24
function: (x**2 - 1) / (x**2 - 4), f
vline: -2, dashed
vline: 2, dashed
hline: 1, dashed
:::



Grafen til en rasjonal funksjon $f$ er vist til høyre.

Bestem et mulig funksjonsuttrykk $f(x)$.


:::::{answer}
$$
f(x) = \dfrac{(x + 1)(x - 1)}{(x + 2)(x - 2)}
$$
:::::


:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 350px
align: right
fontsize: 24
function: 2*(x + 1) * (x - 3) / ((x + 2) * (x - 1)), g
vline: -2, dashed
vline: 1, dashed
hline: 2, dashed
ymax: 10
ymin: -10
xmax: 7
xmin: -7
ystep: 2
:::

Grafen til en rasjonal funksjon $g$ er vist til høyre.

Bestem et mulig funksjonsuttrykk $g(x)$.


:::::{answer}
$$
g(x) = \dfrac{2(x + 1)(x - 3)}{(x + 2)(x - 1)}
$$
:::::

:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 350px
align: right
fontsize: 24
function: -(x**2 - 9) / (x + 1), h
vline: -1, dashed
line: -1, 1, dashed
:::

Grafen til en rasjonal funksjon $h$ er vist til høyre.

Bestem et mulig funksjonsuttrykk $h(x)$.


:::::{answer}
$$
h(x) = \dfrac{-(x + 3)(x - 3)}{x + 1}
$$
:::::

:::::::::::::


:::::::::::::::



---

:::::::::::::::{exercise} Oppgave 10

:::{plot}
width: 350px
align: right
fontsize: 24
function: (x - 2) / (x + 1), f
ticks: off
vline: -1, dashed
hline: 1, dashed
point: (2, 0)
:::


I figuren til høyre vises grafen til funksjonen $f$ gitt ved

$$
f(x) = \dfrac{x - 2}{x + 1}
$$



:::::::::::::{part} a
Bestem nullpunktet og likningene til asymptotene til $f$.

::::{answer}
* Nullpunkt: $x = 2$. 
* Vertikal asymptote: $x = -1$.
* Horisontal asymptote: $y = 1$.
::::

:::::::::::::


:::::::::::::{part} b
Bruk grafen til $f$ til å bestemme den horisontale asymptoten til $f'$. 

::::{answer}
$$
y = 0.
$$
::::

:::::::::::::


:::::::::::::{part} c

Tegn en fortegnslinje for $f'(x)$.

::::{answer}

:::{signchart-2}
width: 60%
function: 3 / (x + 1)**2, f'(x)
factors: false
:::

::::

:::::::::::::


:::::::::::::{part} d
Lag en skisse av grafen til $f'$. Skissen skal inneholde (hvis de eksisterer):

* Nullpunktene til $f'$.
* Vertikale asymptoter til $f'$.
* Horisontale asymptoter til $f'$.


::::{answer}
* Ingen nullpunkter
* Vertikal asymptote: $x = -1$.
* Horisontal asymptote: $y = 0$ ($x$-aksen).


:::{plot}
width: 60%
function: 3 / (x + 1)**2, f'
ticks: off
vline: -1, dashed
text: -1, 3, "$x = -1$", center-left
hline: 0, dashed
text: 3, 0, "$y = 0$", top-center
:::

::::

:::::::::::::


:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 11
:::{plot}
width: 350px
align: right
fontsize: 24
function: (-x**2 + 1) / (x**2 - 4), f
ticks: off
point: (-1, 0)
point: (1, 0)
vline: -2, dashed
vline: 2, dashed
hline: -1, dashed
:::

I figuren til høyre vises grafen til funksjonen $f$ gitt ved

$$
f(x) = \dfrac{-x^2 + 1}{x^2 - 4}
$$




:::::::::::::{part} a
Bestem nullpunktene og likningene til asymptotene til $f$.

::::{answer}
* Nullpunkter: $x = \pm 1$.
* Vertikale asymptoter: $x = \pm 2$.
* Horisontal asymptote: $y = -1$.
::::


:::::::::::::

:::::::::::::{part} b
Bruk grafen til å bestemme nullpunktene til $f'$. 

::::{answer}
$$
x = 0.
$$
::::

:::::::::::::


:::::::::::::{part} c
Bruk grafen til $f$ til å bestemme likningen til den horisontale asymptoten til $f'$. 

::::{answer}
$$
y = 0.
$$
::::

:::::::::::::


:::::::::::::{part} d
Tegn en fortegnslinje for $f'(x)$. 


::::{answer}

:::{signchart-2}
width: 70%
function: (-2*x * (-x**2 + 1) - 2*x * (x**2 - 4)) / (x**2 - 4)**2, f'(x)
factors: false
:::

::::

:::::::::::::


:::::::::::::{part} e
Lag en skisse av grafen til $f'$. Skissen skal inneholde:

* Nullpunktene til $f'$.
* Vertikale asymptoter til $f'$.
* Horisontale asymptoter til $f'$.


::::{answer}
* Nullpunkt: $x = 0$.
* Vertikale asymptoter: $x = -2$ og $x = 2$.
* Horisontal asymptote: $y = 0$.


:::{plot}
width: 60%
function: (-2*x * (-x**2 + 1) - 2*x * (x**2 - 4)) / (x**2 - 4)**2, f'
ticks: off
vline: -2, dashed
vline: 2, dashed
hline: 0, dashed
point: (0, 0)
:::

::::

:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 12

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{x^2 - 2x - 8}{x^m + 8}, \quad m \in \mathbb{N}.
$$

Nedenfor følger noen påstander.

1. Avgjør om påstanden er **sann** eller **usann**.
2. Hvis påstanden er **usann**, rett opp i påstanden så den blir **sann**. 


:::::::::::::{part} a
**Påstand**:

Grafen til $f$ har én vertikal asymptote så lengde $m$ er et oddetall.


::::{answer}
Påstanden er usann når $m = 3$. Påstanden er sann for alle andre oddetall. 
::::

:::::::::::::


:::::::::::::{part} b
**Påstand**:

Grafen til $f$ skjærer $x$-aksen i to punkter for alle $m \in \mathbb{N}$. 

::::{answer}
Påstanden er usann for $m = 3$. Påstanden er sann for alle $m \in \mathbb{N} \setminus \{3\}$.
::::

:::::::::::::


:::::::::::::{part} c
**Påstand**:

Grafen til $f$ har en skrå asymptote **kun** når $m = 1$.

::::{answer}
Påstanden er sann fordi det er **kun** når $m = 1$ at tellerpolynomet er én grad høyere enn nevnerpolynomet.
::::

:::::::::::::



:::::::::::::::



