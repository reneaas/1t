# Oppgaver: Lineære likningssystemer


:::::::::::::::{exercise} Oppgave 1
Bruk figurene til å løse likningsystemene.


:::::::::::::{part} a
:::{plot}
width: 350px
align: right
fontsize: 24
function: -2*x - 3, $2x + y = -3$
function: (x + 5) / 3, $-x + 3y = 5$
:::

$$
\begin{align*}
2x + y &= -3 \\
\\
-x + 3y &= 5
\end{align*}
$$



:::::{answer}
$$
x = -2 \and y = 1
$$
:::::

:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 350px
align: right
fontsize: 24
function: (x - 2) / 2, $-x + 2y = -2$
function: (8 - x) / 4, $x + 4y = 8$
xmin: -3
xmax: 9
:::


$$
\begin{align*}
-x + 2y &= -2 \\
\\
x + 4y &= 8
\end{align*}
$$


:::::{answer}
$$
x = 4 \and y = 1
$$
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 350px
align: right
fontsize: 24
function: -x + 1, $x + y = 1$
function: (x - 9) / 3, $x - 3y = 9$
xmin: -3
xmax: 9
:::


$$
\begin{align*}
x + y &= 1 \\
\\
x - 3y &= 9
\end{align*}
$$


:::::{answer}
$$
x = 3 \and y = -2
$$
:::::


:::::::::::::



:::::::::::::{part} d
:::{plot}
width: 350px
align: right
fontsize: 24
function: -2*x, $2x + y = 0$
function: x + 6, $x - y = -6$
xmin: -7
ymin: -5
ymax: 8
:::


$$
\begin{align*}
2x + y &= 0 \\
\\
x - y &= -6
\end{align*}
$$


:::::{answer}
$$
x = -2 \and y = 4
$$
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
::::{hints} Hvordan løser jeg et likningssystem grafisk med Geogebra?
Nedenfor vises en gif som viser hvordan man løser et likningssystem med grafvinduet i Geogebra:

:::{figure} ./videoer/grafisk_løsning.gif
---
width: 90%
class: no-click, adaptive-figure
---
:::

::::


Løs likningssystemene grafisk med Geogebra-vinduene.


:::::::::::::{part} a
:::{ggb-popup}
---
layout: sidebar
---
:::

Løs likningsystemet nedenfor grafisk. 

\begin{align*}
    -2x + y &= 3 \\
    -x + y &= 1
\end{align*}



:::::{answer}
$$
x = -2 \and y = -1
$$

::::{solution}
Vi skriver inn likningene og bruker skjæring mellom to objekt {ggb-icon}`mode_intersect` for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/a.png
---
class: no-click, adaptive-figure
width: 90%
---
:::

Skjæringspunktet mellom de to grafene er $(-2, -1)$ som betyr at løsningen av likningssystemet er

$$
x = -2 \and y = -1
$$


::::


:::::
:::::::::::::




:::::::::::::{part} b
:::{ggb-popup}
---
layout: sidebar
---
:::

Løs likningsystemet nedenfor grafisk. 

\begin{align*}
-x + y &= -1 \\
x + y &= 3
\end{align*}


:::::{answer}
$$
x = 2 \and y = 1
$$

::::{solution}
Vi skriver inn likningene og trykker på skjæring mellom to objekt {ggb-icon}`mode_intersect` for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/b.png
---
class: no-click, adaptive-figure
width: 90%
---
:::

Vi ser at skjæringspunktet mellom grafene er $(2, 1)$ som betyr at løsningen av likningssystemet er

$$
x = 2 \and y = 1
$$

::::



:::::
:::::::::::::




:::::::::::::{part} c
:::{ggb-popup}
---
layout: sidebar
---
:::



Løs likningsystemet nedenfor grafisk. 

\begin{align*}
2x - y &= 0 \\
3x - y &= 4
\end{align*}

:::::{answer}
$$
x = 4 \and y = 8
$$


::::{solution}
Vi skriver inn likningene og trykker på skjæring mellom to objekt {ggb-icon}`mode_intersect` for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/c.png
---
class: no-click, adaptive-figure
width: 90%
---
:::

Skjæringspunktet mellom grafene er $(4, 8)$ som betyr at løsningen av likningssystemet er

$$
x = 4 \and y = 8
$$
::::


:::::






:::::::::::::




:::::::::::::{part} d
:::{ggb-popup}
---
layout: sidebar
---
:::


Løs likningsystemet nedenfor grafisk. 

\begin{align*}
    -2x + y &= -5 \\
    x - y &= -3
\end{align*}


:::::{answer}
$$
x = 8 \and y = 11
$$

::::{solution}
Vi skriver inn likningene og trykker på skjæring mellom to objekt {ggb-icon}`mode_intersect` for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/d.png
---
class: no-click, adaptive-figure
width: 90%
---
:::

Skjæringspunktet mellom grafene er $(8, 11)$ som betyr at løsningen av likningssystemet er

$$
x = 8 \and y = 11
$$

::::



:::::


:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
Bruk innsettingsmetoden til å løse likningssystemene.

:::::::::::::{part} a
\begin{align*}
    x + y &= 5 \\
    x - 2y &= -1
\end{align*}


:::::{answer}
$$
x = 3 \and y = 2
$$

::::{solution}
Vi nummererer likningene: 

\begin{align*}
    x + y &= 5 && (\t{I}) \\
    x - 2y &= -1 && (\t{II})
\end{align*}

Vi løser likning $\t{I}$ med hensyn på $y$:

$$
x + y = 5 \liff y = 5 - x
$$

Deretter setter vi dette uttrykket inn i likning $\t{II}$:

$$
x - 2(5 - x) = -1 
$$

$$
x - 10 + 2x = -1 
$$

$$
3x = 9
$$

$$
x = 3
$$

Deretter bestemmer vi $y$ ved å sette $x = 3$ inn i likning $\t{I}$:

$$
y = 5 - x = 5 - 3 = 2
$$

Dermed er 

$$
x = 3 \and y = 2
$$

::::

:::::
:::::::::::::



:::::::::::::{part} b
\begin{align*}
    3x + 2y &= -4 \\
    x - 2y &= -4
\end{align*}


:::::{answer}
$$
x = -2 \and y = 1
$$


::::{solution}
Vi nummererer likningene først:

\begin{align*}
    3x + 2y &= -4 && (\t{I}) \\
    x - 2y &= -4 && (\t{II})
\end{align*}

Først løser vi likning $\t{II}$ med hensyn på $x$:

$$
x - 2y = -4 \liff x = -4 + 2y
$$

Deretter setter vi dette uttrykket inn i likning $\t{I}$:

$$
3(-4 + 2y) + 2y = -4
$$

$$
-12 + 6y + 2y = -4
$$

$$
-12 + 8y = -4
$$

$$
8y = 8
$$

$$
y = 1
$$

Deretter setter vi $y = 1$ inn i likning $\t{II}$ for å bestemme $x$:

$$
x = -4 + 2\cdot 1 = -4 + 2 = -2
$$

Dermed er løsningen 

$$
x = -2 \and y = 1
$$
::::


:::::


:::::::::::::




:::::::::::::{part} c
\begin{align*}
    -x + 2y &= 0 \\
    x - 4y &= -1
\end{align*}


:::::{answer}
$$
x = 1 \and y = \dfrac{1}{2}
$$


::::{solution}
Vi nummererer likningene først: 

\begin{align*}
    -x + 2y &= 0 && (\t{I}) \\
    x - 4y &= -1 && (\t{II})
\end{align*}

Vi løser likningen $\t{II}$ med hensyn på $x$:

$$
x - 4y = -1 \liff x = -1 + 4y
$$

Deretter setter vi dette uttrykket for $x$ inn i likning $\t{I}$:

$$
-(-1 + 4y) + 2y = 0
$$

$$
1 - 4y + 2y = 0
$$

$$
1 - 2y = 0
$$

$$
-2y = -1
$$

$$
y = \dfrac{1}{2}
$$

Deretter setter vi $y = \dfrac{1}{2}$ inn i likning $\t{II}$ for å bestemme $x$:

$$
x = -1 + 4 \cdot \dfrac{1}{2} = -1 + 2 = 1
$$

Dermed er 

$$
x = 1 \and y = \dfrac{1}{2}
$$
::::

:::::


:::::::::::::



:::::::::::::{part} d
\begin{align*}
    2x + 4y &= 1 \\
    x - y &= 5
\end{align*}


:::::{answer}
$$
x = \dfrac{7}{2} \and y = -\dfrac{3}{2}
$$


::::{solution}
Vi nummererer likningene først: 

\begin{align*}
    2x + 4y &= 1 && (\t{I}) \\
    x - y &= 5 && (\t{II})
\end{align*}

Vi løser likning $\t{II}$ med hensyn på $x$:

$$
x - y = 5 \liff x = 5 + y
$$

Deretter setter vi dette uttrykket for $x$ inn i likning $\t{I}$:

$$
2(5 + y) + 4y = 1
$$

$$
10 + 2y + 4y = 1
$$

$$
10 + 6y = 1
$$

$$
6y = -9
$$

$$
y = -\dfrac{3}{2}
$$

Deretter setter vi $y = -\dfrac{3}{2}$ inn i likning $\t{II}$ for å bestemme $x$:

$$
x = 5 + \left(-\dfrac{3}{2}\right) = 5 - \dfrac{3}{2} = \dfrac{10}{2} - \dfrac{3}{2} = \dfrac{7}{2}
$$

Dermed er

$$
x = \dfrac{7}{2} \and y = -\dfrac{3}{2}
$$
::::

:::::
:::::::::::::


:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 4
Bruk addisjonsmetoden til å løse likningssystemene.


:::::::::::::{part} a
\begin{align*}
    2x + y &= 6 \\
    4x - y &= 5
\end{align*}


:::::{answer}
$$
x = \dfrac{11}{6} \and y = \dfrac{7}{3}
$$


::::{solution}
Vi nummerer likningene først:

\begin{align*}
    2x + y &= 6 && (\t{I}) \\
    4x - y &= 5 && (\t{II})
\end{align*}

Vi legger sammen likning $\t{I}$ og likning $\t{II}$:

\begin{align*}
    2x + y &= 6 && (\t{I}) \\
    4x - y &= 5 && (\t{II}) \\
    \hline
    6x + 0y &= 11 && (\t{I} + \t{II})
\end{align*}

Dermed får vi en likning som vi kan løse for $x$:

$$
6x = 11 \liff x = \dfrac{11}{6}
$$

Deretter setter vi denne verdien for $x$ inn i likning $\t{I}$ for å bestemme $y$:

$$
2 \cdot \dfrac{11}{6} + y = 6
$$

$$
\dfrac{22}{6} + y = 6
$$

$$
22 + 6y = 36
$$

$$
6y = 14
$$

$$
y = \dfrac{14}{3} = \dfrac{2 \cdot 7}{2 \cdot 3} = \dfrac{7}{3}
$$

Dermed er løsningen 

$$
x = \dfrac{11}{6} \and y = \dfrac{7}{3}
$$

::::


:::::
:::::::::::::


:::::::::::::{part} b
\begin{align*}
    -x + 2y &= 0 \\
    x - 4y &= -1
\end{align*}


:::::{answer}
$$
x = 1 \and y = \dfrac{1}{2}
$$


::::{solution}
Vi nummererer likningene og legger de sammen:

\begin{align*}
    -x + 2y &= 0 && (\t{I}) \\
    x - 4y &= -1 && (\t{II}) \\
    \hline
    0x - 2y &= -1 && (\t{I} + \t{II})
\end{align*}

Da får vi likningen 

$$
-2y = -1 \liff y = \dfrac{1}{2}
$$

Deretter setter vi inn $y = \dfrac{1}{2}$ i likning $\t{I}$ for å bestemme $x$:

$$
-x + 2 \cdot \dfrac{1}{2} = 0
$$

$$
-x + 1 = 0
$$

$$
x = 1
$$

Dermed er 

$$
x = 1 \and y = \dfrac{1}{2}
$$
::::

:::::
:::::::::::::



:::::::::::::{part} c
\begin{align*}
    2x + 3y &= 6 \\
    4x - y &= 5
\end{align*}

::::{hints}
Her må du gange én av likningene med et tall før du plusser eller trekker den fra den andre likningen for at en variabel skal forsvinne.

::::


:::::{answer}
$$
x = \dfrac{3}{2} \and y = 1
$$


::::{solution}
Vi nummererer likningene først: 

\begin{align*}
    2x + 3y &= 6 && (\t{I}) \\
    4x - y &= 5 && (\t{II})
\end{align*}

Deretter ganger vi likning $\t{I}$ med $-2$:

\begin{align*}
    -4x - 6y &= -12 && (-2 \cdot \t{I}) \\
    4x - y &= 5 && (\t{II})
\end{align*}

Så legger vi sammen de to likningene:

\begin{align*}
    -4x - 6y &= -12 && (-2 \cdot \t{I}) \\
    4x - y &= 5 && (\t{II}) \\
    \hline
    0x - 7y &= -7 && (-2 \cdot \t{I} + \t{II})
\end{align*}

Dermed får vi likningen

$$
-7y = -7 \liff y = 1
$$

Deretter setter vi inn $y = 1$ i likning $\t{I}$ for å bestemme $x$:

$$
2x + 3 \cdot 1 = 6
$$

$$
2x + 3 = 6
$$

$$
2x = 3
$$

$$
x = \dfrac{3}{2}
$$

Dermed er

$$
x = \dfrac{3}{2} \and y = 1
$$



::::

:::::





:::::::::::::




:::::::::::::{part} d
\begin{align*}
    2x + 3y &= 3 \\
    x - y &= 5
\end{align*}

:::::{answer}
$$
x = \dfrac{18}{5} \and y = -\dfrac{7}{5}
$$


::::{solution}
Først nummererer vi likningene:

\begin{align*}
    2x + 3y &= 3 && (\t{I}) \\
    x - y &= 5 && (\t{II})
\end{align*}

Deretter gjør vi om på likningssystemet ved å gange likning $\t{II}$ med $2$:

\begin{align*}
    2x + 3y &= 3 && (\t{I}) \\
    2x - 2y &= 10 && (2 \cdot \t{II})
\end{align*}

Hvis vi nå tar den første likningen og trekker fra den andre, så får vi: 



\begin{align*}
    2x + 3y &= 3 && (\t{I}) \\
    2x - 2y &= 10 && (2 \cdot \t{II}) \\
    \hline
    0x + 5y &= -7 && (\t{I} - 2 \cdot \t{II})
\end{align*}

Da får vi 

$$
5y = -7 \liff y = -\dfrac{7}{5}
$$

Deretter setter vi inn $y = -\dfrac{7}{5}$ i likning $\t{II}$ for å bestemme $x$:

$$
x - \left(-\dfrac{7}{5}\right) = 5
$$

$$
x + \dfrac{7}{5} = 5
$$

$$
5x + 7 = 25
$$

$$
5x = 18
$$

$$
x = \dfrac{18}{5}
$$

Dermed er

$$
x = \dfrac{18}{5} \and y = -\dfrac{7}{5}
$$
::::



:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5
Bruk CAS til å løse likningssystemene.

::::{hints} Hvordan løser jeg et likningssystem med CAS?
Nedenfor ser du en gif som viser hvordan man løser et likningssystem med CAS:

:::{figure} ./videoer/cas-likningssystemer.gif
---
width: 80%
class: no-click, adaptive-figure
---
:::

::::


:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::

\begin{align*}
    2x + 3y &= 6 \\
    4x - y &= 5
\end{align*}

:::::{answer}
$$
x = \dfrac{3}{2} \and y = 1
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_6/a.png
---
class: no-click, adaptive-figure
width: 70%
---
:::

som betyr at løsningen er

$$
x = \dfrac{3}{2} \and y = 1
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

\begin{align*}
    3x - 2y &= 2 \\
    5x + 4y &= 1
\end{align*}


:::::{answer}
$$
x = \dfrac{5}{11} \and y = -\dfrac{7}{22}
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_6/b.png
---
class: no-click, adaptive-figure
width: 70%
---
:::

Løsningen er derfor 

$$
x = \dfrac{5}{11} \and y = -\dfrac{7}{22}
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

\begin{align*}
    3x - y &= 7 \\
    x + 3y &= -4
\end{align*}


:::::{answer}
$$
x = \dfrac{17}{10} \and y = -\dfrac{19}{10}
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_6/c.png
---
class: no-click, adaptive-figure
width: 70%
---
:::

Løsningen er derfor 

$$
x = \dfrac{17}{10} \and y = -\dfrac{19}{10}
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

\begin{align*}
    -2x + 3y &= 8 \\
    x - 2y &= -1
\end{align*}


:::::{answer}
$$
x = -13 \and y = -6
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_6/d.png
---
class: no-click, adaptive-figure
width: 70%
---
:::

Løsningen er derfor 

$$
x = -13 \and y = -6
$$
::::

:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6
Nedenfor vises noen programmer som løser et likningssystem. Tolk hvilket likningssystem hvert program løser og bruk CAS til å forutsi hva programmet skriver ut.


:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::


:::{interactive-code}
---
predict:
---
for x in range(-5, 6):
    for y in range(-5, 6):
        if x + y == 1 and x - 2*y == -5:
            print((x, y))


:::
:::::::::::::



:::::::::::::{part} b
:::{cas-popup}
---
layout: sidebar
---
:::


:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if -2*x + 3*y == 21 and x / 3 + 2*y == 9:
            print((x, y))


:::
:::::::::::::



:::::::::::::{part} c
:::{cas-popup}
---
layout: sidebar
---
:::


:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if x + 4*y == 8 and -x - y == -5:
            print((x, y))


:::


:::::::::::::



:::::::::::::{part} d
:::{cas-popup}
---
layout: sidebar
---
:::

:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if x / 2 + y == 3 and -x + 2*y == 10:
            print((x, y))


:::

:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 7

Fyll ut programmene nedenfor slik at de løser likningssystemene.

:::::::::::::{part} a


\begin{align*}
    x + y &= 0 \\
    -2x + 4y &= 6
\end{align*}

:::{interactive-code}
# TODO: bytt ut ???? 

for x in range(????):
    for y in range(????):
        if ????:
            print((x, y))


:::



:::::{answer}
$$
x = -1 \and y = 1
$$

::::{solution}
:::{code-block} python
---
linenos:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if x + y == 0 and -2*x + 4*y == 6:
            print((x, y))
:::

som gir utskriften 

:::{code-block} console
(-1, 1)
:::

Løsningen er dermed 

$$
x = -1 \and y = 1
$$
::::
:::::
:::::::::::::



:::::::::::::{part} b
\begin{align*}
    x + \dfrac{1}{2}y &= 2 \\
    \\
    \dfrac{1}{6}x + \dfrac{1}{4}y &= 0
\end{align*}


:::{interactive-code}
# TODO: bytt ut ???? 

for x in range(????):
    for y in range(????):
        if ????:
            print((x, y))


:::


:::::{answer}
$$
x = 3 \and y = -2
$$



::::{solution}
```{code-block} python
---
linenos:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if x + 1/2 * y == 2 and 1/6 * x + 1/4 * y == 0:
            print((x, y))
```

som gir utskriften


```{code-block} console
(3, -2)
```

Dermed er løsningen 

$$
x = 3 \and y = -2
$$
::::

:::::


:::::::::::::



:::::::::::::{part} c
\begin{align*}
    2x + y &= -1 \\
    5x + 4y &= 5
\end{align*}

:::{interactive-code}
# TODO: bytt ut ???? 

for x in range(????):
    for y in range(????):
        if ????:
            print((x, y))


:::



:::::{answer}
$$
x = 2 \and y = -5
$$

::::{solution}
```{code-block} python
---
linenos:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if 2*x + y == -1 and 5*x + y == 5:
            print((x, y))
```

som gir utskriften 

```{code-block} console
(2, -5)
```

Dermed er løsningen 

$$
x = 2 \and y = -5
$$
::::

:::::


:::::::::::::



:::::::::::::{part} d
\begin{align*}
    2x - 5y &= 11 \\
    -4x + y &= 5
\end{align*}

:::{interactive-code}
# TODO: bytt ut ???? 

for x in range(????):
    for y in range(????):
        if ????:
            print((x, y))


:::


:::::{answer}
$$
x = -2 \and y = -3
$$


::::{solution}
```{code-block} python
---
linenos:
---
for x in range(-10, 11):
    for y in range(-10, 11):
        if 2*x - 5*y == 11 and -4*x + y == 5:
            print((x, y))
```

som gir utskriften

```{code-block} python
(-2, -3)
```

Dermed er løsningen

$$
x = -2 \and y = -3
$$
::::
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a

:::{cas-popup}
---
layout: sidebar
---
:::


En bygård har 40 leiligheter med til sammen 90 rom.

Leilighetene har enten 2 rom eller 3 rom.

Hvor mange leiligheter har 2 rom og hvor mange har 3 rom?

:::::{answer}
30 leiligheter har 2 rom, og 10 leiligheter har 3 rom.
:::::

:::::::::::::


:::::::::::::{part} b
:::{cas-popup}
---
layout: sidebar
---
:::


En butikk selger små og store sekker med hundemat. De små sekkene veier $4.5$ kg og de store veier $12$ kg. 

En dag solgte butikken $80$ sekker. Sekkene veide til sammen $720$ kg. 

Hvor mange små og hvor mange store sekker solgte butikken denne dagen? 



:::::{answer}
32 små sekker og 48 store sekker.
:::::

:::::::::::::



:::::::::::::{part} c
:::{cas-popup}
---
layout: sidebar
---
:::


En kino solgte 250 billetter til en forestilling. Barnebilletten koster 90 kr, og voksenbilletten koster 140 kr. Den totale billettinntekten var 27 000 kr.

Hvor mange barnebilletter og hvor mange voksenbilletter ble solgt?


:::::{answer}
160 barnebilletter og 90 voksenbilletter.
:::::

:::::::::::::



:::::::::::::{part} d
:::{cas-popup}
---
layout: sidebar
---
:::


Et skoletrinn skal på tur og bestiller busser. En stor buss har plass til 60 elever, og en liten buss har plass til 24 elever. De bestiller totalt 5 busser, og det er akkurat plass til hele trinnet på 228 elever.

Hvor mange store og hvor mange små busser ble bestilt?


:::::{answer}
3 store busser og 2 små busser.
:::::


:::::::::::::


:::::::::::::::