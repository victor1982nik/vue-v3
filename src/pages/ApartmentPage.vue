<template>
  <main class="apartment-page">
    <SectionWithHeaderSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <!-- v-if если apartment не пустой тогда отрисовываем компонент -->
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              :owner="apartment.owner"
              class="apartment-page__owner"
            />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentsMainInfo from "@/components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import Reviews from "../components/reviews/index.vue";
import { getApartmentById } from "@/services/apartments.service";
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";

import reviewsList from "../components/reviews/reviews.json";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { data } = await getApartmentById(this.$route.params.id);
      this.apartment = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
