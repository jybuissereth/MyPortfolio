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
    
  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle('Jean-Yves - Portfolio');
  }
  ngOnInit(): void {
  this.projects=this.projectService.getProjects();  }
}
