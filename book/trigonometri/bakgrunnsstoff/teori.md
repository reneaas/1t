# Trekantgeometri


:::{goals} Læringsmål
* Kunne bruke egenskapene til likesidete, likebeinte og rettvinklete trekanter til å bestemme ukjente sider og vinkler. 
* Kunne bruke Pytagoras' setning til å finne ukjente sider i en rettvinklet trekant.
* Kunne bruke formlikhet til å beregne ukjente sidelengder i trekanter.
* Kunne undersøke om to trekanter er formlike.
:::

En trekant er en geometrisk figur som består av tre hjørner og tre sidekanter. Her skal vi repetere noen viktige egenskaper ved trekanter som vi kommer til å få bruk for når vi skal jobbe med trigonometri. Trigonometri er en del av matematikken som gir en ny måte å bruke sammenhenger mellom vinkler og sider i trekanter på. 




:::::::::::::::{summary} Vinkler
En **vinkel** er mål på hvor mange grader det er i en vinkelbue mellom to rette linjer. 

En vinkel kan deles inn i tre typer: Spiss, rett og stump.


::::{multi-plot2}
---
rows: 1
cols: 3
---
:::{plot}
width: 100%
figsize: (3, 3)
let: s = 1
let: r = 0.2
let: angle = pi/3
line-segment: (0, 0), (s, 0), black, solid
line-segment: (0, 0), (s*cos(angle), s*sin(angle)), black, solid
angle-arc: (0, 0), r, 0, angle * 180/pi, blue, solid
xmin: -0.5
xmax: 1.5
ymin: -0.5
ymax: 1.5
ticks: off
axis: off
text: 0.5, 1.2, "Spiss vinkel", center-center, bbox
text: 0.5, -0.3, "$v \in \langle 0^\circ, 90^\circ \rangle$", center-center, bbox
:::


:::{plot}
width: 100%
figsize: (3, 3)
let: s = 1
let: r = 0.2
let: angle = pi/2
line-segment: (0, 0), (s, 0), black, solid
line-segment: (0, 0), (s*cos(angle), s*sin(angle)), black, solid
xmin: -0.5
xmax: 1.5
ymin: -0.5
ymax: 1.5
ticks: off
axis: off
text: 0.5, 1.2, "Rett vinkel", center-center, bbox
text: 0.5, -0.3, "$v = 90^\circ$", center-center, bbox
let: ds = 0.2
line-segment: (ds, 0), (ds, ds), blue, solid
line-segment: (0, ds), (ds, ds), blue, solid
:::


:::{plot}
width: 100%
figsize: (3, 3)
let: s = 1
let: r = 0.2
let: angle = pi - pi/3
line-segment: (0, 0), (s, 0), black, solid
line-segment: (0, 0), (s*cos(angle), s*sin(angle)), black, solid
angle-arc: (0, 0), r, 0, angle * 180/pi, blue, solid
xmin: -0.5
xmax: 1.5
ymin: -0.5
ymax: 1.5
ticks: off
axis: off
text: 0.5, 1.2, "Stump vinkel", center-center, bbox
text: 0.5, -0.3, "$v \in \langle 90^\circ, 180^\circ \rangle$", center-center, bbox
:::

::::

:::::::::::::::



:::::::::::::::{summary} Toppvinkler og samsvarende vinkler

Toppvinkler
: Like vinkler på hver sin side av en linje som skjærer en annen linje. 

Samsvarende vinkler
: Like vinkler som dannes ved at to parallelle linjer skjæres av en tredje linje.

Se figuren nedenfor.

:::{figure} ./figurer/teori/vinkler/figur.svg
---
width: 60%
class: no-click, adaptive-figure
---
:::

:::::::::::::::


:::::::::::::::{exercise} Underveisoppgave 1
Nedenfor vises en figur der en trekant er tegnet inn sammen med noen vinkler. 

Bruk figuren til å vise at vinkelsummen i en trekant er $180 \degree$.

:::{figure} ./figurer/utforsk/utforsk_1/figur_løsning.svg
---
width: 80%
class: no-click, adaptive-figure
---
:::

::::{solution}
Vinklene $x$, $y$ og $z$ spenner ut en halvsirkel som betyr at $x + y + z = 180 \degree$.

Fra figuren kan også observere at:
1. $x$ og $b$ er samsvarende vinkler, så $x = b$.
2. $y$ og $c$ er toppvinkler, så $y = c$.
3. $z$ og $a$ er samsvarende vinkler, så $z = a$.

Men siden $x + y + z = 180 \degree$, så betyr dette også at $a + b + c = 180 \degree$. Dermed er vinkelsummen i en trekant $180 \degree$.

::::


:::::::::::::::



## Spesielle trekanter

Vi skal starte med å se på to spesielle trekanter
* **Likesidet trekant**: En trekant der alle sidene er like lange.
* **Likebeint trekant**: En trekant der to av sidene er like lange.

:::::::::::::::{summary} Likesidete trekanter
:::{plot}
align: right
axis: equal
axis: off
xmin: -1.5
xmax: 1.5
ymin: -0.5
ymax: 1.5
width: 100%
let: s = 1
figsize: (3, 3)
triangle: sss=(s, s, s), corner-labels=none, angle-text=(A="$60^\circ$", B="$60^\circ$", C="$60^\circ$"), angle-radius=100
:::

I en **likesidet** trekant er

* Alle sidelengdene like store
* Alle vinklene like store. Disse er $60\degree$ hver.


:::::::::::::::




:::::::::::::::{summary-2} Likebeinte trekanter
:::{plot}
align: right
axis: equal
axis: off
width: 100%
let: s = 1
figsize: (3, 3)
triangle: sss=(2*s * cos(35 * pi/180), s, s), angles=(A, B), corner-labels=none, angle-text=(A="$v$", B="$v$"), angle-radius=60
:::

I en **likebeint** trekant er

* To av sidelengdene like store
* To av vinklene like store


:::::::::::::::



:::::::::::::::{summary} $30\degree$-$60\degree$-$90\degree$ trekanter

:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(cos(pi/6), sin(pi/6), 1), corner-labels=none, angle-text=(A="$30^\circ$", C="$60^\circ$"), angle-radius=80, side-text=(CA="$2x$", AB="$\sqrt{3} \cdot x$", BC="$x$")
fontsize: 32
:::


I en rettvinklet trekant med vinklene $30\degree$, $60\degree$ og $90\degree$ med hypotenus lik $2x$ er

* den korteste kateten lik $x$
* den lengste kateten lik $\sqrt{3} \cdot x$

:::::::::::::::


 
## Rettvinklede trekanter
En **rettvinklet** trekant er en trekant der én av vinklene er $90 \degree$.
Pytagoras' setning er en setning som forteller oss hvordan sidene i en rettvinklet trekant henger sammen. 

:::::::::::::::{summary} Pytagoras' setning


:::{plot}
width: 100%
align: right
axis: off
axis: equal
triangle: sss=(sin(pi/3), 1, cos(pi/3)), angles=(A), angle-radius=65, side-text=(AB="$c$", BC="$a$", CA="$b$"),
fontsize: 32
:::

For en rettvinklet trekant med hypotenus $a$, og kateter $b$ og $c$ har vi at

$$
a^2 = b^2 + c^2
$$

:::::::::::::::

---


:::::::::::::::{exercise} Underveisoppgave 2

:::{plot}
width: 100%
axis: off
axis: equal
align: right
triangle: sss=(8, 10, 6), corner-labels=none, angles=(A), side-labels=(AB=exact, BC=exact), side-text=(CA="$x$")
fontsize: 32
:::

Bestem sidelengden $x$ i trekanten til høyre.

::::{answer}
$$
x = 6.
$$
::::

:::::::::::::::






## Formlikhet

To trekanter er formlike dersom vi kan forminske, forstørre, rotere eller speile den ene trekanten slik at den passer nøyaktig på den andre trekanten.
I praksis kan vi ikke gjøre dette når vi skal undersøke om to trekanter er formlike. Heldigvis kan vi undersøke om to trekanter er formlike ved å sjekke om de oppfyller ett av tre kriterier.


:::::::::::::::{summary} Formlike trekanter
En trekant $\triangle ABC$ og en trekant $\triangle DEF$ er **formlike** dersom én av følgende betingelser er oppfylt:

**SSS** (side-side-side): 
: Forholdet mellom sidene i $\triangle ABC$ og de tilsvarende sidene i $\triangle DEF$ er én konstant.

$$
\dfrac{AB}{DE} = \dfrac{BC}{EF} = \dfrac{AC}{DF}
$$

**SVS** (side-vinkel-side): 
: Forholdet mellom to av sidene i $\triangle ABC$ med de tilsvarende sidene i $\triangle DEF$ er like, og vinkelen mellom disse sidene er lik i begge trekanter.

**VVV** (vinkel-vinkel-vinkel): 
: Alle vinkler i $\triangle ABC$ er like store som de tilsvarende vinklene i $\triangle DEF$.


<br>

De tre betingelsene ovenfor er **ekvivalente**.

Hvis $\triangle ABC$ og $\triangle DEF$ er formlike, så skriver vi $\triangle ABC \sim \triangle DEF$.


:::{figure} ./figurer/teori/formlikhet/merged_figure.svg
---
width: 100%
class: no-click, adaptive-figure
---
viser to formlike trekanter $\triangle ABC$ og $\triangle DEF$. Her er $\angle A = \angle D$, $\angle B = \angle E$ og $\angle C = \angle F$. De tilsvarende sidene i trekantene er $AB$ og $DE$, sidene $BC$ og $EF$, og sidene $AC$ og $DF$.
:::


:::::::::::::::


---


:::::::::::::::{exercise} Underveisoppgave 3
---
class: check
---
Nedenfor vises to trekanter.

:::{figure} ./figurer/underveisoppgaver/oppgave_2/merged_figure.svg
---
width: 100%
class: no-click, adaptive-figure
---
:::


:::::::::::::{part} a
Forklar at $\triangle ABC \sim \triangle DEF$.


::::{solution} 
Vi kan starte med å undersøke om VVV-kriteriet er oppfylt. I trekant $\triangle ABC$ er vinklene 

$$
\angle A = 63.43 \degree \and \angle B = 90 \degree \and \angle C = 180\degree - \angle A - \angle B
$$

Fra den siste delen av påstanden kan vi regne ut at

$$
\angle C = 180\degree - \angle A - \angle B = 180 \degree - 63.43 \degree - 90 \degree = 26.57 \degree. 
$$

Vi kan se at $\angle E = 90 \degree$ og $\angle F = 26.57 \degree$. Siden to av vinklene er like, betyr det automatisk at alle tre vinklene er like, så da er VVV-kriteriet er oppfylt. Dermed er 

$$
\triangle ABC \sim \triangle DEF.
$$
::::
:::::::::::::



:::::::::::::{part} b
Bestem de ukjente sidelengdene i trekanten $\triangle DEF$.


::::{solution}
Vi vet nå at $\triangle ABC \sim \triangle DEF$. Dermed er forholdet mellom to tilsvarende sider en konstant. De tilsvarende sidene i trekanten er $AB$ og $DE$, sidene $BC$ og $EF$, og sidene $AC$ og $DF$. Vi kan dermed skrive

$$
\dfrac{AB}{DE} = \dfrac{BC}{EF} = \dfrac{AC}{DF}.
$$

Fra $\triangle ABC$ har vi at $AC = \sqrt{5}$ og fra $\triangle DEF$ har vi at $DF = 2\sqrt{5}$. Dermed er 

$$
\dfrac{DF}{AC} = \dfrac{2\sqrt{5}}{\sqrt{5}} = 2.
$$

Dette betyr at alle sidene i $\triangle DEF$ er $2$ ganger så store som sidelengdene i $\triangle ABC$. Dermed er

$$
DE = 2\cdot AB = 2 \cdot 1 = 2 \and EF = 2\cdot BC = 2 \cdot 2 = 4. 
$$
::::
:::::::::::::







:::::::::::::::







