# Fabrique du Génie — Aides & partenaires

Plateforme web de qualification des porteurs de projet et d’orientation vers un plan de financement actionnable. Le projet combine un questionnaire multi-critères, un moteur de correspondance explicable, un référentiel d’aides et de partenaires, ainsi qu’un registre de sources avec provenance et date de vérification.

## Fonctionnalités disponibles

L’interface permet de filtrer un projet par territoire, stade, forme juridique, secteur, type d’opportunité, code NAF, effectif, budget, besoin prioritaire, public bénéficiaire, situation d’emploi, âge et indicateurs d’innovation, de transition et d’impact. Les résultats affichent une pertinence estimée, un état d’action, un niveau d’urgence, les critères non confirmés, la source officielle et le partenaire à contacter.

Le référentiel initial couvre les subventions, exonérations, prêts d’honneur, garanties, aides territoriales, appels à projets, mécénat, fondations, réseaux d’investisseurs et concours. L’administration MVP permet d’ajouter, modifier et archiver localement des fiches avec URL officielle, date de vérification et état temporel.

## Installation locale

```bash
pnpm install
pnpm check
pnpm vitest run
pnpm dev
```

Le projet utilise React, Vite, Tailwind, Express, tRPC, Drizzle et Vitest. Le serveur ne doit pas être lancé avec un port codé en dur en production.

## Variables d’environnement

Copier `.env.example` vers `.env` en environnement local. Ne jamais committer les valeurs réelles. Les identifiants Aides-Entreprises doivent rester côté serveur :

```text
AIDES_ENTREPRISES_ID=
AIDES_ENTREPRISES_KEY=
AIDES_TERRITOIRES_API_TOKEN=
```

Les valeurs peuvent être utilisées pour appeler l’API Aides-Entreprises avec les headers `X-Aidesentreprises-Id` et `X-Aidesentreprises-Key`. Le dépôt contient uniquement les noms de variables, les tests de contrat et la documentation ; aucun secret n’est inclus.

## Sources et données

Le registre `shared/sourceRegistry.ts` contient les sources auditées, leur URL officielle, leur couverture, leur méthode d’accès, leurs formats et leur date de vérification. Les notes d’audit sont conservées dans `sources_api_notes.md`.

Les principales sources référencées sont Aides-Entreprises, son export open data data.gouv.fr, Aides Territoires, Data.Subvention, associations.gouv.fr, Service-Public.fr, Anah / France Rénov’, Justice.fr, les aides à la mobilité électrique, la Fondation de France, Admical, la DRAC Occitanie, Occitanie Angels et le Concours Talents BGE documenté par Bpifrance Création.

L’export public de secours Aides-Entreprises est documenté à l’adresse suivante : `https://data.cquest.org/dge_aides_entreprises/aides.json`. Son téléchargement doit être effectué côté serveur, avec traitement par lots et contrôle de taille. Il ne doit pas être chargé directement dans le navigateur.

## Synchronisation

`server/sourceSync.ts` fournit une inspection manuelle contrôlée de l’export public : requête HEAD, timeout, statut HTTP, date de vérification et erreur explicite. La synchronisation automatique, la persistance en base et le journal d’exécution doivent être ajoutés avant un usage de production à grande échelle. Aucun mécanisme ne doit contourner une authentification, un quota ou les conditions de réutilisation d’une source.

## Limites et conformité

Les scores sont des estimations d’orientation et ne constituent pas une décision d’éligibilité. Les conditions non confirmées doivent rester visibles et l’organisme financeur demeure seul compétent pour confirmer l’aide. Les règles de chaque source et les licences doivent être vérifiées avant republication de données détaillées.

Les sujets juridiques, fiscaux, comptables et financiers réglementés doivent être validés par les professionnels compétents. Les pages destinées aux particuliers, comme l’aide juridictionnelle ou certaines aides de l’Anah, doivent être séparées du financement des entreprises dans les évolutions du référentiel.

## Tests

La suite actuelle couvre le scoring, l’authentification de l’API Aides-Entreprises, la cohérence du registre de sources et le service de synchronisation. Avant toute évolution, exécuter `pnpm check && pnpm vitest run`.

## Réutilisation

Ce dépôt peut servir de base à un fork ou à une intégration dans un autre projet. Pour un déploiement public, remplacer la conservation locale de l’administration par une base de données avec authentification et rôles, ajouter une journalisation des synchronisations et faire relire les conditions de licence ainsi que les mentions réglementaires.
