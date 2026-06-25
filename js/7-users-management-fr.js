if (typeof PageContent === 'undefined') PageContent = {};
PageContent.FR = {
  PageTitle:        'Gestion des utilisateurs',

  AdminNotice:      'Cet écran est accessible aux administrateurs uniquement.<br>' +
                    'Les utilisateurs standard ne peuvent pas l\'ouvrir — la carte sur le tableau de bord apparaît grisée.',
  Intro:            'La Gestion des utilisateurs permet à un administrateur de créer et de gérer les comptes utilisateurs. Sélectionnez un utilisateur dans la grille pour charger ses informations dans les champs, puis modifiez et sauvegardez.',

  HeadingUserInfo:  'Informations de l\'utilisateur',
  HeadingControls:  'Contrôles',

  LabelNew:         'Bouton Nouveau',
  New:              'Efface tous les champs pour vous permettre de saisir un nouveau compte utilisateur.',

  LabelLanguageBtn: 'Bouton de langue',
  LanguageBtn:      'Bascule la langue de l\'interface entre l\'anglais et le français.',

  LabelUserID:      'ID Utilisateur',
  UserID:           'Un numéro unique attribué automatiquement par StorageFlow. Vous ne pouvez pas modifier ce champ.',

  LabelFullName:    'Nom complet',
  FullName:         'Le nom affiché dans la barre de statut et sur les rapports. Ne doit pas nécessairement correspondre au nom de connexion.',

  LabelLoginName:   'Nom de connexion',
  LoginName:        'Le nom que l\'utilisateur saisit à l\'écran de connexion. Doit être unique parmi tous les comptes.',

  LabelPassword:    'Mot de passe',
  Password:         'Le mot de passe de l\'utilisateur. Saisissez une nouvelle valeur pour le définir ou le modifier.',

  LabelHint:        'Indice de mot de passe',
  Hint:             'Une phrase de rappel affichée lorsque l\'utilisateur clique sur Indice à l\'écran de connexion.',

  LabelLanguage:    'Langue',
  Language:         'La langue d\'interface préférée de l\'utilisateur (anglais ou français), chargée automatiquement à sa connexion.',

  LabelNote:        'Note',
  Note:             'Un champ texte libre pour les notes administratives sur ce compte.',

  LabelRole:        'Rôle',
  Role:             'Contrôle les accès de l\'utilisateur. Administrateur — accès complet, incluant la Gestion des utilisateurs. Laissez vide pour un utilisateur standard.',

  LabelGrid:        'Grille des utilisateurs',
  Grid:             'Liste tous les comptes utilisateurs, à l\'exception du compte Admin intégré. Cliquez sur une ligne pour charger les informations de cet utilisateur dans les champs ci-dessus.',

  LabelDelete:      'Bouton Supprimer',
  Delete:           'Supprime définitivement le compte utilisateur sélectionné. Une confirmation vous sera demandée. Le compte actuellement connecté ne peut pas être supprimé.',

  LabelSave:        'Bouton Sauvegarder',
  Save:             'Sauvegarde les modifications du compte sélectionné, ou crée un nouveau compte si <strong>Nouveau</strong> a été cliqué.',

  LabelExit:        'Bouton Quitter',
  Exit:             'Ferme la Gestion des utilisateurs et retourne au tableau de bord.',
};
