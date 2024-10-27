import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel'; 
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  @Input() project= {} as Project;

  constructor(public bsModalRef: BsModalRef){

  }
  
}
