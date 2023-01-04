const infocontent = `<div class="info-tableau">
<h2>Comment fonctionnent les tableaux des temps de référence par Project Reborn ?</h2>
  <p>L'objectif de ces tableaux est de vous proposer une indication de référence de temps en Qualification pour vous jauger. Il ne sont en aucun une référence absolue des temps possibles mais plus un indicateur. 
    <br>
    Pour un temps approximatif en Course comparé à votre niveau en qualification, vous pouvez regarder une colonne vers la droite de votre temps en Qualification. Attention ceci ne représente qu'un ordre d'idée.
  </p>
  <span class="bold">💹 Versions initiales</span>
  <p>Nous effectuons un travail de recherche afin de déterminer le temps "Fastest" en éliminant les temps réalisés dans des conditions jugées aberrantes (température extrêmement froide, aspiration, ...). Notre algorithme s'occupe ensuite de déterminer les temps moins rapides en prenant aussi en compte les différences entre les circuits.
    (Cette méthode est encore utilisé sur les tableaux GT4 et M2 CS)
  </p>
  <span class="bold">🆕 Nouvelle version depuis Décembre 2022 en partenariat avec GO SETUP</span>
  <p>Le temps "Fastest" est maintenant remplacé par le temps "GO". Le temps GO est obtenu en réalisant la moyenne des meilleurs temps réalisés par les ingénieurs de GO SETUP avec l'ensemble des voitures de la catégorie !
    De cette façon nous obtenons un temps plus réaliste grâce à plusieurs facteurs :
    - une piste fixe en température 21/28° permettant d'avoir une comparaison possible entre les voitures !
    - une référence de température fixe pour mesurer la différence de temps envisageable en fonction des températures de votre course !
    - nous ne prenons plus 1 seul temps scratch avec la meilleure voiture du moment, mais la moyenne de 12 GT3, le temps sont donc plus représentatifs !
  </p>	
  <p>L'objectif de ces tableaux n'ayant jamais été de vous proposer la référence des meilleurs temps au monde mais plutôt un indicateur pour vous jauger, nous estimons vous proposer des outils de bien meilleur qualité grâce à notre partenariat avec GO SETUP aujourd'hui !
  </p>
  <a href="https://discord.com/channels/814164890612531221/1058060483703353415/1058061736286093433">Cliquez ici pour accéder au channel</a>
</div>`

document.querySelector('#chronos').innerHTML = infocontent

$(".categorie-list, .categorie-list2").change(function() {
  var selectedValue = $(this).val();
  switch (selectedValue) {
    case "Choix catégorie":
      $("#chronos").html(infocontent);
      break;
    case "GT3":
      $("#chronos").html("<img src='./images/chronos/gt3.webp' class='lbcar' alt='GT3'>");
      break;
    case "GT4":
      $("#chronos").html("<img src='./images/chronos/gt4.webp' class='lbcar' alt='GT4'>");
      break;
    case "Porsche Cup":
      $("#chronos").html("<img src='./images/chronos/pcup.webp' class='lbcar' alt='Porsche Cup'>");
      break;
      case "BMW M2":
      $("#chronos").html("<img src='./images/chronos/m2.webp' class='lbcar' alt='BMW M2'>");
      break;
      case "Lamborghini Super Troféo 2":
      $("#chronos").html("<img src='./images/chronos/st2.webp' class='lbcar' alt='Lamborghini Super Troféo 2'>");
      break;
  }
  // Mettre à jour l'autre sélecteur avec la valeur sélectionnée
  $(".categorie-list, .categorie-list2").not(this).val(selectedValue);
});

  

