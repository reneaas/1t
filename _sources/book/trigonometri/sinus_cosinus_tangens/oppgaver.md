# Oppgaver: Sinus, cosinus og tangens

:::::::::::::::{exercise} Oppgave 1
:::{plot}
width: 100%
align: right
triangle: sss=(8, 10, 6), angles=(A, B, C), angle-radius=50, side-labels=(AB=exact, BC=exact, ,CA=exact), side-offset=20
axis: off
axis: equal
fontsize: 34
:::


I figuren til høyre vises en trekant $\triangle ABC$.


:::{clear}
:::


:::::::::::::{part} a
Bestem $\sin B$ og $\cos B$. 


:::{answer}
$$
\sin B = \dfrac{6}{10} = \dfrac{3}{5} \quad \quad \quad \cos B = \dfrac{8}{10} = \dfrac{4}{5}
$$
:::

:::::::::::::


:::::::::::::{part} b
Bestem $\tan B$. 

:::{answer}
$$
\tan B = \dfrac{6}{8} = \dfrac{3}{4}
$$
:::

:::::::::::::


:::::::::::::{part} c
Bestem $\sin C$ og $\cos C$.


:::{answer}
$$
\sin C = \dfrac{8}{10} = \dfrac{4}{5} \quad \quad \quad \cos C = \dfrac{6}{10} = \dfrac{3}{5}
$$
:::


:::::::::::::


:::::::::::::{part} d
Bestem $\tan C$.

:::{answer}
$$
\tan C = \dfrac{8}{6} = \dfrac{4}{3}
$$
:::

:::::::::::::


:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 2
:::{plot}
width: 100%
align: right
triangle: sss=(3, sqrt(3), 2 * sqrt(3)), angles=(A, B, C), angle-radius=20, side-labels=(AB=exact, CA=exact), label-offset=26, angle-radius=60
axis: off
axis: equal
fontsize: 34
:::

I figuren til høyre vises en trekant $\triangle ABC$.


:::{clear}
:::


:::::::::::::{part} a
Bestem $BC$. 

:::{answer}
$$
BC = \sqrt{3}. 
$$
:::

:::::::::::::

:::::::::::::{part} b
Bestem $\sin A$ og $\cos A$.

:::{answer}
$$
\sin A = \dfrac{1}{2} \quad \quad \quad \cos A = \dfrac{\sqrt{3}}{2}
$$
:::
:::::::::::::

:::::::::::::{part} c
Bestem $\tan A$.

:::{answer}
$$
\tan A = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}
$$
:::

:::::::::::::


:::::::::::::{part} d
Bestem $\sin C$ og $\cos C$.

:::{answer}
$$
\sin C = \dfrac{\sqrt{3}}{2} \quad \quad \quad \cos C = \dfrac{1}{2}
$$
:::

:::::::::::::

:::::::::::::{part} e
Bestem $\tan C$.

:::{answer}
$$
\tan C = \sqrt{3}
$$
:::

:::::::::::::




:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 3

::::{hints} Hvordan regne ut sinus og cosinus med CAS
> I gif-en nedenfor viser vi hvordan man bruker CAS til å bestemme $\sin v$, $\cos v$ og $\tan v$ for en vinkel $v = 30\degree$ i en rettvinklet trekant. For å få gradertegn $\degree$ må du:
> 1. Trykke på "option + o" på tastaturet på **macOS**.
> 2. Trykke på "Alt + o" på tasteturet på **Windows**.

:::{figure} ./gifer/tutorial_1.webp
---
class: no-click, adaptive-figure
width: 80%
---
:::

::::



:::{plot}
width: 100%
align: right
triangle: sss=(8 * cos(pi/5), 8 * sin(pi/5), 8), angles=(A, B, C), angle-radius=60, label-offset=26, side-labels=(AB=exact), side-offset=25, angle-labels=(A=numeric), angle-offset=24
axis: off
axis: equal
fontsize: 34
:::

En trekant $\triangle ABC$ er vist til høyre.


:::{clear}
:::

:::::::::::::{part} a

:::{cas-popup}
---
layout: sidebar
---
:::


Regn ut $\sin A$ og $\cos A$ med CAS.



::::{answer}
$$
\sin A = \dfrac{1}{4}\sqrt{2\left(5 - \sqrt{5}\right)} \and \cos B = \dfrac{1}{4} \left(\sqrt{5} + 1\right)
$$
::::

:::::::::::::


:::::::::::::{part} b

:::{cas-popup}
---
layout: sidebar
---
:::



Bruk trigonometri til å bestemme $AC$.

::::{answer}
$$
AC = 8
$$
::::

:::::::::::::


:::::::::::::{part} c
:::{cas-popup}
---
layout: sidebar
---
:::


Bruk trigonometri til å bestemme $BC$.


::::{answer}
$$
BC = 2\sqrt{2(-\sqrt{5} + 5)}
$$
::::

:::::::::::::

:::::::::::::::

---

:::::::::::::::{exercise} Oppgave 4


:::::::::::::{part} a

:::{cas-popup}
---
layout: sidebar
---
:::


Bruk CAS til å regne ut $\sin 45^\circ$, $\cos 45^\circ$ og $\tan 45^\circ$.


::::{answer}

:::{figure} ./ggb/oppgaver/oppgave_4/a.png
---
width: 100%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
\sin 45^\circ = \frac{\sqrt{2}}{2} \quad \quad \quad \cos 45^\circ = \frac{\sqrt{2}}{2} \quad \quad \quad \tan 45^\circ = 1
$$
::::

:::::::::::::

:::::::::::::{part} b

:::{cas-popup}
---
layout: sidebar
---
:::


Bruk CAS til å regne ut $\sin 60^\circ$, $\cos 60^\circ$ og $\tan 60^\circ$.



::::{answer}
:::{figure} ./ggb/oppgaver/oppgave_4/b.png
---
width: 100%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
\sin 60^\circ = \frac{\sqrt{3}}{2} \quad \quad \quad \cos 60^\circ = \frac{1}{2} \quad \quad \quad \tan 60^\circ = \sqrt{3}
$$
::::

:::::::::::::


:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 5
> I denne oppgaven skal du bruke trigonometri og CAS til å bestemme ukjente sidelenger i rettvinklede trekanter.


:::::::::::::{part} a

:::{cas-popup}
---
layout: sidebar
---
:::


I figuren nedenfor vises en rettvinklet trekant.

Bruk CAS til å bestemme $AB$ og $BC$. 


:::{plot}
figsize: (5, 3)
axis: off
axis: equal
width: 60%
triangle: sss=(5*sqrt(5)*cos(63.4 * pi/180), 5*sqrt(5)*sin(63.4 * pi/180), 5*sqrt(5)), angles=(A, B), angle-radius=60, side-text=(CA=$5\sqrt{5}$), angle-labels=(A=numeric), angle-offset=50, label-offset=50
:::




::::{answer}
Vi lar $x = BC$. Da kan vi bruke sinus til å finne $x$:

:::{figure} ./ggb/oppgaver/oppgave_5/a.png
---
width: 100%
class: no-click, adaptive-figure
---
:::

Dermed er $BC = 10$. 

::::

:::::::::::::


:::::::::::::{part} b

:::{cas-popup}
---
layout: sidebar
---
:::


I figuren nedenfor vises en rettvinklet trekant.

Bruk CAS til å bestemme $AB$ og $BC$. 


:::{plot}
nocache:
figsize: (5, 2.5)
axis: off
axis: equal
width: 60%
let: s = sqrt(13)
let: u = 33.7 * pi/180
triangle: sss=(s, s*cos(u), s * sin(u)), angles=(A, C), angle-radius=60, side-labels=(AB=exact), angle-labels=(A=numeric), angle-offset=40, label-offset=40
:::




::::{answer}
:::{figure} ./ggb/oppgaver/oppgave_5/b.png
---
width: 100%
class: no-click, adaptive-figure
---
:::

Dermed er $x = 2$. 

::::

:::::::::::::


:::::::::::::{part} c

:::{cas-popup}
---
layout: sidebar
---
:::


I figuren nedenfor vises en rettvinklet trekant.

Bestem $AB$ og $BC$. 


:::{plot}
nocache:
figsize: (5, 2.5)
axis: off
axis: equal
width: 60%
let: s = 8
let: u = 45 * pi / 180
triangle: sss=(s*cos(u), s, s * sin(u)), angles=(A, B), angle-radius=60, side-labels=(CA=exact), angle-labels=(B=numeric), angle-offset=60, label-offset=60
:::


::::{answer}
$$
\begin{align*}
AB &= 4\sqrt{2} \\
\\
BC &= 8
\end{align*}
$$

::::

:::::::::::::


:::::::::::::{part} d


:::{cas-popup}
---
layout: sidebar
---
:::



I figuren nedenfor vises en rettvinklet trekant.

Bestem $AB$ og $BC$.


:::{plot}
nocache:
figsize: (5, 2.5)
axis: off
axis: equal
width: 60%
triangle: sss=(2 * 4, 4 * sqrt((5/4)**2 + 2**2), 4 * 5/4), angles=(A, C), angle-radius=60, side-labels=(CA=exact), angle-text=(C=$58^\circ$), angle-offset=30, label-offset=40
:::


::::{answer}
$$
\begin{align*}
AB &= 8 \\
\\
BC &\approx 9.44
\end{align*}
$$
::::

:::::::::::::



:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 6
> I denne oppgaven skal du lære å utlede eksakte verdier for sinus og cosinus når vinklene er $30^\circ$ og $60^\circ$. Disse verdiene er viktige å **huske** utenat, men det er enklere å huske dem dersom du vet hvor de kommer fra. 

:::{plot}
width: 100%
align: right
axis: equal
axis: off
triangle: sss=(2, 2, 2), angles=(A, B, C), side-labels=(AB=exact, BC=exact, CA=exact), angle-radius=60
fontsize: 32
:::



En likesidet trekant $\triangle ABC$ er vist i figuren til høyre. 


:::{clear}
:::



:::::::::::::{part} a
Bestem høyden $h$ i trekanten. 


::::{answer}
$$
h = \sqrt{3}. 
$$
::::

:::::::::::::


:::::::::::::{part} b
Bruk trekanten til å bestemme en eksakt verdi for $\sin 60^\circ$ og $\cos 60^\circ$.

::::{answer}
$$
\sin 60^\circ = \frac{\sqrt{3}}{2} \quad \quad \quad \cos 60^\circ = \frac{1}{2}
$$
::::

:::::::::::::


:::::::::::::{part} c
Bruk trekanten til å bestemme en eksakt verdi for $\sin 30^\circ$ og $\cos 30^\circ$.

::::{answer}
$$
\sin 30^\circ = \frac{1}{2} \quad \quad \quad \cos 30^\circ = \frac{\sqrt{3}}{2}
$$
::::

:::::::::::::


:::::::::::::{part} d
Vis at 

$$
(\cos v)^2 + (\sin v)^2 = 1
$$

for $v = 30^\circ$ og $v = 60^\circ$.

:::::::::::::




:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7
> I denne oppgaven skal du lære hvordan man kommer fram til sinus og cosinus når vinkelen er $45^\circ$. Det er også viktig å kunne disse verdiene utenat. Igjen – det er enklest å huske dersom man vet hvordan man kommer fram til dem.

:::{plot}
width: 100%
align: right
triangle: sss=(1, 1, sqrt(2)), angles=(A, B, C), side-labels=(CA=exact), angle-radius=60, angle-labels=(A=numeric, C=numeric)
fontsize: 32
axis: off
axis: equal
:::



:::{clear}
:::



:::::::::::::{part} a
Bestem sidelengdene $AB$ og $BC$. 


::::{answer}
$$
AB = BC = 1
$$
::::

:::::::::::::


:::::::::::::{part} b
Bruk trigonometri til å bestemme de eksakte verdiene for $\sin 45\degree$ og $\cos 45\degree$.


::::{answer}
$$
\sin 45^\circ = \frac{\sqrt{2}}{2} \quad \quad \quad \cos 45^\circ = \frac{\sqrt{2}}{2}
$$
::::


:::::::::::::


:::::::::::::::
