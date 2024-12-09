import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import {CollapseModule} from "ngx-bootstrap/collapse"
import bootstrap from '../../main.server';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent,NgFor,CollapseModule,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects= {} as Project[]
  isCollapsed: boolean= true;
  filtering: boolean= true;

  python: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  typescript: boolean = false;
  css: boolean = false;
  cpp: boolean = false;
  ruby: boolean = false;
  php: boolean = false;
  swift: boolean = false;
  kotlin: boolean = false;
  go: boolean = false;
  rust: boolean = false;
  html: boolean = false;
  json: boolean = false;
  xml: boolean = false;
  django: boolean = false;
  react: boolean = false;
  nestjs: boolean = false;


  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle('Jean-Yves - Portfolio');
  }
  ngOnInit(): void {
  this.projects=this.projectService.getProjects();  }

  Filter(){
    let filterTags: Tag []= [];

    if (this.python) filterTags.push(Tag.PYTHON);
    if (this.javascript) filterTags.push(Tag.JAVASCRIPT);
    if (this.java) filterTags.push(Tag.JAVA);
    if (this.typescript) filterTags.push(Tag.TYPESCRIPT);
    if (this.css) filterTags.push(Tag.CSS);
    if (this.cpp) filterTags.push(Tag.CPP);
    if (this.ruby) filterTags.push(Tag.RUBY);
    if (this.php) filterTags.push(Tag.PHP);
    if (this.swift) filterTags.push(Tag.SWIFT);
    if (this.kotlin) filterTags.push(Tag.KOTLIN);
    if (this.go) filterTags.push(Tag.GO);
    if (this.rust) filterTags.push(Tag.RUST);
    if (this.html) filterTags.push(Tag.HTML);
    if (this.json) filterTags.push(Tag.JSON);
    if (this.xml) filterTags.push(Tag.XML);
  
    // Add selected frameworks to filterTags
    if (this.django) filterTags.push(Tag.DJANGO);
    if (this.react) filterTags.push(Tag.REACT);
    if (this.nestjs) filterTags.push(Tag.NESTJS);

    if(this.python ||
      this.javascript ||
      this.java ||
      this.typescript ||
      this.css ||
      this.cpp ||
      this.ruby ||
      this.php ||
      this.swift ||
      this.kotlin ||
      this.go ||
      this.rust ||
      this.html ||
      this.json ||
      this.xml ||
      this.django ||
      this.react ||
      this.nestjs){
        this.filtering= false;
      }
      else{
        this.filtering= true;
      }
    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.python = false;
    this.javascript = false;
    this.java = false;
    this.typescript = false;
    this.css = false;
    this.cpp = false;
    this.ruby = false;
    this.php = false;
    this.swift = false;
    this.kotlin = false;
    this.go = false;
    this.rust = false;
    this.html = false;
    this.json = false;
    this.xml = false;
    this.django = false;
    this.react = false;
    this.nestjs = false;

    this.filtering= true;
    this.projects= this.projectService.getProjects();
  
  }
}
