# Den deriverte

:::{goals} Læringsmål
* Kunne derivere polynomfunksjoner algebraisk.
* Kunne bestemme likningen til tangenter til polynomfunksjoner.
* Kan beskrive sammenhengen mellom grafen til $f$ og grafen til $f'$.
:::


## Den deriverte til en polynomfunksjon
Når vi fant den deriverte $f'$ til en andregradsfunksjon $f$, så fant vi at den deriverte var en lineær funksjon. Sagt på en annen måte: vi får et førstegradspolynom $f'(x)$ når vi finner den deriverte av et andregradspolynom $f(x)$. Dette var ikke bare et sammentreff – generelt sett vil $f'(x)$ være et polynom som har én grad lavere for et hvert polynom $f(x)$.


:::::::::::::::{summary} Den deriverte til en polynomfunksjon
Gitt et polynom $f(x)$ av grad $n$, vil den deriverte av polynomet $f'(x)$ være et polynom av grad $n - 1$. 

:::::::::::::::

I praksis kan vi finne den deriverte algebraisk ved å følge noen bestemte regneregler som gjelder for alle polynomer.


:::::::::::::::{summary} Derivasjonsregler for polynomer

:::{table}
labels: Regel, Formel
$1$, $(x^n)' = n \cdot x^{n-1}$
$2$, $(a x^n)' = a (x^n)'$
$3$, $(ax^n + bx^m)' = (ax^n)' + (bx^m)'$
$4$, $C' = 0$
$5$, $(ax)' = a$
:::
:::::::::::::::

---

:::::::::::::::{example} Eksempel 1
Bestem den deriverte til 

$$
f(x) = 2x^3 - 4x^2 + 6x - 2
$$

::::{solution}
---
open:
---
$$
\begin{align*}
    f'(x) &= (2x^3 - 4x^2 + 6x - 2)' \\
    \\
    &= 2\cdot (x^3)' - 4\cdot (x^2)' + 6\cdot x' - 2' \\
    \\
    &= 2 \cdot 3\cdot x^2 - 4\cdot 2 \cdot x^1 + 6 \cdot 1 - 0 \\
    \\
    &= 6x^2 - 8x + 6
\end{align*}
$$
::::

:::::::::::::::

---

:::::::::::::::{exercise} Underveisoppgave 1
Bestem den deriverte til 

$$
f(x) = x^4 - 3x^2 + 5x - 1
$$

:::::{answer}
$$
f'(x) = 4x^3 - 6x + 5
$$

::::{solution}
$$
\begin{align*}
f'(x) &= (x^4 - 3x^2 + 5x - 1)' \\
\\
&= (x^4)' - 3\cdot (x^2)' + 5\cdot (x)' - 1' \\
\\
&= 4x^3 - 3\cdot 2x + 5\cdot 1 - 0 \\
\\
&= 4x^3 - 6x + 5
\end{align*}
$$
::::

:::::

:::::::::::::::


## Likningen til en tangent

:::{plot}
width: 100%
align: right
function: (x - 1) * (x + 2) * (x + 1), f
ymax: 3
ymin: -3
xmax: 3
xmin: -4
point: (0.75, f(0.75))
text: 0.75, f(0.75), "$(a, f(a))$", bottom-right
tangent: 0.75, f
ticks: off
fontsize: 30
:::



Hvis vi ser på en tangent til grafen til $f$ i et punkt $(a, f(a))$, så vet vi to ting:

1. Tangenten går gjennom punktet $(a, f(a))$.
2. Stigningstallet til tangenten er lik $f'(a)$. 

Vi vet også at vi alltid kan skrive likningen til en linje som har stigningstall $m$ som går gjennom et punkt $(x_0, y_0)$ på ettpunktsform: 

$$
y = m(x - x_0) + y_0,
$$

Siden vi vet at stigningstallet er $f'(a)$ så vet vi at $m = f'(a)$. Siden linjen går gjennom punktet $(a, f(a))$, så vet vi at $x_0 = a$ og $y_0 = f(a)$. Dermed kan vi skrive likningen til tangenten som

$$
y = f'(a)(x - a) + f(a).
$$


:::::::::::::::{summary} Likningen til en tangent
Likningen til en tangent til grafen til $f$ i et punkt $(a, f(a))$ er gitt ved 

$$
y = f'(a)(x - a) + f(a)
$$
:::::::::::::::



---


:::::::::::::::{example} Eksempel 2
Funksjonen $f$ er gitt ved 

$$
f(x) = x^3 - 3x^2 - 4x + 12.
$$

Bestem likningen til tangenten til grafen til $f$ i punktet $(1, f(1))$.

::::{solution}
---
open:
---
Likningen til tangenten er gitt ved 

$$
y = f'(1)(x - 1) + f(1)
$$

Vi har at 

$$
f(1) = 1^3 - 3\cdot 1^2 - 4\cdot 1 + 12 = 6
$$

Videre har vi at 

$$
f'(x) = (x^3 - 3x^2 - 4x + 12)' = 3x^2 - 6x - 4
$$

som gir

$$
f'(1) = 3\cdot 1^2 - 6\cdot 1 - 4 = -7
$$

Setter vi dette inn i likningen for tangenten, så får vi

$$
y = -7(x - 1) + 6 = -7x + 7 + 6 = -7x + 13
$$
::::
:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 2
En funksjon $f$ er gitt ved 

$$
f(x) = x^3 + 2x^2 - x + 1.
$$

Bestem likningen til tangenten til grafen til $f$ i punktet $(2, f(2))$.


:::::{answer}
$$
y = 19x - 23
$$

::::{solution}
Likningen til tangenten er 

$$
y = f'(2)(x - 2) + f(2)
$$

Vi har at 

$$
f(2) = 2^3 + 2\cdot 2^2 - 2 + 1 = 15
$$

Videre har vi at

$$
f'(x) = (x^3 + 2x^2 - x + 1)' = 3x^2 + 4x - 1
$$

som gir

$$
f'(2) = 3\cdot 2^2 + 4\cdot 2 - 1 = 12 + 8 - 1 = 19
$$

Setter vi dette inn i likningen for tangenten, så får vi

$$
y = 19(x - 2) + 15 = 19x - 38 + 15 = 19x - 23
$$
::::

:::::
:::::::::::::::









## Sammenheng mellom $f(x)$ og $f'(x)$

Vi har allerede nevnt at grafen til den deriverte $f'$ vil være en polynomfunksjon av én grad lavere enn $f$. Men vi kan peke ut flere sammenhenger som er viktig å forstå for å anvende teorien i praksis. 

### Ekstremalpunkter til $f$ og nullpunkter til $f'$

La oss forestille oss at vi har en tredjegradsfunksjon $f$. Da vil $f'$ være en andregradsfunksjon. La oss tegne tangenter til grafen til $f$ i ekstremalpunktene til $f$. Da får vi tangenter som er horisontale og dermed har stigningstall $0$. Dette vil derfor være punkter hvor $f'(x) = 0$. Altså punkter hvor grafen til $f'$ skjærer $x$-aksen. Se figuren nedenfor.


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
function: 1/3 * x**3 + 1/2 * x**2 - 6 * x - 3, f
ymax: 20
ymin: -20
xmin: -10
xmax: 10
ticks: off
tangent: -3, f
tangent: 2, f
point: (-3, f(-3))
text: -3, f(-3), "$(a, f(a))$", top-center
point: (2, f(2))
text: 2, f(2), "$(b, f(b))$", bottom-center
fontsize: 26
:::

:::{plot}
function: x**2 + x - 6, f'
xmin: -8
xmax: 8
ymax: 15
ymin: -15
ticks: off
fontsize: 26
point: (-3, 0)
text: -3, 0, "$(a, 0)$", bottom-left
point: (2, 0)
text: 2, 0, "$(b, 0)$", bottom-right
:::


::::


Men det finnes også polynomfunksjoner som har punkter hvor tangenten blir horisontal, men punktet er verken et toppunkt eller et bunnpunkt. I figuren nedenfor viser vi en femtegradsfunksjon $f$ og dens deriverte $f'$ som er en fjerdegradsfunksjon. Vi ser at grafen til $f$ har to ekstremalpunkter, men det er et punkt hvor grafen til $f$ ikke snur, men hvor tangenten likevel er horisontal. Dette punktet kaller vi i stedet for et **terrassepunkt**.


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
function: 1/5 * x**5 - 3/4 * x**4 - x**3 + 11/2 * x**2 - 6*x - 5, f
ymax: 25
ymin: -25
xmax: 5
xmin: -4
ticks: off
point: (-2, f(-2))
point: (1, f(1))
point: (3, f(3))
tangent: 1, f, dashed, red
:::

:::{plot}
function: x**4 - 3*x**3 - 3 * x**2 + 11*x - 6, f'
ymax: 25
ymin: -25
xmax: 5
xmin: -4
ticks: off
point: (-2, 0)
point: (1, 0)
point: (3, 0)
:::

::::




:::::::::::::::{summary} Sammenheng mellom $f(x)$ og $f'(x)$
La $f$ være en polynomfunksjon. Da vil følgende sammenhenger mellom grafene til $f$ og $f'$ gjelde:
* Punkter hvor grafen til $f'$ skjærer $x$-aksen svarer til punkter på grafen til $f$ hvor tangenter har stigningstall $0$.
* Punkter hvor $f'(x) = 0$, svarer til punkter på grafen til $f$ hvor tangenter har stigningstall $0$. 
* Grafen til $f$ stiger når $f'(x) > 0$.
* Grafen til $f$ synker når $f'(x) < 0$.
:::::::::::::::


---



:::::::::::::::{example} Eksempel 3
En tredjegradsfunksjon $f$ er gitt ved

$$
f(x) = 2x^3 + 3x^2 - 36x + 6
$$


Finn koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.



::::{solution}
---
open:
---
Ekstremalpunktene til $f$ finnes der $f'(x) = 0$. Vi finner den deriverte først:

$$
f'(x) = (2x^3 + 3x^2 - 36x + 6)' = 6x^2 + 6x - 36
$$

Så løser vi likningen $f'(x) = 0$:

$$
6x^2 + 6x - 36 = 0 \liff x^2 + x - 6 = 0
$$

Vi bruker $abc$-formelen for å løse likningen:

$$
x = \frac{-1 \pm \sqrt{1^2 - 4\cdot 1 \cdot (-6)}}{2\cdot 1} = \frac{-1 \pm \sqrt{25}}{2} = \frac{-1 \pm 5}{2}
$$

som gir

$$
x = -3 \or x = 2
$$

Det betyr at $f'(x)$ kan nullpunktsfaktoriseres som

$$
f'(x) = 6(x + 3)(x - 2)
$$

Vi tegner et fortegnsskjema for $f'(x)$ med dens faktorer:

:::{signchart-2}
width: 60%
function: 6 * (x + 3) * (x - 2), f'(x) 
:::

Fortegnslinja til $f'(x)$ er positiv før $x = -3$ og negativ etter, som betyr at grafen til $f$ stiger før $x = -3$ og synker etter. Dermed har vi et toppunkt i $(-3, f(-3))$. Vi finner $f(-3)$:

$$
f(-3) = 2\cdot (-3)^3 + 3\cdot (-3)^2 - 36\cdot (-3) + 6 = -54 + 27 + 108 + 6 = 87
$$

Dermed har vi et toppunkt i $(-3, 87)$.

Fortegnslinja til $f'(x)$ er negativ før $x = 2$ og positiv etter, som betyr at grafen til $f$ synker før $x = 2$ og stiger etter. Dermed har vi et bunnpunkt i $(2, f(2))$. Vi finner $f(2)$:

$$
f(2) = 2\cdot 2^3 + 3\cdot 2^2 - 36\cdot 2 + 6 = 16 + 12 - 72 + 6 = -38
$$

Dermed har vi et bunnpunkt i $(2, -38)$.


::::



:::::::::::::::