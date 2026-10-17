# Mise en ligne d’Aude Réhault

Préparation le 17 octobre 2026. Objectif : même domaine `auderehault.fr`, hébergement Cloudflare Pages, gestion du domaine chez OVH. La mise en ligne et le transfert du domaine sont deux opérations distinctes.

## Situation relevée

- Thomas confirme que le domaine est encore chez IONOS.
- `http://auderehault.fr/` retourne un frameset IONOS affichant `http://auderehault.wordpress.com/`, pas une redirection HTTP 301.
- Les DNS publics et la messagerie sont ceux d’IONOS.
- L’accès HTTPS au domaine a échoué lors du contrôle initial. Vérifier le nouveau certificat avant de conclure la bascule.
- Le compte Cloudflare connecté contient déjà les autres sites de Thomas ; le dépôt Aude y est accessible.
- `contact@auderehault.fr` n’est pas encore créé selon les notes du projet. Ne pas publier de mailto avant un test de réception.

## Sauvegarde DNS publique (partielle)

Le fichier `dns-avant-migration.zone` contient les enregistrements observés le 17 octobre 2026, pas un export exhaustif. Exporter la zone depuis IONOS avant de changer les serveurs DNS : un scan public ne découvre pas tous les noms.

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

La préparation du code ne prouve pas la bascule du domaine. Les déploiements, contrôles distants et actions restant à effectuer seront ajoutés après vérification.
