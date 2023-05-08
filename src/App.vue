<template>
    <div id="app">
        <div class='container'>
            <div class="divContent">
                <div class="div1">
                    <fly-header/>
                </div>
                <div class="div2">
                    <fly-main/>
                </div>
                <div class="div3">
                    <fly-footer/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import FlyHeader from "./components/FlyHeader"
    import FlyFooter from "./components/FlyFooter"
    import FlyMain from "./components/FlyMain"

    export default {
        name: 'App',
        components: {
            FlyMain,
            FlyFooter,
            FlyHeader
        },

        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                msg: '',
                a: 0,
                fileList: [],
            }
        },
        methods: {}
    }

</script>


<style scoped lang='scss'>

    .container {
        height: 100vh;
        width: 100%;

        .divContent {
            height: 100%;
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }

        .div2 {
            flex: 1;
        }

        .div1, .div3 {
            height: 60px;
        }
    }

</style>
