
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
                      <el-input class="box1" placeholder="智能客服机器人" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="对象类型:"  label-width="80px">
                   <el-select v-model="value" placeholder="客服知识" :disabled="true"  :style="{ width: '100%' }">
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
                  <el-input class="box1" :disabled="true" placeholder="客服知识"></el-input>
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
                   <el-select v-model="value" placeholder="PDB_LARKBIRD" :disabled="true"  :style="{ width: '100%' }">
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
                   <el-input class="box1" :disabled="true" placeholder="KBMS_PAGE_NODE_INFO"></el-input>
                </el-form-item>
              </el-col>
         
              <el-col :span="19">
                <el-form-item label="数据提取SQL:" label-width="110px">
                  <el-input
                  :disabled="true"
                    type="textarea"
                    :rows="4"
                    placeholder="SELECT
                    id,
                    title,
                    page_text,
                    page_text_str,
                    key_word 
                    FROM
                    KBMS_PAGE_NODE_INFO
                    where title is not NULL
                    and page_text is not null
                    and page_text_str is not null 
                    and key_word is not nullx"
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
              <el-col :span="10">
                <el-form-item label="重复数据剔除:" label-width="120px">
                  <el-radio disabled v-model="radio1" label="1">启动</el-radio>
                <el-radio disabled v-model="radio1" label="2">停止</el-radio>
                </el-form-item>
              </el-col> 
            <el-col :span="6">
                <el-form-item label="数据重复率比对:" label-width="130px">
                      <el-input class="box1" placeholder="20" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
               <font class="sub-title" style="font-size:12px; margin-left:5px ;">% 低于此数值的过滤做不训练</font>
               </el-col>
            </el-row>
            <el-row gutter="250">
              <el-col :span="15">
                <el-form-item label="数据来源:" label-width="90px">
                 <template>
                    <el-checkbox v-model="checked1" disabled>人工</el-checkbox>
                    <el-checkbox v-model="checked2" disabled>三方系统同步</el-checkbox>
                    <el-checkbox v-model="checked3" disabled>自动获取</el-checkbox>
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
      <el-card class="box-card4">
        <div slot="header" class="clearfix">
          <span>模型训练规则</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-form :model="formData" label-width="80px" size="mini" >
            <el-row gutter="5">
              <el-col :span="10">
                <el-form-item label="训练分组:" label-width="140px">
                  <template>
                    <el-radio disabled v-model="radio1" label="1">是</el-radio>
                    <el-radio disabled v-model="radio1" label="2">否</el-radio>
                    </template>
                </el-form-item>
              </el-col> 
               <el-col :span="7">
                <el-form-item label="最低数据量:" label-width="100px">
                   <el-input class="box1" :disabled="true" placeholder="800"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
               <font class="sub-title" style="font-size:12px; margin-left:5px ;">条</font>
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
      <el-card class="box-card5">
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
                 
                 
                  <el-col span="9">
                    <el-input
                    placeholder="00:00"
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
      formData: {},
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
        checked1: true,
        checked2: true,
        checked3:true,
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
    width: 1384px;
    height: 250px;
  }
   .box-card2 {
    border-width: 0px;
    margin-bottom: 10px;
    width: 1384px;
    height: 240px;
  }
   .box-card3 {
    border-width: 0px;
    margin-bottom: 10px;
    width: 1384px;
    height: 160px;
  }
   .box-card4 {
    border-width: 0px;
    margin-bottom: 10px;
    width: 1384px;
    height: 130px;
  }
   .box-card5 {
    border-width: 0px;
    margin-bottom: 10px;
    width: 1384px;
    height: 130px;
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