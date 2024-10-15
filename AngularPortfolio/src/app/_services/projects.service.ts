import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Projet Python',
      summary:
        "Un projet basé sur Python et Django pour la création d'une application web.",
      description:
        'Une application web qui permet la gestion des utilisateurs, avec une interface d’administration basée sur Django.',
      projectLink: 'https://github.com/exemple/projet-python',
      pictures: [],
      tags: [Tag.PYTHON, Tag.DJANGO],
    },
    {
      id: 2,
      name: 'Site Web React',
      summary: 'Un site web dynamique construit avec React.',
      description:
        "Ce projet utilise React pour créer une interface utilisateur réactive, avec des composants modulaires et une gestion d'état via Redux.",
      projectLink: 'https://github.com/exemple/react-site',
      pictures: [],
      tags: [Tag.JAVASCRIPT, Tag.REACT],
    },
    {
      id: 3,
      name: 'API REST avec NestJS',
      summary: "Création d'une API RESTful en utilisant NestJS et TypeScript.",
      description:
        'Ce projet développe une API REST pour gérer des ressources de type CRUD, utilisant une architecture modulaire et des services injectables avec NestJS.',
      projectLink: 'https://github.com/exemple/nestjs-api',
      pictures: [],
      tags: [Tag.TYPESCRIPT, Tag.NESTJS, Tag.REST],
    },
    {
      id: 4,
      name: 'Application mobile Swift',
      summary: 'Une application mobile pour iOS développée avec Swift.',
      description:
        'Cette application mobile offre une interface utilisateur fluide et native pour les utilisateurs iPhone, avec des fonctionnalités basées sur les API iOS.',
      projectLink: 'https://github.com/exemple/swift-app',
      pictures: [],
      tags: [Tag.SWIFT],
    },
    {
      id: 5,
      name: 'Site vitrine HTML/CSS/JS',
      summary: 'Un site vitrine basique utilisant HTML, CSS et JavaScript.',
      description:
        'Un site web simple pour présenter un portfolio, utilisant des technologies front-end classiques telles que HTML, CSS, et JavaScript pour l’interactivité.',
      projectLink: 'https://github.com/exemple/site-vitrine',
      pictures: [],
      tags: [Tag.HTML, Tag.JAVASCRIPT],
    },
    {
      id: 6,
      name: 'Service cloud avec Go',
      summary: 'Un service cloud performant développé en Go.',
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
      description:
        "Cette application est construite pour automatiser des processus métier spécifiques sur la plateforme Salesforce à l'aide d'Apex.",
      projectLink: 'https://github.com/exemple/apex-salesforce-app',
      pictures: [],
      tags: [Tag.APEX],
    },
  ];

  constructor() { }

  getProjects(){
    return this.projects
  }

  getProjectsById(id:number):Project{
    let project = this.projects.find(project => project.id === id);
    if (project===undefined){
      throw new TypeError("Project not found")
    }
    return project;
  }
 
}
