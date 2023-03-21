import { verifyAge } from "../src/funcs/casino"

test("1 brazilian allowed", () => {
    const brazilian: Personal = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  });

  test("1 american allowed", () => {
    const brazilian: Personal = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });

  test("No one allowed", () => {
    const brazilian: Personal = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN
    };

    const american: Personal = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: Personal = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN
    };

    const american: Personal = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  });  