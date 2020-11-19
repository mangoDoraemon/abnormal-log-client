<template>
    <div class="app-container" >
        <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px" style="height: 50px" >
            <el-form-item prop="indexType">
                <el-cascader v-model="value" :options="indexOptions" @change="handleChange" size="small" style="width: 170px" placeholder="日志类型">
                </el-cascader>
            </el-form-item>
            <el-form-item>
                <el-date-picker
                        v-model="dateTime"
                        size="small"
                        style="width: 190px"
                        type="datetime"
                        :clearable="false"
                        placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item  prop="configType">
                <el-radio-group v-model="queryParams.timeType" size="small">
                    <el-radio-button label="hour" >近12小时</el-radio-button>
                    <el-radio-button label="day" >近1天</el-radio-button>
                    <el-radio-button label="week">近1周</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" size="small" @click="handleQuery" >搜索</el-button>
            </el-form-item>
        </el-form>
        <div class="mb8">
            <el-divider direction="vertical" style="color: blue"></el-divider>
            <span style="font-family: 微软雅黑;font-size: small">异常日志量分布:<font style="color: #409EFF">{{this.logType}}</font></span>
        </div>
        <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <e-chart :chart-data="barChartData" />
        </el-row>

        <div class="mb8">
            <el-divider direction="vertical" style="color: blue"></el-divider>
            <span style="font-family: 微软雅黑;font-size: small">异常日志明细:<font style="color: #409EFF">{{this.logType}}</font></span>
        </div>
        <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">

            <el-table
                    :data="logList"
                    :border="false"
                    style="width: 100%">
                <el-table-column
                        prop="type"
                        label="日志类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="timeStamp"
                        label="异常时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        label="异常日志内容">
                    <template slot-scope="scope">
                        <div v-html="scope.row.message">

                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div style="float: right">
                <pagination
                        :total="total"
                        :page.sync="queryParams.pageNum"
                        :limit.sync="queryParams.pageSize"
                        @pagination="getList"
                />
            </div>
        </el-row>




    </div>
</template>

<script>
    import eChart from '@/components/echarts'
    import pagination from '@/components/Pagination'
    import { listLog ,queryBar} from "@/api/log/index";
    import {filterType} from "@/utils/common";

    export default {
        components: {
            eChart,
            pagination
        },
        name: "App",
        data() {
            return {
                // 表格数据
                logList: [],
                indexOptions:[
                    {
                        value: 'host_out_call_index_*',
                        label: '外呼',
                        children: [{
                            value:'DEBUG',
                            label:"DEBUG"
                        },
                            {
                                value:'ERROR',
                                label:"ERROR"
                            },
                            {
                                value:'sql failed',
                                label:"sql failed"
                            }
                        ]
                    },
                    {
                        value: 'gateway_app_log_*',
                        label: '网关',
                        children: [{
                            value:'创建失败',
                            label:"创建失败"
                        },
                            {
                                value:'ERROR',
                                label:"ERROR"
                            },
                            {
                                value:'sql failed',
                                label:"sql failed"
                            }
                        ]
                    },
                    {
                        value: 'es_aq_log',
                        label: '安全',
                        children: [{
                            value:'SQL注入',
                            label:"SQL注入"
                        },
                            {
                                value:'ERROR',
                                label:"ERROR"
                            },
                            {
                                value:'sql failed',
                                label:"sql failed"
                            }
                        ]
                    }

                ],
                barChartData: {},
                // 遮罩层
                loading: true,
                // 显示搜索条件
                showSearch: true,
                // 总条数
                total: 0,
                // 日期
                dateTime: new Date(),
                // 查询参数
                queryParams: {
                    pageNum: 0,
                    pageSize: 10,
                    indexType: 'host_out_call_index_*',
                    timeType: 'hour',
                    message:'',
                },
                value:['host_out_call_index_*','DEBUG'],
                // 表单参数
                form: {},
                logType:""
            };
        },
        created() {
            this.getList();
            this.getBar();
        },
        methods: {

            /** 查询图表 */
            getBar(){
                queryBar(this.addDateRange(this.queryParams,this.dateTime,this.value)).then(response => {

                    this.barChartData = response.data
                    this.changeLogType(this.indexOptions,this.queryParams.indexType)

                }).catch(() => {

                })
            },

            /** 查询参数列表 */
            getList() {

                listLog(this.addDateRange(this.queryParams,this.dateTime,this.value)).then(response => {

                    this.logList = response.rows;
                    this.total = response.total;
                    this.loading = false;
                    this.changeLogType(this.indexOptions,this.queryParams.indexType)
                }).catch(() => {

                })
            },
            /** 搜索按钮操作 */
            handleQuery() {
                this.queryParams.pageNum = 0;
                this.getList();
                this.getBar()

            },
            changeLogType(options,param){
                this.logType =  filterType(options,param)
            },
            handleChange(val){
            }

        }
    };
</script>

<style scoped>


</style>