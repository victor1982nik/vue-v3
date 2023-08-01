<template>
  <div class="wrapper-input">
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="updateInput"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isValid: true,
      error: "",
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  //inject: ["form"], нужно дефолтное значение, в случае если инпут без формы
  inheritAttrs: false,

  methods: {
    updateInput(event) {
      //console.log(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },

    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  //min-width: 220px;
  width: 100%;

  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
