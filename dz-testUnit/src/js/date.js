export class MyDate extends Date {
  constructor(day, month, year) {
    super(year, month - 1, day);
  }

  showDate() {
    const days = [
      "первое",
      "второе",
      "третье",
      "четвертое",
      "пятое",
      "шестое",
      "седьмое",
      "восьмое",
      "девятое",
      "десятое",
      "одиннадцатое",
      "двенадцатое",
      "тринадцатое",
      "четырнадцатое",
      "пятнадцатое",
      "шестнадцатое",
      "семнадцатое",
      "восемнадцатое",
      "девятнадцатое",
      "двадцатое",
      "двадцать первое",
      "двадцать второе",
      "двадцать третье",
      "двадцать четвертое",
      "двадцать пятое",
      "двадцать шестое",
      "двадцать седьмое",
      "двадцать восьмое",
      "двадцать девятое",
      "тридцатое",
      "тридцать первое",
    ];

    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    return `${days[this.getDate() - 1]} ${months[this.getMonth()]}`;
  }

  isFuture() {
    return this > new Date();
  }

  isLeapYear() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  nextDay() {
    const nextDay = new Date(this);
    nextDay.setDate(this.getDate() + 1);
    return `${nextDay.getDate()}/${nextDay.getMonth() + 1
      }/${nextDay.getFullYear()}`;
  }
}
