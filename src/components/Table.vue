<script setup>
import {ref, watchEffect} from "vue";

const comments = ref([])

watchEffect( () => {
    setTimeout(async() => {
        const response = await fetch('src/comments.json')
        comments.value = await response.json();
    }, 1000)
})

</script>

<template>
    <table v-if="comments.length">
        <thead>
        <tr>
            <th>
                Nombre
            </th>
            <th>
                Email
            </th>
            <th>
                Comentario
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="{name, email, comment} in comments">
            <td>{{name}}</td>
            <td>{{email}}</td>
            <td>{{comment}}</td>
        </tr>
        </tbody>
    </table>
    <div v-else>
        <div class="spinning-icon">
            <div class="load-icon"/>
        </div>
    </div>
</template>

<style scoped>
table {
    max-width: 800px;
    border-bottom: 1px solid #2c3e50;
    border-collapse: collapse;
    margin: 16px 0;
}

th, td {
    border-bottom: 1px solid #2c3e50;
    text-align: left;
    padding: 8px;
}

th {
    min-width: 150px;
    font-weight: 600;
    color: #2c3e50;
}

@keyframes circle-rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.spinning-icon{
    width: 40px;
    height: 40px;
    margin: 16px 0;
}

.load-icon {
    width: 100%;
    height: 100%;
    border: 3px solid #e0fbfc;
    border-radius: 50%;
    position: relative;
    z-index: 5;

    &:after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-left: 3px solid transparent;
        border-right: 3px solid #2c3e50;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        animation: circle-rotate .80s both linear infinite;
    }
}
</style>