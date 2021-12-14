<template>
    <div>
      Home
      <div class="row justify-center" v-for="(company, index) in companies.data" :key="index">
          <ol class="col-6">
            <li data-target="#">
              <img
                v-if="company.image" 
                  :alt="company.name" 
                  :src="company.image">
              <img
                v-else
                  :alt="company.name" 
                  src="@/assets/images/logo-seo-original.png" width="60">
              {{ company.name }}
            </li>
            <li data-target="#"></li>
          </ol>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  mounted() {
    this.getCompanies()
          .catch(response => this.$vToastify.error('Falha ao carregar Empresas!!!'))    
  },

  computed: {
    // companies() {
    //   return this.$store.state.companies.items
    // }
    ...mapState({
      companies: state => state.companies.items
    })
  },

  methods: {
    ...mapActions([
      'getCompanies'      
    ])
  }
}
</script>
