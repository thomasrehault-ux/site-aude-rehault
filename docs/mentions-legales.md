# Mentions légales : préparation

Page : `/mentions-legales/`, accessible depuis le pied de page de l’accueil et de la page elle-même.

## Informations transmises par Thomas le 17 octobre 2026

- Aude Réhault, entreprise individuelle.
- SIREN : 530 360 908.
- Domiciliation : 6 et 7 rue des Rochettes, 44000 Nantes.
- Téléphone : 07 83 11 25 05.
- Directrice de publication : Aude Réhault.
- SIRET : 530 360 908 00020 (fourni : `53036090800020`).
- RPPS : 10009472159.
- Adresse e-mail : à créer auprès du prestataire de messagerie.
- Domaine définitif : `auderehault.fr`, identique au site actuel.
- Pays d’obtention du titre de psychologue : France.
- Aucun numéro de TVA intracommunautaire, selon confirmation de Thomas. Aucune déduction sur le régime d’exonération.

## Informations à confirmer pour finaliser la page

- Organisme d’enregistrement et références professionnelles applicables.
- Prestataire d’hébergement définitif et création de l’adresse de contact dans la messagerie IONOS.
- L’hébergeur est désormais préparé pour Cloudflare Pages à la racine ; l’aperçu sous le sous-répertoire GitHub conserve ses coordonnées GitHub. Coordonnées Cloudflare vérifiées : Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis, +1 650 319 8930 ([source officielle](https://www.cloudflare.com/privacypolicy/)). La création de l’adresse e-mail et les informations professionnelles en attente restent à finaliser.

## Proposition d’adresse e-mail

Proposition : `contact@auderehault.fr`, sur le domaine confirmé par Thomas. La page présente cette adresse comme une proposition à créer. Ne pas publier de lien `mailto:` avant que l’adresse existe et que la réception ait été vérifiée.

La création effective de la boîte ou d’un alias nécessite le domaine et l’accès au service de messagerie. Aucun service de messagerie n’est configuré dans ce dépôt.

Les enregistrements DNS publics consultés le 17 octobre 2026 indiquent `mx00.ionos.fr` et `mx01.ionos.fr` comme serveurs MX. Thomas confirme que la boîte `contact@auderehault.fr` n’existe pas encore. Elle reste à créer et à tester dans le compte IONOS qui gère la messagerie du domaine.

La confirmation du domaine ne modifie pas la configuration Astro ni le DNS : l’aperçu reste hébergé sur GitHub Pages, et la bascule du domaine sera préparée lors de la mise en ligne.

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
- Après les précisions de Thomas : code postal, pays d’obtention du titre, absence de numéro de TVA et proposition d’adresse sur `auderehault.fr` intégrés ; nouvelle compilation et contrôle du diff réussis.
- SIRET et RPPS transmis par Thomas intégrés ; nouvelle compilation et contrôle du diff réussis.
