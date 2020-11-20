
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
        
      <el-card class="box-card">
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
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>模型训练高度</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="120px" size="mini">
            <el-row >
              <el-col :span="10">
                <el-form-item label="执行周期">
                     <el-radio disabled v-model="radio2" label="1">小时</el-radio>
                  <el-radio disabled v-model="radio2" label="2">日</el-radio>
                  <el-radio disabled v-model="radio2" label="3">周</el-radio>
                  <el-radio disabled v-model="radio2" label="4">月</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="每周">
                    <el-row :gutter="6">
                  <el-col span="10">
                    <el-input
                      disabled
                      v-model="formData.shuzhirRangStart"
                      style="
                         {
                          width: '400%';
                        }
                      "
                    ></el-input>
                  </el-col>
                  <el-col class="line" :span="3">    </el-col>
                  <el-col span="10">
                    <el-input
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
        tongbuyuanze:'取近一步同步结果'
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
.test{
    color:aliceblue;
    background-color: aliceblue;
}
</style>