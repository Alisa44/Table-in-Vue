<script setup>

</script>

<template>
    <ul class="nav">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/comments">Comentarios</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>

<style scoped>
ul {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    font-size: 16px;
}

li:not(:last-of-type) {
    margin-right: 1rem;
}
</style>
