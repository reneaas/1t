# Oppgavesamling: Rasjonale funksjoner


:::::::::::::::{exercise} Oppgave 1

:::{plot}
width: 350px
align: right
fontsize: 24
function: 2 * (x - 3) / (x + 1), f
vline: -1, dashed
hline: 2, dashed
ymax: 10
ymin: -10
ystep: 2
:::

Grafen til en rasjonal funksjon $f$ er vist i figuren til høyre.


:::::::::::::{part} a
Bestem et mulig uttrykk for $f(x)$. 


::::{answer}
$$
f(x) = \dfrac{-2x + 6}{x + 1}
$$  
::::

:::::::::::::


:::::::::::::{part} b
Løs ulikheten $f(x) < 0$. 

::::{answer}
$$
x \in \mathbb{R} \setminus [-1, 3]
$$
::::

:::::::::::::


:::::::::::::{part} c
Løs ulikheten $f(x) \geq 2$. 


::::{answer}
$$
x \in \langle \gets, -1 \rangle
$$
::::

:::::::::::::


:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 2

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{-x + 2}{x - 1}
$$

:::::::::::::{part} a
Løs likningen $f(x) = 0$. 

::::{answer}
$$
x = 2. 
$$
::::
:::::::::::::


:::::::::::::{part} b
Bestem eventuelle vertikale asymptoter til grafen til $f$.

::::{answer}
$$
x = 1. 
$$
::::

:::::::::::::


:::::::::::::{part} c
Bestem eventuelle horisontale eller skrå asymptoter til grafen til $f$.

::::{answer}
--
$$
y = -1. 
$$
::::

:::::::::::::

:::::::::::::{part} d
Lag en skisse av grafen til $f$. 

::::{answer}

:::{plot}
width: 60%
function: (-x + 2) / (x - 1), f
ticks: off
vline: 1, dashed
text: 1, -4, "$x = 1$", center-right
hline: -1, dashed
text: 4, -1, "$y = -1$", bottom-center
point: (2, 0)
text: 2, 0, "$(2, 0)$", top-right
:::

::::

:::::::::::::

:::::::::::::::




---




:::::::::::::::{exercise} Oppgave 4

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{2x - 1}{3x + 4}
$$

:::::::::::::{part} a
Avgjør om $f$ har nullpunkter og bestem nullpunktene hvis de finnes.


::::{answer}
$$
x = \dfrac{1}{2}
$$
::::

:::::::::::::

:::::::::::::{part} b
Avgjør om $f$ har vertikale asymptoter og bestem likningene til asymptotene hvis de finnes.


::::{answer}
$$
x = -\dfrac{4}{3}
$$
::::

:::::::::::::

:::::::::::::{part} c
Avgjør om $f$ har horisontale asymptoter og bestem likningene til asymptotene hvis de finnes.


::::{answer}
$$
y = \dfrac{2}{3}
$$
::::

:::::::::::::

:::::::::::::{part} d
Lag en skisse av grafen til $f$. 


::::{answer}
:::{figure} ./figurer/oppgave_4/d.svg
---
width: 100%
class: no-click, adaptive-figure
---
:::
::::

:::::::::::::


:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 5

To rasjonale funksjoner $f$ og $g$ er gitt ved

$$
f(x) = \dfrac{x + 2}{(x - 3)^2} \quad \text{og} \quad g(x) = \dfrac{(x + 2)^2}{x - 3}
$$

Nedenfor vises fire grafer der én av dem er grafen til $f$ og én av dem er grafen til $g$.


::::{multi-plot2}
---
rows: 2
cols: 2
xmin: -10
xmax: 10
ymin: -10
ymax: 10
fontsize: 25
lw: 3.5
---
:::{plot}
width: 100%
function: (x + 2) / (x - 3)**2
ticks: off
text: 5, 8, "A", center-center, bbox
hline: 0, dashed, red
vline: 3, dashed, red
:::


:::{plot}
width: 100%
function: -(x + 2) / (x - 3)**2
ticks: off
text: 5, 8, "B", center-center, bbox
hline: 0, dashed, red
vline: 3, dashed, red
:::


:::{plot}
width: 100%
function: (x + 2)**2 / (x - 3)
ticks: off
text: 5, 35, "C", center-center, bbox
ymin: -40
ymax: 40
line: 1, 7, dashed, red
vline: 3, dashed, red
:::

:::{plot}
width: 100%
function: (x - 2)**2 / (x + 3)
ticks: off
text: 5, 35, "D", center-center, bbox
ymin: -40
ymax: 40
line: 1, -7, dashed, red
vline: -3, dashed, red
:::

::::


:::::::::::::{part} a
Avgjør hvilken figur som viser grafen til $f$.

::::{answer}
Graf **A**. 
::::

:::::::::::::


:::::::::::::{part} b
Avgjør hvilken figur som viser grafen til $g$.

::::{answer}
Graf **C**. 
::::

:::::::::::::


:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 6

Tre rasjonale funksjoner $f$, $g$ og $h$ er gitt ved

$$
f(x) = \dfrac{x^2 + 4x - 5}{x^2 - 9} \quad\quad g(x) = \dfrac{x^2 - 1}{x^2 - 9} \quad\quad h(x) = \dfrac{x^2 - 9}{x^2 - 1}
$$

Avgjør hvilke av figurene nedenfor som viser grafene til $f$, $g$ og $h$.



::::{multi-plot2}
---
rows: 3
cols: 2
xmin: -10
xmax: 10
ymin: -10
ymax: 10
fontsize: 25
lw: 3.5
---
:::{plot}
function: (x**2 - 1) / (x**2 - 9)
ticks: off
hline: 1, dashed, red
vline: -3, dashed, red
vline: 3, dashed, red
text: 5, 8, "A", center-center, bbox 
:::


:::{plot}
function: -(x**2 - 1) / (x**2 - 9)
ticks: off
hline: 1, dashed, red
vline: -3, dashed, red
vline: 3, dashed, red
text: 5, 8, "B", center-center, bbox
:::


:::{plot}
function: (x**2 - 9) / (x**2 - 1)
ticks: off
hline: 1, dashed, red
vline: -1, dashed, red
vline: 1, dashed, red
text: 5, 8, "C", center-center, bbox 
ymin: -15
ymax: 15
:::


:::{plot}
function: -(x**2 - 9) / (x**2 - 1)
ticks: off
hline: -1, dashed, red
vline: -1, dashed, red
vline: 1, dashed, red
text: 5, 8, "D", center-center, bbox
ymin: -15
ymax: 15
:::

:::{plot}
function: -(x**2 + 4*x - 5) / (x**2 - 9)
ticks: off
hline: -1, dashed, red
vline: -3, dashed, red
vline: 3, dashed, red
text: 5, 8, "E", center-center, bbox
:::


:::{plot}
function: (x**2 + 4*x - 5) / (x**2 - 9) 
ticks: off
hline: 1, dashed, red
vline: -3, dashed, red
vline: 3, dashed, red
text: 5, 8, "F", center-center, bbox
:::



::::




::::{answer}
* Graf **F** viser $f$.
* Graf **A** viser $g$.
* Graf **C** viser $h$.
::::



:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 7

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{x^2 - 4}{(x + 2)(x - 4)} 
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$, dersom de finnes.


::::{answer}
$$
x = 2.
$$
::::

:::::::::::::


:::::::::::::{part} b
Bestem likningene til de vertikale asymptotene til $f$, dersom de finnes.


::::{answer}
$$
x = 4.
$$
::::

:::::::::::::


:::::::::::::{part} c
Bestem likningen til $f$ sin skrå eller horisontale asymptote, dersom den finnes.

::::{answer}
$$
y = 1.
$$
::::

:::::::::::::


:::::::::::::{part} d
Løs ulikheten $f(x) > 0$

::::{answer}
$$
x \in \langle \gets, 2 \rangle \cup \langle 4, \to \rangle \setminus \{-2\}
$$
::::

:::::::::::::


:::::::::::::{part} e
Lag en skisse av grafen til $f$.


::::{answer}
:::{figure} ./figurer/oppgave_7/e.svg
---
width: 100%
class: no-click, adaptive-figure
---
:::
::::

:::::::::::::


:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 8
En rasjonal funksjon $g$ er gitt ved 

$$
g(x) = \dfrac{x^2 + 6x + 9}{x - 2}
$$


:::::::::::::{part} a
Bestem nullpunktene til $g$, dersom de finnes.


::::{answer}
$$
x = -3. 
$$
::::

:::::::::::::

:::::::::::::{part} b
Bestem likningene til $g$ sine vertikale asymptoter, dersom de finnes.

::::{answer}
$$
x = 2. 
$$
::::

:::::::::::::


:::::::::::::{part} c
Bestem likningen til en eventuell skrå eller horisontal asymptote til $g$.


::::{answer}
$$
y = x + 8. 
$$
::::

:::::::::::::


:::::::::::::{part} d
Løs ulikheten $g(x) < 0$. 

::::{answer}
$$
x \in \langle \gets, 2 \rangle \setminus \{-3\}
$$
::::

:::::::::::::


:::::::::::::{part} e
Lag en skisse av grafen til $g$. 


::::{answer}
:::{figure} ./figurer/oppgave_8/e.svg
---
width: 100%
class: no-click, adaptive-figure
---
:::
::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 9

En rasjonal funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{x^3 - 4x}{(x + 2)(x - 1)}
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$, dersom de finnes.

::::{answer}
$$
x = 0 \or x = 2.
$$
::::

:::::::::::::


:::::::::::::{part} b
Bestem likningene til $f$ sine vertikale asymptoter, dersom de finnes.


::::{answer}
$$
x = 1.
$$
::::


:::::::::::::


:::::::::::::{part} c
Bestem likningen til en eventuell skrå eller horisontal asymptote til $f$.

::::{answer}
$$
y = x - 1.
$$
::::

:::::::::::::


:::::::::::::{part} d
Løs ulikheten $f(x) \geq 0$. 


::::{answer}
$$
x \in [0, 1 \rangle \cup [2, \to \rangle
$$
::::


:::::::::::::


:::::::::::::{part} e
Lag en skisse av grafen til $f$. 

::::{answer}
:::{figure} ./figurer/oppgave_9/e.svg
---
width: 100%
class: no-click, adaptive-figure
---
:::
::::

:::::::::::::



:::::::::::::::


