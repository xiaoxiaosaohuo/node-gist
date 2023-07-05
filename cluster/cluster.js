const cluster = require("cluster");
const os = require("os");
// 模拟访问数据库，返回用户数量
const numberOfUsersInDB = function() {
  this.count = this.count || 5;
  this.count = this.count _ this.count;
  return this.count;
}



if (cluster.isMaster) {
  const cpus = os.cpus().length//cup内核数量

  console.log(`Forking for ${cpus} CPUs`)
  for (let i = 0; i < cpus; i++) {
    cluster.fork()// 使用 cluster.fork 创建子进程
  }

  const updateWorkers = () => {
    const usersCount = numberOfUsersInDB()
    Object.values(cluster.workers).forEach(worker => {
      worker.send({ usersCount })
    })
  }

  updateWorkers()
  setInterval(updateWorkers, 10000)
} else {
  require("./server")
}


// master和worker之间如何通信
// 基于上面的server.js/cluster.js例子。cluster.workers可以拿到所有的worker。所以 master可以循环整个worker列表，然后给woker发送广播。例如：



const restartWorker = workerIndex => {
  const worker = workers[workerIndex];
  if (!worker) return;

  worker.on("exit", () => {
    if (!worker.exitedAfterDisconnect) return;
    console.log(`Exited process ${worker.process.pid}`);

    cluster.fork().on("listening", () => {
      restartWorker(workerIndex + 1);
    });
  });

  worker.disconnect();
};

restartWorker(0);

