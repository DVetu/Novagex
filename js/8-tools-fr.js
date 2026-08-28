if (typeof PageContent === 'undefined') PageContent = {};
PageContent.FR = {
  PageTitle:          'Outils',

  Overview:           'Les <strong>Outils</strong> permettent à un administrateur de :<br>' +
                      ' - créer une sauvegarde (fortement recommandé, car une mauvaise manipulation pourrait entraîner une perte de données).<br>' +
                      ' - modifier les données dans certains champs sélectionnés (comme corriger l\'orthographe d\'une ville).<br>' +
                      'C\'est une fonction essentielle pour garder les données propres... mais je l\'admets, un peu dangereuse. Utilisez-la avec une extrême précaution !',

  OverviewNote:       'À mesure que les données sont saisies, des erreurs se produiront.<br>' +
                      'Par exemple, les villes seront orthographiées de différentes façons (comme le célèbre Saint-Jérôme).<br>' +
                      'Cela rend impossible le filtrage efficace des données lors de l\'exécution d\'un rapport.<br>' +
                      'De temps à autre, un peu d\'entretien est recommandé.',

  AdminNotice:        'Cet écran est accessible aux administrateurs uniquement.<br>' +
                      'Les utilisateurs standard ne peuvent pas l\'ouvrir — la carte sur le tableau de bord apparaît grisée.',

  Intro:              'L\'entretien le plus courant concerne la correction des noms de villes.<br>' +
                      'Vous verrez sûrement beaucoup de Saint, Sainte, Saint-, Sainte-, St-, Ste-, et d\'autres variantes.<br>' +
                      'Il est primordial d\'utiliser une approche normalisée.<br>' +
                      'Nous recommandons d\'utiliser toujours St- et Ste-.',

  HeadingBackup:      'Sauvegarde',
  LabelBackupBtn:     'Bouton Sauvegarde',
  BackupBtn:          'Crée une copie de sauvegarde de la base de données.',

  HeadingFindReplace: 'Rechercher & Remplacer',
  LabelSearchIn:      'Rechercher dans',
  SearchIn:           'Sélectionne la table dans laquelle effectuer la recherche.',
  LabelColumn:        'Colonne',
  Column:             'Sélectionne la colonne dans la table choisie pour effectuer la recherche.',
  LabelFind:          'Rechercher',
  Find:               'La valeur à rechercher dans la colonne sélectionnée.',
  LabelReplaceWith:   'Remplacer par',
  ReplaceWith:        'La valeur qui remplacera chaque occurrence trouvée.',
  LabelResultsGrid:   'Grille des résultats',
  ResultsGrid:        'Affiche les lignes correspondant aux critères de recherche actuels.',
  LabelClearBtn:      'Bouton Effacer',
  ClearBtn:           'Efface les champs Rechercher et Remplacer par.',
  LabelReplaceBtn:    'Bouton Remplacer',
  ReplaceBtn:         'Exécute le remplacement sur toutes les lignes affichées dans la grille des résultats.',
  LabelLanguageBtn:   'Bouton de langue',
  LanguageBtn:        'Bascule la langue de l\'interface entre l\'anglais et le français.',
  LabelExitBtn:       'Bouton Quitter',
  ExitBtn:            'Ferme la fenêtre Outils et retourne au tableau de bord.',

};
