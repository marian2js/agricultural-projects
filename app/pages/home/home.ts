import {Page, NavController} from 'ionic-angular';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project';
import {AddProjectPage} from '../add-project/add-project';
import {ProjectList} from '../../components/project-list/project-list';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [ProjectList]
})
export class HomePage {
  projects: Array<Project> = [];

  constructor(private nav: NavController, private projectService: ProjectService) {

  }

  onPageWillEnter() {
    const options = {
      descending: true
    };
    this.projectService.getAll(options)
      .then(projects => {
        this.projects = projects;
      });
  }

  addProjectTapped() {
    this.nav.push(AddProjectPage, {});
  }
}
