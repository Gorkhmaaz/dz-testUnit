
export class MyString {
  constructor(str) {
    this.str = str;
  }

  remove(index) {
    if (index < 0 || index >= this.str.length) {
      return this.str;
    }
    return this.str.slice(0, index) + this.str.slice(index + 1);
  }

  insert(index, sign) {
    if (index < 0) {
      return sign + this.str;
    } else if (index >= this.str.length) {
      return this.str + sign;
    } else {
      return this.str.slice(0, index) + sign + this.str.slice(index);
    }
  }

  trimSign() {
    let result = '';
    for (let i = 0; i < this.str.length; i++) {
        if (this.str[i] !== this.str[i + 1]) {
            result += this.str[i];
        }
    }
    return result;
}

  toggle() {
    return this.str
      .split("")
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
  }

  counter(sign) {
    return this.str.split(sign).length - 1;
  }
}
