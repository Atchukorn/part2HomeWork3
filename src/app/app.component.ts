import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Part2Homework3';

  currentTab! : string;

  selectTab(tab : string) {
    this.currentTab = tab;
  }

  workspaceMenuNodes = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        { id: 2, name: 'Cursor' },
        { id: 3, name: 'Find' },
        { id: 3, name: 'Font' },
        { id: 5, name: 'Formatting' },
        { id: 6, name: 'Diff Editor' },
        { id: 7, name: 'Minimap' },
        { id: 8, name: 'Suggestions' },
        { id: 9, name: 'Files' },
      ],
    },
    {
      id: 10,
      name: 'Workbenceh',
      children: [
        { id: 11, name: 'Appearance' },
        { id: 12, name: 'Breascrumb' },
        { id: 13, name: 'Editor Management' },
        { id: 14, name: 'Setting Editor' },
        { id: 15, name: 'Zen Mode' },
        { id: 16, name: 'Screencast Mode' },
      ],
    },
    {
      id: 17,
      name: 'Window',
    },
    {
      id: 19,
      name: 'Features',
      children: [
        { id: 20, name: 'Explorer' },
        { id: 21, name: 'Search' },
        { id: 22, name: 'Debug' },
        { id: 23, name: 'SCM' },
        { id: 24, name: 'Extensions' },
        { id: 25, name: 'Terminal' },
        { id: 26, name: 'Task' },
        { id: 27, name: 'Problems' },
        { id: 28, name: 'Output' },
        { id: 29, name: 'Comments' },
        { id: 30, name: 'Remote' },
        { id: 31, name: 'Timelines' },
        { id: 32, name: 'Notebook' },
      ],
    },
    {
      id: 33,
      name: 'Application',
      children: [
        { id: 34, name: 'Proxy' },
        { id: 35, name: 'Keyboard' },
        { id: 36, name: 'Update' },
      ],
    },
    {
      id: 37,
      name: 'Entension',
      children: [
        { id: 40, name: 'Docker' },
        { id: 41, name: 'HTML' },
      ],
    },
  ];

  userMenuNodes = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        { id: 2, name: 'Cursor' },
        { id: 3, name: 'Find' },
        { id: 3, name: 'Font' },
        { id: 5, name: 'Formatting' },
        { id: 6, name: 'Diff Editor' },
        { id: 7, name: 'Minimap' },
        { id: 8, name: 'Suggestions' },
        { id: 9, name: 'Files' },
      ]
    },
    {
      id: 10,
      name: 'Workbenceh',
      children: [
        { id: 11, name: 'Appearance' },
        { id: 12, name: 'Breascrumb' },
        { id: 13, name: 'Editor Management' },
        { id: 14, name: 'Setting Editor' },
        { id: 15, name: 'Zen Mode' },
        { id: 16, name: 'Screencast Mode' },
      ]
    },
    {
      id: 17,
      name: 'Window',
      children: [
        { id: 18, name: 'New Window' },
      ]
    },
    {
      id: 19,
      name: 'Features',
      children: [
        { id: 20, name: 'Explorer' },
        { id: 21, name: 'Search' },
        { id: 22, name: 'Debug' },
        { id: 23, name: 'SCM' },
        { id: 24, name: 'Extensions' },
        { id: 25, name: 'Terminal' },
        { id: 26, name: 'Task' },
        { id: 27, name: 'Problems' },
        { id: 28, name: 'Output' },
        { id: 29, name: 'Comments' },
        { id: 30, name: 'Remote' },
        { id: 31, name: 'Timelines' },
        { id: 32, name: 'Notebook' },
      ]
    },
    {
      id: 33,
      name: 'Application',
      children: [
        { id: 34, name: 'Proxy' },
        { id: 35, name: 'Keyboard' },
        { id: 36, name: 'Update' },
        { id: 37, name: 'Telemetry' },
        { id: 38, name: 'Setting Sync' },
      ]
    },
    {
      id: 39,
      name: 'Entension',
      children: [
        { id: 40, name: 'Docker' },
        { id: 41, name: 'HTML' },
        { id: 42, name: 'Java' },
        { id: 43, name: 'JSON' },
      ]
    },
  ];
  options= {};
}
