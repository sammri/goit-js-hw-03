const productivity = {
  Vika: 4,
  Vova: 5,
  Artem: 2,
  Guga: 6,
};

const findBestEmployee = (employees) => {
  let bestName = "";
  let maxTask = 0;
  for (const [name, task] of Object.entries(productivity)) {
    if (task > maxTask) {
      maxTask = task;
      bestName = name;
    }
  }
  console.log(
    `Лучший работник - ${bestName}, он выполнил аж ${maxTask} задач!`
  );
};
findBestEmployee(productivity);
