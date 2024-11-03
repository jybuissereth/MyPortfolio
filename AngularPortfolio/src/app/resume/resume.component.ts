import { NgIf } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion'; 

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule,NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  isExperienceOpen:boolean=false;
  isEducationOpen:boolean=false;
  isDiplomeOpen:boolean=false;
  isCompetenceOpen:boolean=false;

  constructor(private titleService: Title,private renderer:Renderer2) {
    this.titleService.setTitle('Jean-Yves - Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement("a");
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV.pdf');
    link.setAttribute('download', 'CV.pdf');
    link.click();
    link.remove();

  }
}
