export interface DateTimeFormatOptions {
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
    hour12?: boolean;
}

export interface DateTimeFormat {
    format(date?: Date | number): string;
}

export interface NumberFormatOptions {
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

export interface NumberFormat {
    format(value: number): string;
}
