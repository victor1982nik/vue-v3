<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Логин</MainTitle>
    <form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        name="email"
        autocomplete="email"
        placeholder="Email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        type="password"
        name="password"
        autocomplete="password"
        placeholder="Password"
        :rules="passwordRules"
        class="login__input"
      />
      <Button class="login__btn" type="submit" :loading="loading">Вход</Button>
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
  name: "Login",
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
        email: "",
        password: "",
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
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      const { form } = this.$refs;

      try {
        this.loading = true;
        //this.$store.dispatch("auth/login", this.formData);
        await this.login(this.formData);
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
.login {
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
