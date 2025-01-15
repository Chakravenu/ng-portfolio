import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Fundamentals of Clinical Text Extraction in NLP',
      description: 'Explored healthcare record systems and highlighted the potential for improving outcomes through clinical text analysis.',
      link: 'https://github.com/Chakravenu/Fundamentals-of-Clinical-Text-Extraction-in-NLP',
    },
    {
      title: 'Optimal Transport in Text Classification',
      description: 'Developed a novel approach leveraging optimal transportation theory to enhance text classification algorithms.',
      link: 'https://github.com/Chakravenu/Optimal-Transport-in-Text-Classification',
    },
  ];
}
