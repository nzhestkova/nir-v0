import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DateConverterHelper} from '../../helpers/date-converter.helper';

@Component({
    selector: 'custom-due-date',
    templateUrl: './due-date.component.html',
    styleUrls: ['./due-date.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DueDateComponent {
    @Input() set dueDate(value: string) {
        this.valueUpdater$.next(DueDateComponent.getDueDateDifference(value));
    }

    valueUpdater$ = new BehaviorSubject<string>(null);
    value$: Observable<string>;

    constructor() {
       this.value$ = this.valueUpdater$;
    }

    private static getDueDateDifference(value: string): string {
        const signValueEnum = {
            overdue: 'overdue',
            left: 'left'
        };

        const signValue = Date.now() > Date.parse(value)
            ? signValueEnum.overdue
            : signValueEnum.left;

        return `${DateConverterHelper.getDifferenceString(value)} ${signValue}`;
    }
}
