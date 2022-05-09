# Boucles

Toutes les boucles en JS se basent au minimum sur :

- une condition de répétition (on dit aussi « de sortie ») ;
- des instructions à répéter ;

et éventuellement sur :

- une gestion fine de la condition de sortie, avec par exemple un compteur numérique (par exemple, boucle `for`).

## while

[[MDN] while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while)

**Tant que** la condition est vérifiée, j'exécute les instructions :

```js
while(condition) {
  // ... instructions JS
}
```


## do...while

[[MDN] do...while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/do...while)

J'exécute les instructions une première fois, puis **tant que** la condition est vérifiée, je recommence :

```js
do {
  // ... instructions
} while(condition)
```

## for

[[MDN] for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)

**Pour** chaque nouvelle valeur de ma variable de contrôle de boucle, et ce jusqu'à ce que la condition ne soit plus vérifiée, j'exécute les instructions :

```js
for(var i = 0; i < 3; i++) {
  // ... instructions
}
```

Ici, la variable `i` (comme *increment*) sera incrémentée de 1 à chaque itération, et la condition ré-évaluée à chaque tour de boucle, jusqu'à ce qu'elle ne soit plus vérifiée et que la boucle s'arrête.

## for...in

[MDN for...in](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...in)

**Pour** chaque proprieté **dans** l'objet, j'exécute les instructions :

```js
var fruit = {
  nom: 'fraise',
  couleur: 'rouge'
};

for(var propriete in fruit) {
  console.log('Propriété ' + propriete + ' :');
  console.log('Le fruit est ' + fruit[propriete]);
}

// Affichage obtenu en console :
//
// Propriété nom :
// Le fruit est fraise
// Propriété couleur :
// Le fruit est rouge
```

## for...of

[MDN for...of](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of)

**Boucle disponible depuis ES6** : vérifiez la [compatibilité navigateur](https://www.caniuse.com/#feat=mdn-javascript_statements_for_of) avant de l'utiliser

**Pour** chaque élément **du** tableau, j'exécute les instructions :

```js
var winners = [
  {name: 'Christian Taylor', distance: 17.86},
  {name: 'Will Claye', distance: 17.76},
  {name: 'Dong Bin', distance: 17.58}
];

console.log('Podium du triple saut hommes, Rio 2016');

for(var athlete of winners) {
  console.log(athlete.name + " avec " + athlete.distance + "m");
}

// Affichage obtenu en console :
//
// Podium du triple saut hommes, Rio 2016
// Christian Taylor avec 17.86m
// Will Claye avec 17.76m
// Dong Bin avec 17.58m
```

NB : la boucle `for...of` ne fonctionne pas avec les objets. [Explications ici](../culture-dev/iter-vs-enum.md)

## Instructions de contrôle de boucle

Deux instructions sont disponibles dans toutes les boucles et permettent d'en contrôler le fonctionnement :
- Il est possible d'interrompre une boucle avec l'instruction `break;`.
- Il est possible d'interrompre **l'itération courante** et de passer à la suivante avec l'instruction `continue;`.