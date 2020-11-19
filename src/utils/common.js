
// 添加日期范围
export function addDateRange(params, dateTime,value) {
    var search = params;
    search.startTime = "";
    search.endTime = "";
    search.message=" ";
    search.timeInterval= "";
    let timeHour;
    let messages;
    let interval;
    if (null != dateTime && '' != dateTime) {
        if(search.timeType === 'hour'){
            timeHour = 12;
            interval ='15m';
        }
        if(search.timeType === 'day'){
            timeHour = 24;
            interval ='30m';
        }
        if(search.timeType == 'week'){
            timeHour= 168
            interval ='240m';
        }
        search.startTime = beforeNowTime(this.dateTime,timeHour);
        search.endTime = this.parseTime(this.dateTime);
        search.timeInterval = interval;
    }
    if(null !=value){
        params.indexType = value[0];
        messages =value[1];
    }
    search.message = messages;
    return search;
}

export function beforeNowTime(dateTime,hour) {
    var date = new Date(dateTime)
    date.setHours (date.getHours () - hour);
    var now = "";
    now = date.getFullYear()+"-";
    now = now + (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';//取月的时候取的是当前月-1如果想取当前月+1就可以了
    now = now + setFormat(date.getDate())+" ";
    now = now + setFormat(date.getHours())+":";
    now = now + setFormat(date.getMinutes())+":";
    now = now + setFormat(date.getSeconds())+"";
    return now
}

var setFormat=function (x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}

export function filterType(options,index) {
    let value;
    for (let i in options){
       if(options[i].value === index){
           value = options[i].label
       }
    }
    return value;
}