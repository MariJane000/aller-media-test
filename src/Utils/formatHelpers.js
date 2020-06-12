import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from 'moment';

const formatNumber = (number) => {
    const str = String(number);
    return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const formatDate = (date) => {
    dayjs.extend(customParseFormat);
    return dayjs(date, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY');
};

const formatWeightKG = (data) => `${formatNumber(data)} kg`;

const formatCurrency = (data) => {
    let str = String(data);

    if (str.includes('-')) {
        str = str.replace('-', '');
        return `- $ ${formatNumber(str)}`;
    }

    return `$ ${formatNumber(data)}`;
};

const formatWeightMTS = (data) => `${formatNumber(data)} MTS`;

const getCurrentDate = () => {
    return moment();
};

const datePickerFormat = () => {
    return 'DD/MM/YYYY';
};

const momentFormatDate = (date) => {
    return moment(date);
};

export {
    formatNumber,
    formatDate,
    formatWeightKG,
    formatCurrency,
    formatWeightMTS,
    getCurrentDate,
    datePickerFormat,
    momentFormatDate,
};
