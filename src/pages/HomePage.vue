<template>
  <main class="homepage">
    <SectionWithHeaderSpacer>
      <Container>
        <ApartmentsFilterForm class="appartments-filter" @submit="filter" />
      </Container>
      <Container>
        <p v-if="!filteredAppartments.length">Ничего не найдено</p>
        <ApartmentsList v-else :items="filteredAppartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
              :id="apartment.id"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import Container from "../components/shared/Container.vue";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import { getApartmentsList } from "@/services/apartments.service";
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem";

export default {
  name: "App",
  components: {
    SectionWithHeaderSpacer,
    Container,
    ApartmentsFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      text: "",
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredAppartments() {
      return this.filterByCity(this.filterByPrice(this.apartments));
      //return this.apartments;
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
      //console.log(data);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    filter({ city, price }) {
      if (!city && !price) return;
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCity(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter(
        (apartment) => apartment.location.city === this.filters.city
      );
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter(
        (apartment) => apartment.price >= this.filters.price
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.appartments-filter {
  margin-bottom: 40px;
}
</style>

