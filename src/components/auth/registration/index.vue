<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Регистрация</MainTitle>
    <form ref="form" @submit.prevent="handleSubmit" class="registration__form">
      <CustomInput
        v-model="formData.name"
        name="name"
        placeholder="Name"
        :rules="nameRules"
        autocomplete="username"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        autocomplete="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="current-password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        type="password"
        name="password"
        placeholder="Confirm password"
        autocomplete="current-password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <Button class="registration__btn" type="submit" :loading="loading"
        >Вход</Button
      >
    </form>
  </AuthContainer>
</template>

<script>
import CustomInput from "../../shared/CustomInput.vue";
import Button from "../../shared/Button.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import AuthContainer from "../AuthContainer.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Registration",
  components: {
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Пароли не совпадают",
        }),
      ];
    },
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    async handleSubmit() {
      const { form } = this.$refs;

      const { name, password, email } = this.formData;

      try {
        this.loading = true;

        //this.$store.dispatch("auth/registration", { name, password, email });
        await this.registerUser({
          name,
          password,
          email,
        });

        this.$router.push({ name: "homepage" });
        form.reset();
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Произошла ошибка",
          text: e.message,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
