
<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>学件基础信息</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="medium">
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="活动名称">
                  <el-input
                    style="
                       {
                        width: '50%';
                      }
                    "
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="活动名称">
                  <el-input></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="活动名称">
                  <el-input></el-input>
                </el-form-item>
              </el-col>

                            <el-col :span="10">
                <el-form-item label="活动名称">
                  <el-input></el-input>
                </el-form-item>
              </el-col>

                            <el-col :span="10">
                <el-form-item label="活动名称">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      formData: {},
    };
  },
};
</script>
<style scoped>
</style>