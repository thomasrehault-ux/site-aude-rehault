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

**Cloudflare ne contrôle pas `auderehault.wordpress.com`.** Pour transmettre les visiteurs et les signaux de ces URL, accéder au compte WordPress et préparer une redirection côté WordPress. L’option officielle Site Redirect est payante et conserve les chemins : valider les anciennes destinations avant achat/activation. À défaut, conserver le blog et ajouter un lien visible vers le nouveau site. Aucun achat ni modification du blog n’a été réalisé.

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
- IONOS a confirmé le remplacement des serveurs par `chan.ns.cloudflare.com` et `lars.ns.cloudflare.com` le 17 octobre 2026 vers 13 h 33 (Paris). Les quatre anciennes entrées web restent temporairement en DNS only pour conserver l’ancien site pendant l’attente d’activation Cloudflare.
- L’association du domaine principal à Pages est encore bloquée par Cloudflare tant que la délégation n’est pas détectée active. La bascule web n’est donc **pas encore achevée**.
- Règle Cloudflare `www vers auderehault.fr` enregistrée et activée : motif `http*://www.auderehault.fr/*`, destination `https://auderehault.fr/${2}`, code 301, paramètres conservés. Elle ne prendra effet qu’une fois la zone active et www en mode proxifié ; www reste temporairement en DNS only vers l’ancien site.
- Transfert OVH préparé au nom d’Aude, sans validation de commande ni paiement. Panier observé : 4,59 € HT / 5,51 € TTC pour le transfert, puis renouvellement affiché à 7,79 € HT/an. Un compte e-mail est inclus. Le champ AUTH/EPP attend la saisie directe par Thomas. Vérifier ensuite les options DNS et conserver les serveurs Cloudflare ; ne pas activer un DS DNSSEC OVH incompatible avec la zone Cloudflare.
- E-mail public, informations professionnelles des mentions, redirection de l’ancien WordPress, rattachement final du domaine, certificat et redirection www restent à finaliser.
