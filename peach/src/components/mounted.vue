<template>

  <div class="newsContent" v-wechat-title="$route.meta.title">
    <div>
      <h2 class="newsContent-title">位置信息：{{creditStreet}}</h2>
    </div>
  </div>
</template>

<script>
    import BMap from 'BMap'

    export default {
        //定义数据
        data()  {
            return{
                creditLongitude: "",
                creditLatitude: "",
                creditProvince: "",
                creditCity: "",
                creditArea: "",
                creditStreet: "",
            }
        },
        mounted() {
            this.getCity();
        },
        methods:{
            //定义方法
            getCity(){
                let _this = this
                var geolocation = new BMap.Geolocation();
                // 开启SDK辅助定位
                geolocation.enableSDKLocation();
                geolocation.getCurrentPosition(function(r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                            const myGeo = new BMap.Geocoder()
                            myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
                                if (data.addressComponents) {
                                    const result = data.addressComponents
                                  console.log(result)
                                    const location = {
                                        creditLongitude: r.point.lat, // 经度
                                        creditLatitude: r.point.lng, // 纬度
                                        creditProvince: result.province || '', // 省
                                        creditCity: result.city || '', // 市
                                        creditArea: result.district || '', // 区
                                        creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
                                    }
                                    _this.location = location;
                                    _this.creditLongitude=location.creditLongitude;
                                    _this.creditLatitude=location.creditLatitude;
                                    _this.creditCity=location.creditCity;
                                    _this.creditStreet=location.creditStreet
                                     alert(location.creditStreet);
                                    console.log(location.creditStreet);
                                }
                            })

                    }
                    else {
                      this.getCity();
                    }
                })
            },
        }
//mounted中引用
    }
</script>

<style scoped>

</style>
