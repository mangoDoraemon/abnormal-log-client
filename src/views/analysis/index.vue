
<template>
<div>
  <!-- 卡片一 -->
  <div class="app-container">
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
                      <el-input class="box1" placeholder="业务告警根因分析" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="对象类型:"  label-width="80px">
                   <el-select v-model="value" placeholder="云平台告警" :disabled="true"  :style="{ width: '100%' }">
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
                    <el-select v-model="value" placeholder="无" :disabled="true"  :style="{ width: '100%' }">
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
                  <el-input class="box1" :disabled="true" placeholder="alarm"></el-input>
                </el-form-item>
              </el-col>

                            <el-col :span="10">
                <el-form-item label="指标单位:">
                   <el-input class="box1" :disabled="true" placeholder=""></el-input>
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
          <span>训练数据接入</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="20">
              <el-col :span="8">
                <el-form-item label="数据源库名:" label-width="100px">
                   <el-select v-model="value" placeholder="ocp_resm" :disabled="true"  :style="{ width: '100%' }">
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
             
              <el-col :span="11">
                <el-form-item label="数据源表名:" label-width="310px">
                   <el-input class="box1" :disabled="true" placeholder="sysm_rd_alarm"></el-input>
                </el-form-item>
              </el-col>
         
              <el-col :span="19">
                <el-form-item label="数据提取SQL:" label-width="110px">
                  <el-input
                  :disabled="true"
                    type="textarea"
                    :rows="4"
                    placeholder="select alarm_id,resource_id,alarm_original_grade,alarm_first_occur_time,discharge_time,alarm_index,alarm_content from ocp_resm.sysm_rd_alarm"
                    v-model="textarea">
                    </el-input>
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
          <span>训练数据处理</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="5">
              <el-col :span="15">
                <el-form-item label="训练数据提取规则:" label-width="140px">
                  <el-input class="box1" :disabled="true"
                            placeholder="GROUPS=db,GROUPS=os,GROUPS=bd,DISPATCH_STATUS=1"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="7">
               <font class="sub-title" style="font-size:12px; margin-left:5px ;">"表字段=关键词“进行设置，多组规则以英文逗号分割</font>
               </el-col>
            </el-row>
              <el-row gutter="5">
                  <el-col :span="15">
                      <el-form-item label="训练数据过滤规则:" label-width="140px">
                          <el-input class="box1" :disabled="true"
                                    placeholder="TECH_STACK=存储设备,TECH_STACK=大数据,TECH_STACK=应用系统监控"></el-input>
                      </el-form-item>
                  </el-col>

                  <el-col :span="7">
                      <font class="sub-title" style="font-size:12px; margin-left:5px ;">"表字段=关键词“进行设置，多组规则以英文逗号分割</font>
                  </el-col>
              </el-row>
            <el-row gutter="250">
              <el-col :span="10">
                <el-form-item label="时间为空处理逻辑:" label-width="140px">
                 <template>
                    <el-checkbox v-model="checked1" disabled>丢弃处理</el-checkbox>
                    <el-checkbox v-model="checked2" disabled>填充临近数据时间</el-checkbox>
                    </template>
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
      <el-card class="box-card3">
        <div slot="header" class="clearfix">
          <span>模型训练规则</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="5">
              <el-col :span="10">
                <el-form-item label="训练分组策略:" label-width="140px">
                  <template>
                    <el-radio disabled v-model="radio1" label="1">启动</el-radio>
                    <el-radio disabled v-model="radio1" label="2">停止</el-radio>
                    </template>
                </el-form-item>
              </el-col> 
               <el-col :span="7">
                <el-form-item label="最长关联时间:" label-width="100px">
                   <el-input class="box1" :disabled="true" placeholder="10"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
               <font class="sub-title" style="font-size:12px; margin-left:5px ;">  分钟</font>
               </el-col>
            </el-row>
              <el-row gutter="5">
                  <el-col :span="10">
                      <el-form-item label="训练模型策略:" label-width="140px">
                          <template>
                              <el-radio disabled v-model="radio1" label="2">全新训练</el-radio>
                              <el-radio disabled v-model="radio1" label="1">增量训练</el-radio>
                          </template>
                      </el-form-item>
                  </el-col>
              </el-row>

          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
  <!-- 卡片五 -->
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
                   <el-radio v-model="radio3" label="1" :disabled="true">小时</el-radio>
                  <el-radio v-model="radio3" label="2" :disabled="true">日</el-radio>
                  <el-radio v-model="radio3" label="3" :disabled="true">周</el-radio>
                  <el-radio v-model="radio3" label="4" :disabled="true">月</el-radio>
                  </div>
                </el-form-item>
              </el-col>
            
              <el-col :span="10">
                <el-form-item label="每天">
                    <el-row :gutter="6">
                 
                 
                  <el-col span="6">
                    <el-input
                    placeholder="01:00"
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
        radio: '1',
        radio1: '1',
        checked1: false,
        checked2: true,
        radio3:'2'
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

     .box-card {
    border-width: 0px;
    margin-bottom: 10px;

    height: 250px;
  }
   .box-card2 {
    border-width: 0px;
    margin-bottom: 10px;

    height: 240px;
  }
   .box-card3 {
    border-width: 0px;
    margin-bottom: 10px;

    height: 220px;
  }
   .box-card4 {
    border-width: 0px;
    margin-bottom: 10px;
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
  .box5{
    position: relative;
    left: 280px;
     top: -2px;
  }
</style>