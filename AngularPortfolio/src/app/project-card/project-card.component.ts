import { Component, Input, TemplateRef } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule, NgFor } from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, NgFor],  // Utilisation de CommonModule
  providers: [BsModalService],  // Ajout de BsModalService dans les providers
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],  // Correction: "styleUrl" -> "styleUrls"
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal() {
    const modalOption: ModalOptions= {
      class:" modal-lg",
      initialState:{
        project:this.project
      }
    }
    this.modalRef = this.modalService.show(ProjectModalComponent,modalOption);
  }
}
