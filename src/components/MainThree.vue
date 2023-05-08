<template>
    <div>
        <el-card class="box-card" :body-style="{ height: '100px' }">
            <div class="ask">
                <div>
                    <div>
                        <audio ref="audio" controls="" :src="music_path"/>
                    </div>
                    <div>
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="#"
                                :on-change="uploadChange"
                                :auto-upload="false">
                            <el-button style="height: 50px;width: 100px"
                                       type="primary"
                                       @click="search">上传文件
                            </el-button>
                        </el-upload>
                    </div>
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

    // import https from '@/api/https'

    export default {
        name: "MainThree",
        data() {
            return {
                textarea: '',
                msg: '',
                music_path: `../img/124.m4a`,
            }
        },
        methods: {
            uploadChange(file) {
                console.log(file)
                // let formData = new FormData();
                // formData.append("file", file.raw);
                // https.uploadPost('/radio_text', formData).then((res) => {
                //     console.log(res)
                //     this.msg = res.data.msg;
                // }).catch(err => {
                //         console.log(err)
                //     }
                // )
                // let content = file
                // let url = URL.createObjectURL(content);
                // this.music_path = url;
                // this.$refs.audio.src = this.music_path
            },
            audioPlay() {
                console.log("播放")
                this.audioElement.play()
            },
        }

    }
</script>

<style scoped lang="scss">
    .ask {
        width: 100%;
        display: flex;
        justify-content: right;
        align-items: center;

        & > div {
            display: flex;

            & > div:first-child {
                margin-right: 10px;
            }
        }
    }

    .answer {
        margin-top: 20px;
    }
</style>
