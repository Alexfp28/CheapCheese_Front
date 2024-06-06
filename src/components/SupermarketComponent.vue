<script>
import CheapCheeseService from "@/services/CheapCheeseService.js";

export default {
  name: "SupermarketComponent",
  data() {
    return {
      supermercados: [],
      layout: 'grid'
    }
  },
  methods: {
    async getSupermercados() {
      let response = await CheapCheeseService.getSupermarkets();
      this.supermercados = response.data;
      console.log(response.data);
    }
  },
  created() {
    this.getSupermercados();
  }
}
</script>

<template>
  <span class="font-medium text-5xl flex justify-content-center mt-5">Patrocinadores</span>
  <!--Carousel de los últimos quesos a la venta-->
  <Carousel :value="supermercados" :numVisible="4">
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2  p-3">
        <div class="mb-3">
          <div class="relative mx-auto flex justify-content-center">
            <img :src="`${slotProps.data.imagen}`" :alt="slotProps.data.nombre" class="w-full border-round"
                 style="max-width: 250px; max-height:126px; "/>
          </div>
        </div>
        <div class="mb-3 font-medium">
          {{ slotProps.data.nombre }}
        </div>
        <div class="flex justify-content-center align-items-center mx-auto">
          <span>
          <RouterLink to="#about" class="decoration">
            <Button label="Más Información..." class="ml-2" />
          </RouterLink>
          </span>
        </div>
      </div>
    </template>
  </Carousel>

  <!-- <div class="card flex flex-column align-items-center" >
      <div class="h-5rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <img src="../assets/logo.png" style="width: 200px;">
        </div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center animation-duration-1000">
          <span class="text-4xl">
            Bienvenidos a CheapCheese
          </span>  
        </div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mr-8 ml-8 mt-4 flex justify-content-center h-10rem animation-duration-1000">
          <span class="text-900">
            En un mundo donde la calidad y el ahorro son esenciales, CheapCheese emerge como tu aliado perfecto para encontrar 
            las mejores ofertas en productos lácteos. ¿Eres un amante del queso? ¿Buscas siempre la mejor relación calidad-precio? 
            ¡Estás en el lugar indicado!
            <br><br>
            CheapCheese es una innovadora aplicación diseñada para ayudarte a comparar precios de productos lácteos en diversos 
            supermercados. 
            <br><br>
            Ya sea que estés buscando quesos curados, quesos frescos, quesos rallados o cualquier otro producto lácteo,
            nuestra plataforma te ofrece una manera sencilla y eficiente de encontrar las mejores ofertas disponibles en el mercado.
          </span>
        </div>
    </div> -->
</template>