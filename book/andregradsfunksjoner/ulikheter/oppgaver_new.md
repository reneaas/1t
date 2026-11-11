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
fontsize: 28
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

:::::::::::::
:::::::::::::::