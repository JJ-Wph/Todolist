new Vue({
    el: "#app",
    data: {
        nickName: "",
        password: "",
        formHeader: "Zaloguj się!",
        isLoggin: false,
        playerData: {
            nick: "admin",
            password: "qwerty"
        },
        taskTitle: "",
        taskCategory: "",
        taskDate: "",
        newTaskData: []
    },

    methods: {
        logginIn: function () {
            this.formHeader = "Logowanie..."
            if (this.password === this.playerData.password && this.nickName === this.playerData.nick) {
                var that = this;
                setTimeout(function () {
                    that.formHeader = "Udało się! Logowanie udane!";
                }, 2000);
                setTimeout(function () {
                    that.formHeader = "";
                    that.isLoggin = true;
                }, 4000);
            } else {
                var that = this;
                setTimeout(function () {
                    that.formHeader = "Błąd logowania! Błędny nick lub hasło";
                }, 2000);
                setTimeout(function () {
                    that.formHeader = "Zaloguj się ponownie!";
                    that.nickName = "";
                    that.password = "";
                }, 4000);
            }
        },

        addNewTask: function () {
            if (this.taskTitle.length === 0) {
                alert("Nie podano nazwy zadania!");
            } else if (this.taskCategory === "") {
                alert("Nie podano kategorii!");
            } else if (this.taskDate === "") {
                alert("Nie podano daty!");
            } else {
              let myObject = {
                taskTitle: this.taskTitle,
                taskCategory: this.taskCategory,
                taskDate: this.taskDate
              };
              this.newTaskData.push(myObject);
              this.taskTitle = "";
              this.taskCategory = "";
              this.taskDate = "";
            }

            console.log(this.taskDate);

        }

    }
});