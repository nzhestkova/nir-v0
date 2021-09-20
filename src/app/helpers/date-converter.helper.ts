import {DateConstants} from '../constants/date.constants';

export class DateConverterHelper {
    private static readonly toSecondMultiplier = 1000;
    private static readonly toMinuteMultiplier = 60 * DateConverterHelper.toSecondMultiplier;
    private static readonly toHourMultiplier = 60 * DateConverterHelper.toMinuteMultiplier;
    private static readonly toDayMultiplier = 24 * DateConverterHelper.toHourMultiplier;
    private static readonly toWeekMultiplier = 7 * DateConverterHelper.toDayMultiplier;
    private static readonly toMonthMultiplier = 4 * DateConverterHelper.toWeekMultiplier;
    private static readonly toYearMultiplier = 12 * DateConverterHelper.toMonthMultiplier;

    static getDifferenceString(value: string): string {
        const difference = Math.abs(Date.now() - Date.parse(value));
        const convertedDifference = DateConverterHelper.findMinimumValue([
            {value: DateConverterHelper.getDifferenceValue(difference, 1 / DateConverterHelper.toMinuteMultiplier), key: DateConstants.minutes},
            {value: DateConverterHelper.getDifferenceValue(difference, 1 / DateConverterHelper.toHourMultiplier), key: DateConstants.hours},
            {value: DateConverterHelper.getDifferenceValue(difference, 1 / DateConverterHelper.toDayMultiplier), key: DateConstants.days},
            {value: DateConverterHelper.getDifferenceValue(difference, 1 / DateConverterHelper.toWeekMultiplier), key: DateConstants.weeks},
            {value: DateConverterHelper.getDifferenceValue(difference, 1 / DateConverterHelper.toMonthMultiplier), key: DateConstants.months},
            {value: DateConverterHelper.getDifferenceValue(difference, 1 / DateConverterHelper.toYearMultiplier), key: DateConstants.years},
        ], 'value');

        return `${convertedDifference.value} 
                ${convertedDifference.key.replace('[s]', DateConverterHelper.initReplacer(convertedDifference.value))}`;
    }

    private static findMinimumValue<T>(args: T[], valueKey: string): T {
        return args.reduce((min: T, item: T) => item[valueKey] && item[valueKey] < min[valueKey] ? item : min, args[0]);
    }

    private static initReplacer(value: number): string {
        return value > 1 ? 's' : '';
    }

    private static getDifferenceValue(value: number, multiplier: number): number {
        return Math.floor(value * multiplier);
    }
}
