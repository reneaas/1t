# Oppgaver: Matematisk logikk


:::::::::::::::{exercise} Oppgave 1

Koble sammen riktig begrep med riktig symbol.

:::{pair-puzzle}
$\\land$ : Logisk og
$\\lor$ : Logisk eller
$\\implies$ : Impliserer
$\\iff$ : Ekvivalens
:::

:::::::::::::::


---




:::::::::::::::{exercise} Oppgave 2

> Her skal du velge ut symboler som gir sanne påstander.

Ta quizen! 

:::{quiz}
Q: Hvilket symbol kan stå i boksen? $$3 \quad \boxed{\phantom{= -2}} \quad \mathbb{N}$$
+ $\in$
- $\notin$
- $\iff$
- $\subset$

Q: Hvilket symbol kan stå i boksen? $$\sqrt{2} \quad \boxed{\phantom{= -2}} \quad \mathbb{R}$$
+ $\in$
- $\notin$
- $\impliedby$
- $\implies$

Q: Hvilket symbol kan stå i boksen? $$x \in \mathbb{N} \quad \boxed{\phantom{= -2}} \quad x \in \mathbb{Z}$$
+ $\implies$
- $\iff$
- $\subset$
- $\in$

Q: Hvilket symbol kan stå i boksen? $$x \in \langle 1, 3 \rangle \quad \boxed{\phantom{= -2}} \quad x \in \mathbb{R}$$
+ $\implies$
- $\iff$
- $\impliedby$
- $\subset$

Q: Hvilket symbol kan stå i boksen? $$x \in \langle 0, 4 \rangle \quad \boxed{\phantom{= -2}} \quad x\in \langle 1, 3 \rangle$$
+ $\impliedby$
- $\implies$
- $\iff$
- $\notin$

Q: Hvilket symbol kan stå i boksen? $$x \in \langle -2, 2] \quad \boxed{\phantom{= -2}} \quad -2 < x \leq 2$$
+ $\iff$
- $\implies$
- $\impliedby$
- $\notin$

:::

:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 3 

Vurder om påstandene nedenfor er sanne. Hvis påstanden er sann, forklar hvorfor. Hvis den er usann, gi et moteksempel.


:::{hint}
Hvis $a$ er et partall, kan du skrive $a = 2\cdot n$ for et tall $n \in \natural$. Hvis $a$ er et oddetall, så kan vi skrive det som $a = 2n - 1$. 
:::



:::::::::::::{part} a
$$
a \text{ er et partall} \and b \text{ er et partall} \limplies a + b \text{ er et partall}
$$


:::::{answer}
Sann. 

::::{solution}
Vi antar at $a$ og $b$ er partall slik at 

$$
a = 2n \qog b = 2m
$$

der $n, m \in \natural$. Da har vi at 

$$
a + b = 2n + 2m = 2(n + m)
$$

Siden $n + m \in \natural$, så finnes det et natural tall $k \in \natural$ slik at 

$$
k = n + m
$$

slik at vi kan skrive 

$$
a + b = 2k
$$

Altså er $a + b$ et partall, og påstanden er sann.
::::
:::::


:::::::::::::


:::::::::::::{part} b
$$
a \text{ er et partall} \and b \text{ er et partall} \limplies a \cdot b \text{ er et partall}
$$


:::::{answer}
Sann.

::::{solution}
Vi setter $a = 2n$ og $b = 2m$ for $n, m \in \natural$. Da får vi at 

$$
a \cdot b = (2n) \cdot (2m) = 4nm = 2\cdot (2nm)
$$

Siden $2nm \in \natural$, så er $a \cdot b$ et partall. Altså er påstanden sann.
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
$$
a \text{ er et partall} \and b \text{ er et partall} \limpliedby a + b \text{ er et partall}
$$


:::::{answer}
Usann.


::::{solution}
Dersom $a + b$ er et partall, så kan både $a$ og $b$ være partall, men de kan også begge være oddetall som vi kan se ved å anta at $a = 2n - 1$ og $b = 2m - 1$ for $n, m \in \natural$. Da får vi at 

$$
a + b = (2n - 1) + (2m - 1) = 2n + 2m - 2 = 2(n + m - 1)
$$

Vi har at $n + m - 1 \in \natural$ som betyr at $a + b$ er et partall også hvis $a$ og $b$ er oddetall. Altså er påstanden feil.
::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 4
Vurder om påstandene nedenfor er sanne. Hvis påstanden er sann, forklar hvorfor. Hvis den er usann, gi et moteksempel.


:::{hint}
Hvis $a$ er et oddetall, kan vi skrive tallet som $a = 2n - 1$ der $n \in \natural$
:::


:::::::::::::{part} a
$$
a \text{ er et oddetall} \and b \text{ er et oddetall} \limplies a + b \text{ er et oddetall}
$$
:::::::::::::


:::::::::::::{part} b
$$
a \text{ er et oddetall} \and b \text{ er et oddetall} \limplies a \cdot b \text{ er et oddetall}
$$
:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 5

Vurder om påstandene nedenfor er sanne. Hvis påstanden er sann, bevis påstanden. Hvis den er usann, gi et moteksempel.


:::::::::::::{part} a
$$
a \text{ er partall} \and b \text{ er oddetall} \limplies a + b \text{ er partall}
$$

:::::::::::::


:::::::::::::{part} b
$$
a \text{ er partall} \and b \text{ er oddetall} \limplies a \cdot b \text{ er partall}
$$

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6

Vurder om påstandene nedenfor er sanne. Hvis påstanden er sann, forklar hvorfor. Hvis den er usann, gi et moteksempel.



:::::::::::::{part} a
Avgjør om påstanden nedenfor er sann.

$$
a \text{ er et oddetall} \implies a^2 \text{ er et oddetall}
$$
:::::::::::::


:::::::::::::{part} b
Avgjør om påstanden nedenfor er sann.

$$
a^2 \text{ er et oddetall} \implies a \text{ er et oddetall}
$$
:::::::::::::



:::::::::::::{part} c
Avgjør om påstanden nedenfor er sann.

$$
n \text{ er et partall} \liff n^3 \text{ er et partall}
$$


:::::::::::::



:::::::::::::{part} d
$$
n \text{ er et oddetall} \liff n^3 \text{ er et oddetall}
$$
:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7

Absoluttverdien til et tall $x$ skrives $|x|$ og er definert som avstanden fra $0$ på tallinjen. For eksempel er $|-3| = 3$ og $|2| = 2$. 


Vurder om påstandene nedenfor er sanne. Hvis påstanden er sann, forklar hvorfor. Hvis den er usann, gi et moteksempel.

::::::::::::::{tab-set}
---
class: tabs-parts
---
:::::::::::::{tab-item} a

$$
x = 2 \limplies |x| = 2
$$


:::::::::::::


:::::::::::::{tab-item} b

$$
|x| = 3 \liff x = 3
$$


:::::::::::::


:::::::::::::{tab-item} c

$$
x = -2 \or x = 2 \limplies |x| = 2
$$


:::::::::::::


:::::::::::::{tab-item} d

$$
x = -2 \or x = 2 \limpliedby |x| = 2
$$


:::::::::::::

::::::::::::::

:::::::::::::::


