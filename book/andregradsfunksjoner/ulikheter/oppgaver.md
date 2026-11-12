# Oppgaver: Andregradsulikheter

:::::::::::::::{exercise} Oppgave 1

:::::::::::::{part} a
:::{plot}
width: 100%
align: right
function: (x + 3) * (x - 1), f
fontsize: 26
:::



Til høyre vises grafen til en andregradsfunksjon $f$.

Løs ulikheten $f(x) \leq 0$.


:::::{answer}
$$
x \in [-3, 1]
$$


::::{solution}
Grafen til $f$ ligger skjærer $x$-aksen i $x = -3$ og $x = 1$. Samtidig er grafen til $f$ under $x$-aksen når $x$ ligger mellom de to nullpunktene. Derfor er løsningen av ulikheten

$$
f(x) \leq 0 \liff x \in [-3, 1]
$$
::::


:::::

:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 100%
align: right
function: -(x + 2) * (x - 4), g
fontsize: 26
ymax: 10
ymin: -4
:::

Til høyre vises grafen til en andregradsfunksjon $g$.

Løs ulikheten $g(x) \gt 0$.

:::::{answer}
$$
x \in \langle -2, 4 \rangle
$$


::::{solution}
Grafen til $g$ ligger *over* $x$-aksen når $x$ ligger mellom $x = -2$ og $x = 4$. Derfor er løsningen av ulikheten

$$
g(x) \gt 0 \liff x \in \langle -2, 4 \rangle
$$
::::

:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
align: right
function: x**2 - 4, h
fontsize: 26
:::

Til høyre vises grafen til en andregradsfunksjon $h$.

Løs ulikheten $h(x) \gt 0$.


:::::{answer}

$$
x \in \real \setminus [-2, 2]
$$

eller 

$$
x \in \langle \gets, -2\rangle \cup \langle 2, \to \rangle
$$


::::{solution}
Grafen til $h$ ligger over $x$-aksen før $x = -2$ og etter $x = 2$. Ulikheten $h(x) \gt 0$ kan da beskrives på to måter:

**Skrivemåte 1**:

Løsningen av ulikheten er alle $x$ **bortsett fra** de som ligger i intervallet $[-2, 2]$. Det kan vi skrive som følger:

$$
x \in \real \setminus [-2, 2]
$$

som vi tolker som alle reelle tall, bortsett fra de som ligger i intervallet $[-2, 2]$. 

**Skrivemåte 2**:

Løsningen kan bygges opp av to intervaller:
1. Intervallet som beskriver alle reelle tall $x$ som ligger på **nedsiden** av $x = -2$.
2. Intervallet som beskrives alle reelle tall $x$ som ligger på **oversiden** av $x = 2$.

Den første av de to er $x \in \langle \gets, -2\rangle$. Den andre er $x \in \langle 2, \to \rangle$. For å samle samle de to til én løsning, bruker vi $\cup$ for å legge de to intervallet sammen til én større tallmengde:

$$
x \in \langle \gets, -2 \rangle \cup \langle 2, \to \rangle
$$


::::

:::::



:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2
Ta quizen!


::::::::{quiz-2}
:::::::{quiz-question}
Hvilken av fortegnslinjene hører til grafen til $f$?

:::{plot}
width: 50%
function: (x + 2) * (x - 1), f
fontsize: 28
:::


::::::{quiz-answer}
---
correct:
---
:::{signchart-2}
width: 80%
function: (x + 2) * (x - 1), f(x)
factors: false
small_figsize:
:::

::::::



::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: (x - 2) * (x - 1), f(x)
small_figsize:
factors: false
:::
::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: -(x + 2) * (x - 1), f(x)
factors: false
small_figsize:
:::
::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: -(x + 1) * (x - 2), f(x)
factors: false
small_figsize:
:::

::::::




:::::::


:::::::{quiz-question}
Hvilken av fortegnslinjene hører til grafen til $g$?

:::{plot}
width: 50%
function: -(x + 3) * (x - 2), g
fontsize: 28
ymax: 7
ymin: -5
:::


::::::{quiz-answer}
---
correct:
---
:::{signchart-2}
width: 80%
function: -(x + 3) * (x - 2), g(x)
factors: false
small_figsize:
:::

::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: (x + 3) * (x - 2), g(x)
factors: false
small_figsize:
:::

::::::

::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: (x - 3) * (x + 2), g(x)
factors: false
small_figsize:
:::
::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: -(x - 3) * (x + 2), g(x)
factors: false
small_figsize:
:::
::::::


:::::::



:::::::{quiz-question}
Hvilken av fortegnslinjene hører til grafen til $h$?


:::{plot}
width: 50%
function: (x + 4) * (x - 1), h
fontsize: 28
ymin: -7
:::


::::::{quiz-answer}
---
correct:
---
:::{signchart-2}
width: 80%
function: (x + 4) * (x - 1), h(x)
factors: false
small_figsize:
:::

::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: -(x + 4) * (x - 1), h(x)
factors: false
small_figsize:
:::
::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: (x - 4) * (x + 1), h(x)
factors: false
small_figsize:
:::
::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: -(x - 4) * (x + 1), h(x)
factors: false
small_figsize:
:::
::::::

:::::::



:::::::{quiz-question}
Hvilken fortegnslinje hører til grafen til $p$?


:::{plot}
width: 50%
function: -(x - 1) * (x - 2), p
fontsize: 28
:::



::::::{quiz-answer}
---
correct:
---
:::{signchart-2}
width: 80%
function: -(x - 1) * (x - 2), p(x)
factors: false
small_figsize:
:::

::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: (x - 1) * (x - 2), p(x)
factors: false
small_figsize:
:::
::::::


::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: -(x + 1) * (x + 2), p(x)
factors: false
small_figsize:
:::
::::::



::::::{quiz-answer}
:::{signchart-2}
width: 80%
function: (x + 1) * (x + 2), p(x)
factors: false
small_figsize:
:::
::::::



:::::::

::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a
:::{signchart-2}
width: 350px
align: right
function: (x + 2) * (x - 3), f(x)
fontsize: 32
factors: false
:::

Fortegnslinja til en funksjon $f$ er vist til høyre.

Bestem hvilken av figurene nedenfor som viser grafen til $f$.

::::{multi-plot2}
---
rows: 2
cols: 2
ymax: 8
ymin: -8
fontsize: 24 
---
:::{plot}
width: 100%
function: (x - 3) * (x + 2)
text: 5, 5, "A", bbox
:::

:::{plot}
width: 100%
function: -(x - 3) * (x + 2)
text: 5, 5, "B", bbox
:::


:::{plot}
width: 100%
function: (x + 3) * (x - 2)
text: 5, 5, "C", bbox
:::

:::{plot}
width: 100%
function: -(x + 3) * (x - 2)
text: 5, 5, "D", bbox
:::


::::


:::::{answer}
Graf A
:::::

:::::::::::::



:::::::::::::{part} b
:::{signchart-2}
width: 350px
align: right
function: -(x + 3) * (x - 1), g(x)
fontsize: 32
factors: false
:::

Fortegnslinja til $g(x)$ er vist i figuren til høyre. 

Hvilken figur nedenfor vises grafen til $g$? 


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 24
---
:::{plot}
width: 100%
function: (x + 1) * (x - 3)
text: 5, 5, "A", bbox
:::

:::{plot}
width: 100%
function: (x + 3) * (x - 1)
text: 5, 5, "B", bbox
:::

:::{plot}
width: 100%
function: -(x + 1) * (x - 3)
text: 5, 5, "C", bbox
:::


:::{plot}
width: 100%
function: -(x + 3) * (x - 1)
text: 5, 5, "D", bbox
:::

::::


:::::{answer}
Graf D.
:::::


:::::::::::::


:::::::::::::{part} c
:::{signchart-2}
width: 350px
align: right
function: (x - 2)**2, h(x)
fontsize: 32
factors: false
:::

Fortegnslinja til $h(x)$ er vist til høyre.

Hvilken av figurene nedenfor viser grafen til $h$?


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 24
---
:::{plot}
width: 100%
function: (x + 2)**2
text: 5, 5, "A", bbox
:::


:::{plot}
width: 100%
function: (x - 2)**2
text: 5, 5, "B", bbox
:::


:::{plot}
width: 100%
function: -(x - 2)**2
text: 5, 5, "C", bbox
:::


:::{plot}
width: 100%
function: -(x + 2)**2
text: 5, 5, "D", bbox
:::


::::


:::::{answer}
Graf B.
:::::


:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a

:::{plot}
width: 350px
align: right
function: -(x + 3) * (x - 4), f
ymax: 14
ymin: -4
:::


Grafen til en andregradsfunksjon $f$ er vist til høyre.

Tegn fortegnslinja til $f(x)$.


:::::{answer}
:::{signchart-2}
width: 70%
function: -(x + 3) * (x - 4), f(x)
factors: false
:::

:::::

:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 350px
align: right
function: (x + 2) * (x - 2), g
:::


Grafen til en andregradsfunksjon $g$ er vist til høyre.

Tegn en fortegnslinje til $g(x)$.


:::::{answer}
:::{signchart-2}
width: 70%
function: (x + 2) * (x - 2), g(x)
factors: false
:::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 350px
align: right
function: -1/2 * (x + 2)**2, h
:::

Grafen til en andregradsfunksjon $h$ er vist til høyre.

:::::{answer}
:::{signchart-2}
width: 70%
function: -1/2 * (x + 2)**2, h(x)
factors: false
:::
:::::

:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5


:::::::::::::{part} a
Løs ulikheten

$$
(x + 2)(x - 4) \leq 0
$$


:::::{answer}
$$
x \in [-2, 4]
$$

::::{solution}
Vi tegner fortegnslinja til $f(x) = (x + 2)(x - 4)$. Vi tegner først en fortegnslinje for hver faktor, deretter ganger vi fortegnene sammen for å få fortegnslinja til $f(x)$: 


:::{signchart-2}
width: 70%
function: (x + 2)*(x - 4), f(x)
:::


Fra fortegnslinja til $f(x)$ ser vi at $f(x) \leq 0$ når 

$$
x \in [-2, 4]
$$

::::

:::::



:::::::::::::

:::::::::::::{part} b
Løs ulikheten

$$
(x - 1)(x + 4) \geq 0
$$


:::::{answer}
$$
x \in \langle \gets, -4] \cup [1, \to \rangle
$$

eller

$$
x \in \real \setminus \langle -4, 1\rangle
$$

::::{solution}
Vi starter med å tegne fortegnslinja til $f(x) = (x - 1)(x + 4)$. Vi tegner først en fortegnslinje for hver faktor, deretter ganger vi fortegnene sammen for å få fortegnslinja til $f(x)$:


:::{signchart-2}
width: 70%
function: (x - 1) * (x + 4), f(x)
:::


Fra fortegnslinja til $f(x)$ ser vi at $f(x) \geq 0$ når

$$
x \in \langle \gets, -4] \cup [1, \to \rangle
$$

som vi også kan skrive som

$$
x \in \real \setminus \langle -4, 1\rangle
$$



::::

:::::


:::::::::::::


:::::::::::::{part} c
Løs ulikheten ved hjelp av å tegne fortegnslinje.

$$
-2x(x - 3) \lt 0
$$


:::::{answer}
$$
x \in \langle \gets, 0 \rangle \cup \langle 3, \to \rangle
$$

eller

$$
x \in \real \setminus [0, 3]
$$

::::{solution}
Vi starter med å tegne fortegnslinja til $f(x) = -2x(x - 3)$. Vi tegner først en fortegnslinje for hver faktor, deretter ganger vi fortegnene sammen for å få fortegnslinja til $f(x)$:

:::{signchart-2}
width: 70%
function: -2*x*(x - 3), f(x)
:::


Fra fortegnslinja til $f(x)$ ser vi at $f(x) < 0$ når

$$
x \in \langle \gets, 0 \rangle \cup \langle 3, \to \rangle
$$

eller

$$
x \in \real \setminus [0, 3]
$$

::::

:::::


:::::::::::::


:::::::::::::{part} d
Løs ulikheten ved å bruke en fortegnslinje:

$$
-3(x + 1)(x - 1) > 0
$$


:::::{answer}
$$
x \in \langle -1, 1 \rangle
$$

::::{solution}
Vi starter med å tegne fortegnslinja til $f(x) = -3(x + 1)(x - 1)$. Vi tegner først en fortegnslinje for hver faktor, deretter ganger vi fortegnene sammen for å få fortegnslinja til $f(x)$:

:::{signchart-2}
width: 70%
function: - 3 * (x + 1) * (x - 1), f(x) 
:::


Fra fortegnslinja til $f(x)$ ser vi at $f(x) > 0$ når

$$
x \in \langle -1, 1 \rangle
$$


::::

:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = x^2 - 2x - 3
$$


Løs ulikheten $f(x) \gt 0$.


:::::{answer}

$$
x \in \real \setminus [-1, 3]
$$


::::{solution}
Vi nullpunktsfaktoriserer $f(x)$ først. Vi bruker $abc$-formelen til å finne nullpunktene til $f$:

$$
x = \dfrac{-(-2) \pm \sqrt{(-2)^2 - 4\cdot 1 \cdot (-3)}}{2 \cdot 1} = \dfrac{2 \pm \sqrt{16}}{2} = \begin{cases} 3 \\ \\ -1 \end{cases}
$$

Dermed kan vi faktorisere $f(x)$ som 

$$
f(x) = (x + 1)(x - 3)
$$

Så tegner vi en fortegnslinje for $f(x)$:

:::{signchart-2}
width: 70%
function: (x + 1)*(x - 3), f(x)
:::

Fra fortegnslinja til $f(x)$ kan vi lese av at $f(x) \gt 0$ når 

$$
x \in \real \setminus [-1, 3]
$$


::::
:::::



:::::::::::::


:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = -x^2 + 4x
$$

Løs ulikheten $g(x) \geq 0$.


:::::{answer}
$$
x \in [0, 4]
$$

::::{solution}
Vi nullpunktsfaktorisere $g(x)$ som gir 

$$
g(x) = -x(x - 4)
$$

Så tegner vi et fortegnsskjema:


:::{signchart-2}
width: 70%
function: -x*(x - 4), g(x)
:::

Fra fortegnslinja til $g(x)$ ser vi at $g(x) \geq 0$ når

$$
x \in [0, 4]
$$

::::
:::::

:::::::::::::


:::::::::::::{part} c
Funksjonen $h$ er gitt ved 

$$
h(x) = x^2 - 1
$$

Løs ulikheten $h(x) \lt 0$.


:::::{answer}

$$
x \in \langle -1, 1 \rangle
$$

::::{solution}
Vi nullpunktsfaktoriserer $h(x)$:

$$
h(x) = x^2 - 1 = (x + 1)(x - 1)
$$

Så tegner vi et fortegnsskjema:

:::{signchart-2}
width: 70%
function: (x + 1)*(x - 1), h(x)
:::

Fra fortegnslinja til $h(x)$ ser vi at $h(x) \lt 0$ når 

$$
x \in \langle -1, 1 \rangle
$$

::::
:::::


:::::::::::::

:::::::::::::::


---




:::::::::::::::{exercise} Oppgave 7


:::::::::::::{part} a
Løs ulikheten

$$
-x^2 + 4x - 3 \leq 0
$$


:::::{answer}
$$
x \in \langle \gets, 1] \cup [3, \to \rangle.
$$

::::{solution}
Vi starter med å nullpunktsfaktorisere andregradsuttrykket. Vi finner nullpunktene med $abc$-formelen:

$$
x = \dfrac{-4 \pm \sqrt{4^2 - 4 \cdot (-1) \cdot (-3)}}{2 \cdot (-1)} = \dfrac{-4 \pm \sqrt{16 - 12}}{-2} = \dfrac{-4 \pm 2}{-2}
$$

Dermed er nullpunktene gitt ved

$$
x = \dfrac{-2}{-2} = 1 \or x = \dfrac{-6}{-2} = 3.
$$

Da kan vi skrive om ulikheten til 

$$
-(x - 1)(x - 3) \leq 0.
$$

Så tegner vi en fortegnslinje for $f(x) = -(x - 1)(x - 3)$:

:::{signchart-2}
width: 70%
function: -x**2 + 4*x - 3, f(x)
:::


Fra fortegnslinja ser vi at $f(x) \leq 0$ når 

$$
x \in \langle \gets, 1] \cup [3, \to \rangle.
$$


::::

:::::



:::::::::::::


:::::::::::::{part} b
Løs ulikheten

$$
x^2 + 4x - 5 \geq 0
$$


:::::{answer}
$$
x \in \langle \gets, -5] \cup [1, \to \rangle.
$$

::::{solution}
Vi starter med å nullpunktsfaktorisere andregradsuttrykket. Vi finner nullpunktene med $abc$-formelen:

$$
x = \dfrac{-4 \pm \sqrt{4^2 - 4 \cdot 1 \cdot (-5)}}{2 \cdot 1} = \dfrac{-4 \pm \sqrt{16 + 20}}{2} = \dfrac{-4 \pm 6}{2}
$$

Dermed er nullpunktene gitt ved

$$
x = \dfrac{2}{2} = 1 \or x = \dfrac{-10}{2} = -5.
$$

Da kan vi skrive om ulikheten til

$$
(x - 1)(x + 5) \geq 0.
$$

Så tegner vi en fortegnslinje for $f(x) = (x - 1)(x + 5)$:

:::{signchart-2}
width: 70%
function: (x - 1)*(x + 5), f(x)
:::


Fra fortegnslinja til $f(x)$ ser vi at $f(x) \geq 0$ når

$$
x \in \langle \gets, -5] \cup [1, \to \rangle.
$$
::::

:::::


:::::::::::::


:::::::::::::{part} c
Løs ulikheten

$$
x^2 + 6x + 5 > -4
$$


:::::{answer}
$$
x \in \langle \gets, -3 \rangle \cup \langle -3, \to \rangle.
$$

::::{solution}
Vi starter med å samle alle ledd på én side av ulikheten slik at vi får $0$ på høyre side:

$$
x^2 + 6x + 5 + 4 > 0 \liff x^2 + 6x + 9 > 0
$$

Vi gjenkjenner uttrykket som 1.kvadratsetning: 

$$
x^2 + 6x + 9 = (x + 3)^2.
$$

Dermed kan vi skrive om ulikheten til 

$$
(x + 3)^2 > 0.
$$

Vi tegner en fortegnslinje for $f(x) = (x + 3)^2$:

:::{signchart-2}
width: 70%
function: (x + 3)**2, f(x)
:::


Fra fortegnslinja til $f(x)$ ser vi at $f(x) > 0$ når 

$$
x \in \langle \gets, -3 \rangle \cup \langle -3, \to \rangle.
$$



::::
:::::

:::::::::::::


:::::::::::::{part} d
Løs ulikheten

$$
-x^2 + 3x + 1 < 3x + 2
$$


:::::{answer}
$$
x \in \real
$$

::::{solution}
Vi starter med å samle alle ledd på én side av ulikheten slik at vi får $0$ på høyre side:

$$
-x^2 + 3x + 1 - 3x - 2 < 0 \liff -x^2 - 1 < 0 \liff x^2 + 1 > 0
$$

Siden $x^2 + 1$ er et kvadratisk uttrykk som alltid er større enn $0$, er ulikheten alltid sann. Dermed er løsningen

$$
x \in \real
$$
::::

:::::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 8

:::{plot}
width: 350px
align: right
function: -2*(x + 3)*(x - 4), f
ticks: off
point: (-3, 0)
text: -3, 0, "$(-3, 0)$", top-left
point: (4, 0)
text: 4, 0, "$(4, 0)$", top-right
point: (0, 24)
text: 0, 24, "$(0, 24)$", top-left
ymax: 30
xmin: -5
xmax: 6
fontsize: 26
:::

Til høyre vises grafen til en andregradsfunksjon $f$.


:::::::::::::{part} a
Bestem $f(x)$.


:::::{answer}
$$
f(x) = -2(x + 3)(x - 4).
$$

::::{solution}
Vi ser at grafen skjærer $x$-aksen i $(-3, 0)$ og $(4, 0)$ som vi kan bruke til å bestemme $f(x)$ på nullpunktsform: 

$$
f(x) = a(x + 3)(x - 4).
$$

Grafen skjærer $y$-aksen i $(0, 24)$ som vi kan bruke til å finne verdien til $a$: 

$$
f(0) = a(0 + 3)(0 - 4) = -12a = 24 \liff a = -2.
$$

Dermed er 

$$
f(x) = -2(x + 3)(x - 4).
$$

::::

:::::


:::::::::::::


:::::::::::::{part} b
Løs ulikheten 

$$
f(x) \leq 0
$$


:::::{answer}
$$
x \in \langle \gets, -3] \cup [4, \to \rangle.
$$

::::{solution}
Vi ser at grafen ligger under $x$-aksen på nedsiden av $(-3, 0)$ og på oversiden av $(4, 0)$. Dermed er løsningen

$$
x \in \langle \gets, -3] \cup [4, \to \rangle.
$$

::::

:::::

:::::::::::::


:::::::::::::{part} c
Løs ulikheten

$$
f(x) > 12.
$$


:::::{answer}
$$
x \in \langle -2, 3 \rangle.
$$


::::{solution}
Her får vi ikke lest av fra grafen, så vi tyr til algebraisk løsning. Vi skal løse ulikheten 

$$
f(x) > 12 \liff -2(x + 3)(x - 4) > 12.
$$

Vi ganger ut venstre side:

$$
-2(x^2 - x - 12) > 12 \liff -2x^2 + 2x + 24 > 12.
$$

Så sørger vi for at vi for $0$ på høyre side:

$$
-2x^2 + 2x + 24 - 12 > 0 \liff -2x^2 + 2x + 12 > 0.
$$

Vi kan også dele uttrykket med $-2$ (og huske på å snu ulikhetstegnet):

$$
x^2 - x - 6 < 0.
$$

Så bestemmer vi nullpunktene til andregradsuttrykket med $abc$-formelen:

$$
x = \dfrac{-(-1) \pm \sqrt{(-1)^2 - 4 \cdot 1 \cdot (-6)}}{2 \cdot 1} = \dfrac{1 \pm \sqrt{1 + 24}}{2} = \dfrac{1 \pm 5}{2}.
$$

Dermed er nullpunktene gitt ved

$$
x = \dfrac{6}{2} = 3 \or x = \dfrac{-4}{2} = -2.
$$

Da kan vi skrive om ulikheten til

$$
(x + 2)(x - 3) < 0.
$$

Så tegner vi en fortegnslinje for $(x + 2)(x - 3)$:

:::{signchart-2}
width: 70%
function: (x + 2)*(x - 3), (x + 2)(x - 3)
:::


Fra fortegnslinja ser vi at 

$$
(x + 2)(x - 3) < 0 \liff x \in \langle -2, 3 \rangle.
$$


::::


:::::



:::::::::::::


:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 9
:::{plot}
width: 350px
align: right
function: x*(x - 4), f
ticks: off
point: (0, 0)
text: 0, 0, "$(0, 0)$", bottom-left
point: (2, -4)
text: 2, -4, "$(2, -4)$", bottom-center
fontsize: 26
:::


Til høyre vises grafen til en andregradsfunksjon $f$.



:::::::::::::{part} a
Bestem $f(x)$.


:::::{answer}
$$
f(x) = x(x - 4) = x^2 - 4x.
$$

::::{solution}
Grafen til $f$ har et bunnpunkt i $(2, -4)$ og et nullpunkt $(0, 0)$ Fordi symmetrilinja er i $x = 2$, så vil det andre nullpunktet ligge samme avstand fra symmetrilinja langs $x$-aksen som betyr at det andre nullpunktet er i $(4, 0)$. Da kan vi skrive $f(x)$ på nullpunktsform:

$$
f(x) = a(x - 0)(x - 4) = ax(x - 4).
$$

For å finne verdien til $a$, så bruker vi bunnpunktet:

$$
f(2) = -4 \liff a\cdot 2 \cdot (2 - 4) = -4 \liff -4a = -4 \liff a = 1.
$$

Dermed er 

$$
f(x) = x(x - 4) = x^2 - 4x.
$$
::::

:::::

:::::::::::::


:::::::::::::{part} b

Løs ulikheten 

$$
f(x) \leq 0
$$


:::::{answer}
$$
x \in [0, 4].
$$

::::{solution}
Fra grafen til $f$ kan vi se at grafen ligger under $x$-aksen mellom nullpunktene. Dermed er $f(x) \leq 0$ når 

$$
x \in [0, 4].
$$
::::

:::::

:::::::::::::


:::::::::::::{part} c

Løs ulikheten 

$$
f(x) > 5
$$


:::::{answer}
$$
x \in \langle \gets, -1 \rangle \cup \langle 5, \to \rangle.
$$

::::{solution}
Vi skal løse ulikheten 

$$
f(x) > 5 \liff x^2 - 4x > 5.
$$

Vi skriver om ulikheten slik at vi får $0$ på høyre side:

$$
x^2 - 4x - 5 > 0.
$$

Så finner vi nullpunktene til andregradsuttrykket med $abc$-formelen:

$$
x = \dfrac{-(-4) \pm \sqrt{(-4)^2 - 4 \cdot 1 \cdot (-5)}}{2 \cdot 1} = \dfrac{4 \pm \sqrt{16 + 20}}{2} = \dfrac{4 \pm \sqrt{36}}{2} = \dfrac{4 \pm 6}{2}.
$$

Dermed er nullpunktene gitt ved

$$
x = \dfrac{10}{2} = 5 \or x = \dfrac{-2}{2} = -1.
$$

Det betyr at vi kan skrive om ulikheten til

$$
(x + 1)(x - 5) > 0.
$$

Grafen til dette uttrykket er konveks (den smiler {poly-icon}`smile`) som betyr at den må ligger under $x$-aksen mellom nullpunktene. Dermed vil løsningen av ulikheten være $x$-verdiene som ligger på nedsiden og oversiden av nullpunktene. Altså er 

$$
(x + 1)(x - 5) > 0 \liff x \in \langle \gets, -1 \rangle \cup \langle 5, \to \rangle.
$$
::::

:::::

:::::::::::::



:::::::::::::::


---




:::::::::::::::{exercise} Oppgave 10

En andregradsfunksjon $f$ er gitt ved 

$$
f(x) = rx^2 - 2x + r \qder r \in \real
$$


:::::::::::::{part} a
Bestem $r$ slik at $f$ bare har ett nullpunkt.


:::::{answer}
$$
r = -1 \or r = 1.
$$

::::{solution}
Vi bruker $abc$-formelen for å avgjøre hvilke verdier for $r$ som gir ett nullpunkts:

$$
x = \dfrac{-(-2) \pm \sqrt{(-2)^2 - 4 \cdot r \cdot r}}{2 \cdot r} = \dfrac{2 \pm \sqrt{4 - 4r^2}}{2r}
$$

Vi får $0$ i kvadratroten dersom 

$$
4 - 4r^2 = 0 \liff 4r^2 = 4 \liff r^2 = 1 \liff r = \pm 1.
$$

Altså har grafen til $f$ ett nullpunkt hvis 

$$
r = -1 \or r = 1.
$$


::::

:::::


:::::::::::::


:::::::::::::{part} b
Bestem $r$ slik at $f$ ikke har noen nullpunkter.


:::::{answer}
$$
r \in \langle -1, 1 \rangle.
$$

::::{solution}

Vi vet at $f$ ikke har noen nullpunkter dersom vi får et negativt tall i kvadratroten, som betyr at $f$ ikke har noen nullpunkter dersom 

$$
4 - 4r^2 < 0 \liff 4r^2 - 4 > 0 \liff r^2 - 1 > 0 \liff (r - 1)(r + 1) > 0.
$$

Dette er et andregradsuttrykk som er konveks – den smiler {polyicon}`smile` – og som har nullpunkter i $r = -1$ og $r = 1$. Grafen vil være negativt mellom nullpunktene, så derfor vil ikke $f$ ha noen nullpunkter dersom 

$$
r \in \langle -1, 1 \rangle.
$$

::::

:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 11


::::{hints} Hvordan løser jeg andregradsulikheter med CAS?
I gif-en nedenfor vises et eksempel på hvordan man løser en andregradsulikhet med CAS:

:::{figure} ./videoer/cas_ulikheter.gif
---
class: no-click, adaptive-figure
width: 100%
---
:::
::::


:::::::::::::{part} a

:::{cas-popup}
---
layout: sidebar
---
:::


Bruk CAS til å løse ulikheten

$$
x^2 - 3x + 2 < 0
$$


:::::{answer}
$$
x \in \langle 1, 2 \rangle.
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_7/a.png
---
class: no-click, adaptive-figure
width: 60%
---
:::

Fra utskriften ser vi at løsningen er 

$$
x \in \langle 1, 2 \rangle.
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


Bruk CAS til å løse ulikheten

$$
-x^2 + 2x - 1 < 0
$$


:::::{answer}
$$
x \in \langle \gets, 1 \rangle \cup \langle 1, \to \rangle.
$$


::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_7/b.png
---
class: no-click, adaptive-figure
width: 60%
---
:::

Fra utskriften ser vi at løsningen er

$$
x \in \langle \gets, 1 \rangle \cup \langle 1, \to \rangle.
$$


::::

:::::


:::::::::::::


:::::::::::::{part} c

:::{cas-popup}
---
layout: sidebar
---
:::

Bruk CAS til å løse ulikheten

$$
-x^2 + 5x + 6 \geq 0
$$


:::::{answer}
$$
x \in [-1, 6]
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_7/c.png
---
class: no-click, adaptive-figure
width: 60%
---
:::


Fra utskriften ser vi at løsningen er

$$
x \in [-1, 6]
$$


::::

:::::

:::::::::::::


:::::::::::::{part} d


:::{cas-popup}
---
layout: sidebar
---
:::



Bruk CAS til å løse ulikheten


$$
x^2 - 2x + 5 \leq -x^2 + 3x + 3
$$


:::::{answer}
$$
x \in \left[ \dfrac{1}{2}, 2\right]
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_7/d.png
---
class: no-click, adaptive-figure
width: 60%
---
:::

Fra utskriften ser vi at løsningen er

$$
x \in \left[ \dfrac{1}{2}, 2\right]
$$


::::

:::::


:::::::::::::

:::::::::::::::