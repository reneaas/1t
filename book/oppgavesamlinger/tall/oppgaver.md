# Oppgavesamling: Tall og algebra


:::::::::::::::{exercise} Oppgave 1
Skriv kvadratrøttene så enkelt som mulig.



:::::::::::::{part} a
$$
\sqrt{324}
$$


:::::{answer}
$$
\sqrt{324} = 18
$$

::::{solution}
:::{factor-tree}
---
n: 324
width: 100%
figsize: (4, 8)
align: right
---
:::

Vi primtallsfaktoriserer $324$ som gir

$$
324 = 2^2 \cdot 3^4
$$

Kvadratroten av $324$ kan skrives som

$$
\sqrt{324} = \sqrt{2^2 \cdot 3^4} = 2 \cdot 3^2 = 18
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
$$
\sqrt{360}
$$


:::::{answer}
$$
\sqrt{360} = 6\sqrt{10}
$$

::::{solution}
:::{factor-tree}
---
n: 360
width: 100%
figsize: (4, 8)
align: right
---
:::
Vi primtallsfaktoriserer $360$ som gir

$$
360 = 2^3 \cdot 3^2 \cdot 5
$$

Kvadratroten av $360$ kan skrives som

$$
\sqrt{360} = \sqrt{2^3 \cdot 3^2 \cdot 5} = 2 \cdot 3 \cdot \sqrt{2 \cdot 5} = 6\sqrt{10}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} c
$$
\sqrt{2016}
$$


:::::{answer}
$$
\sqrt{2016} = 12\sqrt{14}
$$


::::{solution}
:::{factor-tree}
---
nocache:
n: 2016
width: 100%
figsize: (5, 12)
align: right
---
:::
Vi primtallsfaktoriserer $2016$ som gir

$$
2016 = 2^5 \cdot 3^2 \cdot 7
$$

Tar vi kvadratroten av dette får vi 

$$
\sqrt{2016} = \sqrt{2^5 \cdot 3^2 \cdot 7} = 2^2 \cdot 3 \cdot \sqrt{2 \cdot 7} = 12\sqrt{14}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Skriv så enkelt som mulig.


$$
\sqrt{75} + \sqrt{27} - \sqrt{12}
$$

:::::{answer}

$$
6\sqrt{3}
$$


::::{solution}
Vi har at 

$$
\begin{align*}
\sqrt{75} &= \sqrt{25 \cdot 3} = \sqrt{25} \cdot \sqrt{3} = 5\sqrt{3} \\
\\
\sqrt{27} &= \sqrt{9 \cdot 3} = \sqrt{9} \cdot \sqrt{3} = 3\sqrt{3} \\
\\
\sqrt{12} &= \sqrt{4 \cdot 3} = \sqrt{4} \cdot \sqrt{3} = 2\sqrt{3} \\
\end{align*}
$$


Altså er 

$$
\begin{align*}
\sqrt{75} + \sqrt{27} - \sqrt{12} &= 5\sqrt{3} + 3\sqrt{3} - 2\sqrt{3} = 6\sqrt{3}
\end{align*}
$$
::::


:::::


:::::::::::::



:::::::::::::{part} b
Skriv så enkelt som mulig.


$$
\dfrac{\sqrt{75} + \sqrt{27} - \sqrt{12}}{2\sqrt{3}}
$$

:::::{answer}
$$
3
$$


::::{solution}
Fra oppgave **a** har vi at 
$$
\sqrt{75} + \sqrt{27} - \sqrt{12} = 6\sqrt{3}
$$
Dermed blir brøken
$$
\dfrac{\sqrt{75} + \sqrt{27} - \sqrt{12}}{2\sqrt{3}} = \dfrac{6\sqrt{3}}{2\sqrt{3}} = 3
$$
::::


:::::

:::::::::::::



:::::::::::::{part} c
Skriv så enkelt som mulig.

$$
\dfrac{\sqrt{125} + 3\sqrt{80} - \sqrt{20}}{\sqrt{45}}
$$


:::::{answer}
$$
\dfrac{\sqrt{125} + 3\sqrt{80} - \sqrt{20}}{\sqrt{45}} = 5
$$
::::{solution}
Vi skriver først alle kvadratrøttene så enkelt som mulig. Vi har at 

$$
\begin{align*}
\sqrt{125} &= \sqrt{25 \cdot 5} = \sqrt{25} \cdot \sqrt{5} = 5\sqrt{5} \\
\\
\sqrt{80} &= \sqrt{16 \cdot 5} = \sqrt{16} \cdot \sqrt{5} = 4\sqrt{5} \\
\\
\sqrt{20} &= \sqrt{4 \cdot 5} = \sqrt{4} \cdot \sqrt{5} = 2\sqrt{5} \\
\\
\sqrt{45} &= \sqrt{9 \cdot 5} = \sqrt{9} \cdot \sqrt{5} = 3\sqrt{5} \\
\end{align*}
$$

Så kombinerer vi resultatene som gir:

$$
\begin{align*}
\dfrac{\sqrt{125} + 3\sqrt{80} - \sqrt{20}}{\sqrt{45}} &= \dfrac{5\sqrt{5} + 3 \cdot 4\sqrt{5} - 2\sqrt{5}}{3\sqrt{5}} \\
\\
&= \dfrac{5\sqrt{5} + 12\sqrt{5} - 2\sqrt{5}}{3\sqrt{5}} \\
\\
&= \dfrac{15\sqrt{5}}{3\sqrt{5}} \\
\\
&= 5
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 3
Faktoriser uttrykkene.


:::::::::::::{part} a
$$
x^2 - 4x + 4
$$


:::::{answer}
$$
x^2 - 4x + 4 = (x - 2)^2
$$

::::{solution}
Vi bruker 2. kvadratsetning med $a = x$ og $b = 2$ som gir

$$
x^2 - 4x + 4 = (x - 2)^2
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
$$
x^2 + 2x + 1
$$


:::::{answer}
$$
x^2 + 2x + 1 = (x + 1)^2
$$


::::{solution}
Vi bruker 1. kvadratsetning med $a = x$ og $b = 1$. Da får vi

$$
x^2 + 2x + 1 = (x + 1)^2
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
$$
x^2 - 100
$$

:::::{answer}
$$
x^2 - 100 = (x + 10)(x - 10)
$$

::::{solution}
Vi bruker konjugatsetningen med:

$$
x^2 - 100 = x^2 - 10^2 = (x + 10)(x - 10)
$$
::::
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
Utvid uttrykkene.


:::::::::::::{part} a
$$
(x + 4)^2 
$$


:::::{answer}
$$
x^2 + 8x + 16
$$

::::{solution}
Vi utvider med 1. kvadratsetning:

$$
(x + 4)^2 = x^2 + 2 \cdot x \cdot 4 + 4^2 = x^2 + 8x + 16
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
$$
(3x - 9)^2 
$$

:::::{answer}
$$
9x^2 - 54x + 81
$$

::::{solution}
Vi utvider med 2. kvadratsetning der $a = 3x$ og $b = 9$. Da får vi:

$$
(3x - 9)^2 = (3x)^2 - 2 \cdot 3x \cdot 9 + 9^2 = 9x^2 - 54x + 81
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
$$
(x - 11)(x + 11)
$$

:::::{answer}
$$
(x - 11)(x + 11) = x^2 - 121
$$

::::{solution}
Vi bruker konjugatsetningen med:

$$
(x - 11)(x + 11) = x^2 - 11^2 = x^2 - 121
$$
::::
:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5
Faktoriser uttrykkene så mye som mulig.


:::::::::::::{part} a
$$
(x + 3)^2 - 4
$$

:::::{answer}
$$
(x + 3)^2 - 4 = (x + 1)(x + 5)
$$

::::{solution}
Vi bruker konjugatsetningen med $a = x + 3$ og $b = 2$. Da får vi at 

$$
(x + 3)^2 - 4 = (x + 3)^2 - 2^2 = (x + 3 - 2)(x + 3 + 2) = (x + 1)(x + 5)
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
$$
(x - 2)^2 - 9
$$
:::::{answer}
$$
(x - 2)^2 - 9 = (x - 5)(x + 1)
$$

::::{solution}
Vi bruker konjugatsetningen med $a = x - 2$ og $b = 3$. Da får vi at 

$$
(x - 2)^2 - 9 = (x - 2)^2 - 3^2 = (x - 2 - 3)(x - 2 + 3) = (x - 5)(x + 1)
$$
::::
:::::
:::::::::::::


:::::::::::::{part} c
$$
-(x + 1)^2 + 25
$$

:::::::::::::{answer}

$$
-(x + 1)^2 + 25 = -(x + 1)^2 + 5^2 = -(x + 1 - 5)(x + 1 + 5) = -(x - 4)(x + 6)
$$

::::{solution}
Vi bruker konjugatsetningen med $a = x + 1$ og $b = 5$. Da får vi at 

$$
-(x + 1)^2 + 25 = -(x + 1)^2 + 5^2 = -(x + 1 - 5)(x + 1 + 5) = -(x - 4)(x + 6)
$$
::::
:::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 6
Utvid uttrykkene.


:::::::::::::{part} a
$$
(2x - 1)^2
$$


:::::{answer}
$$
(2x - 1)^2 = 4x^2 - 4x + 1
$$

::::{solution}
Vi bruker 2. kvadratsetning med $a = 2x$ og $b = 1$. Da får vi:

$$
(2x - 1)^2 = (2x)^2 - 2 \cdot 2x \cdot 1 + 1^2 = 4x^2 - 4x + 1
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
$$
\left(x + \dfrac{1}{2}\right)^2
$$

:::::{answer}

$$
\left(x + \dfrac{1}{2}\right)^2 = x^2 + x + \dfrac{1}{4}
$$

::::{solution}
Vi bruker 2. kvadratsetning med $a = x$ og $b = \frac{1}{2}$. Da får vi:

$$
\left(x + \dfrac{1}{2}\right)^2 = x^2 + 2 \cdot x \cdot \frac{1}{2} + \left(\frac{1}{2}\right)^2 = x^2 + x + \frac{1}{4}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
$$
(3x - 4)^2 
$$

:::::{answer}

$$
(3x - 4)^2 = 9x^2 - 24x + 16
$$

::::{solution}
Vi bruker 2. kvadratsetning med $a = 3x$ og $b = 4$. Da får vi

$$
(3x - 4)^2 = (3x)^2 - 2 \cdot 3x \cdot 4 + 4^2 = 9x^2 - 24x + 16
$$
::::
:::::
:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
Faktoriser uttrykkene så mye som mulig.


:::::::::::::{part} a
$$
9x^2 - 6x + 1
$$


:::::{answer}
$$
9x^2 - 6x + 1 = (3x - 1)^2
$$


::::{solution}
Vi bruker 2. kvadratsetning der 

$$
a^2 = 9x^2 \limplies a = 3x
$$

og 

$$
b^2 = 1 \limplies b = 1
$$

Da har vi også at $2ab = 2 \cdot 3x \cdot 1 = 6x$ som passer. Dermed får vi:

$$
9x^2 - 6x + 1 = (3x - 1)^2
$$


::::
:::::

:::::::::::::


:::::::::::::{part} b
$$
4x^2 + 16x + 16
$$


:::::{answer}
$$
4x^2 + 16x + 16 = (2x + 4)^2
$$


::::{solution}
Vi bruker 1. kvadratsetning der 

$$
a^2 = 4x^2 \limplies a = 2x
$$

og

$$
b^2 = 16 \limplies b = 4
$$

Da er også $2ab = 2 \cdot 2x \cdot 4 = 16x$ som stemmer med uttrykket. Dermed får vi:
$$
4x^2 + 16x + 16 = (2x + 4)^2
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
$$
4(x^2 - 2) - 28
$$


:::::{answer}
$$
4(x^2 - 2) - 28 = 4(x - 3)(x + 3)
$$

::::{solution}
Vi starter med å gange ut parentesen for å skrive det enklere:

$$
4(x^2 - 2) - 28 = 4x^2 - 8 - 28 = 4x^2 - 36
$$

Her kan vi faktorisere ut $4$ og deretter bruke konjugatsetningen:

$$
4x^2 - 36 = 4(x^2 - 9) = 4(x^2 - 3^2) = 4(x - 3)(x + 3)
$$


::::
:::::


:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 8

Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$\dfrac{3}{2} \quad \boxed{\phantom{= -2}} \quad \mathbb{N}$$

::::::{quiz-answer}
---
correct:
---
$$
\notin
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::


::::::{quiz-answer}
$$
\implies
$$
::::::


::::::{quiz-answer}
$$
\impliedby
$$
::::::


:::::::


:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$x = \dfrac{3}{2} \quad \boxed{\phantom{= -2}} \quad x \in \langle -1, 3 \rangle$$

::::::{quiz-answer}
---
correct:
---
$$
\implies
$$
::::::


::::::{quiz-answer}
$$
\impliedby
$$
::::::


::::::{quiz-answer}
$$
\iff
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::



:::::::



:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$x \in \langle -1, 3\rangle \quad \boxed{\phantom{= -2}} \quad x \in \langle 0, 2\rangle$$


::::::{quiz-answer}
---
correct:
---
$$
\impliedby
$$
::::::


::::::{quiz-answer}
$$
\implies
$$
::::::


::::::{quiz-answer}
$$
\iff
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::


:::::::



:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$x \lt -2 \quad \boxed{\phantom{= -2}} \quad x \in \langle \gets, -4]$$


::::::{quiz-answer}
---
correct:
---
$$
\impliedby
$$
::::::


::::::{quiz-answer}
$$
\implies
$$
::::::


::::::{quiz-answer}
$$
\iff
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::


:::::::




:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$|x| = 3 \quad \boxed{\phantom{= -2}} \quad x^2 = 9$$


::::::{quiz-answer}
---
correct:
---
$$
\iff
$$
::::::


::::::{quiz-answer}
$$
\implies
$$
::::::


::::::{quiz-answer}
$$
\impliedby
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::


:::::::



:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$x \in \mathbb{Z} \quad \boxed{\phantom{= -2}} \quad x \in \mathbb{Q}$$


::::::{quiz-answer}
---
correct:
---
$$
\impliedby
$$
::::::


::::::{quiz-answer}
$$
\implies
$$
::::::



::::::{quiz-answer}
$$
\iff
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::


:::::::



:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$x \in \{-4, 2, 9\} \quad \boxed{\phantom{= -2}} \quad x \in [-4, 9]$$

::::::{quiz-answer}
---
correct:
---
$$
\implies
$$
::::::


::::::{quiz-answer}
$$
\impliedby
$$
::::::


::::::{quiz-answer}
$$
\iff
$$
::::::


::::::{quiz-answer}
$$
\in
$$
::::::


:::::::


:::::::{quiz-question}
Hva skal stå i den tomme boksen for at påstanden skal bli sann? 

$$x \in \mathbb{Q} \quad \boxed{\phantom{= -2}} \quad x \in \mathbb{R}$$


::::::{quiz-answer}
---
correct:
---
$$
\implies
$$
::::::

::::::{quiz-answer}
$$
\impliedby
$$
::::::

::::::{quiz-answer}
$$
\iff
$$
::::::


::::::::{quiz-2}
$$
\notin
$$
::::::::


:::::::


::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9
Skriv om påstandene med intervaller.

:::::::::::::{part} a
$$
x \gt -2
$$


:::::{answer}
$$
x \in \langle -2, \to \rangle.
$$
:::::


:::::::::::::


:::::::::::::{part} b
$$
-2 \lt x \lt 3
$$


:::::{answer}
$$
x \in \langle -2, 3 \rangle
$$
:::::


:::::::::::::


:::::::::::::{part} c
$$
x \leq -3
$$


:::::{answer}
$$
x \in \langle \gets, -3]
$$
:::::

:::::::::::::
:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 10
Skriv om påstandene med ulikheter.

:::::::::::::{part} a
$$
x \in [0, 2\rangle
$$


:::::{answer}
$$
0 \leq x \lt 2
$$
:::::


:::::::::::::


:::::::::::::{part} b
$$
x \in \langle \gets, 5\rangle
$$

:::::{answer}
$$
x \lt 5
$$
:::::
:::::::::::::



:::::::::::::{part} c
$$
x \in [3, \to\rangle
$$

:::::{answer}
$$
x \geq 3
$$
:::::
:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 11
Faktoriser uttrykkene.


:::::::::::::{part} a
$$
(x + 3)^2 - 36
$$

:::::{answer}
$$
(x + 3)^2 - 36 = (x - 3)(x + 9)
$$


::::{solution}
Vi bruker konjugatsetningen med $a = x + 3$ og $b = 6$ som gir

$$
(x + 3)^2 - 6^2 = (x + 3 - 6)(x + 3 + 6) = (x - 3)(x + 9)
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
$$
(x - 1)^2 - 9
$$


:::::{answer}
$$
(x - 1)^2 - 9 = (x - 4)(x + 2)
$$



::::{solution}
Vi bruker konjugatsetningen med $a = x - 1$ og $b = 3$ som gir

$$
(x - 1)^2 - 3^2 = (x - 1 - 3)(x - 1 + 3) = (x - 4)(x + 2)
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
$$
-(x + 4)^2 + 81
$$
:::::{answer}

$$
-(x + 4)^2 + 81 = -(x + 4 - 9)(x + 4 + 9) = -(x - 5)(x + 13)
$$


::::{solution}
Vi bruker konjugatsetningen med $a = x + 4$ og $b = 9$ som gir

$$
-(x + 4)^2 + 9^2 = -(x + 4 - 9)(x + 4 + 9) = -(x - 5)(x + 13)
$$
::::
:::::
:::::::::::::

:::::::::::::::





---




:::::::::::::::{exercise} Oppgave 12
Faktoriser uttrykkene.



:::::::::::::{part} a
$$
16 - x^2
$$


:::::{answer}
$$
16 - x^2 = (4 + x)(4 - x) = -(x + 4)(x - 4)
$$


::::{solution}
Vi kan faktorisere direkte med konjugatsetninge:

$$
16 - x^2 = 4^2 - x^2 = (4 + x)(4 - x)
$$

eller så kan vi skrive først skrive om til

$$
16 - x^2 = -(x^2 - 4^2) = -(x + 4)(x - 4)
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
$$
25 - 10x + x^2
$$


:::::{answer}
$$
25 - 10x + x^2 = (x - 5)^2
$$


::::{solution}
Vi omkrokkerer på uttrykket slik at vi kan gjenkjenne at dette bare er 2. kvadratsetning:

$$
25 - 10x + x^2 = x^2 - 10x + 25 = (x - 5)^2
$$
::::
:::::
:::::


:::::::::::::


:::::::::::::{part} c
$$
(x^2 - 5)^2 - 25
$$


:::::{answer}

$$
(x^2 - 5)^2 - 25 = x^2(x - \sqrt{10})(x + \sqrt{10})
$$

::::{solution}
Vi bruker konjugatsetningen med $a = x^2 - 5$ og $b = 5$ som gir

$$
(x^2 - 5)^2 - 25 = (x^2 - 5 + 5)(x^2 - 5 - 5) = x^2(x^2 - 10)
$$

Deretter kan vi faktorisere $(x^2 - 10)$ videre med konjugatsetningen ved å bruke $a = x$ og $b = \sqrt{10}$ som gir

$$
x^2 - 10 = (x - \sqrt{10})(x + \sqrt{10})
$$

Dermed får vi den fullstendige faktoriseringen:

$$
(x^2 - 5)^2 - 25 = x^2(x - \sqrt{10})(x + \sqrt{10})
$$
::::
:::::


:::::::::::::


:::::::::::::::