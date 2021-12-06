<template>
    <v-app>
        <h1>Cards</h1>
        <v-row>
            <v-col
            v-for="n in cards"
            :key="n"
            cols="12"
            xs="6"
            sm="5"
            md="4"
            lg="3"
            xl="2"
            >
                <CardPlaces :card="n"></CardPlaces>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import CardPlaces from "@/components/CardPlaces"

    export default {
        name: "Cards",
        computed:{
            cards(){
                return this.$store.state.cards
            }
        },
        components: {
            CardPlaces,
        },
        methods: {
        },
        created(){
            this.$store.dispatch("fetchData")
        }
    }
</script>