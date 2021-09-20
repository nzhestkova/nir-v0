import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MockServerApiService} from '../../services/mock-server-api.service';
import {Observable} from 'rxjs';
import {Task} from '../../models-draft';
import {mockTaskListPath} from '../../constants/mock-server.constants';

@Component({
  selector: 'custom-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent implements OnInit {
  constructor(private mockService: MockServerApiService) {
  }

  taskList$: Observable<Task[]>;

  ngOnInit(): void {
    this.taskList$ = this.mockService.getMockResource(mockTaskListPath)
  }
}
