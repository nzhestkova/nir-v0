import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'custom-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
    tilesList = [
        {
            title: 'Task List',
            iconName: 'task-list',
            link: 'list',
            active: true
        },
        {
            title: 'Task Result',
            iconName: 'task-result',
            link: 'result'
        },
        {
            title: 'Task Editor',
            iconName: 'task-editor',
            link: 'result'
        }
    ];
}
