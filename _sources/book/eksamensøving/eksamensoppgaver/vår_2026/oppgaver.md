# Eksamen våren 2026



## Del 1 – 3 timer – Uten hjelpemidler



:::::::::::::::{exercise} Oppgave 1 (2 poeng)
Løs ulikheten

$$
x^2 + 7x + 6 \leq 0.
$$


::::{answer}
$$
x \in [-6, -1].
$$
::::


::::{solution}
Vi starter med å nullpunktsfaktorisere uttrykket. Vi finner nullpunktene med $abc$-formelen:

$$
x = \dfrac{- \pm \sqrt{7^2 - 4 \cdot 6}}{2} = \dfrac{-7 \pm \sqrt{25}}{2} = \dfrac{-7 \pm 5}{2} = \begin{cases}
-1 \\
-6
\end{cases}
$$

Altså har vi at 

$$
x^2 + 7x + 6 = (x + 1)(x + 6). 
$$

Så tegner vi en fortegnslinje for uttrykket for å avgjøre hvor det er negativt:

:::{signchart-2}
width: 80%
function: (x + 1) * (x + 6), (x + 1)(x + 6)
:::

Her kan vi se at $(x + 1)(x + 6) \lgeq 0$ når 

$$
x \in [-6, -1].
$$


::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2 (4 poeng)
Gitt likningssystemet

$$
\begin{bmatrix}
-x^2 + 4 = y \\
x - y = 2
\end{bmatrix}
$$


:::::::::::::{part} a
Løs likningsystemet ved regning.



::::{answer}
$$
x = 2 \and y = 0 \or x = -3 \and y = -5.
$$
::::

::::{solution}
Vi skriver om likningen 2 til

$$
x - y = 2 \liff y = x - 2
$$

Så setter vi inn dette for $y$ i likning 1 som gir

$$
-x^2 + 4 = \underbrace{x - 2}_{\displaystyle y}
$$

som vi kan forenkle til

$$
0 = x^2 + x - 6
$$

Vi løser likningen med $abc$-formelen:

$$
x = \dfrac{-1 \pm \sqrt{1^2 - 4 \cdot 1 \cdot (-6)}}{2} = \dfrac{-1 \pm \sqrt{25}}{2} = \dfrac{-1 \pm 5}{2} = \begin{cases}
2 \\
-3
\end{cases}
$$

Vi får $y$-koordinaten ved å sette inn $x$-verdien i likning $2$:

:::{table}
labels: $x$, $y = x - 2$
$2$, $0$,
$-3$, $-5$
:::

Altså er løsningen av likningssystemet

$$
x = 2 \and y = 0 \or x = -3 \and y = -5.
$$



::::

:::::::::::::


:::::::::::::{part} b
Løs likningssystemet grafisk.



::::{answer}
$$
(x, y) = (2, 0) \or (x, y) = (-3, -5).
$$
::::

::::{solution}
Vi kan tolke likning 1 som funksjonsuttrykket til

$$
f(x) = -x^2 + 4
$$

og likning 2 kan som

$$
g(x) = x - 2
$$

Løsningen av likningssystemet er da koordinatene til skjæringspunktene mellom grafen til $f$ og grafen til $g$. Vi tegner grafene i et koordinatssystem og leser av skjæringspunktene:


:::{plot}
width: 70%
function: -x**2 + 4, f
function: x - 2, g
point: (2, 0)
point: (-3, -5)
ymin: -7
:::

Vi ser at grafene skjærer hverandre i punktene $(2, 0)$ og $(-3, 5)$. Det betyr at løsningene er

$$
(x, y) = (2, 0) \or (x, y) = (-3, -5).
$$


::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3 (3 poeng)
Løs likningen

$$
2x^3 + 3x^2 - 18x + 8 = 0
$$


::::{answer}
$$
x = 2 \or x = \frac{1}{2} \or x = -4.
$$
::::


::::{solution}
Eventuelle heltallige nullpunkter vil være en faktor i konstantleddet. Det betyr at kandidatene våre er 

$$
x \in \{\pm 1, \pm 2, \pm 4, \pm 8\}
$$

Vi tester ut $x = 2$:

:::{horner}
---
p: 2x^3 + 3x^2 - 18x + 8
x: 2
width: 50%
---
:::

Vi får $0$ i rest som betyr at $x = 2$ er et nullpunkt. Videre kan vi lese av fra Horner-skjemaet at

$$
2x^3 + 3x^2 - 18x + 8 = (x - 2)(2x^2 + 7x - 4).
$$


Vi bruker $abc$-formelen for å finne nullpunktene til $2x^2 + 7x - 4$:

$$
x = \dfrac{-7 \pm \sqrt{7^2 - 4 \cdot 2 \cdot (-4)}}{2 \cdot 2} = \dfrac{-7 \pm \sqrt{81}}{4} = \dfrac{-7 \pm 9}{4} = \begin{cases}
\dfrac{1}{2} \\
\\
-4
\end{cases}
$$

Altså er løsningen av likningen gitt ved

$$
x = 2 \or x = \frac{1}{2} \or x = -4.
$$

::::


:::::::::::::::




---




:::::::::::::::{exercise} Oppgave 4 (2 poeng)
Gitt likningen

$$
a(x + b)^2 = x^2 + 8x + c
$$

Bestem $a$, $b$ og $c$ slik at likningen blir en identitet.


::::{answer}
$$
a = 1 \and b = 4 \and c = 16
$$
::::

::::{solution}
Uttrykket på venstre side er skrevet på nullpunktsform og er et fullstendig kvadrat, mens uttrykket på høyre side er skrevet på standardform.

Den ledende koeffisienten må være lik i begge uttrykk som betyr at $a = 1$.

Symmetrilinja til grafen til uttrykket på høyre side er

$$
x_0 = -\dfrac{8}{2 \cdot 1} = -4
$$

Dette vil være $x$-koordinaten der uttrykket på venstre side skjærer $x$-aksen som forteller oss at 

$$
b = -x_0 = 4.
$$

Verdien til $c$ vil svare til hvor grafen skjærer $y$-aksen. Vi setter inn $x = 0$ på begge sider og regner ut:

$$
(0 + 4)^2 = 0^2 + 8\cdot 0 + c
$$

som gir at 

$$
c = 16. 
$$

Dermed er likningen en identitet dersom

$$
a = 1 \and b = 4 \and c = 16
$$


::::

:::::::::::::::



----



:::::::::::::::{exercise} Oppgave 5 (2 poeng)
Susanne arbeid med tallfølgen

$$
1 \quad 3 \quad 7 \quad 13 \quad 21 \quad \ldots
$$

Hun ser et mønster og skriver

$$
\begin{align*}
0 \cdot 1 + 1 &= 1 \\
\\
1 \cdot 2 + 1 &= 3 \\
\\
2 \cdot 3 + 1 &= 7 \\
\\
3 \cdot 4 + 1 &= 13
\end{align*}
$$


:::::::::::::{part} a
Bestem tall nummer $8$ i tallfølgen.


::::{answer}
$57$.
::::

::::{solution}
Vi bare bruker samme strategi som hun Susanne har regnet med. Vi fortsetter der hun slapp (fra tall nummer $5$):

$$
\begin{align*}
4 \cdot 5 + 1 &= 21 \\
\\
5 \cdot 6 + 1 &= 31 \\
\\
6 \cdot 7 + 1 &= 43 \\
\\
7 \cdot 8 + 1 &= 57
\end{align*}
$$


Altså er tall nummer $8$ i tallfølgen $57$.
::::


:::::::::::::



:::::::::::::{part} b
Sett opp en formel som Susanne kan bruke til å finne tall nummber $n$ i tallfølgen.


::::{answer}
$$
a_n = (n - 1) \cdot n + 1
$$
::::


::::{solution}
Vi lar $a_n$ være tall nummer $n$ i tallfølgen. Vi kan generalisere utregningene som vist i tabellen nedenfor.


:::{table}
labels: $n$, $a_n$
$1$, $0 \cdot 1 + 1$
$2$, $1 \cdot 2 + 1$
$3$, $2 \cdot 3 + 1$
$\vdots$, $\vdots$
$n$, $(n - 1) \cdot n + 1$
:::

Altså finner vi at 

$$
a_n = (n - 1) \cdot n + 1.
$$



::::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6 (1 poeng)
Om en trekant $ABC$ får du vite at 

* vinkel $B$ er $90\degree$
* tangens til vinkel $A$ er $1$

Lag en figur og forklar hvordan denne trekanten kan se ut.


::::{answer}
:::{plot}
width: 40%
fontsize: 32
axis: off
axis: equal
line-segment: (0, 0), (1, 0), solid, black
line-segment: (1, 0), (1, 1), solid, black
line-segment: (0, 0), (1, 1), solid, black
let: ds = 0.1
line-segment: (1 - ds, 0), (1 - ds, ds), solid, gray
line-segment: (1 - ds, ds), (1, ds), solid, gray
angle-arc: (0, 0), 0.2, 0, 45
angle-arc: (1, 1), 0.2, 90 + 180 - 45, 90 + 180
text: 0.5, 0, "$1$", bottom-center
text: 1, 0.5, "$1$", center-right
text: 0.3, 0.1, "$45^\circ$", center-center
text: 0.9, 0.7, "$45^\circ$", center-center
:::
::::

::::{solution}
Siden $\angle B = 90\degree$ så vet vi at trekant $ABC$ er rettvinklet. Siden $\tan A = 1$, må katetene være like lange og de andre vinklene er $45\degree$. En mulig trekant er derfor

:::{plot}
width: 40%
fontsize: 32
axis: off
axis: equal
line-segment: (0, 0), (1, 0), solid, black
line-segment: (1, 0), (1, 1), solid, black
line-segment: (0, 0), (1, 1), solid, black
let: ds = 0.1
line-segment: (1 - ds, 0), (1 - ds, ds), solid, gray
line-segment: (1 - ds, ds), (1, ds), solid, gray
angle-arc: (0, 0), 0.2, 0, 45
angle-arc: (1, 1), 0.2, 90 + 180 - 45, 90 + 180
text: 0.5, 0, "$1$", bottom-center
text: 1, 0.5, "$1$", center-right
text: 0.3, 0.1, "$45^\circ$", center-center
text: 0.9, 0.7, "$45^\circ$", center-center
:::

::::
:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7 (5 poeng)
:::{plot}
width: 40%
axis: off
axis: equal
let: Ax = -2
let: Ay = 0
let: Bx = 2
let: By = 0
let: Cx = 0
let: Cy = 4 * cos(pi/6)
line-segment: (Ax, Ay), (Bx, By), solid, black
line-segment: (Ax, Ay), (Cx, Cy), solid, black
line-segment: (Bx, By), (Cx, Cy), solid, black
line-segment: (Cx, Cy), (0, 0), solid, black
angle-arc: (Cx, Cy), 1, 270, 270 + 30
let: u = pi/12
let: r = 1.2
text: Cx + r * sin(u), Cy - r * cos(u), "$30^\circ$", center-center
let: ds = 0.4
line-segment: (ds, 0), (ds, ds), solid, black
line-segment: (0, ds), (ds, ds), solid, black
text: 0.5 * (Bx + Cx), 0.5 * (By + Cy), "$4$", top-right
text: 0.5 * (Ax + Cx), 0.5 * (Ay + Cy), "$4$", top-left
fontsize: 32
:::


:::::::::::::{part} a
Bruk trekanten ovenfor til å vise at $\sin 30\degree = \dfrac{1}{2}$ og at $\cos 30\degree = \dfrac{\sqrt{3}}{2}$.


::::{solution}
Trekanten er i utgangspunktet en likesidet trekant der alle sidelengder er $4$. Når den er delt i $2$, så får vi to rettvinklede trekanter som har hypotenus $4$ og en katet som er $2$. Den gjenstående kateten får vi fra Pytagoras' setning:

$$
x^2 + 2^2 = 4^2
$$

$$
x^2 + 4 = 16
$$

$$
x^2 = 12 = 4 \cdot 3
$$

som gir

$$
x = 2 \sqrt{3}
$$

Da får vi at 

$$
\sin 30\degree = \dfrac{2}{4} = \dfrac{1}{2}
$$

og 

$$
\cos 30\degree = \dfrac{2 \sqrt{3}}{4} = \dfrac{\sqrt{3}}{2}
$$
::::

:::::::::::::


:::::::::::::{part} b
Bestem arealet av trekanten nedenfor.


::::{answer}
$$
10 \sqrt{3}
$$
::::

::::{solution}
Arealsetningen gir oss at arealet er

$$
\begin{align*}
T &= \dfrac{1}{2} \cdot 4 \cdot 10\sqrt{3} \cdot \sin 30\degree \\
\\
&= \dfrac{1}{2} \cdot 4 \cdot 10\sqrt{3} \cdot \dfrac{1}{2} \\
\\
&= 10\sqrt{3}
\end{align*}
$$
::::


:::::::::::::


:::::::::::::{part} c
Bestem omkretsen av trekanten nedenfor.


::::{answer}
$$
18 + 10\sqrt{3}
$$
::::

::::{solution}
Vi bruker cosinussetningen. Vi lar $x$ være den motstående siden til hjørnet med vinkel lik $30\degree$. Da får vi

$$
x^2 = 4^2 + (10\sqrt{3})^2 - 2 \cdot 4 \cdot 10\sqrt{3} \cdot \cos 30\degree
$$

$$
x^2 = 16 + 100 \cdot 3 - 80 \sqrt{3} \cdot \dfrac{\sqrt{3}}{2}
$$

$$
x^2 = 16 + 300 - 40 \cdot 3
$$

$$
x^2 = 16 + 300 - 120 = 196
$$

Altså får vi at 

$$
x = \sqrt{196} = 14
$$

Dermed er omkretsen av trekanten

$$
\mathcal{O} = 4 + 14 + 10\sqrt{3} = 18 + 10\sqrt{3}.
$$
::::

:::::::::::::


:::{plot}
width: 60%
axis: off
axis: equal
fontsize: 32
let: Ax = 0
let: Ay = 0
let: Bx = -4
let: By = 0
let: Cx = -10 * sqrt(3) * cos(pi/6) 
let: Cy = 10 * sqrt(3) * sin(pi/6)
line-segment: (Ax, Ay), (Bx, By), solid, black
line-segment: (Ax, Ay), (Cx, Cy), solid, black
line-segment: (Bx, By), (Cx, Cy), solid, black
angle-arc: (Ax, Ay), 1.8, 150, 180
let: r = 3.1
let: u1 = pi - pi/6 
let: u2 = pi
text: 0.5 * r * (cos(u1) + cos(u2)), 0.5 * r * (sin(u1) + sin(u2)), "$30^\circ$", center-center
text: 0.5 * (Ax + Bx), 0.5 * (Ay + By) - 0.2, "$4$", bottom-center
text: 0.5 * (Ax + Cx), 0.5 * (Ay + Cy), "$10\sqrt{3}$", top-right
fontsize: 26
:::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8 (4 poeng)

En rasjonal funksjon $f$ har

* ingen nullpunkt
* to vertikale asymptoter

:::::::::::::{part} a

Bestem et mulig funksjonsuttrykk $f(x)$.

Husk å argumentere for at svaret ditt er riktig.


::::{answer}
$$
f(x) = \dfrac{x^2 + 1}{x^2 - 1}
$$
::::

::::{solution}
En rasjonal funksjon $f$ kan skrives som en brøk

$$
f(x) = \dfrac{P(x)}{Q(x)}
$$

der $P(x)$ og $Q(x)$ er polynomer. Dersom $f$ ikke har noen nullpunkt, vil $P(x)$ være et polynom som aldri er lik 0. Et mulig valgt for dette er

$$
P(x) = x^2 + 1
$$

Siden $f$ har to vertikale asymptoter, må $Q(x)$ ha to nullpunkter. En mulighet er

$$
Q(x) = (x + 1)(x - 1) = x^2 - 1
$$

Ergo er et mulig uttrykk for $f(x)$ gitt ved 

$$
f(x) = \dfrac{x^2 + 1}{x^2 - 1}
$$
::::


:::::::::::::



En rasjonal funksjon $g$ har horisontal asymptote $y = 2$. Grafen til $g$ skjærer ikke $y$-aksen.

:::::::::::::{part} b

Bestem et mulig funksjonsuttrykk $g(x)$.

Husk å argumentere for at svaret ditt er riktig.


::::{answer}
$$
g(x) = \dfrac{2x - 1}{x}
$$
::::

::::{solution}
Vi har at $g(x)$ kan skrives på formen

$$
g(x) = \dfrac{P(x)}{Q(x)}
$$

der $P(x)$ og $Q(x)$ er polynomer.

Siden grafen til $g$ ikke skjærer $y$-aksen, må den ha en vertikal asymptote i $x = 0$. Da kan vi velge $Q(x) = x$. Siden $g$ har en horisontal asymptote når $y = 2$, kan vi for eksempel velge at

$$
P(x) = 2x - 1
$$

Da får vi at 

$$
g(x) = \dfrac{2x - 1}{x}
$$

Når $|x|$ blir stor, så vil $g(x)$ nærme seg $2$ som gir en horisontal asymptote $y = 2$.
::::
:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9 (3 poeng)

:::{plot}
fontsize: 32
width: 100%
align: right
function: 1/2 * x**2 + x - 12, f
xmin: -8
xmax: 6
ymin: -14
ymax: 8
axis: off
point: (-1, -12.5)
text: -1, -12.5, "$(-1, -12.5)$", bottom-left
point: (4, 0)
text: 4, 0, "$(4, 0)$", center-left 
tangent: 4, f, red, solid
line-segment: (4, 0), (5, 0), dashed, red
line-segment: (5, 0), (5, 5), dashed, red
text: 0.5 * (4 + 5), 0, "$1$", bottom-center
text: 5, 0.5 * (0 + 5), "$5$", center-right
:::



Til høyre ser du grafen til en andregradsfunksjon $f$

* Bunnpunktet har koordinater $(-1, -12.5)$
* Den rette linjen er en tangent med stigningstall $5$



:::{clear}
:::


:::::::::::::{part} a
Forklar at $f'(4) = 5$


::::{solution}
$f'(4)$ gir stigningstallet til en tangent gjennom punktet $(4, f(4))$ på grafen til $f$. Her kan vi se at dette stigningstallet er

$$
a = \dfrac{5}{1} = 5
$$

Ergo må $f'(4) = 5$.
::::

:::::::::::::



:::::::::::::{part} b
Bestem $f'(x)$.


::::{answer}
$$
f'(x) = x + 1
$$
::::

::::{solution}
Den deriverte kan skrives på formen

$$
f'(x) = a(x - x_0)
$$

der $x = x_0$ er nullpunktet til $f'(x)$. Dette vil være $x_0 = -1$ siden grafen til $f$ har et bunnpunkt i dette punktet. Dermed vet vi at

$$
f'(x) = a(x + 1)
$$

I tillegg vet vi at $f'(4) = 5$ som gir oss 

$$
5 = a(4 + 1) \liff a = 1
$$

Ergo er

$$
f'(x) = x + 1
$$
::::

:::::::::::::

:::::::::::::::


---


## Del 2 - 2 timer - Med hjelpemidler


:::::::::::::::{exercise} Oppgave 1 (5 poeng)
---
aids: true
---

:::{figure} ./bilder/bil2.svg
---
class: no-click, adaptive-figure
width: 40%
---
:::


Fru Hansen eier en gammel bil. Når hun kjører med en fart på $x$ km/h, slipper bilen ut $U(x)$ gram $\mathrm{CO}_2$ per kilometer, der $U(x)$ er gitt ved

$$
U(x) = \dfrac{5400}{x} + 0.0074x^2 + 50, \quad 30 \lt x \lt 110.
$$

:::::::::::::{part} a
Hvor mange gram $\mathrm{CO}_2$ slipper bilen ut per kilometer dersom fru Hansen kjører med en fart på $50$ km/h?


:::::::::::::


:::::::::::::{part} b
Hvilken fart gir minst utslipp av $\mathrm{CO}_2$ per kilometer?

Hvor mange grafem $\mathrm{CO}_2$ slipper bilen ut per kilometer ved denne farten?

:::::::::::::


Fru hansen kjører med en fart på $90$ km/h i 20 minutter.


:::::::::::::{part} c
Hvor mange gram $\mathrm{CO}_2$ slipper bilen ut i løpet av disse 20 minuttene?


:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2 (5 poeng)
---
aids: true
---


:::{plot}
width: 60%
axis: off
axis: equal
let: Ax = 0
let: Ay = 0
let: Bx = (sqrt(2) + sqrt(6)) / 2
let: By = 0
let: Cx = sqrt(2) * cos(pi/6)
let: Cy = sqrt(2) * sin(pi/6)
let: Dx = Cx + 2 * sqrt(3) / 3 * cos(pi - pi/4)
let: Dy = Cy + 2 * sqrt(3) / 3 * sin(pi - pi/4) 
line-segment: (Ax, Ay), (Bx, By), solid, black
line-segment: (Bx, By), (Dx, Dy), solid, black
line-segment: (Ax, Ay), (Dx, Dy), solid, black
line-segment: (Ax, Ay), (Cx, Cy), dashed, black
angle-arc: (Ax, Ay), 0.2, 30, 30 + 45
let: r = 0.3
let: u1 = pi/6
let: u2 = pi/6 + pi/4
text: r * 0.5 * (cos(u1) + cos(u2)), r * 0.5 * (sin(u1) + sin(u2)), "$45^\circ$", center-center
angle-arc: (Cx, Cy), 0.2, 180 - 45 + 75, 180 - 45 + 180
angle-arc: (Dx, Dy), 0.2, 180 - 45 + 180 - 60, 180 - 45 + 180
text: Cx - 0.05, Cy - 0.3, "$105^\circ$", center-center
text: Dx + 0.1, Dy - 0.3, "$60^\circ$", center-center
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-right
text: Cx, Cy, "$C$", top-right
text: Dx, Dy, "$D$", top-center
text: 0.5 * (Ax + Cx), 0.5 * (Ay + Cy), "$\sqrt{2}$", top-left
text: 0.5 * (Bx + Cx), 0.5 * (By + Cy), "$1$", top-right
:::




Gitt figuren ovenfor.


:::::::::::::{part} a
Bruk trigonometri til å bestemme lengden av sidekanten $AB$.


:::::::::::::


:::::::::::::{part} b
Bruk trigonometri til å bestemme arealet av trekanten $ABD$


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3 (6 poeng)
---
aids: true
---


:::{figure} ./bilder/vipe.svg
---
class: no-click, adaptive-figure
align: right
width: 50%
---
:::

Vipe er en kritisk truet fugleart i Norge.

I 2013 ble bestanden anslått til å være omtrent 9000 par. I 2022 var bestanden omtrent 2500 par.


:::{table}
---
transpose: true
---
labels: År, Vipebestand (par)
$2013$, $9000$
$2022$, $2500$
:::



:::{clear}
:::

Tor antar at bestanden av viper har avtatt lineært og vil fortsette å avta lineært i årene framover. 

Egil antar at nedgangen har vært, og fortsatt vil være, eksponentiell.

La $x$ være antall år etter $2013$.


:::::::::::::{part} a
Lag en modell $f$ som viser utviklingen av vipebestanden ut fra Tors antakelser.

Forklar hva modellen forteller om utviklingen.
:::::::::::::


:::::::::::::{part} b
Lag en modell $g$ som viser utviklingen av vipebestanden ut fra Egils antakelser.

Forklar hva modellen forteller om utviklingen.
:::::::::::::


Myndigheter og interesseorganisasjoner arbeider med å verne hekkeområdene til viper. De håper at dette skal bidra til å stoppe nedgangen, slik at bestanden vil stabilisere seg.


Egil ønsker å lage en ny modell som tar hensyn til dette. Han lager først den eksponentielle modellen $p$. Så endrer han litt på denne og kommer fram til modellen $q$. 

Nedenfor ser du grafene til de to modellene.


::::{multi-plot2}
---
rows: 1
cols: 3
---
:::{plot}
fontsize: 32
width: 100%
let: a = 7000
let: b = (500 / 7000) ** (1/9)
function: a * b**x, p
xmin: -5
xmax: 35
xstep: 5
ymin: -2000
ymax: 11000
ystep: 2000
grid: off
point: (0, 7000)
point: (9, 500)
text: 0, 7000, "$(0, 7000)$", top-right
text: 9, 500, "$(9, 500)$", top-right
:::

:::{plot}
fontsize: 32
width: 100%
let: a = 7000
let: b = (500 / 7000) ** (1/9)
let: c = 2000
function: a * b**x, p
function: a * b**x + c, q
xmin: -5
xmax: 35
xstep: 5
ymin: -2000
ymax: 11000
ystep: 2000
grid: off
point: (0, 7000)
point: (9, 500)
point: (0, 9000)
point: (9, 2500)
text: 0, 7000, "$(0, 7000)$", top-right
text: 9, 500, "$(9, 500)$", top-right
text: 0, 9000, "$(0, 9000)$", top-right
text: 9, 2500, "$(9, 2500)$", top-right
line-segment: (0, 2000), (35, 2000), dashed, black
:::

:::{plot}
fontsize: 32
width: 100%
let: a = 7000
let: b = (500 / 7000) ** (1/9)
let: c = 2000
function: a * b**x + c, q
xmin: -5
xmax: 35
xstep: 5
ymin: -2000
ymax: 11000
ystep: 2000
grid: off
point: (0, 9000)
point: (9, 2500)
text: 0, 9000, "$(0, 9000)$", top-right
text: 9, 2500, "$(9, 2500)$", top-right
line-segment: (0, 2000), (35, 2000), dashed, black
:::

::::



:::::::::::::{part} c
Gjør rede for hvilke antakelser Egil har lagt til grunn for modellen $q$.

Bestem $p(x)$ og $q(x)$.
:::::::::::::




:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 4 (3 poeng)
---
aids: true
---

::::{multi-plot2}
---
rows: 1
cols: 4
---
:::{plot}
fontsize: 42
width: 100%
axis: off
axis: equal
let: l = 1
line-segment: (0, 0), (0, l), solid, black
text: 0, 0, "Figur 1", bottom-center
:::

:::{plot}
fontsize: 42
width: 100%
axis: off
axis: equal
let: l = 1
repeat: n=0..1; line-segment: (n * l, 0), (n * l, 2*l), solid, black
line-segment: (-l, l), (-l + 3 * l, l)  , solid, black
text: 0.5 * (-l + -l + 3*l), 0, "Figur 2", bottom-center
repeat: n=0..1; circle: (n * l, l), 0.2, fill, blue, solid
nocache:
:::

:::{plot}
fontsize: 42
width: 100%
axis: off
axis: equal
let: l = 1
repeat: n=0..2; line-segment: (n * l, 0), (n * l, 3*l), solid, black
repeat: n=0..1; line-segment: (-l, (n+1) * l), (-l + 4 * l, (n + 1)*l)  , solid, black
text: 0.5 * (-l + -l + 4*l), 0, "Figur 3", bottom-center
repeat: n=0..2; repeat: m=0..1; circle: (n * l, (m + 1) * l), 0.25, fill, blue, solid
nocache:
:::


:::{plot}
fontsize: 42
width: 100%
axis: off
axis: equal
let: l = 1
repeat: n=0..3; line-segment: (n * l, 0), (n * l, 4*l), solid, black
repeat: n=0..2; line-segment: (-l, (n+1) * l), (-l + 5 * l, (n + 1)*l)  , solid, black
text: 0.5 * (-l + -l + 5*l), 0, "Figur 4", bottom-center
repeat: n=0..3; repeat: m=0..2; circle: (n * l, (m + 1) * l), 0.3, fill, blue, solid
nocache:
:::


::::


Kristian er kunstner. Han arbeider med et prosjekt der han skal lage en seriem med figurer ved å lime kuler på pinner.

Ovenfor ser du de fire første figurene i serien. For å lage figur 4 har Kristian brukt 7 pinner og 12 kuler.

Tenk deg at Kristian skal lage de 50 første figurene i denne serien.

Lag et program som beregner og skriver ut hvor mange kuler han vil trenge, og hvor mange pinner han vil trenge.



:::::::::::::::