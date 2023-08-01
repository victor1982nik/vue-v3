<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    v-bind="$attrs"
    v-bind:type="type"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <!-- другая форма записи :class="["btn", "btn--outlined"]"  
            class="btn btn--outlined" -->
    <CircleLoader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import CircleLoader from "../loaders/Circle";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  components: {
    CircleLoader,
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        "btn__content--hidden": this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  color: white;
  background: orangered;
  min-width: 220px;
  cursor: pointer;
  padding: 8px 15px;
  border: 1px solid transparent;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }

  &--outlined {
    background: none;
    color: orangered;
    border: 1px solid orangered;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }
  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
