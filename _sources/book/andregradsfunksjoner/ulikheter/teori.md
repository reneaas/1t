# Andregradsulikheter

:::{goals} Læringsmål
* Kunne beskrive mengder som består av flere intervaller. 
* Kunne tolke og tegne fortegnslinjer for andregradsfunksjoner.
* Kunne løse andregradsulikheter grafisk og algebraisk. 
:::


Andregradsulikheter er ulikheter som involverer andregradsuttrykk. Ofte vil ulikheten være knyttet til en andregradsfunksjon. Vi skal se på hvordan vi løser slike ulikheter både grafisk og algebraisk.

## Grafisk løsning
Å løse en andregradsulikhet grafisk er ganske likt det vi gjorde med lineære ulikheter. Vi tegner grafen til funksjonen og så leser vi av hvor grafen oppfyller ulikheten. 

La oss se på et eksempel: 


:::::::::::::::{example} Eksempel 1

:::{plot}
width: 350px
align: right
function: (x + 2) * (x - 1), f
fontsize: 26
:::


Grafen til en andregradsfunksjon er vist til høyre.

Løs ulikheten

$$
f(x) \gt 0
$$


::::{solution}
---
open:
---
Å løse ulikheten $f(x) \gt 0$ grafisk handler om å lese av når grafen til $f$ ligger på **oversiden** av $x$-aksen. Vi kan se at grafen ligger på oversiden av $x$-aksen så lenge $x \lt -2$ eller $x \gt 1$.

Når vi ønsker å beskrive løsningen, bruker vi oftest intervaller. Vi har to måter å beskrive det på:


**Beskrivelse 1:**

Siden grafen ligger på oversiden av $x$-aksen når $x \lt -2$, så vil intervallbeskrivelsen være $x \in \langle \gets, -2\rangle$. Siden grafen også ligger på oversiden av $x$-aksen, så vil også $x \in \langle 1, \to \rangle$ løse ulikheten. Vi samler de to løsningene ved å "plusse sammen" de to intervallene med symbolet $\cup$. Da får vi at 

$$
f(x) \gt 0 \liff x \in \langle \gets, -2\rangle \cup \langle 1, \to \rangle
$$


**Beskrivelse 2:**

Løsningen av ulikheten vil være alle reelle tall $x \in \real$ som **ikke** ligger i intervallet $[-2, 2]$. Da kan vi uttrykket løsningen som alle reelle tall **bortsett** fra de som ligger i intervallet $[-2, 2]$. Da skriver vi 

$$
x \in \real \setminus [-2, 2]
$$

som vi leser som: Alle reelle tall bortsett fra de som ligger i intervallet $[-2, 2]$.


::::

:::::::::::::::


Vi tar et eksempel til der vi skal løse en andregradsulikhet grafisk.



:::::::::::::::{example} Eksempel 2
:::{plot}
width: 350px
align: right
function: (x + 3) * (x - 2) + 2, f
fontsize: 26
:::



Grafen til en andregradsfunksjon $f$ er vist i figuren til høyre.

Bestem $f(x) \leq 2$. 


::::{solution}
---
open:
---
Grafen til $f$ ligger på **undersiden** av linja $y = 2$ så lengde $x$ ligger mellom $x = -3$ og $x = 2$. Dermed kan vi skrive av ulikheten som

$$
f(x) \leq 2 \liff x \in [-3, 2]
$$

Legg spesielt merke til at vi her inkluderer endepunktene $x = -3$ og $x = 2$ i løsningen fordi ulikheten lar $f(x) = 2$ være tillatt.

::::

:::::::::::::::


---



## Algebraisk løsning
Når vi løser ulikheter algebraisk, så bruker vi **fortegnsskjemaer** for å bestemme når en funksjon er positiv og når den er negativ. Et fortegnsskjema kan bestå av én eller flere **fortegnslinjer** som holder styr på fortegnet til ulike faktorer i funksjonsuttrykket. La oss først forklare hvordan vi tegner en fortegnslinje:

:::::::::::::::{summary} Fortegnslinjer

En **fortegnslinje** er en linje som viser fortegnet til en funksjon på et intervall. Vi bruker **heltrukne** og **stiplede** linjer for å skille mellom fortegnene:

* <span style="display:inline-block; width:100px; border-bottom: 3px solid red; vertical-align:middle;"></span> $=$ Positivt fortegn
* <span style="display:inline-block; width:100px; border-bottom: 3px dashed royalblue; vertical-align:middle;"></span> $=$ Negativt fortegn
* Vi markerer med $0$ ved nullpunktene $x_1$ og $x_2$ til funksjonen. 


:::{signchart-2}
width: 0%
function: (x - x_1) * (x - x_2), f(x)
factors: false
:::



:::::::::::::::


La oss se på et eksempel: 

:::::::::::::::{example} Eksempel 3
Nedenfor vises fortegnslinja til en andregradsfunksjon $f$ som har nullpunkter $x = -2$ og $x = 3$.


:::{signchart-2}
width: 70%
function: -(x + 2) * (x - 3), f(x)
factors: false
:::

Bruk fortegnslinja til å løse ulikheten 

$$
f(x) < 0
$$


::::{solution}
---
open:
---
Siden vi skal bestemme når $f(x) \lt 0$, så må vi se hvor fortegnslinja er **stiplet** siden dette svarer til når $f(x)$ er negativ. Fra fortegnslinja ser vi at $f(x) \lt 0$ når $x < -2$ eller når $x > 3$. Løsningen er derfor

$$
x \in \langle \gets, -2 \rangle \cup \langle 3, \to \rangle
$$

Denne løsningen kan vi også skrive som

$$
x \in \real \setminus [-2, 3]
$$

som sier at vi tar alle tallene på tallinja, *bortsett fra* tallene i intervallet $[-2, 3]$.
::::


:::::::::::::::



---


Nå er vi klare for å se hvordan vi kan løse andregradsulikheter algebraisk. Neste eksempel viser en generell fremgangsmåte:


:::::::::::::::{example} Eksempel 4
En andregradsfunksjon $f$ er gitt ved 

$$
f(x) = x^2 - 4x - 5
$$

Løs ulikheten

$$
f(x) \geq 0
$$


::::{solution}
---
open: 
---
Vi må først finne nullpunktene til uttrykket så vi kan skrive uttrykket på nullpunktsform. Vi har at 

$$
f(x) = 0 
$$

$$
x^2 - 4x - 5 = 0
$$

$$
x^2 - 4x = 5
$$

$$
x^2 - 4x + 2^2 = 5 + 2^2
$$

$$
(x - 2)^2 = 9
$$

$$
x - 2 = \pm 3 \liff x = 2 \pm 3 = \begin{cases} 5 \\ \\ -1 \end{cases}
$$

som gir at 

$$
x = -1 \or x = 5
$$

Dermed kan vi skrive 

$$
f(x) = (x + 1)(x - 5)
$$

Så tegner vi et fortegnsskjema der vi tegner én fortegnslinje for **hver** faktor i uttrykket. Fortegnet til $f(x)$ vil være produktet av fortegnene til linjene:

:::{signchart-2}
width: 70%
function: (x + 1) * (x - 5), f(x)
:::

Fra fortegnslinja til $f(x)$ så ser vi at $f(x) \geq 0$ så lenge 

$$
x \in \real \setminus \langle -1, 5 \rangle
$$


::::

::::

:::::::::::::::






### CAS
Vi kan også løse ulikheten algebraisk med CAS. Det skal du se nærmere på Utforsk 1. 


:::::::::::::::{explore} Utforsk 1
I gif-en nedenfor vises det hvordan man løser en andregradsulikhet med CAS.


:::{figure} ./videoer/cas_ulikheter.gif
---
class: no-click, adaptive-figure
width: 80%
---
viser hvordan man løser en andregradsulikhet. Løsningen er $x < -1$ eller $x > 2$ som vi kan skrive som $x \in \langle \gets, -1 \rangle \cup \langle 2, \to \rangle$.
:::



:::::::::::::{part} a
:::{cas-popup}
---
layout: sidebar
---
:::

Bruk CAS til å løse ulikheten som løses i gif-en ovenfor. 



:::::::::::::


:::::::::::::{part} b

:::{cas-popup}
---
layout: sidebar
---
:::

Bruk CAS til å løse ulikheten 

$$
x^2 - 4x + 3 < 0
$$


:::::::::::::


:::::::::::::{part} c
:::{cas-popup}
---
layout: sidebar
---
:::

Bruk CAS til å løse ulikheten

$$
-x^2 + 3x + 2 \geq 0
$$

:::::::::::::



:::::::::::::::




