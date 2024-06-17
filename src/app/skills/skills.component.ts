import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      logo: "assets/html-logo.png",
      text: "HTML"
    },
    {
      logo: "assets/css-logo.png",
      text: "CSS"
    },
    {
      logo: "assets/javascript-logo.png",
      text: "JavaScript"
    },
    {
      logo: "assets/typescript-logo.png",
      text: "TypeScript"
    },
    {
      logo: "assets/angular-logo.png",
      text: "Angular"
    },
    {
      logo: "assets/git-logo.png",
      text: "Git"
    },
    {
      logo: "assets/figma-logo.png",
      text: "Figma"
    },
    {
      logo: "assets/sass-logo.png",
      text: "Sass"
    },
    {
      logo: "assets/bootstrap-logo.png",
      text: "Bootstrap"
    },
    {
      logo: "assets/tailwind-logo.png",
      text: "Tailwind"
    }
  ]
}
