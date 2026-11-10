# Audit et Optimisation des Animations — Nouveau Monde

Optimisation globale de l'écosystème d'animations du site vitrine du restaurant Nouveau Monde pour offrir une expérience fluide, feutrée et ultra-performante (60 FPS constants) sur ordinateurs, tablettes et smartphones.

### User Review & Critical Decisions

> [!IMPORTANT]
> Les choix d'animation confirmés lors de notre échange sont intégrés en priorité :
> - **Style d'animation** : Fluide et feutré (fondu doux `opacity` et léger glissement `translateY` sans inertie excessive ni rebonds artificiels).
> - **Performance Mobile & Tablette** : Optimisation adaptative (allègement des calculs de parallaxe, distances de translation réduites à $\le 12\text{px}$, respect absolu des 60 FPS).
> - **Accessibilité** : Prise en compte stricte de `prefers-reduced-motion` avec désactivation des déplacements physiques pour préserver le confort visuel.
> - **Stabilité Visuelle** : Préservation totale de l'identité de marque, des photographies, des textes et de la structure existante sans aucun layout shift.

---

### 1. Overview & Core Concept

- **Objectif** : Transformer les micro-saccades et apparitions disparates actuelles en une chorégraphie naturelle, élégante et cohérente digne des plus grands établissements gastronomiques.
- **Audience Cible** : Clients gastronomes, noctambules et amateurs de grillades à Douala consultant le site sur mobile (4G/WiFi) ou ordinateur.
- **Bénéfice Clé** : Navigation soyeuse, défilement sans accroc, filtres de plats instantanés sans saut de mise en page, et ouverture/fermeture cinématographique de la galerie plein écran.

---

### 2. User Experience & Visual Design

#### A. Rythme & Courbes d'Animation (Motion Curves)
- **Courbe maîtresse de transition** : Utilisation d'un easing luxueux et feutré `[0.16, 1, 0.3, 1]` (courbe cubique d'amortissement naturel) pour l'ensemble des révélations et interactions.
- **Micro-interactions boutons & cartes** : Transition rapide $\le 200\text{ms}$ sur `transform` (`scale(1.02)` ou `translateY(-2px)`) et `opacity`.
- **Propriétés réservées au GPU** : Animation exclusive de `transform` et `opacity` afin de prévenir les reflows et repaints coûteux du navigateur.

#### B. Apparitions Progressifs au Défilement (Scroll Reveals)
- **Seuil de déclenchement** : `viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}` pour garantir que les cartes et textes ne s'animent qu'une fois confortablement visibles, sans clignotement ni ré-exécution involontaire.
- **Échelonnement intelligent (Stagger)** : Décalage subtil plafonné (`Math.min(index * 0.04, 0.2)s`) pour éviter qu'un visiteur attendant en bas d'une grille ne patiente devant des cartes invisibles.
- **Adaptation Mobile** : Sur écrans tactiles $<768\text{px}$, translation réduite de `y: 24` à `y: 10` et temps d'animation raccourci de 20% pour une réactivité tactile instantanée.

#### C. Grille de Spécialités et Galerie (Zero Layout Shift)
- **Intégration `AnimatePresence mode="popLayout"`** : Lors du changement de catégorie de plats ou de photos, les éléments sortants quittent le flux immédiatement en fondu/échelle sans bloquer l'agencement des éléments entrants, éliminant les sauts brutaux de hauteur.
- **Affichage Plein Écran (Lightbox)** : Transition d'entrée/sortie fluide du voile sombre (`backdrop-blur`) et apparition douce de l'image haute définition.

---

### 3. Key Product Decisions & Trade-Offs

- **Décision 1 : Remplacement des animations CSS brutes par Framer Motion unifié**
  - *Approche* : Remplacer les classes génériques `animate-bounce` et les ouvertures conditionnelles abruptes (menu mobile, lightbox) par des transitions coordonnées `motion.div` avec `AnimatePresence`.
  - *Raison* : Élimine les à-coups visuels et garantit une fermeture propre sans disparition instantanée.
- **Décision 2 : Écouteurs de défilement passifs et nettoyés**
  - *Approche* : Détection du scroll de la Navbar via écouteur optimisé en mode passif (`{ passive: true }`) avec throttling requestAnimationFrame.
  - *Raison* : Évite de surcharger le fil d'exécution principal (main thread) lors des défilements rapides sur mobile.
- **Décision 3 : Prise en charge native de `prefers-reduced-motion`**
  - *Approche* : Utilisation du hook `useReducedMotion()` pour désactiver automatiquement les translations spatiales et ne conserver qu'un fondu doux direct pour les utilisateurs ayant activé la réduction de mouvement.

---

### 4. Technical Architecture & Component Motion Map

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│  - MotionConfig (reducedMotion="user")                 │
│  - AnimatePresence pour LightboxModal                  │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Navbar.tsx  │     │   Hero.tsx   │     │ OurWorld.tsx │
│ Passive rAF  │     │ Smooth Title │     │ Viewport 0.2 │
│ Drawer Spring│     │ Soft Accents │     │ Stagger Cap  │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       ├────────────────────┼────────────────────┤
       ▼                    ▼                    ▼
┌──────────────────┐ ┌──────────────┐     ┌──────────────┐
│SpecialtiesSection│ │PhotoGallery  │     │ContactSection│
│Carousel Momentum │ │popLayout Grid│     │Spring Icon   │
│popLayout Grid    │ │Instant Filter│     │Fluid Submit  │
└──────────────────┘ └──────────────┘     └──────────────┘
```

#### Étapes de mise en œuvre :
1. **Configuration Globale** : Intégration du composant `<MotionConfig reducedMotion="user">` dans l'application racine et ajout des utilitaires d'accélération matérielle (`transform-gpu`, `will-change-transform`).
2. **Optimisation Navbar & Menu Mobile** : Nettoyage de l'écouteur de scroll avec `{ passive: true }`, animation fluide du tiroir mobile avec `AnimatePresence` et transition latérale soignée.
3. **Harmonisation Hero & Section Univers** : Réglage fin des courbes cubiques `[0.16, 1, 0.3, 1]`, atténuation du rebond de l'indicateur de scroll et configuration des seuils de viewport.
4. **Fluidification des Grilles Filtrables (Spécialités & Galerie)** : Intégration de `mode="popLayout"` sur `AnimatePresence` pour un réagencement sans à-coups lors du tri par catégorie.
5. **Amélioration du Carrousel Horizontal & Lightbox** : Ajout du défilement inertiel tactile (`-webkit-overflow-scrolling: touch`) et animation d'ouverture/fermeture en fondu pour la modale plein écran.
6. **Vérification Complète** : Compilation TypeScript (`lint_applet` & `compile_applet`) et validation de l'absence de régression.
