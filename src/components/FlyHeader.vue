<template>
    <!--科大讯飞头部-->
    <div class="fly-header">
        <div>
            <img src="../img/xunfei.png">
        </div>
        <div>
            <el-menu mode="horizontal"
                     :default-active="activeIndex"
                     class="el-menu-demo"
                     @select="handleSelect"
            >
                <el-menu-item index="1">普通文本</el-menu-item>
                <el-menu-item index="2">图片</el-menu-item>
                <el-menu-item index="3">音频</el-menu-item>
                <el-menu-item index="4">接入说明</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlyHeader",
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key) {
                if (key == 1)
                    this.$router.push('/')
                else if (key == 2)
                    this.$router.push('/second')
                else if (key == 3)
                    this.$router.push('/three')
                else if (key == 4)
                    this.$router.push('/four')
            }
        }
    }
</script>

<style scoped lang='scss'>

    .fly-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        height: 60px;
        border-bottom: 1px solid #e6e6e6;

        & > div:first-child {

            & > img {
                height: 30px;
            }

        }
    }

</style>
