<template>
    <div class="about">
        <h1>About</h1>
    </div>
    <div v-if="lista.length > 10"> <!-- validar si hay elementos en la lista--->
        <p>Hay más de 10 elementos</p>
    </div>
    <div class="grid-container">
        <div v-for="item in lista" :key="item.id">
            <!-- <div class="item card">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <p>Elemento</p>
            </div> -->

        <!-- Componente personalizado con propiedades -->
            <cardComponent :usuario="item"/>
        </div>

    </div>
</template>

<script>
import cardComponent from "../components/CardComponent.vue";

export default {
    // Defincion de propiedades del component
    name: 'aboutComponent',
    components:{cardComponent}, //componetes que contiene
    data(){
        return  {errorMessage: '',
        lista:[]
        }
    },
    // metods del component
    methods: {
        fetchData(){
            fetch('https://rickandmortyapi.com/api/character')
           .then(response => response.json())
           .then(data => {
                console.log(data);
                this.lista = data.results;
            })
           .catch(error => console.error('Error:', error))
        }
    },
    created() {
        this.fetchData();
    }   
}
</script>

<style>
    body{
        background-color: #ebebeb;
    }
    .grid-container{
        width: 80%;
        margin: auto auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        padding: 10px;
    }

    .card{
        border: 1px solid #0000;
        background-color: white;
        padding: 10px;
        border-radius:8px; 
    }
</style>