<template>
    <div>
        <HeaderFixed/>
        <AgendaDia/>
    </div>
</template>

<script>
import HeaderFixed from 'src/components/partials/HeaderFixed.vue';
import AgendaDia from '../components/AgendaDia.vue'
export default{
    components: {
        AgendaDia,
        HeaderFixed
    }
}
</script>