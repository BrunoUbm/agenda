<template>
  <div>

    <HeaderFixed/>
    <FormularioAluno/>

  </div>
</template>

<script>
import HeaderFixed from '../components/partials/HeaderFixed.vue'
import FormularioAluno from 'src/components/FormularioAluno.vue';
export default{
  data(){
    return{
      leftDrawerOpen: false,
    }
  },
  components:{
    FormularioAluno,
    HeaderFixed
  }
}

</script>
