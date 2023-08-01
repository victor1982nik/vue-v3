<template>
  <div class="reviews-heading">
    <ReviewsAvatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import ReviewsAvatar from "./ReviewsAvatar.vue";
import StarRating from "@/components/StarRating.vue";
export default {
  name: "ReviewsHeading",
  components: {
    StarRating,
    ReviewsAvatar,
  },
  props: {
    author: {
      type: String,
      requred: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
