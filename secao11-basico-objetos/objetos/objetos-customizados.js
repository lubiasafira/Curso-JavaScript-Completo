const task1 = {
    nome: "task 1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: function (n) {
        this.nome = n
    }
}