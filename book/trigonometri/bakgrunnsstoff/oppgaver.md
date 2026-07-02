# Oppgaver: Trekantgeometri





:::::::::::::::{exercise} Oppgave 1


:::::::::::::{part} a
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: svs=(3, 45, 5), angle-labels=(A=numeric, B=numeric) 
fontsize: 30
:::

En trekant $\triangle ABC$ er vist i figuren til høyre. 

Bestem $\angle C$.

:::{clear}
:::


::::{answer}
$$
\angle C = 36.39 \degree.
$$
::::
:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: svs=(3, 90, 3), angle-labels=(C=numeric), angle-radius=80 
fontsize: 30
:::


Figuren til høyre vises en trekant $\triangle ABC$. 

Bestem $\angle B$. 


:::{clear}
:::


::::{answer}
$$
\angle B = 45 \degree.
$$
::::
:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: svs=(2, 110, 2), angle-labels=(A=numeric, B=numeric) 
fontsize: 30
:::

En trekant $\triangle ABC$ er vist i figuren til høyre. 

Bestem $\angle C$.

:::{clear}
:::

::::{answer}
$$
\angle C = 35 \degree.
$$
::::
:::::::::::::



:::::::::::::::





---







:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(3, 2*sqrt(3), sqrt(3)), angle-labels=(B=numeric), angles=(A, B), side-labels=(AB=exact, BC=exact), angle-radius=60, label-offset=28
fontsize: 30
:::

I figuren til høyre vises en trekant $\triangle ABC$.

Bestem $CA$. 


:::{clear}
:::

::::{answer}
$$
CA = \sqrt{3}. 
$$
::::
:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(5, 10, 5*sqrt(3)), angle-labels=(B=numeric), angles=(A, B), side-labels=(AB=exact, BC=exact), angle-radius=60
fontsize: 34
:::

En trekant $\triangle ABC$ er vist i figuren til høyre.

Bestem $AC$.


:::{clear}
:::

::::{answer}
$$
AC = 5 \sqrt{3}.
$$
::::
:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(2 * sqrt(3), 2, 4), angle-labels=(A=numeric), angles=(A, B), side-labels=(BC=exact), angle-radius=80, label-offset=28
fontsize: 30
:::


En trekant $\triangle ABC$ er vist i figuren til høyre.


Bestem $AB$ og $AC$.


:::{clear}
:::


::::{answer}
$$
AB = 2 \sqrt{3} \and AC = 4.
$$
::::
:::::::::::::


:::::::::::::::

---



:::::::::::::::{exercise} Oppgave 3

:::::::::::::{part} a
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(4, 5, 3), angles=(A), side-labels=(BC=exact, AB=exact), angle-radius=60
fontsize: 30
:::

En trekant $\triangle ABC$ er vist i figuren til høyre. 

Bestem $CA$.

:::{clear}
:::


::::{answer}
$$
CA = 3.
$$
::::



:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: svs=(3, 90, 2), angles=(A), side-labels=(BC=exact, CA=exact), angle-radius=60
fontsize: 30
:::


En trekant $\triangle ABC$ er vist i figuren til høyre.


Bestem $AB$.


:::{clear}
:::


::::{answer}
$$
AB = 3.
$$
::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(6 * cos(pi/3), 6 * sin(pi/3), 6), angles=(A, B, C), side-labels=(BC=exact, AB=exact), angle-radius=60, label-offset=35
fontsize: 30
:::


En trekant $\triangle ABC$ er vist i figuren til høyre.

Bestem $AC$.



:::{clear}
:::

::::{answer}
$$
AC = 6.
$$
::::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 4

:::::::::::::{part} a
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(4, 4, 4), angles=(A, B), side-labels=(AB=exact), angle-labels=(A=numeric, B=numeric)
fontsize: 30
vline: 2, 0, 2*sqrt(3), dashed, gray
let: ds = 0.3
line-segment: (2 + ds, 0), (2 + ds, ds), solid, gray
line-segment: (2 + ds, ds), (2, ds), solid, gray
text: 2, 0.5 * 2 * sqrt(3), "$h$", center-right
:::

En trekant $\triangle ABC$ er vist i figuren til høyre.

I trekanten er $AB = 4$.

Bestem høyden $h$ i trekanten.



:::{clear}
:::


::::{answer}
$$
h = 2 \sqrt{3}.
$$
::::
:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(4, 4, 4), angles=(A, B), angle-labels=(A=numeric, B=numeric)
fontsize: 30
vline: 2, 0, 2*sqrt(3), dashed, gray
let: ds = 0.3
line-segment: (2 + ds, 0), (2 + ds, ds), solid, gray
line-segment: (2 + ds, ds), (2, ds), solid, gray
text: 2, 0.5 * 2 * sqrt(3), "$3$", center-right
:::

En trekant $\triangle ABC$ er vist i figuren til høyre.


Bestem omkretsen til trekanten.


:::{clear}
:::

::::{answer}
$$
6 \sqrt{3}
$$
::::

:::::::::::::




:::::::::::::{part} c

:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(4, 4, 4), angles=(A, B), side-text=(AB="$g$"), angle-labels=(A=numeric, B=numeric)
fontsize: 30
vline: 2, 0, 2*sqrt(3), dashed, gray
let: ds = 0.3
line-segment: (2 + ds, 0), (2 + ds, ds), solid, gray
line-segment: (2 + ds, ds), (2, ds), solid, gray
text: 2, 0.5 * 2 * sqrt(3), "$h$", center-right
:::

Arealet $T$ av en trekant er gitt ved

$$
T = \dfrac{1}{2} \cdot g \cdot h.
$$

Trekanten til høyre er en likesidet trekant som har arealet $T = 4 \cdot \sqrt{3}$. 

Bestem omkretsen til trekanten.


:::{clear}
:::


::::{answer}
$$
12
$$
::::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5
I en sirkel med radius $4$ er det tegnet inn en trekant $\triangle ABC$ der $A$ er sentrum i sirkelen, og $B$ og $C$ ligger på sirkelperiferien.

:::{plot}
width: 100%
align: right
axis: off
axis: equal
let: r = 4
circle: (0, 0), r, red
triangle: points=((0, 0), (r, 0), (r * cos(120 * pi/180), r * sin(120 * pi/180))), angles=(A), angle-radius=30, angle-labels=(A=numeric)
line-segment: (r * cos(120 * pi/180), r * sin(120 * pi/180)), (r * cos(120 * pi/180), 0), dashed, gray
line-segment: (r * cos(120 * pi/180), 0), (0, 0), dashed, gray
let: ds = 0.5
line-segment: (r * cos(120 * pi/180) + ds, 0), (r * cos(120 * pi/180) + ds, ds), solid, gray
line-segment: (r * cos(120 * pi/180) + ds, ds), (r * cos(120 * pi/180), ds), solid, gray
text: r*cos(120 * pi/180), 0.5 * r * sin(120 * pi/180), "$h$", center-left
fontsize: 30
nocache:
:::


:::{clear}
:::



:::::::::::::{part} a
Bestem høyden $h$ til trekanten.


::::{answer}
$$
h = 2 \sqrt{3}.
$$
::::

:::::::::::::

:::::::::::::{part} b
Bestem arealet av trekanten.

::::{answer}
$$
4 \sqrt{3}
$$
::::


:::::::::::::


:::::::::::::{part} c
Bestem $BC$.

::::{answer}
$$
BC = 4 \sqrt{3}.
$$
::::
:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6
:::{plot}
fontsize: 30
ticks: off
align: right
axis: equal
width: 100%
let: r = 1
let: v = 120
circle: (0, 0), r, red
point: (-r * cos(v * pi/180), -r * sin(v * pi/180))
point: (0, 0)
point: (-r, 0)
line-segment: (0, 0), (-r, 0), solid, blue
line-segment: (0, 0), (-r * cos(v * pi/180), -r * sin(v * pi/180)), solid, blue
line-segment: (-r, 0), (-r * cos(v * pi/180), -r * sin(v * pi/180)), solid, blue
angle-arc: (-r, 0), 0.4, 0, -30
let: u = -30
text: -r + 0.5 * cos(u * pi/180), 0.3 * sin(u * pi/180), "$30^\circ$", center-right
text: -r * cos(v * pi/180), -r * sin(v * pi/180), "$P$", bottom-right
:::

I et koordinatsystem er det tegnet inn en trekant og sirkel med radius $6$.

To av hjørnene til trekanten ligger på sirkelen, og det tredje hjørnet er i sentrum av sirkelen.

Bestem koordinatene til punktet $P$ på figuren.



:::{clear}
:::



::::{answer}
$$
P\left(3, -3\sqrt{3}\right)
$$
::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7

:::{plot}
fontsize: 30
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(4, 2*sqrt(3), 2), angles=(B, C), angle-labels=(B=numeric), angle-radius=60, label-offset=26, side-labels=(BC=exact)
triangle: sss=(2, sqrt(3), 1), angles=(C), corner-labels=none, side-labels=(CA=exact), angle-radius=60
text: cos(pi/3), sin(pi/3), "$E$", top-left
text: 2, 0, "$D$", bottom-center
:::

I figuren til høyre er

* $AE = 1$
* $BC = 2\sqrt{3}$.


La $T_{\triangle ABC}$ være arealet til trekanten $\triangle ABC$ og $T_{\triangle ADE}$ være arealet til trekanten $\triangle ADE$.

Bestem forholdet

$$
\dfrac{T_{\triangle ABC}}{T_{\triangle ADE}}
$$


:::{clear}
:::


::::{answer}
$$
\dfrac{T_{\triangle ABC}}{T_{\triangle ADE}} = 4.
$$
::::



:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 8
:::{plot}
width: 100%
fontsize: 30
align: right
axis: off
axis: equal
triangle: sss=(10, 5*sqrt(3), 5), angles=(B, C), angle-labels=(B=numeric), angle-radius=60, label-offset=30, side-text=(BC="$y$", CA="$x$"), label-offset=20
vline: 5 * cos(pi/3), 0, 5 * sin(pi/3), dashed, gray
let: ds = 0.7
line-segment: (5 * cos(pi/3) + ds, 0), (5 * cos(pi/3) + ds, ds), solid, gray
line-segment: (5 * cos(pi/3) + ds, ds), (5 * cos(pi/3), ds), solid, gray
text: 5 * cos(pi / 3), 0, "$D$", bottom-center
bar: (0, -1), 10, h
text: 5, -1, "$10$", bottom-center
text: 5 * cos(pi/3), 0.5 * 5 * sin(pi/3), "$z$", center-right
:::

I figuren til høyre vises en trekant.

Bestem $x$, $y$ og $z$.


::::{answer}
$$
x = 5 \and y = 5 \sqrt{3} \and z = \dfrac{5\sqrt{3}}{2}
$$
::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 9
Arealet av figuren nedenfor er $12 \sqrt{3}$.

Bestem $CM$.


:::{plot}
width: 60%
fontsize: 30
axis: off
axis: equal
let: Ax = 0
let: Ay = 0
let: Bx = 6
let: By = 0
let: Cx = 3
let: Cy = 3 * sqrt(3)
let: Mx = (Ax + Bx + Cx) / 3
let: My = (Ay + By + Cy) / 3
triangle: points=((Ax, Ay), (Mx, My), (Cx, Cy)), angles=(A, C), corner-labels=none, angle-labels=(A=numeric, C=numeric), angle-radius=60, label-offset=30
triangle: points=((Mx, My), (Bx, By), (Cx, Cy)), angles=(B, C), corner-labels=none, angle-labels=(B=numeric, C=numeric), angle-radius=60, label-offset=30
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-right
text: Cx, Cy, "$C$", top-center
text: Mx, My - 0.2, "$M$", bottom-center
:::


::::{answer}
$$
CM = 2 \sqrt{6}
$$
::::



:::::::::::::::
