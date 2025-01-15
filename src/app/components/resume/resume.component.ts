import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resumeUrl: string = '/assets/resume.pdf'; // Path to the resume file
  resumePreviewUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize the resume URL for the iframe preview
    this.resumePreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resumeUrl);
  }

}
