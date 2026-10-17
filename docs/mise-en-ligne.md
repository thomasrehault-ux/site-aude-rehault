# Mise en ligne d’Aude Réhault

Préparation le 17 octobre 2026. Objectif : même domaine `auderehault.fr`, hébergement Cloudflare Pages, gestion du domaine chez OVH. La mise en ligne et le transfert du domaine sont deux opérations distinctes.

## Situation relevée

- Thomas confirme que le domaine est encore chez IONOS.
- `http://auderehault.fr/` retourne un frameset IONOS affichant `http://auderehault.wordpress.com/`, pas une redirection HTTP 301.
- Les DNS publics et la messagerie sont ceux d’IONOS.
- L’accès HTTPS au domaine a échoué lors du contrôle initial. Vérifier le nouveau certificat avant de conclure la bascule.
- Le compte Cloudflare connecté contient déjà les autres sites de Thomas ; le dépôt Aude y est accessible.
- `contact@auderehault.fr` n’est pas encore créé selon les notes du projet. Ne pas publier de mailto avant un test de réception.

## Sauvegarde DNS

Le fichier `dns-avant-migration.zone` contient le relevé public du 17 octobre 2026 complété par les 17 enregistrements visibles dans le compte IONOS. `dns-ionos-avant-migration.txt` sauvegarde la table de gestion IONOS ; les deux valeurs TXT tronquées dans cette table ont été complétées par interrogation DNS. Il s’agit d’une sauvegarde manuelle, pas d’un export natif IONOS.

Les MX, SPF, DKIM, DMARC et autodiscover doivent être préservés à l’identique et rester en mode **DNS only** dans Cloudflare. Conserver aussi tous les sous-domaines et vérifications de service de l’export complet. Ne pas basculer les MX vers OVH tant que les boîtes et leur migration ne sont pas prêtes.

Le relevé n’a retourné aucun DS ni CAA. Vérifier néanmoins DNSSEC dans IONOS juste avant le changement de serveurs ; s’il est actif, suivre la procédure de migration Cloudflare pour éviter un DS incompatible.

## Ordre de bascule

1. Construire et vérifier le site sur `site-aude-rehault.pages.dev`, avec les modifications de cette branche.
2. Compléter les mentions légales : nouvel hébergeur, e-mail opérationnel et informations professionnelles en attente. Le noindex des mentions ne remplace pas cette finalisation.
3. Ajouter `auderehault.fr` comme zone Cloudflare, formule Free. Importer et comparer **l’export complet IONOS**, en conservant initialement les adresses du site actuel.
4. Associer `auderehault.fr` au projet Pages via **Custom domains**, puis contrôler le CNAME créé par Cloudflare. Écarter les anciens A/AAAA web conflictuels au moment de la bascule ; conserver leur copie dans la sauvegarde. Ne pas seulement ajouter un CNAME sans déclarer le domaine dans Pages.
5. Remplacer les serveurs DNS chez IONOS par **les deux valeurs exactes attribuées à cette zone par Cloudflare**. Aucun nom de serveur ne doit être inventé. Le transfert OVH peut suivre la mise en ligne.
6. Configurer une redirection permanente de `www.auderehault.fr/*` vers `https://auderehault.fr/*` dans Cloudflare, en conservant le chemin et les paramètres. Cette redirection de domaine ne relève pas du fichier Pages `_redirects`.
7. Attendre la zone active et le certificat valide. Vérifier HTTP → HTTPS, www → domaine principal, accueil, mentions, ressources, robots, sitemap, redirections anciennes et vraie réponse 404.
8. Vérifier la messagerie entrante et sortante et les MX/SPF/DKIM/DMARC. Conserver les validations DNS de Search Console et soumettre le nouveau sitemap après la bascule.
9. Une fois le domaine fonctionnel, rediriger aussi le sous-domaine principal `pages.dev` vers le domaine canonique avec une Bulk Redirect.

Ne pas supprimer l’ancien site ni résilier les services IONOS tant que le site, le domaine et les éventuelles boîtes mail ne sont pas vérifiés.

## Référencement et ancien WordPress

Le domaine est conservé, mais la migration change le contenu et les URL. Aucun maintien exact des positions ne peut être garanti.

Le sitemap WordPress contient 16 URL uniques : `/`, `/aude-rehault/experiences/`, `/aude-rehault/formations/`, `/aude-rehault/methode/`, `/aude-rehault/tarifs/`, `/contact/`, `/pourquoi-consulter/`, `/psychotherapie/`, `/liens/livres/`, `/liens/`, `/liens/sites-internet/`, `/les-psys/`, `/les-psys/psychotherapeute/`, `/les-psys/psychologue-clinicien/`, `/les-psys/psychiatre/`, `/bilans/`.

Les pages avec un équivalent disposent de redirections 301 vers leur section. Les pages de définitions, bilans et annuaires sans équivalent retournent 404. Si elles apportent du trafic, conserver/recréer leurs contenus avant d’activer une redirection globale depuis WordPress.

**Décision de Thomas : laisser complètement tomber le blog**, le 17 octobre 2026. Ne plus entreprendre de configuration ni d’achat WordPress. Aucun achat ni modification du blog n’a été réalisé. Cloudflare ne contrôle pas `auderehault.wordpress.com` : les redirections du nouveau domaine ne transmettent pas les visiteurs ou les signaux propres à cette adresse WordPress. Les anciennes URL utiles sur `auderehault.fr` restent redirigées.

## Transfert vers OVH

Récupérer le code de transfert dans IONOS et le saisir directement dans le parcours OVH, sans le publier dans le dépôt ni dans le chat. Choisir le transfert du **domaine existant**. Vérifier le prix et la commande avant paiement. Conserver les serveurs DNS Cloudflare durant le transfert et l’abonnement mail IONOS tant que la messagerie en dépend.

## Sources

- [Cloudflare Pages : Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Cloudflare Pages : domaines personnalisés](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare : changement des serveurs DNS](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
- [Cloudflare Pages : redirections](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Cloudflare Pages : www vers le domaine principal](https://developers.cloudflare.com/pages/how-to/www-redirect/)
- [Google : changement d’hébergement](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes)
- [Google : changement d’URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [WordPress.com : Site Redirect](https://wordpress.com/support/domains/site-redirect/)

## État d’exécution

- PR [#3](https://github.com/thomasrehault-ux/site-aude-rehault/pull/3) intégrée sur `main` ; commit de fusion `a6854c410ebc199cf1d8560916cdde589f190363`.
- Projet Cloudflare Pages `site-aude-rehault` créé, connecté à GitHub, compilation `npm run build`, sortie `dist`, production `main`.
- Premier déploiement réussi : `16ef002e-7859-4faa-9bbc-6fbd8f7d0c04`, URL https://site-aude-rehault.pages.dev/.
- Réponses distantes vérifiées : accueil/mentions/robots/sitemap en 200 ; `/contact/` et `/aude-rehault/formations/` en 301 vers les bonnes sections ; URL inconnue et `/directions/` en 404. Le brouillon graphique non suivi n’est pas publié. L’en-tête `noindex, nofollow` est bien présent sur `pages.dev`.
- Compilation de production, compilation GitHub Pages, liens internes, ressources, ancres, canoniques et XML du sitemap vérifiés. Workflow GitHub Pages réussi sur le commit de fusion.
- Zone Cloudflare `auderehault.fr` créée en formule Free, identifiant `ecadbdd572e4d1a285cddf30714c10a4`.
- Scan automatique : 12 entrées. Les 3 CNAME DKIM et 2 TXT de l’ancienne redirection ont été ajoutés pour retrouver les 17 entrées IONOS. FTP, autodiscover, DMARC, domainconnect et DKIM sont en DNS only ; les MX et SPF sont inchangés.
- IONOS a confirmé le remplacement des serveurs par `chan.ns.cloudflare.com` et `lars.ns.cloudflare.com` le 17 octobre 2026 vers 13 h 33 (Paris). La délégation est maintenant publiée par le registre .fr et la zone Cloudflare est active.
- `auderehault.fr` et `www.auderehault.fr` sont associés à Pages et portent tous les deux le statut **Active / SSL enabled**. Les anciens A/AAAA web ont été remplacés par les CNAME Pages proposés par Cloudflare.
- Règle Cloudflare `www vers auderehault.fr` activée en 301. Filtre : `(http.host eq "www.auderehault.fr") and not starts_with(http.request.uri.path, "/.well-known/") and not starts_with(http.request.uri.path, "/cdn-cgi/")`. Destination dynamique : `concat("https://auderehault.fr", http.request.uri.path)`, paramètres conservés. Les exceptions permettent les validations et renouvellements de certificat.
- Vérifications effectuées avec résolution forcée sur l’adresse publiée par Cloudflare, sans désactiver TLS : accueil, mentions, robots, sitemap, CSS et images en 200 ; HTTP vers HTTPS et www vers domaine principal en 301 ; chemins et paramètres préservés ; `/contact/` vers la bonne section ; URL inconnue en 404 ; validation ACME www non redirigée (404 pour une chaîne de test inexistante). Canonique `https://auderehault.fr/` et absence de noindex de l’accueil confirmées.
- Le résolveur local et Chrome utilisent encore des anciennes réponses DNS au dernier contrôle et échouent en HTTPS sur l’ancien hébergeur. Le service Cloudflare a un certificat valide. L’expiration des anciens caches est encore nécessaire pour un accès homogène depuis tous les appareils.
- **Commande OVH n° 261297459 traitée** : transfert d’`auderehault.fr`, 4,59 € HT / 5,51 € TTC, après accord explicite de Thomas sur le montant, les conditions, l’exécution immédiate, la renonciation au droit de rétractation, l’exactitude des coordonnées et le renouvellement automatique. Un seul clic de paiement a été envoyé et la page de succès OVH a été vérifiée. Le traitement de la commande ne prouve pas que le transfert est déjà livré.
- Le suivi OVH confirme **Commande acceptée** le 17 octobre 2026 à 14 h 12 min 32 s (Paris), après prise en compte à 14 h 11 min 52 s. Aucune nouvelle commande n’est nécessaire.
- Les DNS ont été personnalisés explicitement sur les deux serveurs Cloudflare dans la commande OVH et relus après enregistrement. L’option DNSSEC automatique OVH a été retirée du panier ; aucun DNSSEC actif n’a été désactivé. Le renouvellement affiché est de 7,79 € HT/an (environ 9,35 € TTC).
- Un compte e-mail **Zimbra Starter 15 Go** est inclus sans supplément tant que le domaine reste chez OVH. Thomas choisit de créer `contact@auderehault.fr` avec cette offre. Ne pas publier de mailto tant que la boîte n’est pas créée et testée ; ne changer les MX qu’après disponibilité de l’offre et préparation de la messagerie.
- Le portefeuille e-mail IONOS indique explicitement « Aucune adresse Email n’est disponible » pour `auderehault.fr` (contrat 41302434). Aucun compte IONOS existant sur ce domaine n’a été identifié ; les autres domaines du compte ne sont pas concernés par la bascule.
- Organisation Zimbra « Aude Réhault » et domaine `auderehault.fr` préparés. Formulaire de création de `contact` complété (Aude Réhault, offre Starter existante). La saisie du nouveau mot de passe et le clic de création ont été confiés à Thomas conformément aux règles de sécurité du navigateur. Aucune boîte opérationnelle n’est affirmée tant que le résultat n’est pas vérifié.
- La première création n’avait pas été enregistrée. Validation du domaine Zimbra effectuée par le CNAME `ovh-zimbra-dlqqmge9.auderehault.fr CNAME ovh.com.` en DNS only, publié puis détecté par OVH. Le domaine affiche **Actif**.
- Thomas a saisi le mot de passe et confirmé une nouvelle création. OVH affiche le message de succès, **contact@auderehault.fr — STARTER — 15 Gio — Actif**, utilisation 1/3. Aucun nouveau compte payant n’a été commandé.
- DNS de messagerie basculés dans Cloudflare selon le diagnostic OVH : MX `1 mx0.mail.ovh.net.`, `5 mx1.mail.ovh.net.`, `50 mx2.mail.ovh.net.`, `100 mx3.mail.ovh.net.` ; TXT racine unique `v=spf1 include:mx.ovh.com ~all` ; SRV `_autodiscover._tcp` de priorité 0, poids 0, port 443 vers `zimbra1.mail.ovh.net.`. Ancien CNAME autodiscover IONOS retiré pour ne pas détourner la découverte des clients.
- DKIM : `ovhmo-selector-1._domainkey` vers `ovhmo-selector-1._domainkey.5016965.di.dkim.mail.ovh.net.`, et `ovhmo-selector-2._domainkey` vers `ovhmo-selector-2._domainkey.5016966.di.dkim.mail.ovh.net.`, tous en DNS only. Signature activée dans OVH ; clé TXT publique constatée après activation.
- DMARC détaché d’IONOS : remplacement du CNAME `_dmarc` par le TXT `v=DMARC1; p=none;`, même politique que la cible IONOS avant migration. Les anciennes entrées DKIM IONOS restent temporairement présentes sans conflit de sélecteur.
- OVH confirme **Configuration OK** pour MX, SPF, SRV et DKIM. MX/SPF/SRV/DMARC et CNAME DKIM vérifiés par interrogation DNS. Thomas a choisi de prendre en charge plus tard le test humain entrant/sortant et demande de conserver/publier l’adresse. Le lien e-mail est publié conformément à cette instruction ; aucun test réel de réception/envoi n’est affirmé.
- ARS des Pays de la Loire confirmée par Thomas et publiée dans les mentions, avec la référence officielle au cadre du titre de psychologue. Compilation de la copie des seuls fichiers suivis réussie ; publication distante vérifiée sur Cloudflare.
- Le site s’ouvre désormais directement dans Chrome sur `https://auderehault.fr/`, sans exception de certificat. Les résolveurs 1.1.1.1 et 8.8.8.8 retournent Cloudflare en IPv4 et le DNS local retourne aussi les nouveaux enregistrements. Le cache système utilisé par curl conserve encore les anciennes adresses IONOS au dernier contrôle ; le diagnostic détaillé a confirmé cette différence de cache.
- Bulk Redirect activée : liste `aude_pages_vers_domaine` (`46987f0eebaa4526bd91583ef168dc8d`), règle `02627c12021744c3ada9c9b1671539c4`. Source `site-aude-rehault.pages.dev`, cible `https://auderehault.fr`, statut 301, chemins et paramètres conservés. Les sous-domaines d’aperçu ne sont pas inclus. Contrôles HTTP distants : accueil et `/mentions-legales/?verification=aude` en 301 vers les URL exactes attendues.
- Restent : livraison du transfert, test réel entrant/sortant de la boîte confié à Thomas, et expiration des anciens caches DNS. L’ancien WordPress est exclu à la demande de Thomas. Ne pas résilier IONOS à ce stade.
