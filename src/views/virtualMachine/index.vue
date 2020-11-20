
<template>
  <div class="app-container">
    <el-row>
       
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>学件基础信息</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="120px" size="mini">
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="学件名称：">
                  <el-input
                    v-model="formData.xuejianName"
                    disabled
                    style="
                       {
                        width: '50%';
                      }
                    "
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item
                  label="对象类型："
                  label-width="120px"
                  size="mini"
                >
                  <el-select
                    disabled
                    v-model="formData.objectValue"
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

              <el-col :span="10">
                <el-form-item
                  label="数据粒度："
                  label-width="120px"
                  size="mini"
                >
                  <el-select
                    disabled
                    v-model="formData.shujulidu"
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

              <el-col :span="10">
                <el-form-item
                  label="指标名称(中文)："
                  label-width="120px"
                  size="mini"
                >
                  <el-input
                    disabled
                    v-model="formData.zhibiaoName"
                    style="
                       {
                        width: '50%';
                      }
                    "
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10">
                <el-form-item
                  label="指标单位："
                  label-width="120px"
                  size="mini"
                >
                  <el-input
                    disabled
                    v-model="formData.zhibiaodanwei"
                    style="
                       {
                        width: '50%';
                      }
                    "
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      
    </el-row>

    <!--    新增训练数据接入-->
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
          <el-form :model="formData" label-width="120px" size="mini">
            <el-row gutter="40">
              <el-col :span="10">
                <el-form-item size="mini" label="数值有效范围：">
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
                    <el-input
                    size="mini"
                      disabled
                       v-model="formData.shuzhirRangEnd"
                      style="
                         {
                          width: '40%';
                        }
                      "
                    ></el-input>
                  </el-col>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item
                  label="为空数据补数策略："
                  label-width="150px"
                  size="mini"
                >
                         <el-select
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

              <el-col :span="10">
                <el-form-item
                  label="重复数据处理策略："
                  label-width="150px"
                  size="mini"
                >
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
          <el-form :model="formData" label-width="120px" size="mini">
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="扩容原则">
               <el-radio disabled v-model="radio" label="1">就高原则</el-radio>
                  <el-radio disabled v-model="radio" label="2">就低原则</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="同步资源当前配额策略" label-width="160px">
                 <el-select
                    disabled
                    v-model="formData.tongbuyuanze"
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

              <el-col :span="10">
                <el-form-item label="缩容原则" label-width="120px">
                 <el-radio size="mini" disabled v-model="radio1" label="1">就高原则</el-radio>
                  <el-radio disabled v-model="radio1" label="2">就低原则</el-radio>
                </el-form-item>
              </el-col>


            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>

     <el-row style="margin-top: 20px">
      <el-card class="box-card-three">
        <div slot="header" class="clearfix">
          <span>模型训练高度</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="120px" size="mini">
            <el-row >
              <el-col :span="10">
                <el-form-item label="执行周期">
                     <el-radio disabled v-model="radio2" label="1">小时</el-radio>
                  <el-radio disabled v-model="radio2" label="3">日</el-radio>
                  <el-radio disabled v-model="radio2" label="2">周</el-radio>
                  <el-radio disabled v-model="radio2" label="4">月</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="每天">
                    <el-row :gutter="10">
                  <el-col span="6">
<!--                       <el-select-->
<!--                    disabled-->
<!--                    v-model="formData.week"-->
<!--                    placeholder=""-->
<!--                    :style="{ width: '100%' }"-->
<!--                  >-->
<!--                    <el-option-->
<!--                      v-for="item in objectOptions"-->
<!--                      :key="item.value"-->
<!--                      :label="item.label"-->
<!--                      :value="item.value"-->
<!--                    >-->
<!--                    </el-option>-->
<!--                  </el-select>-->
                  </el-col>
                  <el-col class="line" :span="1">    </el-col>
                  <el-col span="7">
                    <el-input
                    v-model="formData.time"
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
</template>

<script>
export default {
  data() {
    return {
      formData: {
        objectValue: "虚拟机",
        xuejianName: "虚拟机扩缩容",
        shujulidu: "1分钟",
        zhibiaoName: "虚机性能",
        zhibiaodanwei: "",
        shuzhirRangStart:'0',
        shuzhirRangEnd:'100',
        weikongshuju:'取前临近数据',
        tongbuyuanze:'取近一步同步结果',
        time:'07:00',
        week:'周一',
        biaoming:"os",
        kuming:"zhyypt_hive_db",
        sql:"select metric_name,ip,metric_value,gath_time from zhyypt_hive_db.os where" +
                " metric_name in('Memory_used_pct','CPU_pused')"
      },
      objectOptions: {},
      radio: "1",
      radio1:'2',
      radio2:'3'
    };
  },
};
</script>
<style scoped>
.box-card{
    height: 240px;
}
.box-card-one{
    height: 160px;
}
.box-card-two{
  height: 170px;
}
.box-card-three{
  height: 130px;
}
.box-card-four{
  height: 220px;
}
.test{
    color:aliceblue;
    background-color: aliceblue;
}
</style>