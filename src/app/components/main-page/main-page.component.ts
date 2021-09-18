import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MockServerApiService} from '../../services/mock-server-api.service';
import {Observable} from 'rxjs';
import {Task} from '../../models-draft';
import {mockTaskListPath} from '../../constants/mock-server.constants';

@Component({
    selector: 'custom-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
    constructor(private mockService: MockServerApiService) {
    }

    taskList$: Observable<Task[]>;

    ngOnInit(): void {
        this.taskList$ = this.mockService.getMockResource(mockTaskListPath)
    }
}
