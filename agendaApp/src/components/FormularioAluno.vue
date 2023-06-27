<template>
    <div>
        <div class="main">
            <div class="table">
                <div class="column">
                    <p>Nome: </p>
                    <input type="text" placeholder="Digite o nome do aluno..." v-model="nome">
                </div>
                <div class="column">
                    <p>Instrumento: </p>
                    <select v-model="instrumento">
                        <option value="">Selecionar</option>
                        <option v-for="res, i in instrumentos" :key="i" :value="res">{{ res }}</option>
                    </select>
                </div>
                <div class="column">
                    <p>Dia da Aula: </p>
                    <input type="date" v-model="dia">
                </div>
                <div class="column">
                    <p>Horário: </p>
                    <select v-model="horario">
                        <option value="">Selecionar</option>
                        <option v-for="res, i in horarios" :key="i" :value="res">{{ res }}</option>
                    </select>
                </div>
                <div class="column">
                    <p>Início: </p>
                    <input type="date" v-model="inicio">
                </div>
            </div>
            <div class="table">
                <div class="column">
                    <p>Nascimento: </p>
                    <input type="date" v-model="nascimento">
                </div>
                <div class="column">
                    <p>Telefone: </p>
                    <input type="text" v-model="telefone">
                </div>
                <div class="column">
                    <p>vencimento: </p>
                    <input type="date" v-model="vencimento">
                </div>
                <div class="column">
                    <p>Valor: </p>
                    <input type="text" v-model="preco">
                </div>
            </div>
        </div>
        <div class="obs">
            <div class="observacoes">
                <p>
                    Observações: 
                </p>
                <div>
                    <textarea v-model="observacoes" rows="8"></textarea>
                </div>
            </div>
        </div>
        <div class="btns">
            <button>
                Cadastrar
            </button>
            <button>
                Limpar
            </button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            instrumento: '',
            instrumentos: ["violao", "teclado", "bateria", "baixo", "guitarra"],
            horarios: ['12:00', '13:00', '14:00', '15:00', '16:00'],
            horario: '',
            nome: '',
            dia: '',
            inicio: '',
            observacoes: ''
        }
    },
    watch: {
        instrumento(newValue){
            console.log(newValue);
        },
        horario(newValue){
            console.log(newValue);
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
}

.column{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
}

p{
    font-size: 30px;
    color: white;
    font-weight: bolder;
}

input{
    width: 50%;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 10px;
}
select{
    width: 50%;
    font-size: 25px;
    text-align: center;
    border-radius: 10px;
}
option{
    padding: 10px;
}

.table{
    width: 50%;
    padding: 70px;
    margin-top: 120px;
}

.obs{
    width: 80%;
    margin: 0 auto;
}

.observacoes{
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
}

textarea{
    width: 80vh;
    resize: none;
}

.btns{
    padding: 50px 0;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

button{
    font-size: 25px;
    padding: 15px 0;
    width: 200px;
    border: none;
    border-radius: 10px;
    font-weight: bolder;
    background-color: rgb(248, 0, 153);
}
</style>