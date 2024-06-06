<script>
import HeaderComponent from "@/components/Header.vue";
import SupermarketComponent from "@/components/SupermarketComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
  components: {SupermarketComponent, HeaderComponent, FooterComponent},
};
</script>

<template>
  <main>
    <HeaderComponent/>
    <SupermarketComponent/>
    <FooterComponent/>
  </main>
</template>
