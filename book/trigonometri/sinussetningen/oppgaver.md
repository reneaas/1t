# Oppgaver: Sinussetningen


:::::::::::::::{exercise} Oppgave 1

En trekant $\triangle ABC$ er vist i figuren nedenfor. 

:::{plot}
figsize: (5, 2.5)
width: 50%
axis: off
axis: equal
triangle: svs=(2, 40, 1), angles=(A, B), angle-radius=60, side-labels=(CA=exact), side-text=(AB="$c$", BC="$a$"), angle-labels=(A=numeric, B=numeric), angle-offset=40
fontsize: 28
:::




:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::



Bestem $a$. 


:::::{answer}

$$
a \approx 1.39
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_1/a/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::
::::

:::::


:::::::::::::


:::::::::::::{part} b
:::{cas-popup}
---
layout: sidebar
---
:::


Bestem $c$. 

:::::{answer}
$$
c = 2
$$
::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_1/b/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::
::::
:::::


:::::::::::::




:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2

:::{cas-popup}
---
layout: sidebar
---
:::


I figuren nedenfor vises en trekant $\triangle ABC$. 


:::{plot}
figsize: (5, 3)
axis: off
axis: equal
width: 60%
triangle: sss=(2, 2.29, 3), angles=(C), side-labels=(CA=numeric, AB=numeric), angle-radius=100, label-offset=60, angle-labels=(C=numeric), angle-offset=80
:::


:::::::::::::{part} a
Bestem $\angle B$. 


:::::{answer}
$$
\angle B \approx 88.39\degree
$$


::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_2/a/sol.png
---
width: 80%
class: no-click, adaptive-figure
---
:::

Fra figuren kan vi se at $\angle B < 90 \degree$. Dermed er 

$$
\angle B \approx 88.39\degree.
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem $BC$. 


:::::{answer} 
$$
BC \approx 2.29
$$



::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_2/b/sol.png
---
width: 80%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
BC \approx 2.29
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Bestem arealet av $\triangle ABC$. 


:::::{answer} 
$$
T \approx 2.29
$$

::::{solution}
:::{figure} ./figurer/oppgaver/oppgave_2/b/sol.png
---
width: 80%
class: no-click, adaptive-figure
---
:::

som betyr at arealet av $\triangle ABC$ er

$$
T = \approx 2.29
$$
::::
:::::

:::::::::::::



:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 3
---
level: 2
---
I $\triangle ABC$ er $\angle A = 45 \degree$, $BC = 6$ og $AC = 8$.

:::{cas-popup} 350 500
:::


:::::::::::::{part} a
Bestem hvilke mulige vinkler $\angle B$ kan ha.


:::::{answer}
$$
\angle B \approx 70.53 \degree \or \angle B \approx 109.47 \degree
$$


::::{solution}
Vinkelen $\angle B$ kan enten være spiss eller stump. Vi bruker sinussetningen for å bestemme hvilke mulige verdier $\angle B$ kan ha:

:::{figure} ./figurer/oppgaver/oppgave_3/a/sol.png
---
width: 80%
class: no-click, adaptive-figure
---
:::

som betyr at 

$$
\angle B \approx 70.53 \degree \or \angle B \approx 109.47 \degree.
$$

::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem hvilke to lengder $AB$ kan ha.

:::::{answer}
$$
AB \approx 3.66 \or AB \approx 7.66
$$


::::{solution}
Lengden til $AB$ vil være avhengig av $\angle B$. La oss først anta $\angle B \approx 70.53 \degree$. Da kan vi bruke sinussetningen til å bestemme den ene lengden $AB$ kan ha:

:::{figure} ./figurer/oppgaver/oppgave_3/b/sol_1.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså kan vi ha 

$$
\angle B \approx 70.53 \degree \and AB \approx 7.66.
$$

Den andre mulige verdien for $\angle B$ er $\angle B \approx 109.47 \degree$. Da kan vi bruke sinussetningen til å bestemme den andre lengden $AB$ kan ha:

:::{figure} ./figurer/oppgaver/oppgave_3/b/sol_2.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså kan vi ha

$$
\angle B \approx 109.47 \degree \and AB \approx 3.66.
$$

::::
:::::


:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 4
---
level: 2
---


:::{plot}
align: right
fontsize: 26
width: 100%
axis: off
axis: equal 
let: Ax = 0
let: Ay = 0
let: Bx = 2*sqrt(5)
let: By = 0
let: Dx = 3*sqrt(10) * cos(pi/4)
let: Dy = 3*sqrt(10) * sin(pi/4)
let: Cx = Dx + 3 * cos((45 + 180 + 26.57+45) * pi/180)
let: Cy = Dy + 3 * sin((45 + 180 + 26.57+45) * pi/180)
line-segment: (Ax, Ay), (Bx, By), solid, blue
line-segment: (Bx, By), (Dx, Dy), dashed, gray
line-segment: (Bx, By), (Cx, Cy), solid, blue
line-segment: (Dx, Dy), (Cx, Cy), solid, blue
line-segment: (Ax, Ay), (Dx, Dy), solid, blue
let: r = 0.8
angle-arc: (Ax, Ay), r, 0, 45, red 
text: Ax + 1.2 * r * cos(22.5 * pi/180), Ay + 1.2 * r * sin(22.5 * pi/180) + 0.15, "$45^\circ$", center-right
angle-arc: (Dx, Dy), r, 45 + 180 + 26.57, 45 + 180 + 26.57 + 45, red
text: Dx + 1.2 * r * cos((45 + 180 + 26.57 + 22.5) * pi/180), Dy + 1.2 * r * sin((45 + 180 + 26.57 + 22.5) * pi/180) - 0.15, "$45^\circ$", center-center
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-center
text: Cx, Cy, "$C$", center-right
text: Dx, Dy, "$D$", top-center
text: 0.5 * (Ax + Bx), 0.5 * (Ay + By) - 0.15, "$2\sqrt{5}$", bottom-center
text: 0.5 * (Bx + Dx), 0.5 * (By + Dy), "$5 \sqrt{2}$", top-left
text: 0.5 * (Cx + Dx), 0.5 * (Cy + Dy) + 0.15, "$3$", top-right
:::

Gitt firkanten $ABCD$.

:::{cas-popup} 350 500
:::


:::{clear}
:::


:::::::::::::{part} a
Bestem $\angle BDA$. 

:::::{answer}
$$
\angle BDA \approx 26.57\degree. 
$$



::::{solution}
Vi bruker sinussetningen til å bestemme $\angle BDA$:

:::{figure} ./figurer/oppgaver/oppgave_4/a/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
\angle BDA \approx 26.57\degree. 
$$

::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem arealet $T$ av $\square ABCD$.

:::::{answer}
$$
T_{ABCD} \approx 22.5
$$


::::{solution}
Vi bruker arealsetningen på de trekantene $\triangle ABD$ og $\triangle BCD$ for å bestemme arealet $T$ av $\square ABCD$:

:::{figure} ./figurer/oppgaver/oppgave_4/b/sol.png
---
width: 60%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
T_{ABCD} \approx 22.5
$$

::::
:::::

:::::::::::::


:::::::::::::::

---



:::::::::::::::{exercise} Oppgave 5

I figuren nedenfor vises $\square ABCD$. 

:::{plot}
fontsize: 18
figsize: (6, 3)
axis: equal
axis: off
width: 80%
let: u_rot = 20
let: a = 5
let: Ax = 0
let: Ay = 0
let: Bx = (sqrt(3) + 1) / 2 * a * cos(u_rot * pi/180)
let: By = (sqrt(3) + 1) / 2 * a * sin(u_rot * pi/180)
let: Cx = Bx + 1/2 * a * cos(u_rot * pi/180 + 180 * pi / 180 - 90 * pi/ 180)
let: Cy = By + 1/2 * a * sin(u_rot * pi/180 + 180 * pi / 180 - 90 * pi/ 180)
let: Dx = Bx + a * cos(u_rot * pi/180 + 180 * pi / 180 - 30 * pi/180)
let: Dy = By + a * sin(u_rot * pi/180 + 180 * pi / 180 - 30 * pi/180)
line-segment: (Ax, Ay), (Bx, By), solid, blue
line-segment: (Bx, By), (Cx, Cy), solid, blue
line-segment: (Cx, Cy), (Dx, Dy), solid, blue
line-segment: (Dx, Dy), (Ax, Ay), solid, blue
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-right
text: Cx, Cy, "$C$", top-right
text: Dx, Dy, "$D$", top-left
line-segment: (Bx, By), (Dx, Dy), dashed, gray
let: r = 1
angle-arc: (Bx, By), r, u_rot + 180, u_rot + 180 - 30, red
text: Bx + 1.3 * r * cos((u_rot + 180 - 15) * pi/180), By + 1.3 * r * sin((u_rot + 180 - 15) * pi/180), "$30^\circ$", center-left
let: ds = 0.6
let: CD = sqrt((Dx - Cx)**2 + (Dy - Cy)**2)
let: BC = sqrt((Cx - Bx)**2 + (Cy - By)**2)
let: ux = ds * (Dx - Cx) / CD
let: uy = ds * (Dy - Cy) / CD
let: vx = ds * (Bx - Cx) / BC 
let: vy = ds * (By - Cy) / BC 
line-segment: (Cx + ux, Cy + uy), (Cx + ux + vx, Cy + uy + vy), solid, red
line-segment: (Cx + vx, Cy + vy), (Cx + ux + vx, Cy + uy + vy), solid, red
angle-arc: (Dx, Dy), r, u_rot, u_rot - 30, red
angle-arc: (Dx, Dy), 0.8*r, u_rot - 30, u_rot - 30 - 105, red
text: Dx + 0.4, Dy - 0.9*r, "$105^\circ$", bottom-center
text: Dx + 1.2 * r, Dy + 0.1, "$30^\circ$", center-right
text: 0.5 * (Bx + Dx), 0.5 * (By + Dy), "$a$", top-right
:::




:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::


Bestem en eksakt verdi for $CD$ uttrykt ved $a$.

:::::{answer}
$$
CD = \dfrac{\sqrt{3}}{2} a
$$


::::{solution}
Vi bruker sinussetningen til å bestemme lengden $CD$:

:::{figure} ./figurer/oppgaver/oppgave_5/a/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
CD = \dfrac{\sqrt{3}}{2} a.
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


Bestem en eksakt verdi for arealet $T$ av $\square ABCD$ uttrykt ved $a$.


:::::{answer}
$$
T = \dfrac{1}{8}a^2 \left(2\sqrt{3} + 1\right)
$$


::::{solution} 
Vi bruker arealsetningen til å bestemme arealet av de to trekantene. Vi trenger én side til i $\triangle ABD$, så vi finner $AD$ ved hjelp av sinussetningen. Vi gjør utregningen med CAS:


:::{figure} ./figurer/oppgaver/oppgave_5/b/sol.png
---
width: 70%
class: adaptive-figure
---
:::

Altså er 

$$
T_{ABCD} = \dfrac{1}{8}a^2 \left(2\sqrt{3} + 1\right).
$$

::::
:::::

:::::::::::::




:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 6
---
level: 2
---
I figuren nedenfor vises $\square ABCD$. 


:::{plot}
fontsize: 18
figsize: (6, 3)
axis: equal
axis: off
width: 70%
let: Ax = 0
let: Ay = 0
let: Bx = 8
let: By = 0
let: Dx = 4 * cos(60 * pi/180)
let: Dy = 4 * sin(60 * pi/180)
let: Cx = Bx + 12 * cos(60 * pi/180)
let: Cy = By + 12 * sin(60 * pi/180)
line-segment: (Ax, Ay), (Bx, By), solid, blue
line-segment: (Bx, By), (Cx, Cy), solid, blue
line-segment: (Cx, Cy), (Dx, Dy), solid, blue
line-segment: (Dx, Dy), (Ax, Ay), solid, blue
line-segment: (Bx, By), (Dx, Dy), dashed, gray
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-center
text: Cx, Cy, "$C$", top-right
text: Dx, Dy, "$D$", top-left
angle-arc: (Ax, Ay), 1.5, 0, 60, red
text: Ax + 1.8 * cos(30 * pi/180), Ay + 1.8 * sin(30 * pi/180) - 0.4, "$60^\circ$", top-right
angle-arc: (Cx, Cy), 2, 60 + 180, 60 + 180 - 30, red
text: Cx + 2.3 * cos((60 + 180 - 15) * pi/180), Cy + 2.3 * sin((60 + 180 - 15) * pi/180) - 0.25, "$30^\circ$", bottom-left
text: 0.5 * (Ax + Bx), 0.5 * (Ay + By) - 0.15, "$8$", bottom-center
text: 0.5 * (Bx + Dx), 0.5 * (By + Dy) + 0.15, "$4 \sqrt{3}$", top-right
text: 0.5 * (Bx + Cx), 0.5 * (By + Cy) + 0.15, "$12$", bottom-right
text: 0.5 * (Cx + Dx), 0.5 * (Cy + Dy) + 0.15, "$8\sqrt{3}$", top-left
:::


:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::



Bestem en eksakt verdi for omkretsen $\mathcal{O}$ til $\square ABCD$.


:::::{answer}
$$
\mathcal{O} = 8\sqrt{3} + 24
$$



::::{solution}
Vi bruker først sinussetningen til å vinkelen $\angle BDA$. Vi finner at $\angle BDA = 90 \degree$ som betyr at vi kan bruke Pytagoras' setning til å bestemme $AD$. Deretter plusser vi sammen lengdene til alle sidene.

:::{figure} ./figurer/oppgaver/oppgave_6/a/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Omkretsen til $\square ABCD$ er da

$$
\mathcal{O} = 8\sqrt{3} + 24
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



Bestem en eksakt verdi for arealet $T_{ABCD}$ til $\square ABCD$.

:::::{answer}
$$
T_{ABCD} = 32\sqrt{3}
$$


::::{solution}
Vi bruker arealsetningen på hver av trekantene og legger sammen arealene:

:::{figure} ./figurer/oppgaver/oppgave_6/b/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså er arealet til $\square ABCD$:

$$
T_{ABCD} = 32\sqrt{3}
$$

::::
:::::

:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7

I figuren nedenfor vises $\square ABCD$.


:::{plot}
fontsize: 18
figsize: (6, 3)
axis: off
axis: equal
width: 70%
let: Ax = 0
let: Ay = 0
let: Bx = 8
let: By = 0
let: Dx = 5 * cos(60 * pi/180)
let: Dy = 5 * sin(60 * pi/180)
let: Cx = Bx + 6 * cos((180 - 38.2 - 34.77) * pi/180)
let: Cy = By + 6 * sin((180 - 38.2 - 34.77) * pi/180)
line-segment: (Ax, Ay), (Bx, By), solid, blue
line-segment: (Bx, By), (Cx, Cy), solid, blue
line-segment: (Cx, Cy), (Dx, Dy), solid, blue
line-segment: (Dx, Dy), (Ax, Ay), solid, blue
line-segment: (Bx, By), (Dx, Dy), dashed, gray
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-right
text: Cx, Cy, "$C$", top-right
text: Dx, Dy, "$D$", top-left
angle-arc: (Ax, Ay), 1.2, 0, 60, red
text: Ax + 1.4 * cos(30 * pi/180) - 0.1, Ay + 1.4 * sin(30 * pi/180) - 0.1, "$60^\circ$", top-right
angle-arc: (Bx, By), 1.2, 180, 180 - 38.2, red
text: Bx + 1.2 * cos((180 - 38.2/2) * pi/180) + 0.1, By + 1.2 * sin((180 - 38.2/2) * pi/180) - 0.3, "$38.2^\circ$", top-left
angle-arc: (Bx, By), 1.6, 180 - 38.2, 180 - 38.2 - 34.77, red
text: Bx + 1.6 * cos((180 - 38.2 - 34.77/2) * pi/180) + 0.3, By + 1.6 * sin((180 - 38.2 - 34.77/2) * pi/180) + 0.3, "$34.77^\circ$", top-left
angle-arc: (Cx, Cy), 0.8, 180 - 38.2 - 34.77 + 180, 180 - 38.2 - 34.77 + 180 - 86.42, red
text: Cx + 0.8 * cos((180 - 38.2 - 34.77 + 180 - 86.42/2) * pi/180) + 0.2, Cy + 0.8 * sin((180 - 38.2 - 34.77 + 180 - 86.42/2) * pi/180) - 0.2, "$86.42^\circ$", bottom-left
text: 0.5 * (Ax + Dx), 0.5 * (Ay + Dy) + 0.15, "$5$", top-left
text: 0.5 * (Bx + Cx), 0.5 * (By + Cy) + 0.15, "$6$", top-right
:::

:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::


Bestem lengden av diagonalen $BD$.

:::::{answer}
$$
BD = 7.
$$


::::{solution}
Vi bruker sinussetningen til å bestemme lengden $x = BD$:

:::{figure} ./figurer/oppgaver/oppgave_7/a/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså er 

$$
BD = 7
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


Bestem arealet $T$ av $\square ABCD$.

:::::{answer}
$$
T \approx 29.3
$$



::::{solution}
Vi bruker arealsetningen på de to trekantene og legger sammen arealene:

:::{figure} ./figurer/oppgaver/oppgave_7/b/sol.png
---
width: 70%
class: no-click, adaptive-figure
---
:::

Altså er arealet $T$ av $\square ABCD$:

$$
T \approx 29.3
$$

::::
:::::

:::::::::::::



:::::::::::::::









