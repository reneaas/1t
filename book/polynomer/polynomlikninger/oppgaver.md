# Oppgaver: Polynomlikninger


:::::::::::::::{exercise} Oppgave 1

En tredjegradsfunksjon $f$ er gitt ved 

$$
f(x) = x^3 + 4x^2 + x - 6
$$

:::::::::::::{part} a
Skriv ned alle *mulige* heltallsrøtter til $f(x)$. 


:::::{answer}
$$
x \in \{\pm 1, \pm 2, \pm 3, \pm 6\}. 
$$

::::{solution}
De mulige heltallsrøttene til $f$ er tall som deler konstantleddet $-6$. Alle hele tall som deler $-6$ er gitt ved 

$$
x \in \{\pm 1, \pm 2, \pm 3, \pm 6\}. 
$$
::::

:::::
:::::::::::::

:::::::::::::{part} b
Ta utgangspunkt i listen fra **a** og finn én rot til $f(x)$. 

Bruk polynomdivisjon til å faktorisere $f(x)$. 

:::::{answer}
Én mulighet er $x = 1$, som gir

$$
x^3 + 4x^2 + x - 6 = (x - 1)(x^2 + 5x + 6)
$$

::::{solution}

````{tab} Horner-skjema
Vi bruker Horner-skjema med de mulige heltallsrøttene til vi får en rest lik $0$. Vi starter med $x = 1$:

:::{horner}
---
p: x^3 + 4x^2 + x - 6
x: 1
width: 50%
---
:::

Resten er lik $0$ som betyr at $x = 1$ er en rot. Kvotienten er $(x^2 + 5x + 6)$ som betyr at

$$
x^3 + 4x^2 + x - 6 = (x - 1)(x^2 + 5x + 6)
$$


````

````{tab} Vanlig polynomdivisjon

Vi tester ut $f(x)$ for de mulige heltallsrøttene til vi finner at $f(x) = 0$. Vi har da at

$$
f(1) = 1^3 + 4 \cdot 1^2 + 1 - 6 = 0
$$

Altså er $x = 1$ en rot i polynomet. Vi utfører polynomdivisjonen med $f(x) : (x - 1)$ for å faktorisere $f(x)$:

:::{polydiv}
---
p: x^3 + 4x^2 + x - 6
q: x - 1
width: 70%
---
:::

Altså finner vi at

$$
x^3 + 4x^2 + x - 6 = (x - 1)(x^2 + 5x + 6)
$$

````

::::

:::::

:::::::::::::

:::::::::::::{part} c
Finn resten av nullpunktene til $f$. 

Hvis nullpunktene er heltallige, sjekk at de også er en del av listen fra **a**.


:::::{answer}
$$
x = -3 \or x = -2 \or x = 1
$$

::::{solution}
Vi bruker $abc$-formelen med andregradspolynomet for å finne de resterende røttene til $f$:

$$
x^2 + 5x + 6 = 0
$$

som gir 

$$
x = \dfrac{-5 \pm \sqrt{5^2 - 4 \cdot 1 \cdot 6}}{2} = \dfrac{-5 \pm \sqrt{1}}{2} = \dfrac{-5 \pm 1}{2}
$$

som gir 

$$
x = -2 \or x = -3. 
$$

Samtidig fant vi tidligere at $x = 1$ også var en rot, så dermed har vi 

$$
x = -3 \or x = -2 \or x = 1
$$
::::

:::::


:::::::::::::




:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Løs likningen

$$
x^3 + x^2 - 4x - 4 = 0
$$


:::::{answer}

$$
x = -2 \or x = -1 \or x = 2.
$$


::::{solution}
Konstantleddet er $-4$. Heltallene som tilfredsstiller likningen må dele konstantleddet som betyr at vi har kandidatene:

$$
x = \pm 1, \pm 2, \pm 4
$$

Vi bruker er Horner-skjema for å prøve oss fram til vi får $0$ i rest:

:::{horner}
---
p: x^3 + x^2 - 4x - 4
x: 1
width: 50%
---
:::

Resten er lik $-6$ som betyr at $x = 1$ ikke er en løsning. Vi prøver videre med $x = -1$:

:::{horner}
---
p: x^3 + x^2 - 4x - 4
x: -1
width: 50%
---
:::

Nå ble resten lik $0$ som betyr at $x = -1$ er en rot i polynomet. Kvotienten i polynomdivisjonen er $(x^2 - 4)$ som betyr at

$$
x^3 + x^2 - 4x - 4 = (x + 1)(x^2 - 4).
$$

Andregradspolynomet kan vi faktorisere med konjugatsetningen:

$$
x^2 - 4 = (x - 2)(x + 2).
$$

Altså har vi at 

$$
x^3 + x^2 - 4x - 4 = (x + 1)(x - 2)(x + 2) = 0
$$

Løsningene av likningen er derfor 

$$
x = -2 \or x = -1 \or x = 2.
$$




::::
:::::


:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
x^3 + 4x^2 - 3x - 18 = 0
$$


:::::{answer}
$$
x = -3 \or x = 2
$$

::::{solution}
Konstantleddet i tredjegradspolynomet er $-18$. Heltallene som kan løse likningene må dele $-18$ som gir oss kandidatene

$$
x = \pm 1, \pm 2, \pm 3, \pm 6, \pm 9, \pm 18
$$

Vi bruker et Horner-skjema for å prøve oss fram til vi får $0$ i rest. Vi starter med $x = 1$:


:::{horner}
---
p: x^3 + 4x^2 - 3x - 18
x: 1
width: 50% 
---
:::

Resten ble ikke lik $0$, så $x = 1$ er ikke en løsning. Vi prøver oss fram med $x = -1$:


:::{horner}
---
p: x^3 + 4x^2 - 3x - 18
x: -1
width: 50% 
---
:::

Resten ble ikke lik $0$, så $x = -1$ er ikke en løsning. Vi prøver oss fram med $x = 2$:


:::{horner}
---
p: x^3 + 4x^2 - 3x - 18
x: 2
width: 50% 
---
:::

Nå ble resten lik $0$ som betyr at $x = 2$ er en løsning. Kvotienten i polynomdivisjonen er $(x^2 + 6x + 9)$ som betyr at


$$
x^3 + 4x^2 - 3x - 18 = (x - 2)(x^2 + 6x + 9)
$$

Vi kan faktorisere andregradspolynomet med 1.kvadratsetning:

$$
x^2 + 6x + 9 = (x + 3)^2
$$

Altså har vi at

$$
x^3 + 4x^2 - 3x - 18 = (x - 2)(x + 3)^2 = 0
$$

som betyr at løsningene til likningen er

$$
x = -3 \or x = 2
$$


::::
:::::


:::::::::::::


:::::::::::::{part} c
Løs likningen

$$
x^3 + 3x^2 + 3x + 1 = 0
$$


:::::{answer}
$$
x = -1
$$

::::{solution}
Konstantleddet til polynomet er $+1$. Heltallene som kan tilfredsstille likningen må dele konstantleddet som betyr at de eneste to heltallene som er mulige er

$$
x = \pm 1
$$

Vi bruker et Horner-skjema og prøver oss fram til vi får $0$ i rest. Vi starter med $x = 1$: 


:::{horner}
---
p: x^3 + 3x^2 + 3x + 1
x: 1
width: 30% 
---
:::

Vi fikk ikke $0$ i rest, så $x = 1$ er ikke en løsning. Vi prøver oss fram med $x = -1$:

:::{horner}
---
p: x^3 + 3x^2 + 3x + 1
x: -1
width: 50% 
---
:::

Nå ble resten lik $0$ som betyr at $x = -1$ er en løsning. Kvotienten i polynomdivisjonen er $(x^2 + 2x + 1)$ som betyr at

$$
x^3 + 3x^2 + 3x + 1 = (x + 1)(x^2 + 2x + 1)
$$

Vi kan bruke 1.kvadratsetning for å faktorisere andregradspolynomet:

$$
x^2 + 2x + 1 = (x + 1)^2
$$

Altså har vi at

$$
x^3 + 3x^2 + 3x + 1 = (x + 1)^3 = 0
$$

Det betyr at den eneste løsningen til likningen er

$$
x = -1
$$


::::
:::::


:::::::::::::



:::::::::::::{part} d
Løs likningen

$$
x^3 + 3x^2 - 4x - 12 = 0
$$


:::::{answer}
$$
x = -3 \or x = -2 \or x = 2
$$

::::{solution}
Konstantleddet til polynomet er $-12$. Heltallene som løser likningen må dele konstantleddet som gir oss disse kandidatene:

$$
x = \pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12
$$

Vi bruker et Horner-skjema til å prøve oss fram til vi får $0$ i rest. Vi starter med $x = 1$:

:::{horner}
---
p: x^3 + 3x^2 - 4x - 12
x: 1
width: 50%
---
:::

Vi fikk ikke $0$ i rest, så $x = 1$ er ikke en løsning. Vi prøver oss fram med $x = -1$:

:::{horner}
---
p: x^3 + 3x^2 - 4x - 12
x: -1
width: 50%
---
:::

Fortsatt ikke $0$ i rest, så $x = -1$ er ikke en løsning. Vi prøver oss fram med $x = 2$:


:::{horner}
---
p: x^3 + 3x^2 - 4x - 12
x: 2
width: 50%
---
:::

Nå fikk vi $0$ i rest som betyr at $x = 2$ er en løsning. Kvotienten i divisjonen kan vi lese av til å være $(x^2 + 5x + 6)$ som betyr at

$$
x^3 + 3x^2 - 4x - 12 = (x - 1) (x^2 + 5x + 6)
$$

Vi bruker $abc$-formelen til å finne røttene til andregradspolynomet:

$$
x = \dfrac{-5 \pm \sqrt{5^2 - 4 \cdot 1 \cdot 6}}{2 \cdot 1} = \dfrac{-5 \pm \sqrt{25 - 24}}{2} = \dfrac{-5 \pm 1}{2}
$$

som gir

$$
x = -2 \or x = -3
$$

Altså er løsningene av likningen

$$
x = -3 \or x = -2 \or x = 2
$$




::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
En tredjegradsfunksjon $f$ er gitt ved 

$$
f(x) = x^3 - 3x^2 - 4x + 12. 
$$


:::::::::::::{part} a
Finn nullpunktene til $f$.

::::{answer}
$$
x = -2 \or x = 2 \or x = 3
$$
::::

:::::::::::::


:::::::::::::{part} b
Tegn et fortegnsskjema for $f(x)$. 


::::{answer}

:::{signchart-2}
width: 70%
function: x**3 - 3*x**2 - 4*x + 12, f(x) 
:::

::::

:::::::::::::


:::::::::::::{part} c
Lag en **skisse** av grafen til $f$. Marker nullpunktene. 


::::{answer}


:::{plot}
width: 70%
function: x**3 - 3*x**2 - 4*x + 12, f
ticks: off
point: (-2, 0)
text: -2, 0, "$(-2, 0)$", bottom-right
point: (2, 0)
text: 2, 0, "$(2, 0)$", bottom-left
point: (3, 0)
text: 3, 0, "$(3, 0)$", bottom-right
xmin: -3
xmax: 4
ymax: 18
:::


::::


:::::::::::::


:::::::::::::{part} d
Løs ulikheten $f(x) \geq 0$. 


::::{answer}
$$
x \in [-2, 2] \cup [3, \to \rangle
$$

::::

:::::::::::::




:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 3
En tredjegradsfunksjon er gitt ved 

$$
f(x) = -2x^3 + 14x^2 - 14x - 30. 
$$



:::::::::::::{part} a
Bestem alle røttene til $f(x)$. 


:::::{answer}
$$
x = -1 \or x = 3 \or x = 5. 
$$


::::{solution}
Konstantleddet til $f(x)$ er $-30$. De mulige heltallige røttene til $f(x)$ må dele konstantleddet som gir mulighetene:

$$
x = \pm 1, \pm 2, \pm 3, \pm 5, \pm 6, \pm 10, \pm 15, \pm 30
$$

Vi bruker et Horner-skjema og prøver oss fram til vi får $0$ i rest:

:::{horner}
---
p: -2x^3 + 14x^2 - 14x - 30
x: 1
width: 50% 
---
:::

Vi får ikke $0$ i rest, så vi får videre til neste mulighet; vi prøver $x = -1$:


:::{horner}
---
p: -2x^3 + 14x^2 - 14x - 30
x: -1
width: 50% 
---
:::

Nå fikk vi $0$ i rest som betyr at $x = -1$ er en rot i $f(x)$. Kvotienten kan vi lese av til å være $(-2x^2 + 16x - 30)$ som betyr at

$$
f(x) = (x + 1)(-2x^2 + 16x - 30) = -2(x + 1)(x^2 - 8x + 15)
$$

Vi bruker nå $abc$-formelen på andregradspolynomet for å finne de resterende røttene:

$$
x = \dfrac{8 \pm \sqrt{(-8)^2 - 4 \cdot 1 \cdot 15}}{2 \cdot 1} = \dfrac{8 \pm \sqrt{64 - 60}}{2} = \dfrac{8 \pm 2}{2}
$$

som gir

$$
x = 3 \or x = 5
$$

Altså er røttene til $f(x)$ gitt ved

$$
x = -1 \or x = 3 \or x = 5
$$

::::


:::::

:::::::::::::


:::::::::::::{part} b
Løs ulikheten $f(x) \leq 0$. 

:::::{answer}
$$
x \in [-1, 3] \cup [5\to\rangle
$$

::::{solution}
Fra oppgave **a** fant vi at vi kan nullpunktsfaktorisere $f(x)$ som

$$
f(x) = -2(x + 1)(x - 3)(x - 5)
$$

Vi tegner et fortegnsskjema for å løse ulikheten $f(x) \leq 0$:


:::{signchart-2}
width: 70%
function: -2 * (x + 1) * (x - 3) * (x - 5), f(x)
:::

Fra fortegnslinja til $f(x)$ kan vi lese av at $f(x) \leq 0$ når

$$
x \in [-1, 3] \cup [5\to\rangle
$$


::::

:::::
:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 4 


:::::::::::::{part} a
Løs tredjegradslikningen 

$$
x^3 - x^2 - 2x + 2 = 0. 
$$

:::::{answer}
$$
x = -\sqrt{2} \or x = 1 \or x = \sqrt{2}
$$

::::{solution}
Konstantleddet til polynomet er $+2$. De mulige heltallene som løser likningen må dele konstantleddet som gir oss kandidatene

$$
x = \pm 1, \pm 2
$$

Vi prøver oss fram med et Horner-skjema til vi får $0$ i rest. Vi starter med $x = 1$:


:::{horner}
---
p: x^3 - x^2 - 2x + 2
x: 1
width: 50% 
---
:::

Vi får $0$ i rest. Fra Horner-skjemaet kan vi lese av at kvotienten i divisjonen er $(x^2 - 2)$. Det betyr at vi kan skrive

$$
x^3 - x^2 - 2x + 2 = (x - 1)(x^2 - 2)
$$

Vi kan faktorisere andregradspolynomet ved å finne de resterende røttene:

$$
x^2 - 2 = 0 \liff x^2 = 2 \liff x = \pm \sqrt{2}
$$

Altså er løsningene til likningen

$$
x = -\sqrt{2} \or x = 1 \or x = \sqrt{2}
$$


::::

:::::

:::::::::::::

:::::::::::::{part} b
Løs ulikheten 

$$
x^3 - x^2 - 2x + 2 > 0. 
$$

:::::{answer}
$$
x \in \left\langle -\sqrt{2}, 1 \right\rangle \cup \left\langle \sqrt{2}, \to \right\rangle
$$

::::{solution}
Gitt det faktoriserte uttrykket fra oppgave **a**, er ulikheten vår ekvivalent med

$$
\left(x+\sqrt{2}\right)(x - 1)\left(x - \sqrt{2}\right) > 0
$$

Vi tegner et fortegnsskjema for uttrykket og kaller det for $f(x)$:

:::{signchart-2}
width: 70%
function: (x + sqrt(2)) * (x - 1) * (x - sqrt(2)), f(x)
:::

Fra fortegnslinja til $f(x)$ kan vi lese av at $f(x) > 0$ når

$$
x \in \left\langle -\sqrt{2}, 1 \right\rangle \cup \left\langle \sqrt{2}, \to \right\rangle
$$

::::
:::::

:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 5
En likning er gitt ved

$$
x^3 - 3x - 2 = (x + 1)(ax^2 + bx + c). 
$$


:::::::::::::{part} a
Bestem $a$, $b$ og $c$ slik at likningen er en **identitet**.


:::::{answer}

$$
a = 1 \and b = -1 \and c = -2.
$$


::::{solution}
Vi utfører polynomdivisjon med $(x + 1)$ med et Horner-skjema. Da bruker vi at $x = -1$:

:::{horner}
---
p: x^3 - 3x - 2
x: -1
width: 50% 
---
:::

Fra Horner-skjemaet kan vi umiddelbart hente ut at 

$$
a = 1 \and b = -1 \and c = -2
$$


::::

:::::

:::::::::::::


:::::::::::::{part} b
Løs ulikheten 

$$
x^3 - 3x - 2 < 0. 
$$

:::::{answer}
$$
x \in \langle \gets, 2\rangle \setminus \{-1\}. 
$$

::::{solution}
Vi vet allerede at 

$$
x^3 - 3x - 2 = (x + 1)(x^2 - x - 2)
$$

Vi bruker $abc$-formelen for å faktorisere andregradspolynomet i lineære faktorer:

$$
x = \dfrac{1 \pm \sqrt{(-1)^2 - 4 \cdot 1 \cdot (-2)}}{2 \cdot 1} = \dfrac{1 \pm \sqrt{9}}{2} = \dfrac{1 \pm 3}{2}
$$

som gir

$$
x = -1 \or x = 2
$$

Altså er 

$$
x^3 - 3x - 2 = (x + 1) (x + 1) (x - 2) = (x + 1)^2 (x - 2)
$$

Så tegner vi et fortegnsskjema for uttrykket og kaller uttrykket for $f(x)$:

:::{signchart-2}
width: 70%
function: x**3 - 3*x - 2, f(x)
:::

Vi kan se at $f(x) \lt 0$ når 

$$
x \in \langle \gets, 2\rangle \setminus \{-1\}
$$

der vi har ekskludert $x = -1$ siden $f(-1) = 0$.


::::

:::::

:::::::::::::


:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 6
Funksjonen $f$ er gitt ved 

$$
f(x) = x^3 + 2x^2 - 5x - 6
$$

I hvilke punkter skjærer grafen til funksjonen $x$-aksen?



:::::{answer}
$$
x = -3 \or x = -1 \or x = 2.
$$

::::{solution}
De mulige heltallige røttene til $f(x)$ er 

$$
x \in \{\pm 1, \pm 2, \pm 3, \pm 6\}.
$$

Vi prøver oss fram til vi finner en rot:

:::{horner}
---
p: x^3 + 2x^2 - 5x - 6
x: 1
width: 60%
---
:::

Det funket ikke med $x = 1$, så vi går videre:

:::{horner}
---
p: x^3 + 2x^2 - 5x - 6
x: -1
width: 60%
---
:::

Her fikk vi $0$ i rest, så $x = -1$ er en rot. Vi kan dermed faktorisere $f(x)$ som

$$
f(x) = (x + 1)(x^2 + x - 6).
$$

Vi bestemmer røttene til andregradspolynomet med $abc$-formelen:

$$
x = \dfrac{-1 \pm \sqrt{1^2 - 4 \cdot 1 \cdot (-6)}}{2 \cdot 1} = \dfrac{-1 \pm \sqrt{25}}{2} = \dfrac{-1 \pm 5}{2}
$$

som gir

$$
x = 2 \or x = -3.
$$


Altså skjærer grafen til $f$ gjennom $x$-aksen i punktene 

$$
x = -3 \or x = -1 \or x = 2.
$$
::::

:::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7
Funksjonen $f$ er gitt ved

$$
f(x) = 2x^3 + x^2 - 18x - 9
$$


:::::::::::::{part} a
Vis at divisjonen $f(x) : (x - 3)$ går opp.


::::{solution}
:::{polydiv}
---
p: 2x^3 + x^2 - 18x - 9
q: x - 3
width: 70%
---
:::

::::

:::::::::::::



:::::::::::::{part} b
Gjør beregninger og vurder hvilken av grafene nedenfor som kan være grafen til $f$.



::::{multi-plot2}
---
rows: 1
cols: 3
fontsize: 30
---

:::{plot}
function: (x + 3) * (x - 3) * (2*x - 1), A
xmin: -5
xmax: 5
ymin: -20
ymax: 30
ticks: off
:::


:::{plot}
function: (x + 3) * (x - 3) * (2*x + 1), B
xmin: -5
xmax: 5
ymin: -30
ymax: 20
ticks: off
:::


:::{plot}
function: (x + 3) * (x - 1/2) * (2*x + 1), C
xmin: -5
xmax: 5
ymin: -20
ymax: 20
ticks: off
:::

::::


::::{answer}
Graf B.
::::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8
Gitt likningen 

$$
x^3 - 5x^2 - 8x + 12 = (x - 1)(x + a)(x - b)
$$

Bestem $a$ og $b$ slik at likningen blir en identitet.


:::::{answer}
$$
a = 2 \and b = 6 \or a = -6 \and b = -2
$$

::::{solution}
Vi utfører polynomdivisjonen 

$$
(x^3 - 5x^2 - 8x + 12) : (x - 1)
$$

for å bestemme andregradspolynomet i faktoriseringen:


:::{polydiv}
---
p: x^3 - 5x^2 - 8x + 12
q: x - 1
width: 70%
---
:::

Altså er 

$$
x^3 - 5x^2 - 8x + 12 = (x - 1)(x^2 - 4x - 12).
$$

Vi bestemmer røttene til andregradspolynomet med $abc$-formelen:

$$
x = \dfrac{4 \pm \sqrt{(-4)^2 - 4 \cdot 1 \cdot (-12)}}{2 \cdot 1} = \dfrac{4 \pm \sqrt{16 + 48}}{2} = \dfrac{4 \pm 8}{2}
$$

som gir løsningene

$$
x = 6 \or x = -2.
$$

Altså vil vi kunne skrive

$$
x^3 - 5x^2 - 8x + 12 = (x - 1)(x + 2)(x - 6).
$$

Dermed må vi ha at

$$
a = 2 \and b = 6 \or a = -6 \and b = -2
$$

for at likningen skal bli en identitet.


::::

:::::


:::::::::::::::






---


:::::::::::::::{exercise} Oppgave 9
En funksjon $f$ er gitt ved

$$
f(x) = x^3 + 4x^2 - 3x - 18
$$

Avgjør hvilken av grafene nedenfor som viser grafen til $f$.


::::{multi-plot2}
---
rows: 2
cols: 2
ticks: off
ymax: 20
ymin: -20
fontsize: 30
---
:::{plot}
function: (x - 2)**2 * (x + 3)
text: 5, 15, "A", center-center, bbox
:::

:::{plot}
function: (x - 2) * (x + 3)**2
text: 5, 15, "B", center-center, bbox
:::

:::{plot}
function: -(x - 2)**2 * (x + 3)
text: 5, 15, "C", center-center, bbox
:::

:::{plot}
function: x**3 + 6 * x**2 - 18
text: 5, 15, "D", center-center, bbox
:::



::::


::::{answer}
Graf B.
::::

:::::::::::::::


---





:::::::::::::::{exercise} Oppgave 10
Bestem én mulighet for $a$, $b$, $c$ og $d$ slik at likningen nedenfor blir en identitet.

$$
x^4 + 3x^3 - 15x^2 - 19x + 30 = (x - a)(x - b)(x - c)(x - d)
$$


::::{hint}
Her må du bruke polynomdivisjon to ganger. Først for å omgjøre fjerdegradspolynomet til et produkt av en lineær faktor og et tredjegradspolynom. Deretter gjentar du med tredjegradspolynomet som vanlig.
::::



:::::{answer}
$$
x = -5 \or x = -2 \or x = 1 \or x = 3
$$
:::::





:::::::::::::::