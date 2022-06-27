new Vue({
    el: "#app",
    data:{
      nickName: "",
      password: "",
      modalContent: "Zaloguj się!",
      isLoggin: false,
      playerData: {
        nick: "holender",
        password: "qwerty",
      }
    },

    methods:{
      logginIn: function(){
        this.modalContent = "Logowanie..."
        if(this.password === this.playerData.password && this.nickName === this.playerData.nick){
          var that = this;
          setTimeout(function(){
            that.modalContent = "Udało się! Logowanie udane!";
          }, 2000);
          setTimeout(function(){
            that.modalContent = "";
            that.isLoggin = true;
          }, 4000);
        } else {
          var that = this;
          setTimeout(function(){
            that.modalContent = "Błąd logowania! Błędny nick lub hasło";
          }, 2000);
          setTimeout(function(){
            that.modalContent = "Zaloguj się ponownie!";
            that.nickName = "";
            that.password = "";
          }, 4000);
        }
      }
    },



  });