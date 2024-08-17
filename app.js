const app = Vue.createApp({
  data() {
    return {
      msg: "Hi from vue3 bangla tutorial.",
      bgColor: "gray",
      textColor: "black",
      cardWidth: 100,
      cardHeight: 100,
      borderRadius: 0,
      isTextAlign: false,
      isDisplayFlex: false,
      textAlign: "left",
      alignItems: "",
      display: "block",
      JustifyContent: "",
      skill: "",
      skills: [],
      count: 0,
      mobile: "",
    };
  },

  methods: {
    addSkill() {
      console.log(!this.skills.includes(this.skill));
      if (this.skill) {
        if (!this.skills.includes(this.skill)) {
          this.skills.push(this.skill);
        }
      }
      this.skill = "";
    },
    deleteSkill(skill, i) {
      // this.skills = this.skills.filter((item) => item != skill);
      this.skills.splice(i, 1);
    },
  },

  watch: {
    count(newValue, oldValue) {
      if (newValue < 0) {
        alert("Count can't be less than 0");
        this.count = oldValue;
      }
    },
    mobile(newValue, oldValue) {
      console.log(this.mobile);
      if (isNaN(newValue)) {
        alert("Please enter a valid number");
        this.mobile = oldValue;
      }

      if (newValue.length > 11) {
        alert("Mobile must be 11 digit");
        this.mobile = oldValue;
      }
    },
  },
});

app.mount("#app");
