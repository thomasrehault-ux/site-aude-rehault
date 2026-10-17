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
- Adresse e-mail retenue : contact@auderehault.fr, boîte créée et active chez OVH ; test de fonctionnement confié à Thomas.
- Domaine définitif : `auderehault.fr`, identique au site actuel.
- Pays d’obtention du titre de psychologue : France.
- Aucun numéro de TVA intracommunautaire, selon confirmation de Thomas. Aucune déduction sur le régime d’exonération.

## Informations confirmées et suivi

- Organisme confirmé par Thomas : Agence régionale de santé (ARS) des Pays de la Loire. Référence ajoutée : article 44 de la loi n° 85-772 du 25 juillet 1985, avec lien vers la présentation officielle du ministère.
- Boîte OVH créée et active. Thomas prend en charge ultérieurement le test réel de réception et d’envoi.
- L’hébergeur est désormais préparé pour Cloudflare Pages à la racine ; l’aperçu sous le sous-répertoire GitHub conserve ses coordonnées GitHub. Coordonnées Cloudflare vérifiées : Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis, +1 650 319 8930 ([source officielle](https://www.cloudflare.com/privacypolicy/)). L’ARS des Pays de la Loire est confirmée et l’adresse e-mail est publiée à la demande de Thomas.

## Proposition d’adresse e-mail

Adresse retenue par Thomas : `contact@auderehault.fr`, créée dans une boîte Zimbra Starter de 15 Gio, active chez OVH. Les diagnostics MX/SPF/SRV/DKIM sont tous « Configuration OK ». Thomas demande explicitement de publier l’adresse et de lui laisser le test de réception/envoi pour plus tard. Le lien `mailto:` est donc publié sans affirmer qu’un échange réel a été testé.

La création effective de la boîte ou d’un alias nécessite le domaine et l’accès au service de messagerie. Aucun service de messagerie n’est configuré dans ce dépôt.

Le domaine a été validé par CNAME et les MX, SPF, SRV, DKIM et DMARC sont maintenant configurés dans Cloudflare pour OVH. Le détail et les vérifications figurent dans `docs/mise-en-ligne.md`.

Le site est désormais déployé sur Cloudflare Pages avec le domaine de production `auderehault.fr`. L’aperçu GitHub Pages est conservé séparément.

## État de la page

La mention « Version en préparation » et l’adresse proposée ont été remplacées par les informations confirmées et le lien de contact. La page conserve `noindex, follow`, car elle présente des informations administratives ; l’accueil reste indexable.

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
