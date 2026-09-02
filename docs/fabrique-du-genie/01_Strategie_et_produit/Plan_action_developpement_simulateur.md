# Plan d’action — Développement du simulateur de business plan automatisé

**Projet :** Fabrique du Génie  
**Produit :** simulateur français de business plan automatisé, explicable et orienté décision  
**Version :** 1.0 — septembre 2026

## 1. Ambition et positionnement

Le produit doit transformer une idée d’entreprise en prévisionnel financier cohérent, compréhensible et testable. L’utilisateur décrit son projet en langage simple ; la plateforme structure ses hypothèses, calcule les conséquences financières, signale les incohérences, permet de comparer plusieurs scénarios et génère un dossier exploitable par le porteur de projet, le conseiller, l’expert-comptable ou le financeur.

Le principe directeur est de séparer strictement **l’interrogation**, **le calcul** et **la rédaction**. L’intelligence artificielle pourra proposer, reformuler et expliquer, mais le moteur financier devra rester déterministe, traçable et testable.

## 2. Priorités stratégiques

| Priorité | Décision |
|---|---|
| 1 | Commencer par un moteur financier fiable avant de développer la génération de texte |
| 2 | Concevoir une expérience débutant avec un mode expert progressivement accessible |
| 3 | Adapter les règles au contexte français : TVA, charges sociales, fiscalité paramétrable, financement et formes juridiques |
| 4 | Rendre chaque hypothèse modifiable, sourcée, datée et accompagnée d’un niveau de confiance |
| 5 | Prévoir dès le départ les scénarios prudent, central et ambitieux |
| 6 | Construire une architecture compatible avec l’accompagnement par des conseillers et partenaires |
| 7 | Transformer progressivement le business plan en outil de pilotage plan/réel |

## 3. Feuille de route en six phases

### Phase 0 — Cadrage et validation du besoin

**Durée indicative :** 2 semaines.  
**Objectif :** confirmer le segment prioritaire et éviter de construire un outil trop large.

Les premiers entretiens doivent concerner des porteurs de projet de la Fabrique du Génie, des conseillers, des experts-comptables et des financeurs locaux. Il faut documenter les situations d’usage les plus fréquentes : création d’activité, reprise, micro-entreprise, société de services, commerce, restauration, activité de formation et activité numérique.

**Livrables :** personas, parcours actuel, liste des irritants, 10 à 15 cas d’usage représentatifs, définition du segment MVP et grille d’acceptation.

**Critère de sortie :** au moins trois profils confirment que l’outil répond à un problème concret et acceptent de tester un prototype.

### Phase 1 — Spécifications fonctionnelles et réglementaires

**Durée indicative :** 3 semaines.  
**Objectif :** formaliser les règles métier, les sorties financières et les limites de responsabilité.

Le périmètre fonctionnel doit couvrir l’offre, les clients, les ventes, les charges fixes et variables, les investissements, les stocks éventuels, les financements, les délais de paiement, les effectifs et les hypothèses fiscales/sociales. Les sorties minimales sont le compte de résultat, le plan de trésorerie, le bilan, le plan de financement, le BFR, le seuil de rentabilité, les ratios principaux et les scénarios.

La plateforme doit distinguer le conseil entrepreneurial général de la formation professionnelle, de la domiciliation, du conseil juridique personnalisé, de la tenue comptable et du conseil en investissement. Si Fabrique du Génie vend des formations professionnelles, la déclaration d’activité devra être étudiée ; Qualiopi sera à prévoir si l’accès à des fonds publics ou mutualisés est recherché. La domiciliation commerciale nécessite un examen séparé et, le cas échéant, un agrément préfectoral.

**Livrables :** cahier des charges, dictionnaire des données, règles de calcul validées, matrice des responsabilités, mentions utilisateurs, politique de sources et registre des risques.

**Critère de sortie :** validation du modèle par un expert-comptable partenaire et revue juridique des parcours sensibles.

### Phase 2 — Prototype UX et modèle de données

**Durée indicative :** 4 semaines.  
**Objectif :** tester la simplicité avant de développer l’ensemble du moteur.

Le prototype doit commencer par une description libre du projet, puis guider l’utilisateur vers les hypothèses essentielles. Chaque question doit expliquer pourquoi elle est posée et montrer son impact sur le résultat. L’interface doit proposer deux niveaux : un parcours simplifié et un mode expert permettant d’ouvrir les formules, les détails mensuels et les paramètres avancés.

Le modèle de données doit séparer les projets, versions, hypothèses, sources, règles, scénarios, résultats calculés, commentaires et utilisateurs. Une modification d’hypothèse doit créer une trace et permettre de revenir à une version antérieure.

**Livrables :** maquettes, prototype cliquable, architecture des données, parcours d’onboarding, tests utilisateurs et backlog priorisé.

**Critère de sortie :** un utilisateur cible produit un premier scénario sans aide technique et comprend les principales alertes.

### Phase 3 — MVP financier déterministe

**Durée indicative :** 8 à 12 semaines.  
**Objectif :** livrer le premier produit utile, sans dépendre de la génération narrative IA.

Le MVP doit intégrer un modèle de revenus par produit, service, canal ou segment ; les coûts fixes et variables ; les investissements ; les emprunts ; les apports ; les délais d’encaissement et de paiement ; les salariés et charges associées ; les scénarios central, prudent et ambitieux ; ainsi que les contrôles de cohérence.

Le moteur doit calculer mensuellement puis agréger annuellement sur trois à cinq ans. Il doit vérifier l’équilibre du bilan, la correspondance entre résultat et trésorerie, la cohérence des financements, le besoin de trésorerie et les valeurs manquantes. Chaque résultat doit pouvoir remonter à l’hypothèse source.

**Livrables :** moteur financier, API de calcul, bibliothèque de règles françaises, tableaux de bord, contrôles automatiques, export PDF initial et suite de tests.

**Critère de sortie :** 100 % des cas de test financiers critiques passent ; aucun bilan ne reste déséquilibré sans alerte explicite.

### Phase 4 — IA contrôlée et dossier de business plan

**Durée indicative :** 6 à 8 semaines.  
**Objectif :** automatiser les tâches rédactionnelles sans rendre les résultats opaques.

L’assistant doit poser des questions complémentaires, reformuler le projet, proposer des hypothèses clairement identifiées, expliquer les anomalies et générer les sections du business plan à partir des données validées. Toute donnée externe doit conserver sa source, sa date et son périmètre. Le texte doit se régénérer lorsque les chiffres changent, sans divergence entre le récit et les tableaux.

**Livrables :** assistant conversationnel, résumé exécutif, étude de marché sourcée, business model canvas, dossier complet, exports PDF/Word/Excel et journal des sources.

**Critère de sortie :** revue humaine positive sur la cohérence chiffres/récit et absence d’hypothèse non signalée.

### Phase 5 — Collaboration, partenaires et suivi plan/réel

**Durée indicative :** 8 à 10 semaines.  
**Objectif :** faire du produit un outil d’incubation et de pilotage.

Les rôles recommandés sont porteur de projet, conseiller, expert-comptable et financeur invité. Il faut intégrer commentaires, validations par étape, historique des versions, liens protégés et droits d’accès. Une seconde boucle doit permettre l’import des résultats réels, la comparaison avec le plan et la révision guidée des hypothèses.

**Livrables :** espace multi-acteurs, permissions, suivi plan/réel, alertes d’écart, espace partenaire, version white-label et procédures d’accompagnement.

**Critère de sortie :** un conseiller suit plusieurs projets et identifie rapidement les écarts critiques sans modifier directement les hypothèses du porteur de projet.

## 4. Architecture recommandée

| Module | Responsabilité |
|---|---|
| Collecteur d’hypothèses | Questions, réponses libres, formulaires et validation utilisateur |
| Moteur financier | Calculs déterministes, scénarios, agrégations et contrôles |
| Bibliothèque française | Paramètres sectoriels, règles TVA/sociales/fiscales et sources datées |
| Assistant IA | Questions, reformulation, explication et rédaction contrôlée |
| Générateur documentaire | PDF, Word, Excel, résumé financeur et version imprimable |
| Collaboration | Utilisateurs, rôles, commentaires, validations et historique |
| Suivi plan/réel | Import de données, écarts, alertes et mises à jour |

## 5. Backlog MVP priorisé

| Niveau | Fonctionnalités |
|---|---|
| Indispensable | Création de projet, questionnaire guidé, revenus, charges, investissements, financements, trésorerie, compte de résultat, seuil de rentabilité, trois scénarios, contrôles, export PDF |
| Important | Bilan, BFR, plan de financement, mensualisation détaillée, hypothèses sourcées, mode expert, export Excel, partage sécurisé |
| Différenciant | Sensibilité automatique, benchmark français, assistant IA contrôlé, résumé exécutif, collaboration conseiller, historique |
| Post-MVP | Plan/réel, connecteurs comptables, white-label, consolidation, API partenaires, pitch deck et scoring de robustesse |

## 6. Organisation du projet

| Rôle | Responsabilité |
|---|---|
| Product owner Fabrique du Génie | Vision, arbitrage, validation terrain et relation partenaires |
| Référent financier | Règles de calcul, scénarios, contrôles et validation des états |
| Référent juridique/réglementaire | Conditions d’utilisation, périmètres réservés, formation, données et contrats |
| UX/UI designer | Parcours, pédagogie, tests utilisateurs et accessibilité |
| Développeur full-stack | Application, API, moteur et intégrations |
| Expert IA/data | Prompts, garde-fous, sources, évaluation et supervision |
| Conseillers pilotes | Tests, retours et validation de l’usage en incubation |

## 7. Indicateurs de pilotage

| Domaine | Indicateurs |
|---|---|
| Adoption | Taux d’activation, taux de complétion, temps jusqu’au premier scénario |
| Compréhension | Hypothèses comprises, alertes corrigées, demandes d’aide, satisfaction |
| Fiabilité | Bilans équilibrés, tests passants, cohérence chiffres/récit, erreurs d’export |
| Robustesse | Variables les plus sensibles, trésorerie minimale, scénarios comparés |
| Accompagnement | Projets suivis par conseiller, validations par étape, commentaires résolus |
| Valeur | Dossiers envoyés, décisions prises, financements demandés, mises à jour plan/réel |

## 8. Décisions à prendre immédiatement

La Fabrique du Génie doit choisir un segment de départ, idéalement les créations de petites activités de services et de commerce accompagnées localement. Il faut sélectionner trois secteurs pilotes, désigner un expert-comptable partenaire, décider si les ateliers seront vendus comme conseil ou comme formation professionnelle, et confirmer si une offre de domiciliation est envisagée.

Il faut également choisir le niveau d’automatisation du premier prototype. La recommandation est de commencer avec des hypothèses guidées et des règles déterministes, puis d’ajouter l’IA après validation du moteur financier. Cette séquence réduit le risque de produire des business plans séduisants mais incohérents.

## 9. Risques majeurs et réponses

| Risque | Réponse |
|---|---|
| Hypothèses inventées par l’IA | Marquage obligatoire, validation utilisateur, sources et journal des modifications |
| Erreur de calcul financier | Moteur indépendant, tests unitaires, revue expert-comptable et contrôles d’équilibre |
| Conseil juridique ou comptable non autorisé | Périmètre pédagogique, mentions claires et partenaires habilités |
| Produit trop complexe | Parcours débutant, mode expert masqué au départ et tests fréquents |
| Données sectorielles fragiles | Source, date, périmètre, niveau de confiance et validation humaine |
| Business plan produit une seule fois | Prévoir dès le modèle de données les versions et le suivi plan/réel |
| Communication publique excessive | Ne pas revendiquer d’agrément, de certification ou de garantie sans fondement précis |

## 10. Résultat attendu à douze mois

À douze mois, la Fabrique du Génie doit disposer d’un simulateur utilisé sur des cas réels, capable de produire un prévisionnel français cohérent en moins d’une heure, d’expliquer ses hypothèses, de comparer trois scénarios et de générer un dossier professionnel. La priorité n’est pas de couvrir tous les métiers, mais d’obtenir une qualité démontrable sur quelques secteurs, puis d’étendre progressivement la bibliothèque.

La réussite sera mesurée par la capacité d’un porteur de projet à comprendre ses hypothèses, à corriger les incohérences et à prendre une décision mieux informée, plutôt que par le seul nombre de business plans générés.
