<template >
    <div id="#card" class="card">
        <img :src="usuario.image" :alt="usuario.id" class="img-card">
        <h3>{{usuario.name}}</h3>
        <p>{{usuario.status}}</p>
    </div>
</template>

<script>
    export default {    
        
        name: "cardComponent",
        props: {
            usuario: Object
        }

    }
</script>

<style lang="css" scoped>
    .body{
        background-color: red;
    }
    .img-card{
        width: 100%;
        height: auto;
    }
    .card{
        background: white;  
        border: 1px solid #0000;
        border-radius: 6px; 
        padding: 15px;
    }
</style>