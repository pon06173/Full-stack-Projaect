<template>
    <Header></Header>
    <div>
        <router-view/>
    </div>
    <div>여긴 푸터자리</div>
</template>

<script>
    import Header from '../layout/Header.vue';
    import Main from './main/main.vue';

    const App = {
        data: () => {
            dataTest: 2
            dataTest2: 2
        },
        methods: {
            
        },
        watch: {
            dataTest: function (oldValue, newValue) {
                
            }
        },
        computed: {
            dataTestAdd: function () {
                return dataTest + dataTest2;
            }
        },
        components: {
            'Header': Header,
            'Main': Main,
        },
        mounted: () => {
            console.log("App.vue가 초기화됨");
        }
    }

    export default App;
</script>