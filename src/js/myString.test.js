import { MyString } from "./myString";

describe("MyString", () => {
  test("remove", () => {
    expect(new MyString("qwerty").remove(2)).toBe("qwrty");
    expect(new MyString("qwerty").remove(0)).toBe("werty");
    expect(new MyString("qwerty").remove(5)).toBe("qwert");
    expect(new MyString("qwerty").remove(10)).toBe("qwerty");
  });

  test("insert", () => {
    expect(new MyString("qwerty").insert(2, "X")).toBe("qwXerty");
    expect(new MyString("qwerty").insert(0, "X")).toBe("Xqwerty");
    expect(new MyString("qwerty").insert(6, "X")).toBe("qwertyX");
    expect(new MyString("qwerty").insert(-1, "X")).toBe("Xqwerty");
  });

  test("trimSign", () => {
    expect(new MyString("qweeeertty").trimSign()).toBe("qwerty");
    expect(new MyString("qweeerrrttty").trimSign()).toBe("qwerty");
    expect(new MyString("qwe...rty").trimSign()).toBe("qwe.rty");
  });

  test("toggle", () => {
    expect(new MyString("qwerty").toggle()).toBe("QWERTY");
    expect(new MyString("QWERTY").toggle()).toBe("qwerty");
    expect(new MyString("qweRTY").toggle()).toBe("QWErty");
  });

  test("counter", () => {
    expect(new MyString("qwerty").counter("e")).toBe(1);
    expect(new MyString("apple").counter("p")).toBe(2);
    expect(new MyString("avokado").counter("a")).toBe(2);
  });
});
