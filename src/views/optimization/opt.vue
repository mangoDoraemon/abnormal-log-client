<template>
  <!--    存储资源优化-->
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
                <el-form-item label="学件名称">
                  <el-input size="mini"
                    style="
                       {
                        width: '50%';
                      }
                    "
                    placeholder="存储资源优化"
                    disabled
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="对象类型">
                  <el-input size="mini" placeholder="HDFS" disabled></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="数据粒度">
                  <el-input size="mini" placeholder="1分钟" disabled></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="指标名称">
                  <el-input size="mini" placeholder="HDFS存储" disabled></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item label="指标单位">
                  <el-input size="mini"
                    style="
                       {
                        width: '30%';
                      }
                    "
                    placeholder="GB"
                    disabled
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>
      <el-row style="margin-top: 20px">
          <el-card class="box-card-four">
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
      <el-row style="margin-top: 20px">
      <el-card class="box-card-one">
        <div slot="header" class="clearfix">
          <span>训练处理数据</span>
        </div>

        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="120px" size="medium">
            <el-row gutter="40">
              <el-col :span="10">
                <el-form-item label="数值有效范围：">
                  <el-col span="10">
                    <el-input
                    size="mini"
                      disabled
                      v-model="formData.shuzhirRangStart"
                      style="
                         {
                          width: '400%';
                        }
                      "
                    ></el-input>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col span="10">
                    <el-input size="mini"
                      disabled
                      style="
                         {
                          width: '40%';
                        }
                      "
                    ></el-input>
                  </el-col>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item
                  label="数据保留小数位数："
                  label-width="150px"
                  size="medium"
                >
                  <el-select size="mini"
                    disabled
                    v-model="formData.weikongshuju"
                    placeholder="请选择"
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
            </el-row>
            <el-row gutter="40">
              <el-col :span="10">
                <el-form-item
                  label="数据采样处理策略："
                  label-width="150px"
                  size="medium"
                >
                  <el-select size="mini"
                    disabled
                    v-model="formData.shujulidu"
                    placeholder="请选择"
                    :style="{ width: '30%' }"
                  >
                    <el-option
                      v-for="item in objectOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  &nbsp;
                  <el-radio disabled v-model="radio" label="1">最大值</el-radio>
                  <el-radio disabled v-model="radio" label="2">最小值</el-radio>
                  <el-radio disabled v-model="radio" label="3">平均值</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>

      <el-row style="margin-top: 20px">
      <el-card class="box-card-two">
        <div slot="header" class="clearfix">
          <span>模型训练规则</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="120px" size="medium">
            <el-row gutter="50">
              <el-col :span="10">
                <el-form-item label="基线对比类型:" label-width="160px">
                  <el-select
                  size="mini"
                    disabled
                    v-model="formData.tongbuyuanze"
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
              <el-col :span="10">
                <el-form-item label="容量基线" label-width="75px">
                  <el-radio disabled v-model="radio" label="2"
                    >基线低线</el-radio
                  >

                  <!--                                        <el-form-item label="基线低线" label-width="75px">-->
                  <el-input size="mini" :style="{ width: '20%' }" disabled> </el-input>
                    &nbsp;
                  <!--                                        </el-form-item>-->
                  <el-radio disabled v-model="radio" label="1"
                    >基线高线</el-radio
                  >
                  <!--                                        <el-form-item label="基线高限" label-width="75px">-->
                  <el-input size="mini"
                    placeholder="40743562"
                    disabled
                    :style="{ width: '30%' }"
                  >
                  </el-input>
                  <!--                                        </el-form-item>-->
                </el-form-item>
              </el-col>
            </el-row>
            <el-row gutter="50">
              <el-col :span="10">
                <el-form-item label="预测周期长度:" label-width="160px">
                  <el-select
                  size="mini"
                    disabled
                    v-model="formData.jidu"
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

              <el-col :span="5">
                <el-form-item label="容量占比" label-width="75px">
                     <el-input size="mini" class="box1" :disabled="true" v-model="formData.baifen">
                      <template slot="append">%</template>
                   </el-input>
                  <!-- <el-input size="mini"
                    disabled
                    v-model="formData.baifen"
                    :style="{ width: '50%' }"
                  >
                  </el-input
                  >% -->
                </el-form-item>
              </el-col>
              <el-col :span="8"> </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>

<!--     模型训练调度-->
    <el-row style="margin-top: 20px">
            <el-card class="box-card-three">
                
        <div slot="header" class="clearfix">
                    <span>模型训练调度</span>         
        </div>
                
        <div style="margin-bottom: 50px">
                    <el-form :model="formData" label-width="80px" size="medium">
                        <el-row gutter="250">
                            <el-col :span="10">
                                <el-form-item
                  label="执行周期:"
                  label-width="100px"
                >
                                    
                  <div>
                                       <el-radio disabled v-model="radio" label="4"
                      >小时</el-radio
                    >
                                      <el-radio disabled v-model="radio" label="2"
                      >日</el-radio
                    >
                                      <el-radio disabled v-model="radio" label="3"
                      >周</el-radio
                    >
                                      <el-radio disabled v-model="radio" label="1"
                      >月</el-radio
                    >
                                      
                  </div>
                                  </el-form-item
                >
                              </el-col
              >
                                         <el-col :span="8">
                                <el-form-item label="每月">
                                      <el-row :gutter="6">
                                      <el-col span="5">
                                          <el-input
                        disabled
                        size="mini"
                        v-model="formData.shuzhirRangStartWeek"
                        style="
                         {
                          width: '400%';
                        }
                      "
                      ></el-input>
                                        </el-col
                    >
                                      <el-col class="line" :span="3"
                      >    </el-col
                    >
                                      <el-col span="10">
                                          <el-input
                        suffix-icon="el-icon-date"
                        placeholder="01:00"
                        disabled
                        size="mini"
                        style="
                                                 {
                                                  width: '40%';
                                                }
                              "
                      ></el-input>
                                        </el-col
                    ></el-row
                  >
                                  </el-form-item
                >
                              </el-col
              >
                          </el-row
            >
                                  </el-form
          >
                  
        </div>
              </el-card
      >
          </el-row
    >
      
  </div>
</template>


<script>
export default {
  data() {
    return {
      formData: {
          objectValue: "虚拟机",
          xuejianName: "虚拟机扩缩容",
          shujulidu: "1天",
          zhibiaoName: "虚机性能",
          zhibiaodanwei: "",
          shuzhirRangStart: "0",
          shuzhirRangEnd: "100",
          weikongshuju: "3位",
          tongbuyuanze: "上限",
          jidu: "1个季度",
          baifen: "80",
          biaoming:"capacity_history_data_zj",
          shuzhirRangStartWeek: 1,
          kuming:"aiops_ns3_hive_db_new",
          sql:"select obj_name,index_name,value,data_time from\n" +
              "aiops_ns3_hive_db_new.capacity_history_data_zj where index_name in\n" +
              "('cpu','memory')"
      },
      objectOptions: {},
      radio: "1",
      radio1: "2",
    };
  },
};
</script>
<style scoped>
.box-card{
    height: 240px;
}
.box-card-one{
    height: 185px;
}
.box-card-two{
  height: 185px;
}
.box-card-three{
  height: 130px;
}
.box-card-four{
    height: 220px;
}
</style>




