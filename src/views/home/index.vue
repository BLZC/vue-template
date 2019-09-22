<template>
  <div class="home_index">
    <div class="home_top lzc-flex">
      <div class="home_top_left">
        <div class="home_top_left_top">
          <el-card shadow="hover">
            <el-row>
              <el-col :span="10">
                <div class="avatar_block">
                  <el-avatar shape="square"
                             :size="100"
                             fit="fill"
                             :src="url"></el-avatar>
                </div>
              </el-col>
              <el-col class="ds lzc-flex"
                      :span="14">
                <div class="ds1">Admin</div>
                <div class="ds2">超级管理员</div>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <div class="db lzc-flex">
              <span>上次登录时间:</span>
              <span>2019/2/1 1:28</span>
            </div>
            <div class="db lzc-flex">
              <span>上次登录地点:</span>
              <span>苏州工业园区</span>
            </div>
          </el-card>
        </div>
        <div class="home_top_left_bottom">
          <el-card shadow="hover">

          </el-card>
        </div>
      </div>
      <div class="home_top_right">
        <div class="home_top_right_top lzc-flex">
          <el-card shadow="hover"
                   v-for="item in topList"
                   :key="item.id">
            <div class="topList lzc-flex">
              <div class="listLeft">
                <i :class="item.icon" />
              </div>
              <div class="listRight">
                <div class="content"
                     :class="item.className">{{item.content}}</div>
                <div class="mintitle">{{item.title}}</div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="home_top_right_bottom">
          <el-card class="box-card"
                   shadow="hover">
            <div slot="header"
                 class="clearfix">
              <span class="card_title">待办事项</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">添加</el-button>
            </div>

          </el-card>
        </div>
      </div>
    </div>
    <div class="home_botttom"></div>
  </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      topList: [
        {
          id: 1,
          icon: 'iconfont iconfont1 iconwode',
          className: 'iconfont1',
          title: '注册用户数量',
          content: 2412
        },
        {
          id: 2,
          icon: 'iconfont iconfont2 iconfangwen',
          className: 'iconfont2',
          title: '访问量',
          content: 192311
        },
        {
          id: 3,
          icon: 'iconfont iconfont3 iconxiaoxi',
          className: 'iconfont3',
          title: '消息数量',
          content: 3
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.home_index {
  .home_top {
    justify-content: space-between;
    .home_top_left {
      width: 30%;
      .home_top_left_top {
        .el-card {
          height: 240px;
          .avatar_block {
            width: 80px;
            height: 80px;
          }
          .ds {
            height: 100px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .ds1 {
              font-size: 24px;
              font-weight: 550;
            }
            .ds2 {
              font-size: 20px;
              color: #666;
            }
          }
          .db {
            justify-content: space-between;
            color: #999;
            line-height: 24px;
          }
        }
      }
      .home_top_left_bottom {
        margin-top: 20px;
        .el-card {
          height: 180px;
          .myschart {
            justify-content: space-around;
            .el-card {
              margin-top: 20px;
            }
          }
        }
      }
    }
    .home_top_right {
      width: 68%;
      margin-left: 2%;
      .home_top_right_top {
        height: 110px;
        justify-content: space-between;
        .el-card {
          width: 30%;
          height: 110px;
          .topList {
            .iconfont1 {
              color: #7fffaa;
            }
            .iconfont2 {
              color: #00bfff;
            }
            .iconfont3 {
              color: #ff4500;
            }
            .listLeft {
              width: 45%;
              height: 70px;
              .iconfont {
                font-size: 36px;
                line-height: 70px;
              }
            }
            .listRight {
              width: 55%;
              .content {
                font-size: 24px;
              }
              .mintitle {
                color: #999;
              }
            }
          }
        }
      }
      .home_top_right_bottom {
        margin-top: 20px;
        .el-card {
          height: 310px;
          text-align: left;
          .card_title {
            font-size: 16px;
            font-weight: 550;
          }
        }
      }
    }
  }
  .home_bottom {
  }
}
</style>
