# Oppgaver: Lineære-over-lineære rasjonale funksjoner


:::::::::::::::{exercise} Oppgave 1 

I den interaktive figuren nedenfor vises grafen til en rasjonal funksjon $f$ gitt ved

$$
f(x) = \dfrac{a(x - b)}{x - c}
$$

:::{interactive-graph} 
interactive-var: a, -4, 4, 9
interactive-var: b, -4, 4, 9
interactive-var: c, -4, 4, 9
interactive-var-start: a=1, b=2, c=-1
function: a*(x - b) / (x - c), f, (-10, 10) \ {c}
xmin: -8
xmax: 8
ymin: -8
ymax: 8
hline: a, dashed
vline: c, dashed
point: (b, 0)
width: 60%
:::


:::::::::::::{part} a
Bestem $a$, $b$ og $c$ slik at grafen til $f$ har

1. En horisontal asymptote med likningen $y = 3$
2. En vertikal asymptote med likningen $x = -1$
3. Et nullpunkt i $x = 2$.


:::::{answer-2}
$$
a = 3 \and b = 2 \and c = -1
$$
:::::
:::::::::::::


:::::::::::::{part} b
Bestem $a$, $b$ og $c$ slik at

1. Grafen til $f$ har en horisontal asymptote med likningen $y = -2$.
2. Grafen til $f$ skjærer $x$-aksen i $x = -3$.
3. Grafen til $f$ har en vertikal asymptote med likningen $x = 4$.


::::{answer-2}
$$
a = -2 \and b = -3 \and c = 4
$$
::::
:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2
Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist nedenfor.

:::{plot}
width: 60%
fontsize: 30
function: (x - 1) / (x - 2), f
point: (1, 0)
vline: 2, dashed
hline: 1, dashed
:::

Hvilket alternativ viser $f(x)$?

::::::{quiz-answer}
---
correct: true
---
$$
f(x) = \dfrac{x - 1}{x - 2}
$$
::::::


::::::{quiz-answer}
$$
f(x) = \dfrac{x + 1}{x - 2}
$$
::::::


::::::{quiz-answer}
$$
f(x) = \dfrac{-x + 1}{x - 2}
$$
::::::


::::::{quiz-answer}
$$
f(x) = \dfrac{x - 1}{x + 2}
$$
::::::

:::::::



:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist nedenfor.

:::{plot}
width: 70%
function: 2*(x - 3) / (x + 1), f, (-10, 10) \ {-1}
vline: -1, dashed
hline: 2, dashed
point: (3, 0)
xmin: -8
xmax: 8
ymin: -8
ymax: 8
:::

Hvilket alterantiv viser $f(x)$?

::::::{quiz-answer}
---
correct: true
---
$$
f(x) = \dfrac{2(x - 3)}{x + 1}
$$
::::::


::::::{quiz-answer}
$$
f(x) = \dfrac{3(x - 2)}{x + 1}
$$
::::::


::::::{quiz-answer}
$$
f(x) = \dfrac{x - 3}{x - 2}
$$
::::::


::::::{quiz-answer}
$$
f(x) = \dfrac{2(x + 1)}{x - 3}
$$
::::::


:::::::



:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist nedenfor.


:::{plot}
width: 70%
function: -3 * (x + 1) / x
vline: 0, dashed
hline: -3, dashed
point: (-1, 0)
xmin: -8
xmax: 8
ymin: -8
ymax: 8
:::

Hvilket alternativ viser $f(x)$?

::::::{quiz-answer}
---
correct: true
---
$$
f(x) = \dfrac{-3(x + 1)}{x}
$$
::::::

::::::{quiz-answer}
$$
f(x) = \dfrac{3(x + 1)}{x}
$$
::::::

::::::{quiz-answer}
$$
f(x) = \dfrac{-3(x - 1)}{x}
$$
::::::

::::::{quiz-answer}
$$
f(x) = \dfrac{-3(x + 1)}{x - 1}
$$
::::::


:::::::


:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist nedenfor.

:::{plot}
width: 70%
function: 2*x / (x + 3)
vline: -3, dashed
hline: 2, dashed
point: (0, 0)
xmin: -8
xmax: 8
ymin: -8
ymax: 8
:::

Hvilket alternativ viser $f(x)$?

::::::{quiz-answer}
---
correct: true
---
$$
f(x) = \dfrac{2x}{x + 3}
$$
::::::

::::::{quiz-answer}
$$
f(x) = \dfrac{2(x + 3)}{x}
$$
::::::

::::::{quiz-answer}
$$
f(x) = \dfrac{2x}{x - 3}
$$
::::::

::::::{quiz-answer}
$$
f(x) = \dfrac{(x + 3)}{2x}
$$
::::::


:::::::


::::::::
:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 3

:::::::::::::{part} a
:::{plot}
align: right
width: 350px
function: -(x - 1) / (x - 2), f
domain: (-10, 10) \ {2}
vline: 2, dashed
hline: -1, dashed
fontsize: 32
:::

Grafen til $f$ vises til høyre.

Bestem $f(x)$.


:::::{answer-2}
$$
f(x) = \dfrac{-(x - 1)}{x - 2}
$$
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
align: right
width: 350px
function: 2*(x - 1) / (x - 3), g
domain: (-10, 10) \ {3}
hline: 2, dashed
vline: 3, dashed
xmax: 8
ymax: 8
ymin: -4
fontsize: 32
:::


Grafen til $g$ vises til høyre.

Bestem $g(x)$.


:::::{answer-2}
$$
g(x) = \dfrac{2(x - 1)}{x - 3}
$$
:::::

:::::::::::::


:::::::::::::{part} c
:::{plot}
align: right
width: 350px
function: -2*(x + 1) / (x - 1), h
domain: (-10, 10) \ {1}
vline: 1, dashed
hline: -2, dashed
xmax: 8
ymin: -5
fontsize: 32
:::


Grafen til $h$ vises til høyre.

Bestem $h(x)$.


:::::{answer-2}
$$
h(x) = \dfrac{-2(x + 1)}{x - 1}
$$
:::::
:::::::::::::


:::::::::::::{part} d
:::{plot}
align: right
fontsize: 32
width: 350px
function: (x - 3) / (x + 2), p
domain: (-10, 10) \ {-2}
vline: -2, dashed
hline: 1, dashed
xmin: -7
ymax: 6
:::

Grafen til $p$ vises til høyre.

Bestem $p(x)$.


:::::{answer-2}
$$
p(x) = \dfrac{x - 3}{x + 2}
$$
:::::
:::::::::::::

:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 4


Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist i figuren nedenfor.


:::{plot}
width: 50%
function: 2*(x - 1) / (x + 3), f
vline: -3, dashed
hline: 2, dashed
point: (1, 0)
xmin: -8
xmax: 8
ymin: -8
ymax: 8
:::

Hvilket alternativ viser fortegnslinja til $f(x)$?


::::::{quiz-answer}
---
correct: true
---
:::{signchart-2}
width: 100%
function: 2*(x - 1) / (x + 3), f(x)
factors: false
fontsize: 35
:::

::::::


::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: 2*(x + 1) / (x - 3), f(x)
factors: false
fontsize: 35
:::

::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: -2*(x - 1) / (x + 3), f(x)
factors: false
fontsize: 35
:::

::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: -2*(x + 1) / (x - 3), f(x)
factors: false
fontsize: 35
:::

::::::





:::::::


:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ vises i figuren nedenfor.

:::{plot}
width: 50%
function: -2*(x + 3) / x, f
vline: 0, dashed
hline: -2, dashed
point: (-3, 0)
xmin: -8
xmax: 8
ymin: -8
ymax: 8
:::

Hvilket alternativ viser fortegnslinja til $f(x)$?

::::::{quiz-answer}
---
correct: true
---
:::{signchart-2}
width: 100%
function: -2*(x + 3) / x, f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: 2*(x + 3) / x, f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: -2*(x - 3) / x, f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: 2*(x - 3) / x, f(x)
factors: false
fontsize: 35
:::
::::::




:::::::



:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist i figuren nedenfor.

:::{plot}
width: 70%
function: x / (x + 2), f
vline: -2, dashed
hline: 1, dashed
point: (0, 0)
xmin: -8
xmax: 8
ymin: -8
ymax: 8
:::

Hvilket alternativ viser fortegnslinja til $f(x)$?

::::::{quiz-answer}
---
correct: true
---
:::{signchart-2}
width: 100%
function: x / (x + 2), f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: (x + 2) / x, f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: -x / (x + 2), f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: -(x + 2) / x, f(x)
factors: false
fontsize: 35
:::
::::::



:::::::


:::::::{quiz-question}
Grafen til en rasjonal funksjon $f$ er vist i figuren nedenfor.

:::{plot}
width: 70%
function: -3*(x - 2) / (x - 4), f
vline: 4, dashed
hline: -3, dashed
point: (2, 0)
xmin: -2
xmax: 14
ymin: -8
ymax: 8
:::

Hvilket alternativ viser fortegnslinja til $f(x)$?

::::::{quiz-answer}
---
correct: true
---
:::{signchart-2}
width: 100%
function: -3*(x - 2) / (x - 4), f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: 3*(x - 2) / (x - 4), f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: -3*(x + 2) / (x - 4), f(x)
factors: false
fontsize: 35
:::
::::::

::::::{quiz-answer}
:::{signchart-2}
width: 100%
function: 3*(x + 2) / (x - 4), f(x)
factors: false
fontsize: 35
:::
::::::



:::::::


::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 5
:::{plot}
width: 350px
align: right
fontsize: 26
function: (x - 2) / (x - 1), f
vline: 1, dashed
hline: 1, dashed
:::


Grafen til en rasjonal funksjon $f$ er vist i figuren til høyre.

Bruk grafen til å løse oppgavene nedenfor.

:::{clear}
:::

:::::::::::::{part} a
Løs likningen $f(x) = 0$.


:::::{answer}
$$
x = 2
$$
:::::

:::::::::::::


:::::::::::::{part} b
Løs ulikheten $f(x) \gt 0$.


:::::{answer}
$$
x\in \langle \gets, 1\rangle \cup \langle 2, \to \rangle
$$
:::::

:::::::::::::



:::::::::::::{part} c
Løs ulikheten $f(x) \leq 2$.


:::::{answer}
$$
x \in \langle \gets, 0] \cup \langle 1, \to \rangle
$$
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6
Funksjonen $f$ er gitt ved

$$
f(x) = \dfrac{2x - 1}{x + 3}
$$


:::::::::::::{part} a
Bestem koordinatene til skjæringspunktet mellom grafen til $f$ og $x$-aksen.


:::::::::::::



:::::::::::::{part} b
Finn likningene til asymptotene til grafen til $f$.


:::::::::::::



:::::::::::::{part} c
Løs ulikheten 

$$
f(x) \geq 0
$$
:::::::::::::


:::::::::::::{part} d
Løs ulikheten

$$
f(x) \geq 2
$$
:::::::::::::

:::::::::::::::



:::::::::::::::{exercise} Oppgave 7
Finn nullpunktet og asymptotene til funksjonene. Tegn en skisse av grafen til hver funksjon.


:::::::::::::{part} a
$$
f(x) = \dfrac{3x - 2}{x + 1}
$$
:::::::::::::


:::::::::::::{part} b
$$
g(x) = \dfrac{2x + 1}{x - 4}
$$
:::::::::::::


:::::::::::::{part} c
$$
h(x) = \dfrac{-4x + 3}{2x + 8}
$$
:::::::::::::


:::::::::::::{part} d
$$
p(x) = \dfrac{4x - 1}{x - 3}
$$
:::::::::::::

:::::::::::::::



:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
Om en rasjonal funksjon $f$ får du vite at

* Grafen til $f$ har asymptotene $y = 2$ og $x = -4$
* Grafen til $f$ har et nullpunkt i $x = 1$

Bestem et mulig uttrykk for $f(x)$.

:::::{answer}
$$
f(x) = \dfrac{2(x - 1)}{x + 4}
$$
:::::

:::::::::::::


:::::::::::::{part} b
Om en rasjonal funksjon $g$ får du vite at

* Grafen til $g$ har en vertikal asymptote $x = -2$
* Grafen til $g$ skjærer $x$-aksen i $x = 2$
* Grafen til $g$ skjærer $y$-aksen i $y = 6$

Bestem et mulig uttrykk for $g(x)$.

:::::{answer}
$$
g(x) = \dfrac{-6(x - 2)}{x + 2}
$$
:::::

:::::::::::::



:::::::::::::{part} c
Om en rasjonal funksjon $h$ får du vite at

* Grafen til $f$ har en horisontal asymptote $y = 4$
* Grafen til $h$ skjærer $x$-aksen i $x = -3$
* Grafen til $h$ har et bruddpunkt i $x = 2$

Bestem et mulig uttrykk for $h(x)$.


:::::{answer}
$$
h(x) = \dfrac{4x + 12}{x - 2}
$$
:::::


:::::::::::::


:::::::::::::::