<template>
    <div>
        <el-card class="box-card" :body-style="{ height: '100px' }">
            <el-form-item
                    label="语音文件"
                    prop="fileName"
            >
                <el-upload
                        id="audioUpload"
                        v-model="form.fileName"
                        class="avatar-uploader"
                        action=""
                        :http-request="httpRequestHandler"
                        :file-list="file_list"
                        :on-remove="handleRemove"
                        :limit="1"
                        :on-change="handleChange"
                        :before-upload="beforeAvatarUpload"
                >
                    <el-button slot="trigger" size="small" type="primary">上传</el-button>
                    <el-button v-if="form.fileName ? true : false" style="margin-left: 20px" @click="audioPlay">试听
                    </el-button>
                    <div slot="tip" class="el-upload__tip" style="margin-bottom: 10px">
                        不超过5MB，MP3格式
                    </div>
                </el-upload>
            </el-form-item>
            <div>
                <audio ref="audio" controls="" :src="music_path"/>
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
                music_path: '',
                buttonText: 'stop',
                is_play: false,
                file_list: [],
                httpRequestParams: {},
                cates: [],
                form: {
                    id: '',
                    categoryId: '',
                    fileName: '',
                    scene: ''
                },
                rules: {
                    categoryId: [
                        {required: true, message: this.$t('form.tipsNotNull'), trigger: ['blur']}
                    ],
                    fileName: [
                        {required: true, message: this.$t('form.tipsNotNull'), trigger: ['blur']}
                    ],
                    scene: [
                        {required: true, validator: validateScene, trigger: ['blur']}
                    ]
                }
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
            },
            reloadYP() {
                this.$refs.audio.src = this.music_path
            },
            beforeAvatarUpload(file) {
                console.log('file', file)
                // 文件类型进行判断
                console.log('file', file.name.substring(file.name.length - 3))
                // const isAudio = file.type === 'audio/mp3' || file.type === 'audio/mpeg'
                const isAudio = file.name.substring(file.name.length - 3) === 'mp3'
                console.log(isAudio, 'isAudio')
                // 限制上传文件大小 5M
                const isLt2M = file.size / 1024 / 1024 < 5
                // 获取时长
                this.getTimes(file)
                const isTime60S = this.audioDuration >= 60 ? true : ''
                console.log(isTime60S)

                if (!isAudio) {
                    this.$message.error('上传文件只能是Mp3格式!')
                    this.fileList = []
                } else {
                    if (!isLt2M) {
                        this.$message.error('上传文件大小不能超过 2MB!')
                        this.fileList = []
                    } else {
                        if (isTime60S) {
                            this.$message.error('上传文件时长不能超过60秒!')
                            this.fileList = []
                        }
                    }
                }
                return isAudio && isLt2M && isTime60S
            },
            getTimes(file) {
                var content = file
                // 获取录音时长
                var url = URL.createObjectURL(content) // 重点
                console.log(url)
                this.music_path = url
                this.reloadYP()
                // 经测试，发现audio也可获取视频的时长
                this.audioElement = new Audio(url)
                this.audioElement.addEventListener('loadedmetadata', (_event) => {
                    console.log(12312321)
                    this.audioDuration = parseInt(this.audioElement.duration)
                    console.log(this.audioDuration)
                })
            },
            audioPlay() {
                this.audioElement.play()
            },
            handleChange(file, fileList) {
                // this.audioForm.fileList = fileList.slice(-3)
            },
            handleRemove(file, fileList) {
                this.form.fileName = ''
            },
            httpRequestHandler(res) {
                console.log('res', res)
                this.form.fileName = res.filename
                const fd = new FormData()
                fd.append('file', res.file)
                this.httpRequestParams = fd
            },
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
