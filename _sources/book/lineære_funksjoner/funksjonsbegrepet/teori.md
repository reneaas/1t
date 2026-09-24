# Funksjonsbegrepet

:::{goals} Vis læringsmål
* Kunne finne funksjonsverdier til funksjoner representert med formler, graf, verditabell eller et program.
* Kunne tolke funksjoner representert som grafer og finne funksjonsverdier, nullpunkter, ekstremalpunkter og skjæringspunkter med koordinatakser.
* Kunne bestemme definisjonsmengden og verdimengden til en funksjon fra grafen.
:::


:::::::::::::::{summary} Definisjon: Funksjoner
En **funksjon** $f$ er en regel som tar inn et tall $x$, gjør noe med tallet og gir oss nøyaktig ett tall $y$. Vi skriver det som 

$$
y = f(x)
$$

Tallet $x$ kalles for **argumentet**, mens $f(x)$ kalles for **funksjonsverdien**. Vi leser $f(x)$ som "$f$ av $x$". 

:::::::::::::::


## Representasjoner
En funksjon $f$ kan representeres på flere ulike måter:
1. **Funksjonsuttrykk**: En formel som lar oss regne ut funksjonsverdien $y = f(x)$ for et gitt argument $x$.
2. **Graf**: En kurve som består av punktene $(x, f(x))$ tegnet i et koordinatsystem.
3. **Verditabell**: En tabell som viser funksjonsverdiene $y = f(x)$ til funksjonen for ulike argumenter $x$.
4. **Programkode**: En programkode som beregner funksjonsverdien $y = f(x)$ for et gitt argument $x$.

For å illustrere de ulike representasjonene tar vi utgangspunkt i samme funksjon. 


:::::::::::::::{example} Eksempel 1
Nedenfor ser du fire ulike representasjoner av den samme funksjonen $f$.

:::::{grid} 1 1 2 2
---
gutter: 3
---

::::{grid-item-card}
**Funksjonsuttrykk**

^^^
$$
f(x) = x^2 - 4
$$

::::

::::{grid-item-card}
**Verditabell**

^^^
:::{table}
---
transpose: true
---
labels: $x$, $f(x)$
$-2$, $0$
$-1$, $-3$
$0$, $-4$
$1$, $-3$
$2$, $0$
:::

::::


::::{grid-item-card}
**Graf**

^^^
:::{plot}
width: 100%
function: x**2 - 4, f
fontsize: 26
:::


::::


::::{grid-item-card}
**Programkode**
^^^
:::{code-block} python
---
linenos:
---
def f(x):
    return x**2 - 4

y = f(1)

print(y)
:::

::::
:::::


Bruk hver representasjon til å bestemme verdien til $f(1)$.

::::{solution}
---
open:
---

**Funksjonsuttrykk**:

Med funksjonsuttrykket $f(x) = x^2 - 4$ setter vi inn $x = 1$ i $f(x)$ for å regne ut funksjonsverdien $f(1)$:

$$
f(\textcolor{red}{1}) = \textcolor{red}{1}^2 - 4 = -3
$$


**Graf**:

:::{plot}
width: 340px
align: right
function: x**2 - 4, f
fontsize: 26
vline: 1, 0, f(1), dashed, red
hline: f(1), 0, 1, dashed, red
point: (1, f(1))
text: 1, f(1), "$(1, f(1))$", bottom-right
:::

Fra grafen kan vi lese av at når $x = 1$, så er $y = -3$. Dermed er $f(1) = -3$.



:::{clear}
:::

**Verditabell**:

Verditabellen er gitt ved


:::{table}
---
transpose: true
width: 70%
---
labels: $x$, $f(x)$
$-2$, $0$
$-1$, $-3$
$0$, $-4$
$1$, $-3$
$2$, $0$
:::

Fra tabellen kan vi se at når $x = 1$ så er $f(x) = -3$. Dermed er $f(1) = -3$.

**Programkode**:

:::{interactive-code}
def f(x):
    return x**2 - 4

y = f(1)

print(y)
:::

Kjører vi programmet ovenfor, blir utskriften lik `-3`{l=python} som betyr at $f(1) = -3$.




::::


:::::::::::::::




## Definisjonsmengder og verdimengder
En funksjon $f$ kan ha en begrensning på hvilke verdier av $x$ som funksjonen er **definert** for. For eksempel vil funksjonen $f(x) = \sqrt{x}$ kun være meningsfull når $x \geq 0$ siden vi ikke kan regne ut kvadratroten av negative tall. Det finnes også situasjoner hvor vi selv velger hvilke $x$-verdier en funksjon skal gjelde for, for eksempel når vi vil lage en funksjon som skal brukes til en konkret situasjon vi ønsker å beskrive.

Tallene vi kan få når vi *kun* bruker $x$-verdier som gir mening vil også avgrense hvilke mulige funksjonsverdier $f(x)$ vi kan få. 

Dette gir oss to ulike spesielle mengder som hører til funksjonen:


:::::::::::::::{summary} Definisjon: Definisjonsmengde og verdimengde


En funksjon $f$ har to tilhørende mengder:

* **Definisjonsmengden** $D_f$ til $f$ består av alle $x$-verdier der funksjonen er definert.
* **Verdimengden** $V_f$ til $f$ består av alle funksjonsverdier $f(x)$ vi kan få når $x \in D_f$.



:::{plot}
nocache:
xmin: -2
ymin: -2
ymax: 6
xmax: 7
width: 70%
function: 0.25 * (x - 3) ** 2 + 2, (1, 6], f, blue
function-endpoints: true
ticks: off
hline: 0, 1, 6, solid, red
vline: 0, f(3), f(6), solid, red
vline: 1, 0, f(1), dashed, gray
vline: 6, 0, f(6), dashed, gray
hline: f(3), 0, 3, dashed, gray
hline: f(6), 0, 6, dashed, gray
bar: (1, -0.5), 6 - 1, h
text: 0.5 * (6 + 1), -0.5, "$D_f$", bottom-center
bar: (-0.5, f(3)), f(6) - f(3), v
text: -0.5, 0.5 * (f(6) + f(3)), "$V_f$", center-left
:::

Vi markerer endepunktene til grafen til $f$ med klammeparenteser $[,]$ hvis endepunktet er med i definisjonsmengden. Vi bruker vinkelparenteser $\langle, \rangle$ hvis endepunktet ikke er med i definisjonsmengden.



:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 1
Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
Grafen til en funksjon $f$ er vist i figuren nedenfor.


:::{plot}
width: 60%
function: (x - 1)**2 - 4, [-2, 4], f, blue
function-endpoints: true
:::


Hvilket alternativ viser riktig definisjonsmengde?

::::::{quiz-answer}
---
correct: true
---
$$
D_f = [-2, 4]
$$
::::::


::::::{quiz-answer}
$$
D_f = \langle -2, 4\rangle
$$
::::::


::::::{quiz-answer}
$$
D_f = [-4, 5]
$$
::::::

::::::{quiz-answer}
$$
D_f = \langle -4, 5\rangle
$$
::::::

:::::::



:::::::{quiz-question}
Grafen til en funksjon $g$ er vist i figuren nedenfor.


:::{plot}
width: 60%
function: 4 * 2**-x, [-1, 2), g, blue
function-endpoints: true
xmin: -3
xmax: 3
ymin: -1
ymax: 9
:::

Hvilket alternativ viser riktig definisjonsmengde?

::::::{quiz-answer}
---
correct: true
---
$$
D_g = [-1, 2\rangle
$$
::::::



::::::{quiz-answer}
$$
D_g = \langle-1, 2]
$$
::::::


::::::{quiz-answer}
$$
D_g = \langle 1, 8]
$$
::::::


::::::{quiz-answer}
$$
D_g = [1, 8\rangle
$$
::::::


:::::::


:::::::{quiz-question}
Grafen til en funksjon $h$ er vist i figuren nedenfor.


:::{plot}
width: 60%
function: -0.5 * (x - 1)**2 + 3, [-3, 3), h, blue
function-endpoints: true
:::

Hvilket alternativ viser riktig verdimengde?


::::::{quiz-answer}
---
correct: true
---
$$
V_h = [-5, 3]
$$
::::::


::::::{quiz-answer}
$$
V_h = [-5, 1\rangle
$$
::::::


::::::{quiz-answer}
$$
V_h = [-3, 3\rangle
$$
::::::


::::::{quiz-answer}
$$
V_h = [-5, -1]
$$
::::::




:::::::


:::::::{quiz-question}
Grafen til en funksjon $p$ er vist i figuren nedenfor.

:::{plot}
xmin: -2
ymin: -2
width: 70%
function: 0.125 * (x - 1) * (x - 3)**2 + 1, [1, 5], p, blue
function-endpoints: true
:::

Hvilket alternativ viser riktig verdimengde?



::::::{quiz-answer}
---
correct: true
---
$$
V_p = [1, 3]
$$
::::::


::::::{quiz-answer}
$$
V_p = [1, 5]
$$
::::::


::::::{quiz-answer}
$$
V_p = \langle 1, 3 \rangle
$$
::::::


::::::{quiz-answer}
$$
V_p = \langle 1, 5\rangle
$$
::::::


:::::::



::::::::

:::::::::::::::


## Egenskaper ved funksjoner
Det er spesielt tre sentrale egenskaper ved funksjoner vi skal bestemme igjen og igjen:



:::::::::::::::{summary} Sentrale egenskaper ved funksjoner
For en funksjon $f$ vil følgende punkter gi oss sentrale egenskaper ved funksjonen:
* **Skjæringspunktet med $y$-aksen**: Punktet der grafen til funksjonen krysser $y$-aksen.
* **Nullpunkter**: Punkter der grafen til $f$ treffer $x$-aksen. Dette er punkter der $f(x) = 0$.
* **Ekstremalpunkter**: Punkter der grafen snur. Et slikt punkt kaller vi for et **bunnpunkt** dersom grafen har formen {poly-icon}`smile` rundt punktet, og for et **toppunkt** dersom grafen har formen {poly-icon}`frown` rundt punktet. 


:::{plot}
width: 70%
function: (x + 3) * (x - 1) * (x - 2), f
xmin: -4
xmax: 4
ymin: -6
ymax: 20
point: (0, 6)
point: (1, 0)
point: (2, 0)
point: (-3, 0)
ticks: off
annotate: (-2, -4), (1, 0), "Nullpunkter", +0.3
annotate: (-2, -4), (2, 0), "Nullpunkter", +0.7
annotate: (-2, -4), (-3, 0), "Nullpunkter", -0.3
annotate: (1, 8), (sqrt(21)/3, f(sqrt(21)/3)), "Bunnpunkt", +0.3
annotate: (-4, 16), (-sqrt(21)/3, f(-sqrt(21)/3)), "Toppunkt", -0.3
point: (sqrt(21)/3, f(sqrt(21)/3))
point: (-sqrt(21)/3, f(-sqrt(21)/3))
annotate: (-1, 16), (0, 6), "Skjæringspunkt med $y$-aksen", +0.3
:::




:::::::::::::::



---


:::::::::::::::{example} Eksempel 2

:::{plot}
width: 350px
align: right
fontsize: 24
function: (x + 1)**2 * (x - 2), f
:::



Grafen til en funksjon $f$ er vist i figuren til høyre.

Bruk grafen til å bestemme
1. Skjæringspunktet med $y$-aksen.
2. Nullpunktene til $f$.
3. Ekstremalpunktene til $f$.


::::{solution}
---
open:
---
**1. Skjæring med $y$-aksen**:

Fra grafen til $f$ kan vi se at grafen skjærer $y$-aksen i $(0, -2)$ som betyr at $f(0) = -2$.


**2. Nullpunkter**:

Grafen treffer $x$-aksen i to punkter $(-1, 0)$ og $(2, 0)$ som betyr at grafen har nullpunktene

$$
x = -1 \or x = 2
$$

Det er vanlig å oppgi nullpunktene med bare $x$-verdiene fordi $y = 0$ i punktene uansett.


**3. Ekstremalpunkter**:

Grafen til $f$ har et toppunkt i $(-1, 0)$ og et bunnpunkt i $(1, -4)$ som er ekstremalpunktene til $f$.

::::

:::::::::::::::