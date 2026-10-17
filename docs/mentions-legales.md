# Mentions légales : préparation

Page : `/mentions-legales/`, accessible depuis le pied de page de l’accueil et de la page elle-même.

## Informations transmises par Thomas le 17 octobre 2026

- Aude Réhault, entreprise individuelle.
- SIREN : 530 360 908.
- Domiciliation : 6 et 7 rue des Rochettes, Nantes.
- Téléphone : 07 83 11 25 05.
- Directrice de publication : Aude Réhault.
- SIRET et RPPS : à définir.
- Adresse e-mail : à créer auprès du prestataire de messagerie.

## Informations à confirmer pour finaliser la page

- Code postal de la domiciliation, sans le déduire de la seule ville.
- SIRET et RPPS exacts, puis organisme d’enregistrement et références professionnelles applicables.
- Pays d’obtention du titre de psychologue.
- Numéro de TVA intracommunautaire, s’il est applicable. Aucune exonération supposée.
- Domaine définitif, prestataire d’hébergement et prestataire de messagerie.
- Coordonnées complètes de l’hébergeur définitif, notamment son numéro de téléphone. La page décrit l’hébergement GitHub Pages configuré dans le dépôt.

## Proposition d’adresse e-mail

Proposition : `contact@aude-rehault.fr`, si `aude-rehault.fr` est le domaine retenu et détenu par Aude. Sinon, conserver `contact@` sur son domaine effectif. Aucun domaine n’a été fourni ni constaté dans la configuration du dépôt ; sa disponibilité n’a pas été vérifiée. Ne pas publier de lien `mailto:` avant que l’adresse existe et que la réception ait été vérifiée.

La création effective de la boîte ou d’un alias nécessite le domaine et l’accès au service de messagerie. Aucun service de messagerie n’est configuré dans ce dépôt.

## État du brouillon

La page affiche « Version en préparation » et indique les informations manquantes. Elle porte `noindex, follow` tant que les informations ne sont pas confirmées. La branche et la PR permettent de relire le résultat avant publication sur `main`.

La politique de confidentialité reste un sujet distinct : le site charge des polices Google et intègre un lecteur YouTube. Ne pas affirmer que le site n’utilise aucun service tiers ou ne traite aucune donnée personnelle.

## Références consultées le 17 octobre 2026

- [Mentions obligatoires sur le site internet d’une entreprise, Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F37351) : identité EI, coordonnées, identification, TVA si applicable, directrice de publication, hébergeur et informations de profession réglementée.
- [Coordonnées de GitHub, politique de confidentialité](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#contact-us) : identité et adresse de GitHub, Inc.

## Vérifications

- `npm run build` : réussi.
- `git diff --check` : réussi.
- Vérification des fichiers HTML construits : un seul titre principal par page, 25 liens sur l’accueil et 12 sur les mentions légales, destinations internes et ancres valides.
- Identité, lien téléphonique, absence d’adresse e-mail fictive et statut de brouillon vérifiés dans le HTML produit.
- Aperçu local : rendu contrôlé à 1280 px, ouverture depuis le pied de page et retour à l’accueil vérifiés dans le navigateur.
- Contrôle visuel à 375 px non effectué : l’interface de navigation disponible ne propose pas de réglage de la largeur. Les styles prévoient une présentation sur une colonne sous 520 px.
- Les fichiers locaux non suivis de propositions graphiques ne font pas partie de cette modification.
