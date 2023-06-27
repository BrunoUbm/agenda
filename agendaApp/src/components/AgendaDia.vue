<template>
    <div>
        <div class="main">
            <div class="date">
                <h2>Selecionar data</h2>
                <input type="date" @input="SelectDate" v-model="dateToday">
            </div>
            <div class="agenda">
                <h1>Agenda do dia:</h1>
                <h3>{{ InvertDate }}</h3>
            </div>
        </div>
        <div class="AgendaDate">

        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            dateToday: '',
            InvertDate: '...'
        }
    },

    methods:{
        SelectDate(){
            const date = this.dateToday.split('-')
            this.InvertDate = `${date[2]}/${date[1]}/${date[0]}`
        }
    }
}

</script>

<style scoped>
.date, .agenda{
    width: 50%;
    margin-top: 160px;
    text-align: center;
}


.main{
    display: flex;
    width: 100%;
}

.AgendaDate{
    margin-top: 50px;
    padding-top: 50px;
    border-top: solid;
}

h2{
    margin-bottom: 30px;
}

h1, h2{
    font-size: 70px;
    font-weight: bolder;
    color: white;
}

h3{
    font-size: 50px;
    color: white;
}

input{
    width: 250px;
    font-size: 30px;
}
</style>