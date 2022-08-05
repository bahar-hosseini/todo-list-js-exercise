const newTask = function(title,description) {
  const task = {
    title,
    description,
    complete : false,
    completeTask() {
      this.complete = true;
    },
    logTaskState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};



const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


console.log(task1.complete);
task1.logTaskState();
task1.completeTask();
task1.logTaskState();


console.log(task1.title);
console.log(task1.complete);
