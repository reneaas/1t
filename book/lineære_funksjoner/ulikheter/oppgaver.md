# Oppgaver: Lineære ulikheter


:::::::::::::::{exercise} Oppgave 1
:::{plot}
width: 100%
align: right
fontsize: 26
function: x + 3, f
:::


Figuren til høyre viser grafen til 

$$
f(x) = x + 3
$$

:::{clear}
:::

:::::::::::::{part} a
Bruk grafen til å løse ulikheten 

$$
f(x) \gt 0
$$

:::::{answer}
$$
x \gt -3
$$
:::::

:::::::::::::



:::::::::::::{part} b
Bruk grafen til å løse ulikheten

$$
f(x) \leq 3
$$

:::::{answer}
$$
x \leq 0
$$
:::::
:::::::::::::



:::::::::::::{part} c
Bruk grafen til å løse ulikheten

$$
f(x) \geq 5
$$

:::::{answer}
$$
x \geq 2
$$
:::::
:::::::::::::



:::::::::::::::




:::::::::::::::{exercise} Oppgave 2

:::{plot}
width: 100%
align: right
fontsize: 26
function: -2*x + 4, g
:::


Figuren til høyre viser grafen til

$$
g(x) = -2x + 4
$$


:::{clear}
:::

:::::::::::::{part} a
bruk grafen til å løse ulikheten 

$$
g(x) \geq 0
$$

:::::{answer}
$$
x \leq 2
$$
:::::

:::::::::::::


:::::::::::::{part} b
Bruk grafen til å løse ulikheten

$$
g(x) \lt -2
$$

:::::{answer}
$$
x \gt 3
$$
:::::

:::::::::::::


:::::::::::::{part} c
Bruk grafen til å løse ulikheten

$$
g(x) \leq 2
$$


:::::{answer}
$$
x \geq 1
$$
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
Løs ulikhetene algebraisk.


:::::::::::::{part} a
$$
2x + 5 \lt -2
$$
:::::::::::::


:::::::::::::{part} b
$$
3x + 2 \gt -2x + 7
$$
:::::::::::::



:::::::::::::{part} c
$$
\dfrac{1}{5}x + 3 \leq -2x + 3
$$
:::::::::::::


:::::::::::::{part} d
$$
-2x + \dfrac{1}{2} \geq 5x + 3
$$
:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
Løs ulikhetene med CAS.

::::{hints} Hvordan løser jeg en ulikhet med CAS?
Nedenfor ser du en gif som løser ulikheten

$$
2x + 3 < -3x + 5
$$

:::{figure} ./videoer/cas.gif
---
class: no-click, adaptive-figure
width: 100%
---
:::

Fra utskriften ser vi at løsningen er

$$
x < \dfrac{2}{5}
$$

::::


:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::

$$
-2x + 3 \gt 2x + 6
$$


:::::{answer}
$$
x \lt -\dfrac{3}{4}
$$
:::::


:::::::::::::


:::::::::::::{part} b

:::{cas-popup}
---
layout: sidebar
---
:::


$$
3x - 2 \geq \dfrac{1}{3}x + 1
$$


:::::{answer}
$$
x \geq \dfrac{9}{8}
$$
:::::


:::::::::::::


:::::::::::::{part} c
:::{cas-popup}
---
layout: sidebar
---
:::


$$
-2x + 9 \leq 3x + 5
$$


:::::{answer}
$$
x \geq \dfrac{4}{5}
$$
:::::


:::::::::::::


:::::::::::::{part} d
:::{cas-popup}
---
layout: sidebar
---
:::

$$
-7x + 3 \lt 3x + 7
$$



:::::{answer}
$$
x \gt -\dfrac{2}{5}
$$
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5
Nedenfor grafen til fire lineære funksjoner.

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 24
---
:::{plot}
width: 100%
function: x + 3
text: 5, 5, "A", center-center, bbox
:::


:::{plot}
width: 100%
function: -x + 3
text: 5, 5, "B", center-center, bbox
:::

:::{plot}
width: 100%
function: -x + 1
text: 5, 5, "C", center-center, bbox
:::


:::{plot}
width: 100%
function: x - 1
text: 5, 5, "D", center-center, bbox
:::

::::


:::::::::::::{part} a
Avgjør hvilken funksjon som tilfredsstiller at

$$
f(x) \geq 0 \liff x \geq 1
$$


:::::{answer}
Funksjon D.
:::::
:::::::::::::


:::::::::::::{part} b
Avgjør hvilken funksjon som tilfredsstiller at

$$
f(x) \gt 3 \liff x \lt 0
$$


:::::{answer}
Funksjon A.
:::::

:::::::::::::



:::::::::::::{part} c
Avgjør hvilken funksjon som tilfredsstiller at

$$
f(x) \lt 2 \liff x \lt 3
$$

:::::{answer}
Funksjon D.
:::::
:::::::::::::


:::::::::::::::