<template>
    <v-app>
        <h1>Cards Users</h1>
        <v-row>
            <v-col
            v-for="n in data"
            :key="n"
            cols="12"
            xs="6"
            sm="5"
            md="4"
            lg="3"
            xl="2"
            >
                <CardUsers :card="n"></CardUsers>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import CardUsers from "@/components/CardUsers"

    export default {
        name: "Cards",
        computed:{
            data(){
                return this.$store.state.data
            },
            italicTitle(){
                return this.$store.getters.italicTitle
            }
        },
        components: {
            CardUsers,
        },
        methods: {
        },
        created(){
            this.$store.dispatch("fetchData")
        }
    }
</script>