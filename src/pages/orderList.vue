<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}} 
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img :src="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg'" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + 'x' + item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">已付款</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">未支付</a>
              </div>
            </div>
          </div>
          <no-data v-if="!loading && list.length == 0"></no-data>
          <el-pagination 
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            @current-change="handleChange"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader';
  import Loading from './../components/Loading';
  import NoData from './../components/noData';
  import { Pagination } from 'element-ui';
  export default{
    name:'order-list',
    components:{
      OrderHeader,
      Loading,
      NoData,
      [Pagination.name]: Pagination
    },
    data(){
      return {
        loading: false,
        pageSize: 1,
        pageNum: 1,
        list: [
          {
            "orderNo": 1598008571722,
            "payment": 2999.11,
            "paymentType": 1,
            "paymentTypeDesc": "在线支付",
            "postage": 0,
            "status": 10,
            "statusDesc": "未支付",
            "paymentTime": "2017-02-11 12:27:18",
            "sendTime": "2017-02-11 12:27:18",
            "endTime": "2017-02-11 12:27:18",
            "closeTime": "2017-02-11 12:27:18",
            "createTime": "2017-01-23 16:04:36",
            "orderItemVoList": [
              {
                "orderNo": 1485158676346,
                "productId": 2,
                "productName": "oppo R8",
                "productImage": "mainimage.jpg",
                "currentUnitPrice": 2999.11,
                "quantity": 1,
                "totalPrice": 2999.11,
                "createTime": "2017-01-23 16:04:36"
              }
            ],
            "imageHost": "http://img.happymmall.com/",
            "shippingId": 5,
            "shippingVo": null
          },
          {
            "orderNo": 1485158675516,
            "payment": 2999.11,
            "paymentType": 1,
            "paymentTypeDesc": "在线支付",
            "postage": 0,
            "status": 10,
            "statusDesc": "未支付",
            "paymentTime": "2017-02-11 12:27:18",
            "sendTime": "2017-02-11 12:27:18",
            "endTime": "2017-02-11 12:27:18",
            "closeTime": "2017-02-11 12:27:18",
            "createTime": "2017-01-23 16:04:35",
            "orderItemVoList": [
              {
                "orderNo": 1485158675516,
                "productId": 2,
                "productName": "oppo R8",
                "productImage": "mainimage.jpg",
                "currentUnitPrice": 2999.11,
                "quantity": 1,
                "totalPrice": 2999.11,
                "createTime": "2017-01-23 16:04:35"
              }
            ],
            "imageHost": "http://img.happymmall.com/",
            "shippingId": 5,
            "receiverName": "geely",
            "shippingVo": null
          },
          {
            "orderNo": 1485158675316,
            "payment": 2999.11,
            "paymentType": 1,
            "paymentTypeDesc": "在线支付",
            "postage": 0,
            "status": 20,
            "statusDesc": "未支付",
            "paymentTime": "2017-02-11 12:27:18",
            "sendTime": "2017-02-11 12:27:18",
            "endTime": "2017-02-11 12:27:18",
            "closeTime": "2017-02-11 12:27:18",
            "createTime": "2017-01-23 16:04:35",
            "orderItemVoList": [
              {
                "orderNo": 1485158675316,
                "productId": 2,
                "productName": "oppo R8",
                "productImage": "mainimage.jpg",
                "currentUnitPrice": 2999.11,
                "quantity": 1,
                "totalPrice": 2999.11,
                "createTime": "2017-01-23 16:04:35"
              }
            ],
            "imageHost": "http://img.happymmall.com/",
            "shippingId": 5,
            "receiverName": "geely",
            "shippingVo": null
          }
        ], //订单列表 
        total: 3,
      }
    },
    mounted(){
      //this.getOrder();
    },
    methods: {
      goPay(orderNo){
        //this.$router.push('/order/pay');
        this.$router.push({
          path: '/order/pay',
          query: {
            orderId: orderNo
          }
        });
      },
      handleChange(pageNum){
        this.pageNum = pageNum;
      }
      // getOrder(){
      //   this.axios.get('/manage/order/list.do',{
      //     params: {
      //       pageSize: 5
      //     }
      //   }).then((res) => {
      //     this.list = res.list;
      //   })
      // }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>