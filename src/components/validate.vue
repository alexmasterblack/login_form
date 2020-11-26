<template>
  <div class="form" >
    <h1>Form</h1>
    <form @submit.prevent="validate_all">
      <div class="gender">
        <label>
          <input type="radio" v-model="gender" value="Female"/>
        </label>
        <label>Female</label>
        <label>
          <input type="radio" v-model="gender" value="Male"/>
        </label>
        <label>Male</label>
        <label>
          <input type="radio" v-model="gender" value="Other"/>
        </label>
        <label>Other</label>
      </div>
      <div class="one">
        <label>
          <input @blur="first_touched = true" :class="{ error: first_error }" type="text" placeholder="First name" v-model="first_name" class="form_input"/>
        </label>
        <label>First name</label>
        <div v-if="first_error" class="error_input">Incorrect input!</div>
      </div>
      <div class="one">
        <label>
          <input @blur="second_touched = true" :class="{ error: second_error }" type="text" placeholder="Second name" v-model="second_name" class="form_input"/>
        </label>
        <label>Second name</label>
        <div v-if="second_error" class="error_input">Incorrect input!</div>
      </div>
      <div class="one">
        <label>
          <input @blur="age_touched = true" :class="{ error: age_error }" type="number" placeholder="Age" v-model="age" class="form_input"/>
        </label>
        <label>Age</label>
        <div v-if="age_error" class="error_input">Incorrect input!</div>
      </div>
      <div class="one">
        <label>
          <input @blur="number_touched = true" :class="{ error: number_error }" type="text" placeholder="Number" v-model="number" class="form_input"/>
        </label>
        <label>Number</label>
        <div v-if="number_error" class="error_input">Incorrect input!</div>
      </div>
      <button class="form_button" type="submit" :disabled="!validate_gender || !validate_age || !validate_first || !validate_second || !validate_number">Sing in</button>
    </form>
  </div>
</template>

<script>
const validator_number = /[0-9]/;
const validator_word = /[A-Z-a-z-А-Я-а-я]/;

export default {
  name: "validate",
  data() {
    return {
      number_touched: false,
      age_touched: false,
      second_touched: false,
      first_touched: false,
      number: null,
      gender: null,
      age: null,
      second_name: null,
      first_name: null
    };
  },
  computed: {
    validate_number () {
      if (this.number !== null) {
        if (this.number.length === 11 && this.number[0] === "8") {
          for (let i = 0; i < this.number.length; i++) {
            if (!validator_number.test(this.number[i])) {
              return false;
            }
          }
          return true;
        } else return false;
      } else return false;
    },
    validate_gender () {
      return this.gender !== null;
    },
    validate_age () {
      return this.age >= 1 && this.age <= 100;
    },
    validate_second () {
      if (this.second_name !== null) {
        if (validator_word.test(this.second_name) && this.second_name[0].toUpperCase() === this.second_name[0]) {
          for (let i = 0; i < this.second_name.length; i++) {
            if (validator_number.test(this.second_name[i])) {
              return false;
            }
          }
          return true;
        } else return false;
      } else return false;
    },
    validate_first () {
      if (this.first_name !== null) {
        if (validator_word.test(this.first_name) && this.first_name[0].toUpperCase() === this.first_name[0]) {
          for (let i = 0; i < this.first_name.length; i++) {
            if (validator_number.test(this.first_name[i])) {
              return false;
            }
          }
          return true;
        } else return false;
      } else return false;
    },
    number_error () {
      return !this.validate_number && this.number_touched;
    },
    age_error () {
      return !this.validate_age && this.age_touched;
    },
    second_error () {
      return !this.validate_second && this.second_touched;
    },
    first_error () {
      return !this.validate_first && this.first_touched;
    }
  },

  methods: {
    validate_all () {
      if (this.validate_number && this.validate_gender && this.validate_number && this.validate_second && this.validate_first) {
        alert("Success!");
        this.createUser();
      }
    },
    createUser() {
      this.$store.dispatch('createUser', {
        gender: this.gender,
        first_name: this.first_name,
        second_name: this.second_name,
        age: this.age,
        number: this.number,
      })
      this.first_name = null;
      this.second_name = null;
      this.gender = null;
      this.age = null;
      this.number = null;
      this.number_touched = false;
      this.age_touched = false;
      this.second_touched = false;
      this.first_touched = false;
    }
  }
}
</script>

<style scoped>
.form {
  width: 300px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 16px;
  letter-spacing: 1px;
 }
.one {
  padding-bottom: 15px;
}
.gender {
  padding-top: 15px;
  padding-bottom: 20px;
}
.form_input {
  width: 60%;
  padding: 0 10px 10px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  outline: none;
  transition: 0.3s;
 }
.form_button {
  width: 100px;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  color : #fff;
  background-color: #0071f0;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
 }
button:not(:active) {
  transform: scale(0.95);
}
button:disabled {
  background-color: #679ed9;
}
h1 {
  margin-top: 0;
  margin-bottom: 0;
}
.error {
  border-color: red;
}
.error_input {
  color: red;
  font-size: small;
  padding-top: 10px;
}
</style>