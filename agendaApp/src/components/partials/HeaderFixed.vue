<template>
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" @click="toggleLeftDrawer" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      <div class="iconMusic">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>
      </div>
    </header>

    <div :class="{'boxTop': !leftDrawerOpen, 'boxAnimation': leftDrawerOpen}">
      <RouterLink class="route" to="/">Agenda</RouterLink>
      <RouterLink class="route" to="/cadastro">Cadastro</RouterLink>
    </div>
</template>

<script>
export default{
  data(){
    return{
      leftDrawerOpen: false,
    }
  },
  methods: {
    toggleLeftDrawer(){
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}


header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 50px;
  background-color: rgb(27, 9, 44);
  width: 100%;
  position: fixed;
}

.route{
  text-decoration: none;
  font-size: 25px;
  text-align: center;
  padding: 10px;
}

.icon{
  width: 40px;
}

svg{
  fill: rgb(154, 97, 192);
}
.iconMusic{
  padding: 15px;
  box-shadow: 0 0 10px 10px rgb(107, 64, 136);
  border-radius: 50%;
  background-color: transparent;
  backdrop-filter: blur(20px);
}

.boxTop{
  margin-top: 135.5px;
  width: 300px;
  background-color: rgb(27, 9, 44);
  transform: translateX(-100%);
  transition: 0.5s;
  position: fixed;
  border-bottom-right-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.boxAnimation{
  margin-top: 135.5px;
  width: 300px;
  background-color: rgb(27, 9, 44);
  transform: translateX(0%);
  transition: 0.5s;
  position: fixed;
  border-bottom-right-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
} 
</style>

