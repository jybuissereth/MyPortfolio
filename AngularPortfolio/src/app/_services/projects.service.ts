import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Projet Threes',
      summary:
        'Threes est un jeu inspiré de 2048, où l’objectif est de fusionner des tuiles pour obtenir le score le plus élevé. Développé en Python, le projet est structuré en trois modules principaux : la gestion des tuiles (création et fusion), l’affichage du plateau, et les mécanismes de jeu (règles, déplacements et score). Cette organisation modulaire permet une meilleure clarté du code et facilite les mises à jour futures.',
      complete_summary:
        "Threes est un jeu numérique inspiré du célèbre 2048, où le but est de fusionner des tuiles numérotées pour atteindre le score le plus élevé possible. Le jeu repose sur un ensemble de tuiles qu’il faut combiner astucieusement pour progresser et maximiser son score. \nCe projet a été développé en Python, avec une architecture modulaire pour faciliter la gestion des différentes composantes du jeu. Lors de la phase de conception, nous avons identifié quatre éléments clés du jeu : les tuiles, le plateau, l'affichage et les mécanismes de jeu. Ces éléments ont ensuite été répartis en trois modules principaux :\nGestion des tuiles : Ce module regroupe toutes les fonctionnalités liées aux tuiles, telles que la génération de nouvelles tuiles, leurs valeurs numériques et les règles de fusion lorsqu’elles sont combinées.\nAffichage du plateau : Ce module est dédié à la représentation visuelle du plateau de jeu, assurant que l'état des tuiles et des combinaisons est toujours clair pour le joueur. Il gère également la mise à jour de l'affichage en temps réel pour une meilleure expérience utilisateur.\nMécanismes de jeu : Ce module regroupe les règles et les interactions principales du jeu, notamment la gestion des déplacements, la vérification des conditions de victoire ou de défaite, et le calcul du score en fonction des actions du joueur.\nEn structurant le projet de cette manière, nous avons pu assurer une meilleure organisation et modularité du code, facilitant ainsi la maintenance et les futures évolutions du jeu.",
      description:
      "Threes est un jeu inspiré de 2048 où l'objectif est de fusionner des tuiles pour obtenir le meilleur score. Développé en Python, il est structuré en trois modules : gestion des tuiles, affichage et mécaniques de jeu.",
      projectLink:
        'https://github.com/jybuissereth/Projet-python/tree/master/jeu_threes',
      pictures: [
        '../../assets/threes.gif',
        '../../assets/im2.png',
        '../../assets/im3.png',
      ],
      tags: [Tag.PYTHON],
    },
    {
      id: 2,
      name: 'Site Web Marchand',
      summary: 'Ce projet est un site web e-commerce conçu pour faciliter des achat en ligne. La barre de navigation permet d\'accéder à l\'accueil, au panier et à la connexion. En cliquant sur \'SHOP NOW\', les utilisateurs découvrent les articles, triables par prix, nom ou catégorie, et ajoutables au panier. Un compte utilisateur permet l’accès au paiement, tandis que les administrateurs peuvent gérer les produits.',
      complete_summary:
        "Ce projet est un site web de commerce en ligne, conçu pour offrir une expérience d'achat fluide et intuitive. Son objectif est de permettre aux utilisateurs de naviguer facilement parmi divers produits, d'ajouter des articles au panier et de passer commande en toute simplicité.\nDéveloppé en équipe, ce site présente une architecture modulaire qui regroupe les fonctionnalités essentielles en plusieurs sections clés : navigation, gestion des produits, panier et compte utilisateur.\nNavigation : La barre de navigation comprend des liens vers l'accueil, un bouton de connexion/déconnexion et un accès direct au panier, dont le compteur affiche en temps réel le nombre d'articles ajoutés.\nGestion des produits : Les utilisateurs accèdent aux articles via le bouton 'SHOP NOW', avec options de tri par prix ou nom, et de filtrage par catégorie ou tranche de prix. Chaque article est affiché avec une image et un prix, et peut être ajouté au panier d’un simple clic.\nPanier : Dans le panier, les articles ajoutés sont consultables et peuvent être supprimés. L’utilisateur peut créer un compte pour accéder aux options de paiement et gérer ses commandes.\nInterface administrateur : Accessible via un compte admin, cette section permet d’ajouter des articles, de modifier les quantités et de mettre à jour les prix.\nGrâce à cette organisation modulaire, le site assure une gestion efficace et une grande évolutivité pour répondre aux besoins d’un site e-commerce moderne.",

      description:
        "Site e-commerce intuitif permettant de consulter et ajouter des articles au panier, avec tri et filtres par prix, nom ou catégorie. Connexion pour accéder au paiement, et interface admin pour gérer les produits.",
      projectLink: 'https://github.com/exemple/react-site',
      pictures: [
        '../../assets/im1.png',
        '../../assets/im2.png',
        '../../assets/im3.png',
      ],
      tags: [Tag.PHP, Tag.HTML,Tag.CSS],
    },
    {
      id: 3,
      name: 'API REST avec NestJS',
      summary: "Création d'une API RESTful en utilisant NestJS et TypeScript.",
      complete_summary:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 ",

      description:
        'Ce projet développe une API REST pour gérer des ressources de type CRUD, utilisant une architecture modulaire et des services injectables avec NestJS.',
      projectLink: 'https://github.com/exemple/nestjs-api',
      pictures: [
        '../../assets/im1.png',
        '../../assets/im2.png',
        '../../assets/im3.png',
      ],
      tags: [Tag.TYPESCRIPT, Tag.NESTJS, Tag.REST],
    },
    {
      id: 4,
      name: 'Application mobile Swift',
      summary: 'Une application mobile pour iOS développée avec Swift.',
      complete_summary:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 ",

      description:
        'Cette application mobile offre une interface utilisateur fluide et native pour les utilisateurs iPhone, avec des fonctionnalités basées sur les API iOS.',
      projectLink: 'https://github.com/exemple/swift-app',
      pictures: [
        '../../assets/im1.png',
        '../../assets/im2.png',
        '../../assets/im3.png',
      ],
      tags: [Tag.SWIFT],
    },
    {
      id: 5,
      name: 'Site vitrine HTML/CSS/JS',
      summary: 'Un site vitrine basique utilisant HTML, CSS et JavaScript.',
      complete_summary:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 ",

      description:
        'Un site web simple pour présenter un portfolio, utilisant des technologies front-end classiques telles que HTML, CSS, et JavaScript pour l’interactivité.',
      projectLink: 'https://github.com/exemple/site-vitrine',
      pictures: [
        '../../assets/im1.png',
        '../../assets/im2.png',
        '../../assets/im3.png',
      ],
      tags: [Tag.HTML, Tag.JAVASCRIPT],
    },
    {
      id: 6,
      name: 'Service cloud avec Go',
      summary: 'Un service cloud performant développé en Go.',
      complete_summary:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 ",

      description:
        "Développement d'un service de traitement de données en parallèle sur le cloud, en utilisant le langage Go pour sa rapidité et sa gestion des concurrents.",
      projectLink: 'https://github.com/exemple/cloud-service-go',
      pictures: [],
      tags: [Tag.GO],
    },
    {
      id: 7,
      name: 'Application Apex Salesforce',
      summary:
        "Développement d'une application Apex sur la plateforme Salesforce.",
      complete_summary:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 ",

      description:
        "Cette application est construite pour automatiser des processus métier spécifiques sur la plateforme Salesforce à l'aide d'Apex.",
      projectLink: 'https://github.com/exemple/apex-salesforce-app',
      pictures: [
        '../../assets/im1.png',
        '../../assets/im2.png',
        '../../assets/im3.png',
      ],
      tags: [Tag.APEX],
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectsById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError('Project not found');
    }
    return project;
  }

  getProjectsByFilter(FilterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project) {
      let foundAll = true;

      FilterTags.forEach(function (filtertag) {
        if (project.tags.includes(filtertag) == false) {
          foundAll = false;
        }
      });
      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
