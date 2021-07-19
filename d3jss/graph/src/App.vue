<template>
   <div id="app">
     <kendo-datasource
      ref="dataSource"
      :transport-read-url="'https://api.iextrading.com/1.0/stock/amzn/chart/6m'"
      :transport-read-data-type="'json'">
    </kendo-datasource>
    <kendo-chart
      :data-source-ref="'dataSource'"
      :title="title"
      :tooltip="tooltip"
      :series="series"
      :x-axis="xAxis"
      :y-axis="yAxis">
    </kendo-chart>
  </div>
</template>

<script>

export default {
  name: 'App',
data () {
    return {
      title: {
        text: 'Price vs Volume for Amazon Stock'
      },
      tooltip: {
        visible: true,
        template: 'Volume: #: value.x #, Price: $#: value.y #'
      },
      series: [{
        type: 'scatter',
        xField: 'volume',
        yField: 'close'
      }],
      xAxis: {
        title: {
          text: 'Volume'
        }
      },
      yAxis: {
        title: {
          text: 'Closing price'
        }
      }
    }
  }

}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
