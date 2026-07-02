# Tallregning 

:::{goals} Vis læringsmål
* Kunne bruke regnerekkefølgen
* Kunne forklare hva et primtall er, og primtallsfaktorisere hele tall. 
* Kunne anvende brøkregler i regning
* Kunne forenkle kvadratrøtter
:::




## Regnerekkefølgen

Regnerekkefølgen kan brukes når vi skal regne ut et sammensatt uttrykk som består av tall. Regnerekkefølgen gir oss en tommelregel på hvilken rekkefølge vi kan bruke når vi skal regne ut uttrykket:

1. Parenteser
2. Eksponenter
3. Multiplikasjon og divisjon
4. Addisjon og subtraksjon


Vi starter med et eksempel:

:::::{example-2} Eksempel 1
Regn ut 

$$
3\cdot (2 - 4)^3 + 5\cdot 2
$$

::::{solution-2}
---
open:
---
Vi følger regnerekkefølgen og regner ut uttrykket steg for steg:

\begin{align*}
    3\cdot (2 - 4)^3 + 5\cdot 2 &= 3\cdot (-2)^3 + 5\cdot 2 && (\text{1. Parentes}) \\
    \\
    &= 3\cdot (-8) + 5\cdot 2 && (\text{2. Eksponent}) \\
    \\
    &= -24 + 10  && (\text{3. Multiplikasjon}) \\
    \\
    &= -14  && (\text{4. Addisjon})
\end{align*}
::::
:::::

---

::::::{exercise-2} Underveisoppgave 1
Regn ut

$$
2\cdot (3 + 5)^2 - 4\cdot 6 + 8
$$

:::::{answer-2}
$112$

::::{solution-2}
\begin{align*} 
    2\cdot (3 + 5)^2 - 4\cdot 6 + 8 &= 2\cdot (8)^2 - 4\cdot 6 + 8 && (\text{1. Parentes})\\
    \\
    &= 2\cdot 64 - 4\cdot 6 + 8 && (\text{2. Eksponent}) \\
    \\
    &= 128 - 24 + 8 && (\text{3. Multiplikasjon})\\
    \\
    &= 112 && (\text{4. Addisjon})
\end{align*}
::::

:::::

::::::

## Primtallsfaktorisering

:::{margin}
Det finnes ingen formel for primtall. 
:::

Et **primtall** er et heltall som kun kan deles med seg selv og $1$. De første primtallene er

$$
2, 3, 5, 7, 11, 13, 17,\ldots 
$$

Et tall som ikke er et primtall er $6$ siden vi kan skrive $6 = 2\cdot 3$ som betyr at $6$ er delelig både med $2$ og $3$.

Når vi skal forkorte brøker eller forenkle kvadratrøtter, må vi ofte kunne primtallsfaktorisere tall. Å primtallsfaktorisere et tall innebærer å skrive tallet som et produkt av primtallene det er bygget opp av. For å finne primtallsfaktorene til et tall, kan vi bruke et **faktortre**. La oss se på et eksempel:


:::::::::::::::{example-2} Eksempel 2
Primtallsfaktoriser $36$.

::::{solution-2}
---
open:
---

:::{figure} ./figurer/eksempler/eksempel_2/figur.svg
---
class: no-click, adaptive-figure
width: 100%
align: right
---
:::

Vi lager et faktortre der vi starter med å dele med det laveste primtallet så mange ganger det er mulig. Deler vi $36$ med $2$ får  vi $18$. Deler vi $18$ med $2$ får vi $9$. 

Nå kan vi ikke dele videre med $2$, så vi går videre til neste primtall som er $3$. Vi deler $9$ med $3$ og får $3$. Svaret vårt er nå et primtall som betyr at vi er ferdig!

Faktortreet til høyre viser hvordan vi kan systematisk ordne denne prosedyren. Primtallsfaktoriseringen av $36$ er produktet av endepunktene på hver gren i faktortreet:

$$
36 = 2 \cdot 2 \cdot 3 \cdot 3 = 2^2 \cdot 3^2
$$
::::


:::::::::::::::


---


:::::::::::::::{exercise-2} Underveisoppgave 2
Primtallsfaktoriser $60$. 



:::::{answer-2}
$$
60 = 2 \cdot 2 \cdot 3 \cdot 5 = 2^2 \cdot 3 \cdot 5
$$


::::{solution-2}
:::{figure} ./figurer/underveisoppgaver/underveisoppgave_2/figur.svg
---
class: no-click, adaptive-figure
width: 100%
align: right
---
:::

Vi lager et faktortre for å primtallsfaktorisere $60$. 

Vi starter med det laveste primtallet som er $2$. Deler vi $60$ med $2$ får vi $30$. Deler vi $30$ med $2$ får vi $15$. 

Nå kan vi ikke dele videre med $2$, så vi går videre til neste primtall som er $3$. Deler vi $15$ med $3$ får vi $5$. Svaret vårt er nå et primtall som betyr at vi er ferdig!

Faktortreet til høyre viser hvordan vi kan systematisk ordne denne prosedyren. Primtallsfaktoriseringen av $60$ er produktet av endepunktene på hver gren i faktortreet:

$$
60 = 2 \cdot 2 \cdot 3 \cdot 5 = 2^2 \cdot 3 \cdot 5
$$
::::

:::::


:::::::::::::::




## Brøkregning

Ofte jobber med vi brøker og vi foretrekker gjerne å oppgi svaret vårt som brøk fremfor å regne det ut som desimaltall. For å kunne regne med brøker må vi kjenne til hvordan vi legger sammen, trekker fra, ganger og deler brøker.


::::{summary-2} Legge sammen brøker
Når to brøker skal legges sammen eller trekkes fra hverandre, må vi ha felles nevner i brøkene. Dette kan vi oppnå ved å utvide brøkene.

$$
\dfrac{a}{b} + \dfrac{c}{d} = \dfrac{a \cdot d + b \cdot c}{b \cdot d}
$$
::::

Vi tar et eksempel med tall:

:::::::::::::::{example-2} Eksempel 3
Regn ut

$$
\dfrac{3}{4} + \dfrac{1}{6}
$$

:::::{solution-2}
---
open:
---
$$
\dfrac{3}{4} + \dfrac{1}{6} = \dfrac{3 \cdot 6}{4 \cdot 6} + \dfrac{1 \cdot 4}{6 \cdot 4} = \dfrac{18}{24} + \dfrac{4}{24} = \dfrac{22}{24} = \dfrac{11}{12}
$$
:::::


:::::::::::::::

---

:::::::::::::::{exercise-2'} Underveisoppgave 3
Regn ut

$$
\dfrac{2}{5} + \dfrac{3}{8}
$$

:::::{answer-2}
$$
\dfrac{31}{40}
$$

::::{solution-2}
$$
\dfrac{2}{5} + \dfrac{3}{8} = \dfrac{2 \cdot 8}{5 \cdot 8} + \dfrac{3 \cdot 5}{8 \cdot 5} = \dfrac{16}{40} + \dfrac{15}{40} = \dfrac{31}{40}
$$
::::

:::::


:::::::::::::::



::::{summary-2} Ganging av brøker
Når vi ganger to brøker, ganger vi tellerne med hverandre og nevnerne med hverandre.

$$
\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{a \cdot c}{b \cdot d}
$$
::::

Vi tar et eksempel med tall:

:::::::::::::::{example-4} Eksempel 4
Regn ut

$$
\dfrac{2}{3} \cdot \dfrac{4}{5}
$$
:::::{solution-2}
---
open:
---
$$
\dfrac{2}{3} \cdot \dfrac{4}{5} = \dfrac{2 \cdot 4}{3 \cdot 5} = \dfrac{8}{15}
$$
:::::
:::::::::::::::

---

:::::::::::::::{exercise-2} Underveisoppgave 4
Regn ut

$$
\dfrac{3}{7} \cdot \dfrac{5}{6}
$$

:::::{answer-2}
$$
\dfrac{5}{14}
$$


::::{solution-2}
$$
\dfrac{3}{7} \cdot \dfrac{5}{6} = \dfrac{3 \cdot 5}{7 \cdot 6} = \dfrac{15}{42} = \dfrac{5}{14}
$$
::::

:::::


:::::::::::::::


::::{margin} Annen skrivemåte
Noen ganger skriver vi dette som

$$
\dfrac{a / b}{c / d} = \dfrac{a}{b} \cdot \dfrac{d}{c}
$$
::::

::::{summary-2} Deling av brøker
Når vi deler en brøk med en annen, ganger vi den første brøken med den omvendte av den andre brøken.

$$
\dfrac{a}{b} : \dfrac{c}{d} = \
\dfrac{a}{b} \cdot \dfrac{d}{c}
$$
::::

Vi tar et eksempel med tall:

:::::::::::::::{example-2} Eksempel 5
Regn ut

$$
\dfrac{3}{4} : \dfrac{2}{5}
$$
:::::{solution-2}
---
open:
---
$$
\dfrac{3}{4} : \dfrac{2}{5} = \dfrac{3}{4} \cdot \dfrac{5}{2} = \dfrac{3 \cdot 5}{4 \cdot 2} = \dfrac{15}{8}
$$
:::::
:::::::::::::::

---

:::::::::::::::{exercise-2} Underveisoppgave 5
Regn ut

$$
\dfrac{4}{9} : \dfrac{2}{3}
$$

:::::{answer-2}
$$
\dfrac{2}{3}
$$


::::{solution-2}
$$
\dfrac{4}{9} : \dfrac{2}{3} = \dfrac{4}{9} \cdot \dfrac{3}{2} = \dfrac{4 \cdot 3}{9 \cdot 2} = \dfrac{12}{18} = \dfrac{2}{3}
$$
::::


:::::


:::::::::::::::


## Kvadratrøtter

Kvadratroten $\sqrt{a}$ av et tall $a$, er hvilket tall $b$ vi må opphøye i $2$ for å få tallet vi tar kvadratroten av. 

:::::::::::::::{summary-2} Definisjon: Kvadratrøtter
Kvadratroten $\sqrt{a}$ av et tall $a$ er det tallet positive tallet $b$ som må opphøyes i $2$ for å få $a$. Det betyr at

$$
b = \sqrt{a} \liff b^2 = a
$$

:::::::::::::::

---

:::::::::::::::{example-2} Eksempel 6
Regn ut

$$
\sqrt{16}
$$

::::{solution-2}
---
open:
---
Vi har at $\sqrt{16} = 4$ siden $4^2 = 16$. 

::::

:::::::::::::::

---

:::::::::::::::{exercise-2} Underveisoppgave 6
Regn ut

$$
\sqrt{25}
$$

:::::{answer-2}
$$
5
$$

::::{solution-2}
Vi har at $\sqrt{25} = 5$ siden $5^2 = 25$.
::::

:::::


:::::::::::::::


---

Ved regning, kan vi i praksis bare bestemme kvadratrøttene for kvadrattallene

$$
1, 4, 9, 16, 25, \ldots
$$

Vi er avhengig av en kalkulator for å beregne en tilnærmet verdi for alle andre kvadratrøtter. Men oftest ønsker vi å oppgi svaret eksakt. Da er det vanlig å forenkle svaret så mye som mulig. Da får vi bruk for følgende regneregel: 

:::::::::::::::{summary-2} Produktregelen for kvadratrøtter
For to tall $a$ og $b$ gjelder:

$$
\sqrt{a\cdot b} = \sqrt{a} \cdot \sqrt{b}
$$
:::::::::::::::

---

La oss se på et eksempel: 

:::::::::::::::{example-2} Eksempel 7
Skriv kvadratroten så enkelt som mulig:

$$
\sqrt{72}
$$


::::{solution-2}
---
open:
---
$$
\sqrt{72} = \sqrt{36 \cdot 2} = \sqrt{36} \cdot \sqrt{2} = 6\sqrt{2}
$$
::::


:::::::::::::::

---

:::::::::::::::{exercise-2} Underveisoppgave 7
Skriv kvadratroten så enkelt som mulig:

$$
\sqrt{48}
$$

:::::{answer-2}
$$
4\sqrt{3}
$$


::::{solution-2}
$$
\sqrt{48} = \sqrt{16 \cdot 3} = \sqrt{16} \cdot \sqrt{3} = 4\sqrt{3}
$$
::::
:::::


:::::::::::::::


---


Vi kan også forenkle kvadratroten av brøker. 


:::::::::::::::{summary-2} Brøkregelen for kvadratrøtter
For to tall $a$ og $b$ gjelder:

$$
\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}
$$
:::::::::::::::


Vi tar et eksempel:


:::::::::::::::{example-2} Eksempel 8
Skriv kvadratroten så enkelt som mulig:

$$
\sqrt{\dfrac{25}{16}}
$$


::::{solution-2}
---
open:
---
$$
\sqrt{\dfrac{25}{16}} = \dfrac{\sqrt{25}}{\sqrt{16}} = \dfrac{5}{4}
$$
::::


:::::::::::::::



---




:::::::::::::::{exercise-2} Underveisoppgave 8
Skriv kvadratroten så enkelt som mulig

$$
\sqrt{\dfrac{32}{40}}
$$


:::::{answer-2}
$$
\dfrac{2}{\sqrt{5}}
$$

::::{solution-2}
$$
\sqrt{\dfrac{32}{40}} = \dfrac{\sqrt{32}}{\sqrt{40}} = \dfrac{\sqrt{4} \cdot \sqrt{8}}{\sqrt{5} \cdot \sqrt{8}} = \dfrac{2}{\sqrt{5}}
$$
::::
:::::

:::::::::::::::

