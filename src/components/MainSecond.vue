<template>
    <div>
        <el-card class="box-card" :body-style="{ height: '100px' }">
            <div class="ask">
                <div>
                    <el-input
                            type="textarea"
                            :rows="3"
                            placeholder="请输入内容"
                            v-model="textarea">
                    </el-input>
                </div>
                <div>
                    <el-button style="height: 70px;width: 100px"
                               type="primary"
                               @click="search">
                        代码修改
                    </el-button>
                </div>
            </div>
        </el-card>

        <div class="answer">
            <el-card class="box-card" :body-style="{ height: '350px'}">
                {{msg}}
            </el-card>
        </div>
    </div>
</template>

<script>

    import https from '@/api/https'

    export default {
        name: "MainSecond",
        data() {
            return {
                textarea: '',
                msg: ''
            }
        },
        methods: {
            search() {
                console.log("input2")
                https.fetchPost('/change_code', {"msg": this.textarea}).then((res) => {
                    console.log(res)
                    this.msg = res.data.msg;
                }).catch(err => {
                        console.log(err)
                    }
                )
            }
        }

    }
</script>

<style scoped lang="scss">
    .ask {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > div:first-child {
            width: 90%;
        }

    }

    .answer {
        margin-top: 20px;
    }
</style>
