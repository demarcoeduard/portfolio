import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.20s ease-out', style({ opacity: 1}))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      img: "assets/finance-dashboard.png",
      title: "Finance Dashboard",
      link: "https://demarcoeduard.github.io/finance-dashboard/",
      skills: ["Angular", "TypeScript", "CSS"],
      description: "Manages personal finances in a centralized dashboard, enhancing financial control. Users can effortlessly add, edit and track accounts and transactions. Real-time updates maintain data accuracy, while the responsive design ensures seamless use across all devices."
    },
    {
      img: "assets/techdental.png",
      title: "TechDental",
      link: "https://demarcoeduard.github.io/techdental/",
      skills: ["Angular", "TypeScript", "Bootstrap", "Sass"],
      description: "Minimalist, fully responsive landing page designed using Bootstrap to ensure cross-device compatibility. It includes essential sections for an intuitive user experience. Additionally, integrates functional elements to enhance user interaction."
    },
    {
      img: "assets/future-foundry.png",
      title: "Future Foundry",
      link: "https://demarcoeduard.github.io/future-foundry/",
      skills: ["Angular", "TypeScript", "CSS"],
      description: "Connects businesses with vetted developers through a user-friendly website. It has straightforward forms that simplify communication, while clear design and responsive layout ensure a smooth experience on all devices."
    },
    {
      img: "assets/hospital-crm.png",
      title: "Hospital CRM",
      link: "https://demarcoeduard.github.io/hospital-crm/",
      skills: ["Angular", "TypeScript", "CSS"],
      description: "Organizes doctor, patient, and appointment data in one central platform, improving hospital operations. Its intuitive interface allows adding, editing, and deleting info with ease. The real-time updates ensure data accuracy, while responsive design optimizes access on all devices."
    }
  ]
}
