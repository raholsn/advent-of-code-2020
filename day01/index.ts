const day1 = async () => {
  const expenses = (await Deno.readTextFile("./input.txt"))
    .split("\n")
    .map((x) => +x);

  const print = (answer: number) => {
    console.log(answer);
    return true;
  };

  const part1 = () =>
    expenses.some((val1) =>
      expenses.some((val2) => val1 + val2 === 2020 && print(val1 * val2))
    );

  const part2 = () =>
    expenses.some((val1) =>
      expenses.some((val2) =>
        expenses.some(
          (val3) => val1 + val2 + val3 === 2020 && print(val1 * val2 * val3)
        )
      )
    );

  part1();
  part2();
};

await day1();
