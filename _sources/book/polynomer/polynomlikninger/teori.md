# Polynomlikninger

:::{goals} Læringsmål
* Kunne bestemme nullpunktene til et tredjegradspolynom.
* Kunne løse tredjegradslikninger.
:::

Vanligvis snakker vi om nullpunkter, men et annet begrep som er mye brukt når det kommer til polynomer er **røtter**.

::::{summary} Definisjon: Røtter
Et nullpunkt til en polynomfunksjon kalles for en **rot** til polynomet. Samlingen av alle nullpunktene til et polynom kalles for **røttene** til polynomet.
::::

## Nullpunktene til et tredjegradspolynom

For å bestemme nullpunktene, eller røttene, til et tredjegradspolynom, får vi bruk for følgende fremgangmåte:
1. Liste opp alle mulige heltallsrøtter, og bestemme én rot $r$.
2. Utføre polynomdivisjon med $(x - r)$ for å få et andregradspolynom. 
3. Bestemme røttene til andregradspolynomet med $abc$-formelen eller faktorisering.


## Tredjegradslikninger

Setningen nedenfor forteller oss hvor vi skal starte når vi skal lete etter røttene til et tredjegradspolynom.

:::::::::::::::{summary} Setning: Heltallsrøtter for polynomer

Et tredjegradspolynom 

$$
f(x) = ax^3 + bx^2 + cx + d,
$$

der koeffisientene er **hele tall**, vil alle heltallsrøttene til $f(x)$ være en faktor i konstantleddet $d$. 
:::::::::::::::

Setningen over lar oss systematisk finne alle *mulige* heltallsrøtter for et tredjegradspolynom. Polynomet må ikke ha heltallsrøtter, men hvis det har det, 
kan vi garantere at det må være i listen over alle tall som *kan* være en faktor i konstantleddet $d$.


:::::::::::::::{example} Eksempel 1
Et tredjegradspolynom $f$ er gitt ved 

$$
f(x) = x^3 + 2x^2 - 4x - 8.
$$

Bestem nullpunktene til $f$. 

::::{solution}
---
open:
---
Vi starter med å observere at $d = -8$, så *hvis* $f(x)$ har heltallsrøtter, så vil de være en faktor i $(-8)$. Dette gir mulighetene:

$$
x = \pm 1, \pm 2, \pm 4, \pm 8
$$

fordi $(-8)$ er delelig med alle disse tallene. 

Vi prøver oss fram med et Horner-skjema. Vi starter med $x = 1$:


:::{horner}
---
p: x^3 + 2x^2 - 4x - 8
x: 1
width: 50% 
---
:::

Resten ble lik $-9$, så $x = 1$ er ikke en rot. Vi prøver oss fram med $x = -1$:


:::{horner}
---
p: x^3 + 2x^2 - 4x - 8
x: -1
width: 50% 
---
:::

Resten ble lik $-3$, så heller ikke $x = -1$ er en rot. Vi prøver oss fram med $x = 2$:

:::{horner}
---
p: x^3 + 2x^2 - 4x - 8
x: 2
width: 50% 
---
:::

Her ble resten lik $0$ som betyr at $x = 2$ er en rot i polynomet. Fra Horner-skjemaet kan vi lese av at kvotienten i polynomdivisjonen er $(x^2 + 4x + 4)$. Da følger det at

$$
x^3 + 2x^2 - 4x - 8 = (x - 2)(x^2 + 4x + 4).
$$

Vi kan faktorisere andregradspolynomet videre med 1.kvadratsetning:

$$
x^2 + 4x + 4 = (x + 2)^2.
$$

Altså er

$$
f(x) = (x - 2)(x + 2)^2.
$$

Altså er nullpunktene til $f$ gitt ved

$$
x = -2 \or x = 2
$$


Vi kan også merke oss at begge disse nullpunktene er i lista over mulige heltallsrøtter som vi laget i starten, akkurat som vi forventet.


::::


:::::::::::::::

---

:::::::::::::::{exercise} Underveisoppgave 1

Et tredjegradspolynom $f(x)$ er gitt ved

$$
f(x) = x^3 + 6x^2 + 3x - 10.
$$



:::::::::::::{part} a
Skriv ned alle mulige heltallsrøtter for $f(x)$.


:::::{answer}
$$
x = \pm 1, \pm 2, \pm 5, \pm 10
$$

::::{solution}
Konstantleddet til polynomet er $-10$. Alle mulige heltallsrøtter vil være de heltallene som deler $-10$. Dette er

$$
x = \pm 1, \pm 2, \pm 5, \pm 10
$$
::::

:::::
:::::::::::::

:::::::::::::{part} b
Finn én av røttene til $f(x)$.


:::::{answer}

$$
x = 1
$$

::::{solution}
Vi bruker Horner-skjema og starter med $x = 1$:

:::{horner}
---
p: x^3 + 6x^2 + 3x - 10
x: 1
width: 50%
---
:::

Resten ble lik $0$ som betyr at $x = 1$ er en rot i polynomet.

::::
:::::




:::::::::::::

:::::::::::::{part} c
Bestem alle røttene til $f$. 

:::::{answer}
$$
x = -5 \or x = -2 \or x = 1
$$

::::{solution}
Vi regner ut dette Horner-skjema i oppgave **b**: 

:::{horner}
---
p: x^3 + 6x^2 + 3x - 10
x: 1
width: 50%
---
:::

Kvotienten i divisjonen er $(x^2 + 7x + 10)$ som betyr at 

$$
f(x) = (x - 1)(x^2 + 7x + 10).
$$

Vi bruker $abc$-formelen for å finne røttene til andregradspolynomet:

$$
x = \dfrac{-7 \pm \sqrt{7^2 - 4 \cdot 1 \cdot 10}}{2 \cdot 1} = \dfrac{-7 \pm \sqrt{49 - 40}}{2} = \dfrac{-7 \pm \sqrt{9}}{2} = \dfrac{-7 \pm 3}{2}
$$

som gir

$$
x = -2 \or x = -5
$$

Altså er røttene til $f(x)$ gitt ved

$$
x = -5 \or x = -2 \or x = 1
$$

::::

:::::
:::::::::::::

:::::::::::::::

