new Vue({
    el: "#app",
    data:{
      nickName: "",
      password: "",
      formHeader: "Zaloguj się!",
      isLoggin: false,
      playerData: {
        nick: "admin",
        password: "qwerty",
      }
    },

    methods:{
      logginIn: function(){
        this.formHeader = "Logowanie..."
        if(this.password === this.playerData.password && this.nickName === this.playerData.nick){
          var that = this;
          setTimeout(function(){
            that.formHeader = "Udało się! Logowanie udane!";
          }, 2000);
          setTimeout(function(){
            that.formHeader = "";
            that.isLoggin = true;
          }, 4000);
        } else {
          var that = this;
          setTimeout(function(){
            that.formHeader = "Błąd logowania! Błędny nick lub hasło";
          }, 2000);
          setTimeout(function(){
            that.formHeader = "Zaloguj się ponownie!";
            that.nickName = "";
            that.password = "";
          }, 4000);
        }
      }
    },



  });