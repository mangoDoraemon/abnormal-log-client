
<template>
 <div class="app-container">
<div>
  <!-- 卡片一 -->
 
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>学件基础信息</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini">
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="学件名称:">
                      <el-input class="box1" placeholder="计算资源优化" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="对象类型:"  label-width="80px">
                   <el-select v-model="value" placeholder="租户队列" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="租户队列"
                       
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="数据粒度:">
                    <el-select v-model="value" placeholder="1分钟" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="1分钟"
                       
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
              </el-col>
            <el-col :span="10">
                <el-form-item label="指标名称(中文):" label-width="120px" >
                  <el-input class="box1" :disabled="true" placeholder="租户资源"></el-input>
                </el-form-item>
              </el-col>

                            <el-col :span="10">
                <el-form-item label="指标单位:">
                   <el-input class="box1" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>
</div>

<!--    新增训练数据接入-->
<div>
    <el-row >
        <el-card class="box-card-4">
            <div slot="header" class="clearfix">
                <span>训练数据接入</span>
            </div>
            <div style="margin-bottom: 50px">
                <el-form :model="formData" label-width="120px" size="medium">

                    <el-row gutter="250">
                        <el-col :span="10">
                            <el-form-item label="数据源库名:" label-width="100px">
                                <el-select
                                        size="mini"
                                        disabled
                                        v-model="formData.kuming"
                                        placeholder="请选择"
                                        :style="{ width: '50%' }"
                                >
                                    <el-option
                                            v-for="item in objectOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="数据源表名" label-width="100px">
                                <el-input size="mini" class="box1" :disabled="true" v-model="formData.biaoming"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row gutter="50">
                        <el-col :span="10">
                            <el-form-item label="数据提取SQL:" label-width="100px">
                                <el-input
                                        disabled
                                        type="textarea"
                                        autosize
                                        placeholder="请输入内容"
                                        v-model="formData.sql">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-card>
    </el-row>
</div>
<!-- 卡片二 -->
<div>
<el-row>
      <el-card class="box-card2">
        <div slot="header" class="clearfix">
          <span>训练数据处理</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="20">
              <el-col :span="5">
                <el-form-item label="数据保留小数位数:" label-width="160px">
                    <el-select
                    disabled
                    v-model="formData.objectValue"
                    placeholder="3位"
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="item in objectOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="10" style="margin-left: 300px">
               <el-form-item label="CPU使用率" label-width="100px">
                <el-row :gutter="6">
                  <el-col span="10">
                   <el-select v-model="value" placeholder="CPU使用量" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="CPU使用量"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col class="line" :span="1">/</el-col>
                  <el-col span="10">
                    <el-select v-model="value" placeholder="CPU配额" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="CPU配额"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col></el-row>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="重复数据处理策略:" label-width="160px">
                  <div>
                   <el-radio v-model="radio" label="1" :disabled="true">最大值</el-radio>
                  <el-radio v-model="radio" label="2" :disabled="true">最小值</el-radio>
                  <el-radio v-model="radio" label="3" :disabled="true">平均值</el-radio>
                  </div>
                </el-form-item>
              </el-col>
                <el-col style="margin-left: 15px" :span="10">
                <el-form-item label="内存使用率" label-width="100px">
                    <el-row :gutter="6">
                  <el-col span="10">
                   <el-select v-model="value" placeholder="内存使用量" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="内存使用量"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col class="line" :span="1">/</el-col>
                  <el-col span="10">
                    <el-select v-model="value"  placeholder="CPU配额" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="CPU配额"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  </el-row>
                </el-form-item>
              </el-col>
            </el-row>

          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
  <!-- 卡片三 -->
<div>
<el-row>
      <el-card class="box-card3">
        <div slot="header" class="clearfix">
          <span>模型训练规则</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="资源使用率阈值低限:" label-width="160px">
                  <el-input class="box1" :disabled="true" placeholder="30">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="9">
                <el-form-item label="资源回收的超限占比:" label-width="160px" placeholder="80">
                   <el-input class="box1" :disabled="true" placeholder="80">
                      <template slot="append">%</template>
                   </el-input>
                   <!-- <el-input class="box2" :inline="true"></el-input> -->
                </el-form-item>
              </el-col>
            </el-row>
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="滑动时间窗口大小:" label-width="160px">
                 <el-input class="box1" :disabled="true" placeholder="1">
                    <template slot="append">天</template>
                 </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>

  <!-- 卡片四 -->
<div>
<el-row>
      <el-card class="box-card4">
        <div slot="header" class="clearfix">
          <span>模型训练调度</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="执行周期:" label-width="100px">
                  <div>
                   <el-radio v-model="radio" label="1" :disabled="true">小时</el-radio>
                  <el-radio v-model="radio" label="2" :disabled="true">日</el-radio>
                  <el-radio v-model="radio" label="3" :disabled="true">周</el-radio>
                  <el-radio v-model="radio" label="4" :disabled="true">月</el-radio>
                  </div>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="每周">
                    <el-row :gutter="6">
                  <el-col span="6">
                    <el-select v-model="value"  placeholder="周一" :disabled="true"  :style="{ width: '100%' }">
                      <el-option
                      placeholder="CPU配额"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col class="line" :span="3">    </el-col>
                  <el-col span="6">
                    <el-input
                    placeholder="02:30"
                    suffix-icon="el-icon-date"
                      disabled
                      style="
                         {
                          width: '40%';
                        }
                      "
                    ></el-input>
                  </el-col></el-row>
                </el-form-item>
              </el-col>
            </el-row>

          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      input: "",
      formData: {
          biaoming:"os",
          kuming:"zhyypt_hive_db",
          sql:"select metric_name,ip,metric_value,gath_time from zhyypt_hive_db.os where metric_name in('CPU_util_pct','Memory_used_pct')"
      },
      cities: [{
          value: '1',
          label: '0.5分钟'
        }, {
          value: '2',
          label: '1分钟'
        }, {
          value: '3',
          label: '2分钟'
        }, {
          value: '4',
          label: '5分钟'
        }, {
          value: '5',
          label: '10分钟'
        }, {
          value: '6',
          label: '15分钟'
        },
        {
          value: '7',
          label: '30分钟'
        },{
          value: '8',
          label: '1小时'
        },{
          value: '9',
          label: '1天'
        }],
        value6: '',
        radio: '1'
    };
  },
};
</script>
<style scoped>
    .box1{
         width: '50%';

    }
    .box2{
        width: '25%';
       float: left;
    }
    .box-card-four{
        border-width: 0px;
        height: 220px;
        margin-top: 20px;

    }
     .box-card {
    border-width: 0px;
    margin-top: 20px;
    height: 250px;
  }
   .box-card2 {
    border-width: 0px;
       margin-top: 20px;
    height: 180px;
  }
  .box-card-4{
  border-width: 0px;
    margin-top: 20px;
    height: 250px;
  }
   .box-card3 {
    border-width: 0px;
   margin-top: 20px;
    height: 180px;
  }
   .box-card4 {
    border-width: 0px;
    margin-top: 20px;
    height: 150px;
  }
  .bg-purple {
    background: #feffff;
  }
  .bg-purple-light {
    background: #f8f9fc;
  }
  .grid-content {
    width: 100px;
  }
</style>