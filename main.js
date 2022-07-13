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
        newTaskData: [],
        taskTitleStyle: 'background: transparent',
        taskCategoryStyle: 'background: transparent',
        taskDateStyle: 'background: transparent'
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
                this.taskTitleStyle = "background-color:rgba(231, 20, 20, 0.85);";
            } else if (this.taskCategory === "") {
                this.taskCategoryStyle = "background-color: red";
            } else if (this.taskDate === "") {
                this.taskDateStyle = "background-color: red";
            } else {
                this.taskTitleStyle = 'background: transparent';
                this.taskCategoryStyle = 'background: transparent';
                this.taskDateStyle = 'background: transparent';
                
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
        },
    }
});