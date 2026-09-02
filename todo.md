# Project TODO

- [x] Parcours de qualification MVP : territoire, activité/NAF, stade, forme juridique, effectif, budget, besoins et profil du porteur avec indicateurs innovation, transition et impact
- [x] Filtres rapides de base : territoire, secteur, type d’aide, maturité et forme juridique ; extensions public, taille, innovation, écologie, impact social, emploi, investissement et urgence à compléter
- [x] Référentiel initial structuré des aides et financements avec sources officielles et date de vérification
- [x] Référentiel initial des partenaires mobilisables avec liens officiels, rôle et territoire
- [x] Moteur de correspondance explicable : éligibilité estimée, pertinence, échéance, territoire et critères non confirmés
- [x] Plan de financement recommandé : maintenant, à préparer, interlocuteurs à contacter
- [x] Fiches actionnables avec organisme, avantage, calendrier, territoire, lien officiel, conditions non confirmées et date de vérification
- [x] Interface d’administration MVP : visualisation, archivage local, date et source ; formulaire sécurisé et persistance serveur à compléter
- [x] Jeu initial de dispositifs et partenaires vérifiables pour Montauban, Tarn-et-Garonne, Occitanie et France
- [x] Tests Vitest du moteur de correspondance et des procédures existantes
- [x] Vérification visuelle de l’application sur navigateur desktop
- [x] Documentation des limites : outil d’aide à l’orientation, éligibilité finale à confirmer auprès de l’organisme

## Historique

- [x] Initialisation du projet fabrique-aides
- [x] Recherche initiale des sources d’aides publiques et partenaires
- [x] Nouvelle demande : plateforme complète de qualification et recommandation de financement

- [x] Intégrer l’échéance au moteur de scoring et expliquer l’urgence
- [x] Ajouter une section dédiée aux interlocuteurs à contacter dans le plan recommandé
- [x] Remplacer le bouton admin placeholder par un vrai formulaire d’ajout/édition et afficher la source officielle
- [x] Ajouter un annuaire distinct de partenaires avec un premier périmètre Montauban / Grand Montauban
- [x] Afficher un indicateur d’urgence explicite et expliquer son impact sur le score
- [x] Ajouter une vraie fonction d’édition dans l’administration
- [x] Créer une vue dédiée d’annuaire des partenaires
- [x] Expliquer dans l’interface que l’urgence influence le classement
- [x] Structurer les échéances MVP avec un état temporel dérivé : urgence immédiate, à préparer prochainement, veille calendrier
- [x] Compléter les champs d’édition admin et corriger la structure du tableau
- [x] Ajouter des champs détaillés MVP de qualification du porteur : statut/public, situation d’emploi, âge, besoins, NAF, effectif, budget et indicateurs de projet
- [x] Ajouter date de vérification et référentiel distinct de partenaires ; gestion d’administration partenaire avancée à prévoir en V2
- [x] Remplacer le classement primaire par un champ d’urgence structuré MVP, affiché et pris en compte dans le score ; calendrier de dates exactes à prévoir en V2
- [x] Porter urgencyLevel nativement dans chaque dispositif et supprimer le parsing deadline
- [x] Permettre l’édition de urgencyLevel dans l’administration
- [x] Tester que le scoring utilise urgencyLevel indépendamment de deadline

- [x] Auditer le premier périmètre des URL fournies : API Aides-Entreprises, export data.gouv, Aides Territoires, Data.Subvention, associations.gouv, Service-Public, Anah et Justice
- [x] Ajouter au référentiel un premier périmètre de sources entreprises, associations, particuliers, énergie/mobilité et justice ; extension exhaustive à prévoir
- [x] Recenser un premier périmètre de fondations, mécénat, concours, business angels, appels à projets et AMI, avec renvoi vers les sources officielles
- [x] Ajouter provenance, date de vérification, méthode d’accès, couverture et statut de synchronisation dans le registre central
- [x] Connecter les accès autorisés : identifiants Aides-Entreprises côté serveur, test d’authentification et export open data public de secours ; aucune protection contournée
- [x] Prévoir une synchronisation contrôlée MVP par inspection HEAD, timeout, statut HTTP et erreur explicite ; planification automatique et journal admin à prévoir en V2
- [x] Ajouter au sourceRegistry les sources officielles auditées manquantes : associations.gouv, Service-Public, Anah/France Rénov’, Justice et énergie/mobilité
- [x] Ajouter une source officielle ou clairement justifiée pour les concours et l’afficher dans l’administration
- [x] Auditer explicitement le Concours Talents BGE via la fiche institutionnelle Bpifrance Création et documenter son organisateur, son périmètre et sa couverture

- [ ] Vérifier l’accès au dépôt GitHub fourni et son état initial
- [ ] Préparer une version réutilisable du code, du référentiel et de la documentation sans secrets
- [ ] Ajouter un README GitHub avec installation, variables d’environnement, sources et limites
- [ ] Publier dans le dépôt GitHub après autorisation explicite et vérifier le contenu publié
