# Oppgaver: Lineære likninger


:::::::::::::::{exercise} Oppgave 1
---
level: 1
---
I figuren nedenfor vises grafen til $f(x) = x + 3$. 


:::{plot}
width: 60%
function: x + 3, f 
:::


:::::::::::::{part} a
Bruk figuren til å løse likningen

$$
x + 3 = 0 
$$


::::{answer}
$$
x = -3
$$
::::
:::::::::::::


:::::::::::::{part} b
Bruk figuren til å løse likningen

$$
x + 3 = 4
$$


::::{answer}
$$
x = 1
$$
::::
:::::::::::::


:::::::::::::{part} c
Bruk figuren til å løse likningen

$$
x + 3 = -2
$$

::::{answer}
$$
x = -5
$$
::::
:::::::::::::


:::::::::::::{part} d
Bruk figuren til å løse likningen

$$
x + 3 = 5
$$

::::{answer}
$$
x = 2
$$
::::
:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2

Løs likningene grafisk med graftegneren i Geogebra.


::::{hints} Hvordan løser jeg likningen grafisk med Geogebra?
En likning er gitt ved 

$$
3x - 1 = -4
$$

Nedenfor ser du en gif som viser hvordan man løser likningen med grafvinduet i Geogebra. Vi trykker på {ggb-icon}`mode_intersect` (Skjæring mellom to objekt) etterfulgt av å trykke på hver graf for å finne skjæringspunktet.

:::{figure} ./videoer/grafisk_løsning.gif
---
class: no-click, adaptive-figure
width: 100%
---
:::

Skjæringspunktet er $(-1, -4)$. Det er $x$-koordinaten som er løsningen av likningen, så løsningen er

$$
x = -1
$$

::::




:::::::::::::{part} a
:::{ggb-popup}
---
layout: sidebar
---
:::


$$
2x - 5 = 1
$$


:::::{answer}
$$
x = 3
$$

::::{solution}
Vi skriver uttrykkene til venstre og høyre side i algebrafeltet og trykker på {ggb-icon}`mode_intersect` (Skjæring mellom to objekt) etterfulgt av å trykke på hver graf for å finne skjæringspunktet. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/a.png
---
class: no-click, adaptive-figure
width: 100%
---
:::

Vi ser at skjæringspunktet er $(3, 1)$. Det er $x$-koordinaten som er løsningen av likningen, så løsningen er

$$
x = 3
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

$$
x + 4 = -2x + 1
$$



:::::{answer}
$$
x = -1
$$

::::{solution}
Vi skriver inn uttrykkene på venstre og høyre side av likningen i algebrafeltet og trykker på {ggb-icon}`mode_intersect` (Skjæring mellom to objekt) etterfulgt av å trykke på hver graf for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/b.png
---
class: no-click, adaptive-figure
width: 100%
---
:::

Vi ser at skjæringspunktet er $(-1, 3)$. Det er $x$-koordinaten som er løsningen av likningen, så løsningen er

$$
x = -1
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

$$
-x + 1 = 2x + 7
$$

:::::{answer}
$$
x = -2
$$

::::{solution}
Vi skriver inn uttrykkene på venstre og høyre side av likningen i algebrafeltet og trykker på {ggb-icon}`mode_intersect` (Skjæring mellom to objekt) etterfulgt av å trykke på hver graf for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/c.png
---
class: no-click, adaptive-figure
width: 100%
---
:::

Vi ser at skjæringspunktet er $(-2, 3)$. Det er $x$-koordinaten som er løsningen av likningen, så løsningen er

$$
x = -2
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


$$
x - 3 = -x + 5
$$



:::::{answer}
$$
x = 4
$$

::::{solution}
Vi skriver inn uttrykkene på venstre og høyre side av likningen i algebrafeltet og trykker på {ggb-icon}`mode_intersect` (Skjæring mellom to objekt) etterfulgt av å trykke på hver graf for å finne skjæringspunktene. Se figuren nedenfor.

:::{figure} ./figurer/oppgaver/oppgave_2/d.png
---
class: no-click, adaptive-figure
width: 100%
---
:::

Vi ser at skjæringspunktet er $(4, 1)$. Det er $x$-koordinaten som er løsningen av likningen, så løsningen er

$$
x = 4
$$
::::

:::::


:::::::::::::

:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 3

Løs likningene nedenfor algebraisk.


:::::::::::::{part} a

$$
x - 2 = 0
$$

::::{answer}
$$
x = 2
$$
::::

:::::::::::::


:::::::::::::{part} b
$$
x - 2 = 4
$$

::::{answer}
$$
x = 6
$$
::::


:::::::::::::


:::::::::::::{part} c

$$
-2x + 4 = 8
$$

::::{answer}
$$
x = -2
$$
::::

:::::::::::::


:::::::::::::{part} d

$$
-4x + 6 = 7x
$$

::::{answer}
$$
x = \dfrac{6}{11}
$$
::::

:::::::::::::




:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 4


:::::::::::::{part} a
Programmet nedenfor løser en likning.

Løs likningen og forutsi hva programmet skriver ut.

:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    if x + 5 == 0:
        print(x)
:::


:::::::::::::



:::::::::::::{part} b
Programmet nedenfor løser en likning.

Løs likningen og forutsi hva programmet skriver ut.

:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    if x - 2 == 8:
        print(x)
:::


:::::::::::::



:::::::::::::{part} c
Programmet nedenfor løser en likning.

Løs likningen og forutsi hva programmet skriver ut.

:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    if -x + 8 == 3*x:
        print(x)
:::

:::::::::::::



:::::::::::::{part} d

Programmet nedenfor løser en likning.

Løs likningen og forutsi hva programmet skriver ut.

:::{interactive-code}
---
predict:
---
for x in range(-10, 11):
    if 2*x - 4 == 3*x + 1:
        print(x)
:::
:::::::::::::

:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 5
---
level: 2
---
Grafene til to lineære funksjoner $f$ og $g$ er vist i figuren nedenfor.

:::{plot}
width: 60%
function: x - 2, f
function: -3*x - 6, g
:::


Bruk figuren til å løse likningene nedenfor.


:::::::::::::{part} a
Løs likningen

$$
f(x) = 0
$$

::::{answer}
$$
x = 2
$$
::::
:::::::::::::


:::::::::::::{part} b
Løs likningen

$$
g(x) = 3
$$


::::{answer}
$$
x = -3
$$
::::
:::::::::::::


:::::::::::::{part} c
Løs likningen

$$
f(x) = g(x)
$$


::::{answer}
$$
x = -1
$$
::::
:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6

En lineær funksjon $f$ er gitt ved 

$$
f(x) = \dfrac{1}{2}x + 3. 
$$



:::::::::::::{part} a
Bestem i hvilket punkt grafen til $f$ skjærer $x$-aksen.

::::{answer}
$$
(-6, 0)
$$
::::
:::::::::::::


:::::::::::::{part} b
Bestem i hvilket punkt grafen til $f$ skjærer linja $y = 2$. 

::::{answer}
$$
(-2, 2)
$$
::::
:::::::::::::


:::::::::::::{part} c
En annen lineær funksjon $g$ er gitt ved 

$$
g(x) = 2x.
$$

Bestem i hvilket punkt grafen til $f$ og $g$ skjærer hverandre.

::::{answer}
$$
(2, 2)
$$
::::
:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7

Bruk CAS til å løse likningene nedenfor.


::::{hints} Hvordan løser jeg en likning med CAS?
Nedenfor ser du en *gif* som viser hvordan man kan løse en likning med CAS. Du trenger bare å åpne CAS-vinduet og gjøre slik det vises i *gif-en*.

:::{figure} ./videoer/cas-likninger.gif
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

$$
4x + 2 = 0
$$


:::::{answer-2}
$$
x = -\dfrac{1}{2}
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
2x - 3 = 5
$$


:::::{answer-2}
$$
x = 4
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
3x + 4 = 2x + 7
$$


:::::{answer-2}
$$
x = 3
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
\dfrac{3}{2}x - 1 = 2x + 4
$$


> For å lage en brøk i CAS, trykker du på skråstrek `/`.


:::::{answer-2}
$$
x = -10
$$
:::::


:::::::::::::



:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 8



:::::::::::::{part} a
Fyll ut programmet nedenfor slik at det løser likningen

$$
-4x + 3 = -2x + 5
$$

:::{interactive-code}
# TODO: Bytt ut ????

for x in range(????):
    if ????:
        print(x)


:::



:::::{answer-2}
:::{code-block} python
---
linenos:
---
for x in range(-100, 101):
    if -4 * x + 3 == -2 * x + 5:
        print(x)
:::

som gir at $x = -1$.
:::::


:::::::::::::


:::::::::::::{part} b
Fyll ut programmet nedenfor slik at det løser likningen

$$
3x - 7 = 2x + 5
$$


:::{interactive-code}
# TODO: Bytt ut ????

for x in range(????):
    if ????:
        print(x)


:::



:::::{answer-2}
:::{code-block} python
---
linenos:
---
for x in range(-100, 101):
    if 3*x - 7 == 2*x + 5:
        print(x)
:::

som gir $x = 12$.
:::::


:::::::::::::


:::::::::::::{part} c
Fyll ut programmet nedenfor slik at det løser likningen

$$
2x + 4 = 10
$$

:::{interactive-code}
# TODO: Bytt ut ????
for x in range(????):
    if ????:
        print(x)


:::


:::::{answer-2}
:::{code-block} python
---
linenos:
---
for x in range(-100, 101):
    if 2*x + 4 == 10:
        print(x)
:::

som gir $x = 3$.
:::::

:::::::::::::


:::::::::::::{part} d
Fyll ut programmet nedenfor slik at det løser likningen

$$
3x + 2 = 2x + 7
$$

:::{interactive-code}
# TODO: Bytt ut ????

for x in range(????):
    if ????:
        print(x)


:::



:::::{answer-2}
:::{code-block} python
---
linenos:
---
for x in range(-100, 101):
    if 3*x + 2 == 2*x + 7:
        print(x)
:::

som gir $x = 5$.

:::::


:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 9

:::{cas-popup}
---
layout: sidebar
---
:::


To lineære funksjoner er gitt ved 

$$
f(x) = 3x - 2 \quad \text{og} \quad g(x) = -2x + 4.
$$




:::::::::::::{part} a
Bruk CAS til å løse likningen

$$
f(x) = 0
$$

:::::{answer-2}
$$
x = \dfrac{2}{3}
$$
:::::

:::::::::::::


:::::::::::::{part} b
Bruk CAS til å løse likningen 

$$
f(x) = 2
$$


:::::{answer-2}
$$
x = \dfrac{4}{3}
$$
:::::


:::::::::::::


:::::::::::::{part} c
Bruk CAS til å løse likningen

$$
f(x) = g(x)
$$


:::::{answer-2}
$$
x = \dfrac{6}{5}
$$
:::::
:::::::::::::




:::::::::::::::










