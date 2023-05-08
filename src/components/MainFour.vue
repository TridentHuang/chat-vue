<template>
    <div>
        <div>
            <div>
                <h4>第一步</h4>
            </div>
            <el-card class="box-card">
                <div class="four-title">
                    <div>
                        接入API首先需要去OpenAI官网申请账号和 Api-key
                    </div>
                    <div>
                        <a href="https://platform.openai.com/docs/api-reference" target="_blank">
                            https://platform.openai.com/docs/api-reference
                        </a>
                    </div>
                    <div class="img-one">
                        <img src="../img/apiKey2.jpeg" alt="">
                    </div>
                </div>
            </el-card>
            <div>
                <h4>第二步</h4>
            </div>
            <el-card class="box-card">
                <div class="four-title">
                    <div>
                        <p>对接接口</p>
                        <p>对接接口可以自己封装，也可以直接引用开源库</p>
                    </div>
                    <div class="img-one">
                        <img src="../img/yingyong.png" alt="">
                    </div>
                </div>
            </el-card>
            <div>
                <h4>第三步</h4>
            </div>
            <el-card class="box-card">
                <div class="four-title">
                    <div>
                        方法调用
                    </div>
                    <div>
                        <a href="https://platform.openai.com/docs/api-reference/images/create" target="_blank">
                            https://platform.openai.com/docs/api-reference
                        </a>
                    </div>
                    <div class="img-three">
                        <img src="../img/fanfa.png" alt="">
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>


    export default {
        name: "MainSecond",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">

    .four-title {
        & > div {
            margin-bottom: 10px;
        }

        .img-one {
            img {
                margin-top: 20px;
                height: 130px;
            }
        }

        .img-three {
            img {
                margin-top: 20px;
                height: 230px;
            }
        }
    }

</style>
