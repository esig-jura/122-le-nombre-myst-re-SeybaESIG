/**
 * Jeu du nombre mystère
 * @author  Seyba Tandia
 * @version 2.0
 * @since   2025-03-25 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const MIN = 50;
const MAX = 150;

/**
 * Fonction principale
 * @returns {void}
 * @param min
 * @param max
 */
 function deviner(min, max) {
     let nombreMystere = tireNombre(min, max);
     let tentatives = 1;
     let nombreSaisi;

     nombreSaisi = parseInt(prompt(`Entrez un nombre entre ${MIN} et ${MAX}`));

     // Tant que le nombre saisi est différent du nombre mystère
     while (nombreSaisi !== nombreMystere){
         tentatives++;
         if (nombreSaisi < nombreMystere){
             nombreSaisi = parseInt(prompt(`Plus grand!`));
         } else {
             nombreSaisi = parseInt(prompt(`Plus petit!`));
         }
     }

     alert(`Bravo! Vous avez trouvé le nombre mystère ${nombreMystere} en ${tentatives} tentatives!`);
 }


 deviner();