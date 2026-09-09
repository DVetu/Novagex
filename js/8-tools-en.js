if (typeof PageContent === 'undefined') PageContent = {};
PageContent.EN = {
  PageTitle:          'Tools',

  ToolsImage:         'img/08-tools-en.jpg',

  Overview:           '<strong>Tools</strong> allows an administrator to:<br>' +                                                                      
                      ' - create a backup (highly recommended since mishandling could lead to data loss).<br>' +                            
                      ' - modify the data in selected fields (like correcting the spelling of a city).<br>' +                   
                      'This is an essential feature to keep the data clean... but I admit a little dangerous. Use it with extra care !',
                      
  OverviewNote:       'As data is entered errors will be made.<br>' + 
                      'For example, cities will be spelled in different ways (I am thinking of the famous Saint-Jérôme).<br>' + 
                      'This makes it impossible to efficiently filter data when running a report.<br>' + 
                      'From time to time a little maintenance is essential.',

  AdminNotice:        'This screen is available to administrators only.<br>' + 
                      'Standard users cannot open it — the card on the Dashboard appears dimmed.',
                      
  Intro:              'The most common maintenance is about correcting city names.<br>' +  
                      'You will surely see a lot of Saint, Sainte, Saint-, Sainte-, St-, Ste-, and other variations.<br>' + 
                      'Using a standardized approach is paramount.<br>' + 
                      'We recommend that you always use St- and Ste-',

  HeadingBackup:      'Backup',
  LabelBackupBtn:     'Backup button',
  BackupBtn:          'Creates a backup copy of the database.',

  HeadingFindReplace: 'Find & Replace',
  LabelSearchIn:      'Search In',
  SearchIn:           'Selects the table to search in.',
  LabelColumn:        'Column',
  Column:             'Selects the column within the chosen table to search.',
  LabelFind:          'Find',
  Find:               'The value to search for in the selected column.',
  LabelReplaceWith:   'Replace With',
  ReplaceWith:        'The value that will replace each occurrence found.',
  LabelResultsGrid:   'Results grid',
  ResultsGrid:        'Displays the rows matching the current search criteria.',
  LabelClearBtn:      'Clear button',
  ClearBtn:           'Clears the Find and Replace With fields.',
  LabelReplaceBtn:    'Replace button',
  ReplaceBtn:         'Executes the replacement on all rows shown in the results grid.',
  LabelLanguageBtn:   'Language button',
  LanguageBtn:        'Switches the interface language between English and French.',
  LabelExitBtn:       'Exit button',
  ExitBtn:            'Closes the Tools window and returns to the Dashboard.',

};
